import http from "http";

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}`;
    const parseURL = new URL(req.url, baseURL);
    const httpMethod = req.method.toLowerCase();
    const parsePathName = parseURL.pathname;
    const trimmedPath = parsePathName.replace(/^\/+|\/+$/g,'');
    const header = req.headers;

    console.log('Bandom atidaryti:', trimmedPath);

    req.on('data', () => {
        console.log('Kklientas atsiunte dovanu');
    })

    req.on('end', () => {
        console.log('Uzklausa gauta, ziurim ko nori klientas');
    })
});

server.init = () => {
    console.log('Baundau paleist serverio procesa....');
    const port = 3000;
    server.httpServer.listen(port, () => {});
    console.log(`Tavo serveris sukasi ant http://localhost:${port}`);
};

export { server }

