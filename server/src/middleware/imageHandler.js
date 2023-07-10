const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/posts')
  },
  limits: {
    fileSize: 1000000 // 1000000 Bytes = 1 MB
  },
  filename: function(req, file, cb) {
    const fileName =
      file.fieldname + '_' + Date.now() + path.extname(file.originalname)
    cb(null, fileName)
    req.images = `http://localhost/public/posts/${fileName}`
  }
})

module.exports = multer({ storage: storage })
