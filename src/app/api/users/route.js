
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const dataFilePath = path.join(process.cwd(), 'data', 'db.json');

export async function GET() {
    try {
        const fileContents = await fs.readFile(dataFilePath, 'utf8');
        const data = JSON.parse(fileContents);
        return NextResponse.json(data.users);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const newUser = await request.json();

        // Read existing data
        const fileContents = await fs.readFile(dataFilePath, 'utf8');
        const data = JSON.parse(fileContents);

        // Validate
        if (!newUser.username || !newUser.password) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        // Check if user exists
        const exists = data.users.find((u) => u.username === newUser.username || u.email === newUser.email);
        if (exists) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 });
        }

        // Add new user
        data.users.push(newUser);

        // Write back to file
        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));

        return NextResponse.json({ message: 'User created', user: newUser }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
    }
}
