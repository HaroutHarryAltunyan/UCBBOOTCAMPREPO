const bcrypt = require('bcrypt')

const password = 'supersecretpassword'

const init = async () => {
  const hashedPassword = await bcrypt.hash(password, 10)
  console.log(hashedPassword)

  const isCorrectPassword = await bcrypt.compare('supersecretpassword', hashedPassword)
  console.log(isCorrectPassword)
}

init()