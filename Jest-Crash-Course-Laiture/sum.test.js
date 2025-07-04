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
    const n = null;

    // expect(n).toBeTruthy()
    expect(n).toBeFalsy()
    expect(n).not.toBeTruthy()
    expect(n).toBeNull()
    // expect(n).toBeUndefined()
    expect(n).not.toBeUndefined()
  })
  })



