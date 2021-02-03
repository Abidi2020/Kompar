const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
const Form = require('../../models/Form')

// @route    POST api/form/add-form
// @desc     Subit a form
// @access   Public
router.post("/", async (req, res) => {
 
  try {

    const {
      type,
      label,
      fullName,
      monthlyPayment,
      adress,
      negothiablePayment,
      poneNumber,
      pdl,
      city,
      pce,
      postalCode,
      email,
      consomEstimation,
    } = req.body;

  
  
    let form = new Form({
      type,
      label,
      fullName,
      monthlyPayment,
      adress,
      negothiablePayment,
      poneNumber,
      pdl,
      city,
      pce,
      postalCode,
      email,
      consomEstimation
    })

    console.log(form)



   await form.save()

   let offer = await Form.findById(form._id)
   


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amirlabidi6@gmail.com',
    pass: 'amir321321+'
  }
});

let mailOptions = {
  from: 'amirlabidi6@gmail.com',
  to: 'amirlabidi6@gmail.com',
  subject: 'Sending Email using Node.js',
  html: `<a href=http://localhost:3000/offer/${offer._id} >Hello amir</a>`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
    

    res.status(200).json(form)


  } catch (error) {
    res.status(500).json({ msg: "Server Error" });

  }
});


// @route    POST api/form/add-form
// @desc     Subit a form
// @access   Public
router.get('/:id', async(req, res) => {
  try {
    let offer = await Form.findById(req.params.id)
    res.json(offer)
  } catch (error) {
    console.log(error)
  }
})


module.exports = router;
