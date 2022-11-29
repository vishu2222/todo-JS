<!-- template start-->
<template>
  <ToDoForm @todoAdded="addTodo"></ToDoForm>

  <div id="todoContainer">
    <div v-for="todo in todosArr" :key="todo.id">
      <TodoItem></TodoItem>
    </div>
  </div>

</template>

<!-- script start-->
<script>
import ToDoForm from './components/ToDoForm.vue'
import TodoItem from './components/ToDoItem.vue'

export default {
  data() {
    return {
      id: 1,
      todosArr: [
        { "id": '1', "txt": "todo1", "date": null, "priority": null, "notes": null, "checkbox": false },
        { "id": '2', "txt": "todo2", "date": null, "priority": null, "notes": null, "checkbox": true }
      ]
    }
  },

  components: { ToDoForm, TodoItem },

  methods: {
    addTodo(todoTxtInput) {
      this.id += 1
      this.todosArr.push({ 'id': this.id, 'txt': todoTxtInput })
    }
  },

  mounted() {

  }

}
</script>

<!-- style start-->
<style>
#todoContainer {
  font-size: 150%;
}
</style>