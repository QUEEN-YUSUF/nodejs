var express = require('express');
var router = express.Router();
var likes = [{id:1,content:"hello"}];
/* GET likes page. */
router.get('/', function(req, res, next) {
  res.json(likes);
});


router.post('/', function(req, res, next) {
  // userId = req.params.id;
  // likes = req.body;
  res.json(req.body);

  console.log(req.body);
});

router.put('/:id', function(req, res, next) {
 let updatelikes= req.body;
  let userId = req.params.id;
  likes.forEach(like => {
    if (like.id === parseInt(userId)){
      like.content = updatelikes.content;
    }
  })
  res.json(likes);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted",likes:likes.filter(like => like.id  !== parseInt(req.params.id))})
});

module.exports = router;