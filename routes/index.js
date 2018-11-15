var express = require('express');
var router = express.Router();

// var nodemailer =  require('nodemailer'); // khai báo sử dụng module nodemailer
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


router.get('/sendmail', function(req, res){

  var fromEmail = new helper.Email('no-reply@haidanggroup.com');
  var toEmail = new helper.Email('dosm.galina@haidanggroup.com, inbox.huytran@gmail.com');
  var subject = 'This is email confirmed booking';
  var content = new helper.Content('text/plain', 'and easy to do anywhere, even with galinahotel');

  var mail = new helper.Mail(fromEmail, subject, toEmail, content);
  var sg = require('sendgrid')('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');
  
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });


  sg.API(request, function (error, response) {
    if (error) {
      res.send(error)
    }
    res.send(response.statusCode + ',' + response.body);
  });
})
module.exports = router;
