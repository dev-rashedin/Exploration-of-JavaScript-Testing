const { default: axios } = require("axios")


 const fetchTodos = async () => {
  const response = await axios('https://jsonplaceholder.typicode.com/todos')
  
  return response.data.slice(0, 10)
}

(async () => {
  const todos = await fetchTodos()

  console.log(todos)
})()


module.exports = fetchTodos