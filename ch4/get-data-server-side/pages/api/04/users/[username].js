import path from 'path';
import { promises as fs } from 'fs';

export default async (req, res) => {
    const apiKey = req.headers['authorization'];
    if (apiKey === undefined || apiKey != "realworldnextjs") {
        res.status(403).json();
        return
    }

    const {
        query: { username }
    } = req;

    const jsonDir = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDir + '/users.json', 'utf8');
    const users = JSON.parse(fileContents);
    let targetUser = null;
    users.forEach((user) => {
        if (user.username === username) {
            targetUser = user;
        }
    });

    if (targetUser) {
        res.status(200).json(targetUser);
    } else {
        res.status(404).json({ message: `User with username: ${username} not found.` });
    }
}