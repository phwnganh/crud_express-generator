var express = require('express');
var router = express.Router();

const users = [
  {
    name: "chu meu",
    email: "hipepidg@gmail.com"
  },
  {
    name: "bac ho chi minh",
    email: "hoangquat@gmail.com"
  },
  {
    name: "chi thuy",
    email: "chype@gmail.com"
  }
];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: "User List", 
    users: users
  })
  console.log("user", users.map(user => {
    console.log(user);
  }));
});

// add new users
router.post('/', (req, res, next) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);

  res.render("users", {
    title: "User List",
    users: [...users]
  });
});

// router.put('/:userid/edit', (req, res, next) => {
//   const index = users.findIndex(u => u.userid === parseInt(req.params.userid));
//   if(index !== -1){
//     users[index] = req.body;
//     res.json(users[index]);
//   }else{
//     res.status(400).json({"message": "not found"});
//   }
// })

// router.delete('/:userid/delete', (req, res, next) => {
//   const index = users.findIndex(u => u.userid === parseInt(req.params.userid));
//   if(index !== -1){
//     const deletedUser = users.splice(index, 1);
//     res.json(deletedUser)
//   }else{
//     res.status(400).json({"message": "not found"});
//   }
// })


module.exports = router;
