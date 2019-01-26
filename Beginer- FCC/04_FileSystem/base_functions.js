const fs = require('fs');

// create and read a file
function create() {
    fs.writeFile('example.txt', 'this is an example', (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('File successfully created');
            fs.readFile('example.txt', 'utf-8', (err, file) => {
                if(err){
                    console.log(err);
                } else {
                    console.log(file);
                } 
            });
        }
    });
}

// rename file
function rename() {
    fs.rename('example.txt', 'example2.txt', (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('Successfully rename the file');
        }
    });
}

// append some data to file
function append(){
    fs.appendFile('example2.txt', ' Somce data begin appended', (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('Successfully appended date to file');
        }
    });
}

// delete file
function delete_file(){
    fs.unlink('example2.txt', (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('Successfully deleted file');
        }
    });
}

module.exports = {
    create,
    rename,
    append,
    delete_file
}