const file = require("fs");

//push test?

/**
 * Creates/Appends a file to the directory with the filename
 * @param directory - Specify the file such as "example" or "example/test"
 * @param filename - Specify the filename such as "filename" appends txt extension
 * @param text - Appends the text you want inside the file and appends \n to the end
 */
module.exports.writeFileAppend = function (directory, filename, text){ 
    file.stat("./" + directory, function(err, stat) {
        if (err) {
            createDirectory(directory, filename, text);
        } else {
            writeText(directory, filename, text);
        }
    });
}

/**
 * Creates the directory that has been specified.
 * @param {directory} directory - Specify the file such as "example" or "example/test"
 * @param {filename} filename - Specify the filename such as "filename" appends txt extension
 * @param {text} text - Appends the text you want inside the file and appends \n to the end 
 */
function createDirectory(directory, filename, text) {
    file.mkdir("./data/", function(err) {
        if (err) {
            console.log(err);
        } else {
            writeText(directory, filename, text);
        }
    });
}

/**
 * Writes the text that you specified to the file with append and auto creates file
 * @param {directory} directory - Specify the file such as "example" or "example/test"
 * @param {filename} filename - Specify the filename such as "filename" appends txt extension
 * @param {text} text - Appends the text you want inside the file and appends \n to the end
 */
function writeText(path, filename, text) {
    const writer = file.createWriteStream("./" + path + "/" + filename + ".txt", {
        autoclose : true,
        encoding: "utf8",
        flags: "a"
    });
    
    writer.on("ready", function() {
        writer.write(text + "\n", function(err) {
            if (err) {
                console.log(err);
            }
            writer.close();
        });
    });
}
