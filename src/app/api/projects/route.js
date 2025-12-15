
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');

export async function GET() {
    try {
        const fileContents = await fs.readFile(dataFilePath, 'utf8');
        const data = JSON.parse(fileContents);
        return NextResponse.json(data.projects);
    } catch (error) {
        return NextResponse.json([]);
    }
}

export async function POST(request) {
    try {
        const newProject = await request.json();

        let data = { projects: [] };
        try {
            const fileContents = await fs.readFile(dataFilePath, 'utf8');
            data = JSON.parse(fileContents);
        } catch (e) {
            // File might not exist yet
        }

        if (!newProject.id) {
            newProject.id = Date.now().toString();
        }

        data.projects.push(newProject);

        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));

        return NextResponse.json({ message: 'Project created', project: newProject }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save project' }, { status: 500 });
    }
}
