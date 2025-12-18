const { randomInt } = require('crypto')

class RandomData {
  randomBirthday() {
    const randomDay = Math.floor(randomInt(1, 29))
    const randomMonth = Math.floor(randomInt(1, 13))
    const year = '1998'
    const month = randomMonth < 10 ? `0${randomMonth}` : randomMonth
    const day = randomDay < 10 ? `0${randomDay}` : randomDay
    return `${day}${month}${year}`
  }

  randomGender() {
    const gender = ['Feminino', 'Masculino']
    return gender[randomInt(0, 2)]
  }
}

export default RandomData
