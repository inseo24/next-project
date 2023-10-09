import axios from 'axios';

export default async function handler(req, res) {
    const username = req.query.username;
    const API_ENDPOINT = process.env.API_ENDPOINT;
    const API_TOKEN = process.env.API_TOKEN;

    const userRequest = await axios.get(
        `${API_ENDPOINT}/api/04/users/${username}`,
        { headers: { authorization: API_TOKEN } }
    );

    res.status(200).json(userRequest.data);
}

// req는 Node.js의 http.IncomingMessage 인스턴스
// res는 Node.js의 http.serverResponse 인스턴스