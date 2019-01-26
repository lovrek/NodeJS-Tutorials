const fs = require('fs');

function createFolder(){
    // create folder
    fs.mkdir('tutorial', (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('Folder successfully created');
            fs.writeFile('./tutorial/example.txt', '123', (err) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log('File successfully created');
                }
            });
        }
    });
}

function deleteFolder() {
    // first delete file and then folder
    fs.unlink('./tutorial/example.txt', (err) => {
        if(err){
            console.log(err);
        } else {
            fs.rmdir('tutorial', (err) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log('Foler successfully deleted');
                }
            });
        }
    });
}

function deleteMultipleFiles(){
    fs.readdir('example', (err, files) => {
        if(err) {
            console.log(err);
        } else {
            for(let file of files) {
                fs.unlink('./example/' + file, (err) => {
                    if(err){
                        console.log(err);
                    } else {
                        console.log('Successfully deleted file ' + file);
                    }
                });
            }
        }
    });
}

module.exports = {
    createFolder,
    deleteFolder,
    deleteMultipleFiles
}