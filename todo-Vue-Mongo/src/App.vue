<!-- template start-->
<template>
<ToDoForm @todoAdded="addTodo"></ToDoForm>
</template>

<!-- script start-->
<script>
import ToDoForm from './components/ToDoForm.vue'

export default {
  data () {
    return {
      id: 1,
      todosArr: [{ "id": '1', "txt": "todo1", "date": null, "priority": null, "notes": null, "checkbox": false }]
    }
  },

  components: { ToDoForm },

  methods: {
    addTodo (todoTxtInput) {
      this.id += 1
      this.todosArr.push({'id': this.id, 'txt': todoTxtInput})
      console.log(this.todosArr)
    }
  },

  mounted () {
    
  }
  
}
</script>

<!-- style start-->
<style>

</style>