const brcypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = brcypt.compareSync(password, users[i].passHash)
        if (users[i].username === username && existing) {
          let usersToReturn = {...users[i]}
          delete usersToReturn.password
          res.status(200).send(usersToReturn)
          console.log('you are logged in')
          return
          // users[i].username.push(users)
          // let usersToReturn = {...users[i]}
          // res.status(200).send(usersToReturn)
          // return
        }
      }
      res.status(400).send("User not found.")
    },



    register: (req, res) => {


      const {username, email, firstName, lastName, password} = req.body

      const salt = brcypt.genSaltSync(5);
      const passHash = brcypt.hashSync(password, salt)
  
      let pass = {
        username,
        email,
        firstName,
        lastName,
        passHash
      }



        console.log('Registering User')
        console.log(pass)
        users.push(pass)
        res.status(200)
    }
}