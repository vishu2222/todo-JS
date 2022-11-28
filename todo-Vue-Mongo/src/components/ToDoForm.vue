<!-- template -->
<template>
    <form @submit.prevent = "submitNewTodo">
        <label><strong>To-Do</strong></label>
        <input type="text" required v-model="todoTxtInput" placeholder="what needs to be done?">
        <button>Add</button>
    </form>
</template>

<!-- script -->
<script>
export default {
    data () {
        return {
            todoTxtInput: ''
        }
    },
    methods: {
        submitNewTodo () {
            this.$emit('todoAdded', this.todoTxtInput)
            this.todoTxtInput = ''
        }
    }
}
</script>

<!-- style -->
<style>

</style>