const fetchTodos = require("./async")



describe("test async code", () => {
  it('should fetch 10 todos', async () => {
    const todos = await fetchTodos()
    expect(todos.length).toBe(10)
  })
})