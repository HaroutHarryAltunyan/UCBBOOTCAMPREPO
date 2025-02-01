const router = require('express').Router();
const User = require('../../models/User');

// Create a user
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.json(user)
  } catch(error) {
    console.log(error)
    res.status(500).send('Error creating user')
  }
})

// GET a user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)
  } catch(error) {
    res.status(500).send('Error finding user')
  }
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await User.update(
      req.body,
      {
        where: { id }
      }
    )
    res.json(user)
  } catch(err) {
    res.status(500).send('Error updating user')
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const result = await User.destroy({
      where: { 
        id
      }
    })
    res.json(result)
  } catch(error) {
    res.status(500).send('Error deleting user')
  }
});

router.post('/login', async (req, res) => {
  console.log(req.body)
  try {
    // does user exist?
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    })

    if (!user) {
      res.status(401).send('Could not log in')
      return
    }
  
    // is password correct?
    const isCorrectPassword = await user.isCorrectPassword(req.body.password)

    if (!isCorrectPassword) {
      res.status(401).send('Could not log in')
      return
    }

    res.json({ loggedIn: true })
  } catch(error) {
    res.status(500).send('Error logging in')
  }
})

module.exports = router;
