const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let firstName, lastName, age, hobby1, hobby2
fs.readFile('./firstname.txt', 'utf-8')
  .then((firstNameData) => {
    firstName = firstNameData
    return fs.readFile('./lastname.txt', 'utf-8')
  })
  .then((lastNameData) => {
    lastName = lastNameData
    return fs.readFile('./age.txt', 'utf-8')
  })
  .then((ageData) => {
    age = ageData
    return fs.readFile('./hobbies.txt', 'utf-8')
  })
  .then((hobbyData) => {
    const activitiesArray = JSON.parse(hobbyData)
    hobby1 = activitiesArray[0]
    hobby2 = activitiesArray[1]
    console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobby1} and ${hobby2}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  })

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
firstName = ''
lastName = ''
age = ''
hobby1 = ''
hobby2 = ''

async function readDataFiles() {
  try {
    firstName = await fs.readFile('./firstname.txt', 'utf-8')
    lastName = await fs.readFile('./lastname.txt', 'utf-8')
    age = await fs.readFile('./age.txt', 'utf-8')
    const hobbyData = await fs.readFile('./hobbies.txt', 'utf-8')
    const activitiesArray = JSON.parse(hobbyData)
    hobby1 = activitiesArray[0]
    hobby2 = activitiesArray[1]
    console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobby1} and ${hobby2}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

readDataFiles()
