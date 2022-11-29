<!-- template start-->
<template>
    <div class="todoItemDiv" :id="'item'+ this.item.id">
        <div class="entryDiv">
            <input type="checkbox" class="itemCheckbox" v-model="checkbox">
            <input type="text" class="todoTxtInput" v-model="todoTxtInput">
        </div>
        <div class="propertiesDiv">
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
            id: '',
            checkbox: '',
            todoTxtInput: '',
            dueDate: '',
            notes: '',
            priority: ''
        }
    },
    props: ['item'],
    mounted () {
        this.id = this.item.id
        this.todoTxtInput = this.item.txt
        this.checkbox = this.item.checkbox
        this.notes = this.item.notes
        this.dueDate = this.item.date
        this.priority = this.item.priority
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

.entryDiv {
    padding-bottom: 8px;
}

.propertiesDiv {
    /* display: none; */
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