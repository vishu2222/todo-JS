import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/todoDb')
  .then(console.log('connected to DataBase:'))
  .catch(err => console.log('Couldn\'t connect to DataBase:', err))

const todoSchema = new mongoose.Schema({
  txt: String,
  date: String,
  priority: String,
  notes: String,
  checkbox: Boolean
})

const todoModel = mongoose.model('todos', todoSchema) // todos is the collection name // https://mongoosejs.com/docs/index.html

export async function getAllTodos () {
  return await todoModel.find()
}

export async function getCompleted () {
  return await todoModel.find({ checkbox: true })
}

export async function getPending () {
  return await todoModel.find({ checkbox: false })
}

export async function insertTodo (todoTxt) {
  const postTodo = todoModel({ txt: todoTxt, checkbox: false })
  return await postTodo.save()
}

export async function deleteTodo (id) {
  const delTodo = await todoModel.deleteOne({ _id: id }) // if (delTodo.deletedCount === 0) { throw Error }
  return delTodo.deletedCount
}

export async function deleteDone () {
  await todoModel.deleteMany({ checkbox: true })
}

export async function updateTodo (id, property, val) {
  const updateObject = { }
  updateObject[property] = val
  const updateTodoProperty = await todoModel.findByIdAndUpdate({ _id: id }, updateObject)
  return updateTodoProperty
}
