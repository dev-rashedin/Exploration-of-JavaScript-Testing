const { animals, pushAnimalToArray, addAnimalAtBeginning } = require("./setup")


beforeAll(() => {
  console.log('before all test');
});

afterAll(() => {
  console.log('after all test');
});


describe("add animal at the end of the list", () => { 
  
beforeEach(() => {
  console.log('before each test');
});

afterEach(() => {
  console.log('after each test');
});
  it('should add animal at the end of the list', () => { 
    pushAnimalToArray('monkey')
    
   expect(animals[animals.length - 1]).toBe('monkey')
  })
})


describe("add animal at the beginning of the list", () => { 
  it('should add animal at the beginning of the list', () => { 
    addAnimalAtBeginning('bear')
    
   expect(animals[0]).toBe('bear')
  })
})