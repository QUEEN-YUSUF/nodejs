var express = require('express');
var router = express.Router();
var advertisements = [{id:1,content:"hello"}];

/* GET  page. */
router.get('/', function(req, res, next) {
  res.json(advertisements);
});

router.post('/', function(req, res, next) {
  // userId = req.params.id;
  // advertisements = req.body;
  res.json(req.body);

  console.log(req.body);

});

router.put('/:id', function(req, res, next) {
let updateAdvertisement = req.body;
let userId = req.params.id;

  advertisements.forEach(advertisement => {
    if (advertisement.id === parseInt(userId)){
      advertisement.content = updateAdvertisement.content;
    }
  })
  res.json(advertisements);
});

router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted",advertisements:advertisements.filter(advertisement => advertisement.id  !== parseInt(req.params.id))})
});

module.exports = router;