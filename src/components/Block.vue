<template>
    <div class="block">
        <div style="display: inline-block;">
            <div>Номер блока: {{ block.number}}</div>
            <div>Хэш блока: {{ block.hash }}</div>
        </div>
        <button class="btn" @click="$router.push(`/block/${block.number}`)">Открыть страницу блока</button>
    </div>

</template>

<script>
export default{
    name: "block",
    props:{
        block:{
            type: Object,
            require: true
        }
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.block{
    padding: 15px;
    border: 2px solid green;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn{
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: green;
    border: 2px solid green;
    margin-left: auto;
}
</style>
