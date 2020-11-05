var express = require('express');
var router = express.Router();
var users = [{id:1,content:"hey"}];
/* GET users page. */
router.get('/', function(req, res, next) {
  res.json(users);
});


router.post('/', function(req, res, next) {
  // userId = req.params.id;
  // users = req.body;
  res.json(users);
  console.log(req.body);
});


router.put('/:id', function(req, res, next) {
 let updateUsers = req.body;
 let userId = req.params.id;
  users.forEach(user => {
    if (user.id === parseInt(userId)){
      user.content = updateUsers.content;
    }
  })
  res.json(users);
});

router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted",users:users.filter(user => user.id  !== parseInt(req.params.id))})
});

module.exports = router;