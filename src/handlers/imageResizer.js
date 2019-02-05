const Jimp = require('jimp');

exports.handler = async (event) => {
  return Jimp.read('./test/Cat.jpg')
  .then(cat => {
    console.log(cat);
    return cat
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write('./test/cat-small.jpg'); // save
  })
  .catch(err => {
    console.error(err);
    return err
  });
}
