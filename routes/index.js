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
    title: 'PREMIUM HOTEL',
    sliders: sliders,
    sliders_thumb: sliders_thumb,
    gallery: gallery,
    pageID: 1,
    ref: 'hotel'
  });
});

router.get('/mudbathspa', function (req, res) {
  let sliders = ['img/mudbathspa/slider01.jpg','img/mudbathspa/slider02.jpg','img/mudbathspa/slider03.jpg','img/mudbathspa/slider04.jpg','img/mudbathspa/slider05.jpg','img/mudbathspa/slider06.jpg','img/mudbathspa/slider07.jpg','img/mudbathspa/slider08.jpg','img/mudbathspa/slider09.jpg'];
  let sliders_thumb= ['img/mudbathspa/slider01_thumbnail.jpg','img/mudbathspa/slider02_thumbnail.jpg','img/mudbathspa/slider03_thumbnail.jpg','img/mudbathspa/slider04_thumbnail.jpg','img/mudbathspa/slider05_thumbnail.jpg','img/mudbathspa/slider06_thumbnail.jpg','img/mudbathspa/slider07_thumbnail.jpg','img/mudbathspa/slider08_thumbnail.jpg','img/mudbathspa/slider09_thumbnail.jpg'];
  let gallery = ['img/mudbathspa/gallery/gallery01.jpg','img/mudbathspa/gallery/gallery02.jpg','img/mudbathspa/gallery/gallery03.jpg','img/mudbathspa/gallery/gallery04.jpg','img/mudbathspa/gallery/gallery05.jpg','img/mudbathspa/gallery/gallery06.jpg','img/mudbathspa/gallery/gallery07.jpg','img/mudbathspa/gallery/gallery08.jpg','img/mudbathspa/gallery/gallery09.jpg','img/mudbathspa/gallery/gallery10.jpg','img/mudbathspa/gallery/gallery11.jpg','img/mudbathspa/gallery/gallery12.jpg','img/mudbathspa/gallery/gallery13.jpg','img/mudbathspa/gallery/gallery14.jpg','img/mudbathspa/gallery/gallery15.jpg','img/mudbathspa/gallery/gallery16.jpg','img/mudbathspa/gallery/gallery17.jpg','img/mudbathspa/gallery/gallery18.jpg','img/mudbathspa/gallery/gallery19.jpg','img/mudbathspa/gallery/gallery20.jpg','img/mudbathspa/gallery/gallery21.jpg'];
  res.render('mudspaPage', { 
    title: 'MUD BATH & SPA', 
    sliders: sliders,
    sliders_thumb: sliders_thumb,
    gallery: gallery,
    pageID: 2, 
    ref: 'mudbathspa'
   });

});

router.get('/weddingconvention', function (req, res) {
  let sliders = ['img/wedding/slider01.jpg','img/wedding/slider02.jpg','img/wedding/slider03.jpg','img/wedding/slider04.jpg','img/wedding/slider05.jpg','img/wedding/slider06.jpg','img/wedding/slider07.jpg','img/wedding/slider08.jpg','img/wedding/slider09.jpg','img/wedding/slider10.jpg','img/wedding/slider11.jpg','img/wedding/slider12.jpg'];
  let sliders_thumb= ['img/wedding/slider01_thumbnail.jpg','img/wedding/slider02_thumbnail.jpg','img/wedding/slider03_thumbnail.jpg','img/wedding/slider04_thumbnail.jpg','img/wedding/slider05_thumbnail.jpg','img/wedding/slider06_thumbnail.jpg','img/wedding/slider07_thumbnail.jpg','img/wedding/slider08_thumbnail.jpg','img/wedding/slider09_thumbnail.jpg','img/wedding/slider10_thumbnail.jpg','img/wedding/slider11_thumbnail.jpg','img/wedding/slider12_thumbnail.jpg'];
  let gallery = ['img/wedding/gallery/gallery01.jpg','img/wedding/gallery/gallery02.jpg','img/wedding/gallery/gallery03.jpg','img/wedding/gallery/gallery04.jpg','img/wedding/gallery/gallery05.jpg'];
  res.render('wcPage', { 
    title: 'WEDDING CONVENTION', 
    sliders: sliders,
    sliders_thumb: sliders_thumb,
    gallery: gallery,
    pageID: 3, 
    ref: 'weddingconvention'
   });
});

router.get('/show', function (req, res) {
  let sliders = ['img/show/slider01.jpg','img/show/slider02.jpg','img/show/slider03.jpg','img/show/slider04.jpg','img/show/slider05.jpg'];
  let sliders_thumb= ['img/show/slider01_thumbnail.jpg','img/show/slider02_thumbnail.jpg','img/show/slider03_thumbnail.jpg','img/show/slider04_thumbnail.jpg','img/show/slider05_thumbnail.jpg'];
  let gallery = ['img/show/gallery/gallery01.jpg','img/show/gallery/gallery02.jpg','img/show/gallery/gallery03.jpg','img/show/gallery/gallery04.jpg','img/show/gallery/gallery05.jpg','img/show/gallery/gallery06.jpg','img/show/gallery/gallery07.jpg','img/show/gallery/gallery08.jpg','img/show/gallery/gallery09.jpg','img/show/gallery/gallery10.jpg','img/show/gallery/gallery11.jpg','img/show/gallery/gallery12.jpg'];
  res.render('showPage', { 
    title: 'SHOW',
    sliders: sliders,
    sliders_thumb: sliders_thumb,
    gallery: gallery,
    pageID: 4, 
    ref: 'show'
  });
})

router.get('/lakeview', function (req, res) {
  let sliders = ['img/show/slider01.jpg','img/show/slider02.jpg','img/show/slider03.jpg','img/show/slider04.jpg','img/show/slider05.jpg'];
  let sliders_thumb= ['img/show/slider01_thumbnail.jpg','img/show/slider02_thumbnail.jpg','img/show/slider03_thumbnail.jpg','img/show/slider04_thumbnail.jpg','img/show/slider05_thumbnail.jpg'];
  let gallery = ['img/show/gallery/gallery01.jpg','img/show/gallery/gallery02.jpg','img/show/gallery/gallery03.jpg','img/show/gallery/gallery04.jpg','img/show/gallery/gallery05.jpg','img/show/gallery/gallery06.jpg','img/show/gallery/gallery07.jpg','img/show/gallery/gallery08.jpg','img/show/gallery/gallery09.jpg','img/show/gallery/gallery10.jpg','img/show/gallery/gallery11.jpg','img/show/gallery/gallery12.jpg'];
  res.render('lakePage', { 
    title: 'LAKE VIEW',
    sliders: sliders,
    sliders_thumb: sliders_thumb,
    gallery: gallery,
    pageID: 5, 
    ref: 'lakeview'
  });
})

router.get('/water', function (req, res) {
  res.render('waterPage', { 
    title: 'WATER',
    pageID: 6, 
    ref: 'water' 
  });
})




module.exports = router;
