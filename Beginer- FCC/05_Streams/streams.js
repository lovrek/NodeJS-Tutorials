const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('./example2.txt');
const readStream2 = fs.createReadStream('./example2.txt.gz');
const writeStream2 = fs.createWriteStream('./example2.txt.gz');
const writeStream3 = fs.createWriteStream('./uncopress.txt');

function chuch() {
    readStream.on('data', (chuch) => {
        writeStream.write(chuch);
    });
}

function pipe() {
    readStream.pipe(writeStream);
}

function readData(){
    readStream.on('data', (chuch) => {
        console.log(chuch);
    });
}

function writeData() {
    writeStream.write('test data');
}

function zipData() {
    readStream.pipe(gzip).pipe(writeStream2);
}

function unzipData() {
    readStream2.pipe(gunzip).pipe(writeStream3); 
}


module.exports = {
    chuch,
    pipe,
    readData,
    writeData,
    zipData,
    unzipData
}