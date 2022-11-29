<!-- template start-->
<template>
    <div class="todoItemDiv">
        <input class="todoInput" type="checkbox">
        <input type="text">
        <div class="propertiesDiv">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <label for="">Due Date: </label>
            <input type="date">
            <label for="">priority</label>
            <select name="" id="">
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

        }
    }
}
</script>
    
<!-- style start-->
<style>
.todoItemDiv {
    font-size: 120%;
    background-color: #C4D7E0;
    margin-left: 28%;
    margin-right: 30%;
    margin-bottom: 0.4%;
    border-radius: 14px;
}

.propertiesDiv {
    /* display: none; */

}

.todoInput {
    /* margin-bottom: 0.1%; */
}
</style>