<!-- template start-->
<template>
    <div class="todoItemDiv" :id="'item'+ this.id">
        <div class="todoEntryDiv" @click.self="togglePropertyDisplay">
            <input type="checkbox" class="itemCheckbox" v-model="checkbox" @change="requestUpdate('checkbox', this.checkbox)">
            <input type="text" class="todoTxtInput" v-model="todoTxtInput" @change="requestUpdate('txt', this.todoTxtInput)">
        </div>

        <div class="propertiesDiv" v-if="showProperties" @click.self="togglePropertyDisplay">
            <textarea cols="30" rows="10" v-model="notes" placeholder="Notes" @change="requestUpdate('notes', this.notes)"></textarea>
            <label>Due Date: </label>
            <input type="date" v-model="dueDate" @change="requestUpdate('date', this.dueDate)">
            <label>priority</label>
            <select v-model="priority" @change="requestUpdate('priority', this.priority)">
                <option>None</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button @click="deleteTodo">Delete</button>
        </div>

    </div>
</template>

<!-- script start-->
<script>
import { requestDelete, reqPropertyUpdate } from '../requests.js'
export default {
    data() {
        return {
            id: this.item._id,
            checkbox: this.item.checkbox,
            todoTxtInput: this.item.txt,
            dueDate: this.item.date,
            notes: this.item.notes,
            priority: this.item.priority,
            showProperties: false
        }
    },

    props: ['item'],

    emits: ["reRender"],
    
    methods: {
        togglePropertyDisplay () {
            this.showProperties = !this.showProperties 
        },
        async deleteTodo () {
            await requestDelete(this.id)
            this.$emit('reRender')
        },
        requestUpdate (property, val) {
            reqPropertyUpdate(this.id, property, val)
        }
    }
}
</script>

<!-- style start-->
<style>
.todoItemDiv {
    font-size: 120%;
    background-color: #C4D7E0;
    margin-left: 500px;
    margin-right: 500px;
    margin-bottom: 5px;
    border-radius: 14px;
}

.todoEntryDiv {
    padding-bottom: 8px;
}

.propertiesDiv {
    margin-top: 20px;
    margin-left: 20px;
}

.todoTxtInput {
   display: inline-block;
   height: 20px;
   width: 300px;
}

.itemCheckbox {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    font-size:large;
    width: 15px;
    height: 15px;
}
</style>