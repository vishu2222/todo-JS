<!-- template -->
<template>
  <ToDoForm @todoAdded="addTodo"/>                           <!-- addTodo is called with todoTxtInput emitted from todoform component-->
  <div id="todoContainer">                                                  <!-- The key allows Vue to accurately move each element to match the position of its corresponding object in the array -->
    <div v-for="todo in todosArr" :key="todo._id">
      <TodoItem :item =todo @reRender="fetchData"/>
    </div>
  </div>
  <!-- <ToDoFooter></ToDoFooter> -->
</template>

<!-- script -->
<script>
import ToDoForm from './components/ToDoForm.vue'
import TodoItem from './components/ToDoItem.vue'
import ToDoFooter from './components/ToDoFooter.vue'
import { fetchTodos, requestAddTodo } from './requests.js'

export default {

  // data
  data() {
    return {
      todosArr: []
    }
  },

  // components
  components: { ToDoForm, TodoItem, ToDoFooter },

  // methods
  methods: {
    async addTodo (todoTxt) {
     await requestAddTodo(todoTxt)
     this.todosArr = await fetchTodos()
    },
    async fetchData () {
      this.todosArr = await fetchTodos()
    }
  },

  // lifeCycleHooks
  async created () {
    this.todosArr = await fetchTodos()
  }
}
</script>

<!-- style -->
<style scoped> 
#todoContainer {
  font-size: 150%;
}
</style>
