<!-- template start-->
<template>
  <ToDoForm @todoAdded="addTodo"></ToDoForm>                                <!-- addTodo is called with todoTxtInput emitted from todoform component-->
  <div id="todoContainer">                                                  <!-- The key allows Vue to accurately move each element to match the position of its corresponding object in the array -->
    <div v-for="todo in todosArr" :key="todo._id">
      <TodoItem :item =todo @reRender="fetchData"></TodoItem>
    </div>
  </div>
</template>



<script>
import ToDoForm from './components/ToDoForm.vue'
import TodoItem from './components/ToDoItem.vue'
import { fetchTodos, requestAddTodo } from './requests.js'

export default {
  data() {
    return {
      todosArr: []
    }
  },

  components: { ToDoForm, TodoItem },

  methods: {
    async addTodo (todoTxt) {
     await requestAddTodo(todoTxt)
     this.todosArr = await fetchTodos()
    },
    async fetchData () {
      this.todosArr = await fetchTodos()
    }
  },

  async created () {
    this.todosArr = await fetchTodos()
  }
}
</script>



<style>
#todoContainer {
  font-size: 150%;
}
</style>
