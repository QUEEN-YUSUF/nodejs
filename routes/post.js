var express = require('express');
var router = express.Router();
var posts = [{id:1,content:"hello"}];
/* GET post page. */
router.get('/', function(req, res, next) {
  res.json(posts);
});
router.post('/', function(req, res, next) {
  // userId = req.params.id;
  // posts = req.body;
  res.json(req.body);

  console.log(req.body);
});


router.put('/:id', function(req, res, next) {
 let updateposts = req.body;
 let userId = req.params.id;
  posts.forEach(post => {
    if (post.id === parseInt(userId)){
      post.content = updateposts.content;
    }
  })
  res.json(posts);

});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted",posts:posts.filter(post => post.id  !== parseInt(req.params.id))})
});

module.exports = router;