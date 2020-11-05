var express = require('express');
var router = express.Router();
var categories = [{id:1,content:"home"}];
/* GET categories page. */
router.get('/', function(req, res, next) {
  res.json(categories);
});

router.post('/', function(req, res, next) {
  // userId = req.params.id;
  // categories = req.body;
  res.json(req.body);
  
  console.log(req.body)
});
router.put('/:id', function(req, res, next) {
  updateCategories = req.body;
  userId = req.params.id;
  categories.forEach(category => {
    if (category.id === parseInt(userId)){
      category.content = updateCategories.content;
    }
  })
  res.json(categories);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted",categories:categories.filter(categories => categories.id  !== parseInt(req.params.id))})
});

module.exports = router;