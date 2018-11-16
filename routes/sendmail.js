var express = require('express');
var router = express.Router();
var helper = require('sendgrid').mail;

router.post('/sendmail', function(req, res){
  var bodyEmail = ' • Checkin: ' + req.body.ci 
                  + '\n • Check out: ' + req.body.co 
                  + '\n • Adult: ' + req.body.adult 
                  + '\n • Kid: ' + req.body.kid 
                  + '\n • Tel:' + req.body.tel 
                  + '\n • Name: ' + req.body.name 
                  + '\n • Room name: ' + req.body.room;
  res.send(bodyEmail);
  // res.send (bodyEmail);
  // var fromEmail = new helper.Email('no-reply@haidanggroup.com');
  // var toEmail = new helper.Email(req.data.email);
  // var subject = 'This is email confirmed booking' + req.data.ci + '-' + req.data.co;
  // var content = new helper.Content('text/plain', bodyEmail);

  // var mail = new helper.Mail(fromEmail, subject, toEmail, content);
  // var sg = require('sendgrid')('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');

  // var request = sg.emptyRequest({
  //   method: 'POST',
  //   path: '/v3/mail/send',
  //   body: mail.toJSON()
  // });


  // sg.API(request, function (error, response) {
  //   if (error) {
  //     return 0
  //   }
  //   return response.statusCode;
  // });
})
module.exports = router;
