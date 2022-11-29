<!-- template start-->
<template>
    <div class="todoItemDiv" :id="'item'+ this.item.id">

        <div class="entryDiv" @click="togglePropertyDisplay">
            <input type="checkbox" class="itemCheckbox" v-model="checkbox">
            <input type="text" class="todoTxtInput" v-model="todoTxtInput">
        </div>

        <div class="propertiesDiv" v-if="showProperties" @click.self="togglePropertyDisplay">
            <textarea name="" id="" cols="30" rows="10" v-model="notes"></textarea>
            <label for="">Due Date: </label>
            <input type="date" v-model="dueDate">
            <label for="">priority</label>
            <select name="" id="" v-model="priority">
                <option value="">None</option>
                <option value="">Low</option>
                <option value="">Medium</option>
                <option value="">High</option>
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
        }
    }
}
// console.log(this.item.priority)
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

.entryDiv {
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