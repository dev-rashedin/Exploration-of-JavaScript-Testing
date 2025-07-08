const animals = ['tiger', 'elephant', 'lion', 'zebra'
]


const pushAnimalToArray = (animalName) => {
  animals.push(animalName)
}


pushAnimalToArray('monkey')
// console.log(animals)


const addAnimalAtBeginning =  (animalName) => {
  animals.unshift(animalName)
}

addAnimalAtBeginning('bear')
// console.log(animals)


module.exports = { animals, pushAnimalToArray, addAnimalAtBeginning }