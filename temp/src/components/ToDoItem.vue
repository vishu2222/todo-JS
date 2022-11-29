<!-- template start-->
<template>
    <div class="todoItemDiv" :id="'item'+ this.item.id">

        <div class="todoEntryDiv" @click="togglePropertyDisplay">
            <input type="checkbox" class="itemCheckbox" v-model="checkbox">
            <input type="text" class="todoTxtInput" v-model="todoTxtInput">
        </div>

        <div class="propertiesDiv" v-if="showProperties" @click.self="togglePropertyDisplay">
            <textarea name="" id="" cols="30" rows="10" v-model="notes" placeholder="Notes"></textarea>
            <label for="">Due Date: </label>
            <input type="date" v-model="dueDate">
            <label for="">priority</label>
            <select name="" id="" v-model="priority">
                <option>None</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button>Delete</button>
        </div>
        
    </div>
</template>

<!-- script start-->
<script>
export default {
    data() {
        return {
            id: this.item.id,
            checkbox: this.item.checkbox,
            todoTxtInput: this.item.txt,
            dueDate: this.item.date,
            notes: this.item.notes,
            priority: this.item.priority,
            showProperties: false
        }
    },

    props: ['item'],

    methods: {
        togglePropertyDisplay () {
            this.showProperties = !this.showProperties 
        },
        print () {
            console.log(this.priority)
        }
    }
}
// console.log(this.notes)
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