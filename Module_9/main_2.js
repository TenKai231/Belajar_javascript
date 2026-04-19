import { readFile } from 'fs' ;

readFile(`./sample.txt`, `utf-8`, (err, data) => {
    if (err) {
        console.error('Gagal membaca file:', err);
        return;
    }

    const greeting = data
    .toString()
    .replace(/Hello/g, 'Hi') 
    .replace(/World/g, 'Everyone');

    console.log(greeting);
});