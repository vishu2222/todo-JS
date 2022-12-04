<!-- template -->
<template>
  <ToDoForm @todoAdded="addTodo"/>                           <!-- addTodo is called with todoTxtInput emitted from todoform component-->
  
  <div id="todoContainer">                                                  <!-- The key allows Vue to accurately move each element to match the position of its corresponding object in the array -->
    <div v-for="todo in todosArr" :key="todo._id">
      <TodoItem :item =todo @reRender="fetchData"/>
    </div>
  </div>

  <button @click="toggleDisplay" class="display">{{display}}</button>
  <button @click="deleteDone" class="deleteDone">Delete Done</button>

</template>

<!-- script -->
<script>
import ToDoForm from './components/ToDoForm.vue'
import TodoItem from './components/ToDoItem.vue'
import ToDoFooter from './components/ToDoFooter.vue'
import { fetchTodos, requestAddTodo, requestCompleted, requestPending, requestDeleteDone } from './requests.js'

export default {

  // data
  data() {
    return {
      todosArr: [],
      display: 'show done'
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
    },
    async getPending() {
      this.todosArr = await requestPending()
    },
    async deleteDone() {
      await requestDeleteDone()
      this.todosArr = await fetchTodos()
    },
    async toggleDisplay() {
      if (this.display === 'show done') {
        this.todosArr = await requestCompleted()
        this.display = 'show pending'
      } else if (this.display === 'show pending') {
        this.todosArr = await requestPending()
        this.display = 'show all'
      } else {
        this.todosArr = await fetchTodos()
        this.display = 'show done'
      }
      
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

.display {
  display: inline-block;
  margin-left: 500px;
}

.deleteDone {
  display: inline-block;
  margin-left: 730px;
}
</style>


