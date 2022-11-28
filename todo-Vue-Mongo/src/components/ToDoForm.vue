<!-- template -->
<template>
    <form @submit.prevent = "submitNewTodo" class="todoForm">
        <label class="todoLable"><strong>To-Do</strong></label>
        <input class="todoInput" type="text" required v-model="todoTxtInput" placeholder="what needs to be done?">
        <button class="submitTodo">Add</button>
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

.todoForm {
    margin-left: 35%;
    margin-right: 10%;
}

.todoLable {
    display: block;
    margin-left: 17%;
    font-size: 200%;
}

.todoInput {
    width: 40%;
    font-size: 150%;
}

.submitTodo {
    font-size: 150%;
    margin-left: 0.2%;
}
</style>