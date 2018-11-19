require('dotenv').config()
var express = require('express');
var router = express.Router();
var helper = require('sendgrid').mail;


/* GET home page. */
router.get('/', function(req, res) {
  let sliders = ['img/hotel/slider01.jpg','img/hotel/slider02.jpg','img/hotel/slider03.jpg','img/hotel/slider04.jpg','img/hotel/slider05.jpg'];
  let sliders_thumb= ['img/hotel/slider01_thumbnail.jpg','img/hotel/slider02_thumbnail.jpg','img/hotel/slider03_thumbnail.jpg','img/hotel/slider04_thumbnail.jpg','img/hotel/slider05_thumbnail.jpg'];
  let gallery = ['img/gallery/gallery01.jpg','img/gallery/gallery02.jpg','img/gallery/gallery03.jpg','img/gallery/gallery04.jpg','img/gallery/gallery05.jpg','img/gallery/gallery06.jpg','img/gallery/gallery07.jpg','img/gallery/gallery08.jpg','img/gallery/gallery09.jpg','img/gallery/gallery10.jpg','img/gallery/gallery11.jpg','img/gallery/gallery12.jpg'];
  let roomlist = [
    {
      name:'Supperior',
      link: '#',
      imgRoom:'img/hotel/room-superior.jpg',
      square: '32',
      windows:'yes',
      balcone:'no',
      view:'city',
      capacity:'02 adults, 02 kid',
      price: '1.800.000'
    },
    {
      name:'Deluxe',
      link: '#',
      imgRoom:'img/hotel/room-superior.jpg',
      square: '32',
      windows:'yes',
      balcone:'no',
      view:'city',
      capacity:'02 adults, 02 kid',
      price: '1.800.000'
    },
    {
      name:'Suite City View',
      link: '#',
      imgRoom:'img/hotel/room-superior.jpg',
      square: '32',
      windows:'yes',
      balcone:'no',
      view:'city',
      capacity:'02 adults, 02 kid',
      price: '1.800.000'
    },
    {
      name:'Suite Sea View',
      link: '#',
      imgRoom:'img/hotel/room-superior.jpg',
      square: '32',
      windows:'yes',
      balcone:'no',
      view:'city',
      capacity:'02 adults, 02 kid',
      price: '1.800.000'
    }
  ]
  res.render('hotelPage', { 
    title: 'GALINA HOTEL',
    sliders: sliders,
    sliders_thumb: sliders_thumb,
    gallery: gallery,
    roomlist: roomlist
  });
});

router.get('/hotel', function (req, res) {
  res.redirect('/');
});

router.get('/mudbathspa', function (req, res) {
  res.render('mudspaPage', { title: 'GALINA MUD BATH & SPA' });
});

router.get('/weddingconvention', function (req, res) {
  res.render('wcPage', { title: 'GALINA WEDDING CONVENTION' });
});

router.get('/show', function (req, res) {
  res.render('showPage', { title: 'GALINA SHOW' });
})

router.get('/lakeview', function (req, res) {
  res.render('lakePage', { title: 'GALINA LAKE VIEW' });
})

router.get('/water', function (req, res) {
  res.render('waterPage', { title: 'GALINA LAKE VIEW' });
})


router.post('/sendmail', function(req, res){
  var bodyEmail = 'Dear value Customer, \n GALINA HOTEL already got your reservation, this is an email auto generate from our booking engine to confirmed your booking information. \nOur reservation team will handle your booking and notify you ASAP.'
                  + '\n Your booking information is below: '
                  + '\n • Checkin: ' + req.body.ci 
                  + '\n • Check out: ' + req.body.co 
                  + '\n • Adult: ' + req.body.adult 
                  + '\n • Kid: ' + req.body.kid 
                  + '\n • Tel:' + req.body.tel 
                  + '\n • Name: ' + req.body.name 
                  + '\n • Room name: ' + req.body.room
                  + '\n\n Thanks & Best regard,'
                  + '\n GALINA RESERVATION TEAM'
                  + '\n ____________________________'
                  + '\n • email: booking@haidanggroup.com | hotline: (+84) 901 700089 | '
                  + '\n • website: www.galina.vn | addr: 05 Hung Vuong, Nha Trang City, Khanh Hoa, Viet Nam'
                  + '\n This communication may contain information that is proprietary, confidential, or exempt from disclosure. '
                  + '\n If you are not the intended recipient, please note that any other dissemination, distribution, use or copying of this communication is strictly prohibited. '
                  + '\n Anyone who receives this message in error should notify the sender immediately by telephone or by return e-mail and delete it from his or her computer.';

  var mailTemp = req.body.email + ',booking@haidanggroup.com,reservation.galina@haidanggroup.com,gsales@haidanggroup.com';
  // res.send(mailTemp);
  var fromEmail = new helper.Email('inbox.galina@gmail.com');
  var toEmail = new helper.Email()
  var toEmail = new helper.Email(mailTemp);
  var subject = 'Booking Request ID #[ ' + req.body.ci + '-' + req.body.co + ' ]';
  var content = new helper.Content('text/plain', bodyEmail);
  var mail = new helper.Mail(fromEmail, subject, toEmail, content);
  var sg = require('sendgrid')(process.env.SENDGRID_KEY);
  
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error, response) {
    if (error) {
      res.send(0);
    }
    res.send(response.statusCode + '- ' +response.body);
  });
})

module.exports = router;
