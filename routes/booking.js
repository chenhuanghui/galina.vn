var express = require('express');
var router = express.Router();

require('dotenv').config()
var helper = require('sendgrid').mail;

/* GET booking page. */
router.get('/', function(req, res, next) {
  res.render('bookingPage', {
    title: 'Reservation Center',
    pageID: 7,
    ref: 'booking'
  });
});


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
                  + '\n • Coupon code: ' + req.body.couponCode
                  + '\n • Book note: ' + req.body.bookNote
                  + '\n\n Thanks & Best regard,'
                  + '\n GALINA RESERVATION TEAM'
                  + '\n ____________________________'
                  + '\n • email: booking@haidanggroup.com | hotline: (+84) 901 700089 | '
                  + '\n • website: www.galina.vn | addr: 05 Hung Vuong, Nha Trang City, Khanh Hoa, Viet Nam'
                  + '\n This communication may contain information that is proprietary, confidential, or exempt from disclosure. '
                  + '\n If you are not the intended recipient, please note that any other dissemination, distribution, use or copying of this communication is strictly prohibited. '
                  + '\n Anyone who receives this message in error should notify the sender immediately by telephone or by return e-mail and delete it from his or her computer.';
  

  var mailTemp = req.body.email + ',booking@haidanggroup.com,reservation.galina@haidanggroup.com,gsales@haidanggroup.com';
  
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
