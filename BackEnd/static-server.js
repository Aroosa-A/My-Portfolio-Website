import http from 'http';
import { url } from 'url';
import fs from 'fs';
import mimeTypes from 'mime-types';
import { lookup } from 'dns';


const staticServer = http.createServer((req, res) => {
    let parsedUrl = url.Parse(req, url, true);
    let path = parsedUrl.path.replace(/^\/+|\/+$/g, "");
    if (path == "") {
        path = "./data/images/img.png";
    }
    console.log(`Requested path ${path} `);

    let file = path;
    fs.readFile(path, function (err, content) {
        if (err) {
            console.log(`file not founf ${path}`);
            res.writeHead(404);
            res.end();
        }
        else {
            console.log(`Returning ${path}`);
            res.setHeader("X-Content-Type-Operation", "nosniff");
            let mime = lookup(path);
            res.writeHead(200, { "Content-type: mime"});
            res.end(content);
        }
    });
});

staticServer.listen(1234, "localhost", () => {
    console.log("listening on port 1234");
});
