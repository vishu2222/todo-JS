<!-- template start-->
<template>
  <ToDoForm @todoAdded="addTodo"></ToDoForm>

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

export default {
  data() {
    return {
      id: 1,
      todosArr: [
        { "id": '1', "txt": "todo1", "date": '2022-10-10', "priority": "Medium", "notes": 'notes1', "checkbox": true },
        { "id": '2', "txt": "todo2", "date": '2022-11-11', "priority": "None", "notes": 'notes2', "checkbox": true }
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