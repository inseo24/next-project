import path from 'path';
import { promises as fs } from 'fs';

export default async (_, res) => {
    const jsonDir = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDir + '/users.json', 'utf8');
    res.status(200).json(JSON.parse(fileContents));
}