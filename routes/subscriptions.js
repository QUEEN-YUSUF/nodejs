var express = require('express');
var router = express.Router();
var subscriptions = [{id:1,content:"hey baby"}];
/* GET subscription page. */
router.get('/', function(req, res, next) {
  res.json(subscriptions);
});

router.post('/', function(req, res, next) {
  // userId = req.params.id;
  // subscriptions = req.body;
  res.json(subscriptions);

  console.log(req.body);
});


router.put('/:id', function(req, res, next) {
  let updatesubscriptions = req.body;
 let userId = req.params.id;
  subscriptions.forEach(subscription => {
    if (subscription.id === parseInt(userId)){
      subscription.content = updatesubscriptions.content;
    }
  })
  res.json(subscriptions);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted",subscriptions:subscriptions.filter(subscription => subscription.id  !== parseInt(req.params.id))})
}); 


module.exports = router;