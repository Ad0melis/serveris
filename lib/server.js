import http from 'http';

import { utils } from './utils.js'

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);
    const httpMethod = req.method.toLowerCase();
    const parsedPathName = parsedURL.pathname;
    const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, '');
    const header = req.headers;

    // console.log('Bandom atidaryti:', trimmedPath);

    req.on('data', () => {
        console.log('Klientas atsiunte duomenu...');
    })

    req.on('end', () => {
        
        const fileExtention = utils.fileExtention(trimmedPath);
        const textFileExtentions = ['css', 'js', 'svg'];
        const binaryFileExtentions = ['png', 'jpg', 'ico', 'ttf', 'eot', 'woff', 'woff2', 'otf'];
        const isTextFile = textFileExtentions.includes(fileExtention);
        const isBinaryFile = binaryFileExtentions.includes(fileExtention);
        const isAPI = trimmedPath.split('/')[0] === 'api';
        const isPage = !isTextFile && !isBinaryFile && !isAPI;

        let responseContent = ''

        if (isTextFile) {
            responseContent = 'Text File content';
        }       
         if (isBinaryFile) {
            responseContent = ' Binary content';
        }      
         if (isAPI) {
            responseContent = ' API content';
        }
         if (isPage) {
            responseContent = 'Text HTML content';
        }

        res.end(responseContent);
    })
});

server.routes = {
    '': 'home HTML',
    '404': '404 HTML',
    'register': 'register HTML',
    'login': 'login HTML',
    'blog': 'blog list HTML',
    'services': 'services list HTML',

}

server.init = () => {
    console.log('Bandau paleisti serverio procesa...');
    const port = 3000;
    server.httpServer.listen(port, () => {
        console.log(`Tavo serveris sukasi ant http://localhost:${port}`);
    });
}

export { server }