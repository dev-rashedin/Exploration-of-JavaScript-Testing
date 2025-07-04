const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3)
// })

// it('should add 1 + 2 to equal 3', () => {
//    expect(sum(1, 2)).toBe(3)
// })

describe('sum()', () => {
  it('should add 1 + 2 to equal 3', () => { 
    expect(sum(1, 2)).toBe(3)
  })

  it('object assignment', () => {
    const obj = {};
    expect(obj).toEqual({})
  })



})

// truthy or falsy
describe('truthy or falsy', () => {
  it('null', () => {
    // const n = 0;
    const n = null;

    // expect(n).toBeTruthy()
    expect(n).toBeFalsy()
    expect(n).not.toBeTruthy()
    expect(n).toBeNull()
    // expect(n).toBeUndefined()
    expect(n).not.toBeUndefined()
  })

  it('adding floats', () => {
    const value = 0.1 + 0.2
    expect(value).toBeCloseTo(0.3)
    expect(value).toBeCloseTo(0.299)
    // expect(value).toBe(0.3)

  })
})
  

describe('numbers', () => {
  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(5)
  })
})


describe('strings', () => {
  it('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
  })
})


describe('arrays', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk'
  ]

  expect(shoppingList).toContain('milk');

})


function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

describe("exceptions", () => {
  it("compiling android goes as expected", () => { 
    expect(() => compileAndroidCode()).toThrow(
      "you are using the wrong JDK"
    );
  })
})



