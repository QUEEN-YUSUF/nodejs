var express = require('express');
var router = express.Router();
var comments = [{id:1,content:"hello"}];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(comments);
});
router.post('/', function(req, res, next) {
  // userId = req.params.id;
  // comments = req.body;
  res.json(req.body);

  console.log(req.body);

});
router.put('/:id', function(req, res, next) {
 let updateComments = req.body;
  let userId = req.params.id;
  comments.forEach(comment => {
    if (comment.id === parseInt(userId)){
      comment.content = updateComments.content;
    }
  })
  res.json(comments);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted",comments:comments.filter(comment => comment.id  !== parseInt(req.params.id))})
});

module.exports = router;

