const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const sizeOf = require('image-size')

const folder = path.resolve(__dirname, './images') + '/'
const images = fs.readdirSync(folder)

for (i = 0; i <= images.length; i++) {

  const image = images[i]
  const imagePath = folder + image

  const resizedImagesFolder = folder +  'resizedImages/'

  const resizedImagePath = resizedImagesFolder + image
  
  const param = {
    width: 90 // изменять ширину здесь
  }

  if(!fs.existsSync(resizedImagesFolder)) {
    fs.mkdirSync(resizedImagesFolder)
    sharp(imagePath)
      .resize(param)
      .toFile(resizedImagePath)
  }
  

  sharp(imagePath)
    .resize(param)
    .toFile(resizedImagePath)
}
