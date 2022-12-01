<!-- template start-->
<template>
  <ToDoForm @todoAdded="addTodo"></ToDoForm> <!-- addTodo is called with todoTxtInput emitted from todoform component-->

  <div id="todoContainer">
    <div v-for="todo in todosArr" :key="todo.id">
      <TodoItem :item =todo></TodoItem>
    </div>
  </div>

</template>

<!-- script start-->
<script>
import ToDoForm from './components/ToDoForm.vue'
import TodoItem from './components/ToDoItem.vue'
import { fetchTodos, requestAddTodo } from './requests.js'

export default {

  // data
  data() {
    return {
      id: 0,
      todosArr: []
    }
  },

  // components
  components: { ToDoForm, TodoItem },

  // methods
  methods: {
    addTodo(todoTxt) {
      const result = requestAddTodo(todoTxt)
    }
  },

  // mount
  async beforeMount () {
    this.todosArr = await fetchTodos()
    console.log(this.todosArr)
  }

}
</script>

<!-- style start-->
<style>
#todoContainer {
  font-size: 150%;
}
</style>