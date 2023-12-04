const multer=require("multer")
const path=require("path")

// con esto subo archivos 
const destination=path.join(__dirname,'..','public','uploads')

const storage = multer.diskStorage({
    destination,
    filename: function (req, file, cb) {
        //Se pone el originalname de acuerdo a su libreria para que ponga el nombre 
        //Nombre del archivo en la computadora del usuario
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports= upload
