const multer = require('multer')
const path = require('path')
const fs = require('fs')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/comments')
  },
  limits: {
    fileSize: 1000000 // 1000000 Bytes = 1 MB
  },

  filename: function(req, file, cb) {
    const fileName =
      file.fieldname + '_' + Date.now() + path.extname(file.originalname)
    cb(null, fileName)
    req.images = `http://localhost/public/comments/${fileName}`
  }
})

const upload = multer({ storage: storage })

function deleteImage(filePath) {
  filePath.forEach(path => {
    path = path.replace('http://localhost', '.')

    fs.unlink(path, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log(`Deleted image: ${path}`)
    })
  })
}

module.exports = { upload, deleteImage }
