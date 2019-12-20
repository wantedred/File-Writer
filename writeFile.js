const fs = require("fs");
const file = require('./file');

/**
 * Creates/Appends a file to the directory with the filename
 * @param directory - Specify the file such as "example" or "example/test"
 * @param filename - Specify the filename such as "filename" appends txt extension
 * @param text - Appends the text you want inside the file and appends \n to the end
 */
module.exports.writeFileAppend = function (directory, filename, text, flags, format, encoding, callback) {
    if (flags === undefined) {
        flags = file.FLAGS.Operation.APPEND;
    }

    if (format === undefined) {
        format = file.FLAGS.Format.JSON;
    }

    if (encoding === undefined) {
        encoding = file.FLAGS.Encoding.UTF8;
    }
    
    fs.stat(__dirname + directory, function(err, stat) {
        if (err) {
            createDirectory(directory, filename, text, flags, format, encoding, callback);
        } else {
            writeText(directory, filename, text, flags, format, encoding, callback);
        }
    });
}

/**
 * Creates the directory that has been specified.
 * @param {directory} directory - Specify the file such as "example" or "example/test"
 * @param {filename} filename - Specify the filename such as "filename" appends txt extension
 * @param {text} text - Appends the text you want inside the file and appends \n to the end 
 */
function createDirectory(directory, filename, text, flags, format, encoding, callback) {
    fs.mkdir(__dirname + directory, function(err) {
        if (err) {
            console.log(err);
            callback(err, false);
        } else {
            writeText(directory, filename, text, flags, format, encoding, callback);
        }
    });
}

/**
 * Writes the text that you specified to the file with append and auto creates file
 * @param {directory} directory - Specify the file such as "example" or "example/test"
 * @param {filename} filename - Specify the filename such as "filename" appends txt extension
 * @param {text} text - Appends the text you want inside the file and appends \n to the end
 */
function writeText(path, filename, text, flags, format, encoding, callback) {
    const writer = fs.createWriteStream(__dirname + path + "/" + filename + format, {
        autoclose : true,
        encoding: encoding,
        flags: flags
    });
    
    writer.on("ready", function() {
        writer.write(text + "\n", function(err) {
            if (err) {
                callback(err, false);
                console.log(err);
            }
            callback(undefined, true);
            writer.close();
        });
    });
}