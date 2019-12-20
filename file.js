//directory, filename, text
const writer = require('./writeFile');
const reader = require('./readFile');

class File {

    constructor(filename, text) {
        this('data', filename, text);
    }

    constructor(directory, filename, text) {
        this.directory = directory;
        this.filename = filename;
        this.text = text;
    }

    writeFile(flags, callback) {

    }

    writeFile(flags, format, callback) {

    }

    writeFile(flags, format, encoding, callback) {

    }

}

module.exports.writeFile = function(directory, filename, text, callback) {
    
}

module.exports.writeFile = function(flags, directory, filename, text, callback) {

}

module.exports.writeFile = function(flags, directory, filename, text, format, callback) {

}

module.exports.writeFile = function(flags, directory, filename, text, format, encoding, callback) {

}

module.exports.readFile = function() {

}

module.exports.FLAGS = {
    Operation = {
        APPEND = 'a',
        READ = 'r',
        WRITE = 'w'
    },
    Encoding = {
        UTF8 = 'utf8',
        ASCII = 'ascii',
        BASE64 = 'base64',
        BINARY = 'binary',
        HEX = 'hex'
    },
    Format = {
        TEXT = '.txt',
        JSON = '.json'
    }
}