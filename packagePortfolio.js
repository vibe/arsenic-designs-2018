const fs = require("fs");
const path = require('path');


function packageImages(dir, outFilename, cb) {
  fs.readdir(dir, (err, files)=> {
    files = files.sort();

    const images = files.filter(file => {
      return file.substr(-4).match(/(png|jpeg|jpg|gif)/)
    }).map(image => {

      imageName = path.parse(image).name;
      title = imageName.substring(imageName.indexOf('-')+1, imageName.lastIndexOf('-'));
      hex = `#${imageName.substring(imageName.lastIndexOf('-')+1)}`
      return {
        image,
        title,
        hex
      }
    })

    fs.writeFile(__dirname + '/src/data/' + outFilename, JSON.stringify({
      images
    }), function (err) { cb && cb("Packaged Images")})
  })
}

packageImages('./static/images/ui/', "ui.json", function(message) {
});
