var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/hotel');
});

router.get('/hotel', function (req, res) {
  let sliders = ['img/hotel/slider01.jpg','img/hotel/slider02.jpg','img/hotel/slider03.jpg','img/hotel/slider04.jpg','img/hotel/slider05.jpg'];
  let sliders_thumb= ['img/hotel/slider01_thumbnail.jpg','img/hotel/slider02_thumbnail.jpg','img/hotel/slider03_thumbnail.jpg','img/hotel/slider04_thumbnail.jpg','img/hotel/slider05_thumbnail.jpg'];
  let gallery = ['img/gallery/gallery01.jpg','img/gallery/gallery02.jpg','img/gallery/gallery03.jpg','img/gallery/gallery04.jpg','img/gallery/gallery05.jpg','img/gallery/gallery06.jpg','img/gallery/gallery07.jpg','img/gallery/gallery08.jpg','img/gallery/gallery09.jpg','img/gallery/gallery10.jpg','img/gallery/gallery11.jpg','img/gallery/gallery12.jpg'];
  res.render('hotelPage', { 
    title: 'GALINA HOTEL',
    sliders: sliders,
    sliders_thumb: sliders_thumb,
    gallery: gallery,
    pageID: 1,
    ref: 'hotel'
  });
});

router.get('/mudbathspa', function (req, res) {
  res.render('mudspaPage', { 
    title: 'GALINA MUD BATH & SPA', 
    pageID: 2, 
    ref: 'mudbathspa'
  });
});

router.get('/weddingconvention', function (req, res) {
  res.render('wcPage', { 
    title: 'GALINA WEDDING CONVENTION', 
    pageID: 3, 
    ref: 'weddingconvention'
   });
});

router.get('/show', function (req, res) {
  let sliders = ['img/hotel/slider01.jpg','img/hotel/slider02.jpg','img/hotel/slider03.jpg','img/hotel/slider04.jpg','img/hotel/slider05.jpg'];
  let sliders_thumb= ['img/hotel/slider01_thumbnail.jpg','img/hotel/slider02_thumbnail.jpg','img/hotel/slider03_thumbnail.jpg','img/hotel/slider04_thumbnail.jpg','img/hotel/slider05_thumbnail.jpg'];
  res.render('showPage', { 
    title: 'GALINA SHOW',
    sliders: sliders,
    sliders_thumb: sliders_thumb,
    pageID: 4, 
    ref: 'show'
  });
})

router.get('/lakeview', function (req, res) {
  res.render('lakePage', { 
    title: 'GALINA LAKE VIEW',
    pageID: 5, 
    ref: 'lakeview'
  });
})

router.get('/water', function (req, res) {
  res.render('waterPage', { 
    title: 'GALINA LAKE VIEW',
    pageID: 6, 
    ref: 'water' 
  });
})




module.exports = router;
