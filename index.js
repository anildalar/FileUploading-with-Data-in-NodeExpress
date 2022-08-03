
//1 Import Area


const express = require('express');
const app = express();
const multer  = require('multer')// Default Import

let env = require('dotenv');
env.config();

const storage = multer.diskStorage({
    //1 P:V

    //2. Methods
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log('inside diskstorage ',req.body.surname);
        console.log(file);
        let randomNumber = Math.ceil(Math.random()*10000000);
        console.log(randomNumber);
        let filename = randomNumber+''+file.originalname;//97897797anil.png
      
      cb(null, filename)
    }
  })

const upload = multer({ storage: storage });



//Lets create the POST Route

app.post('/fileupload',upload.single('myfile'),(req,res)=>{
    console.log(req.file);
    console.log(req.body.name);
    res.status(200).json({
        msg:"FIle uploaded Successfully"
    });
});



let port = process.env.PORT || 10000;
app.listen(port,()=>{
    console.log('The server is running on port '+port)
});

