
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const dataFilePath = path.join(process.cwd(), 'data', 'db.json');

export async function POST(request) {
    try {
        const { username, password } = await request.json();

        const fileContents = await fs.readFile(dataFilePath, 'utf8');
        const data = JSON.parse(fileContents);

        const user = data.users.find((u) =>
            (u.username === username || u.email === username) && u.password === password
        );

        if (user) {
            return NextResponse.json({ message: 'Login successful', user });
        } else {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
