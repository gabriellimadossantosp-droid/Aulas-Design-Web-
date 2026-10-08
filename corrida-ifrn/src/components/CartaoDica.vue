<template>
    <div>
        <p> {{ dica }} </p>
    </div>
</template>
<script>
    export default{
        name: 'CartaoDica',
        props: {
            dica: String
        }
    }
</script>
<style scoped>
div{
    background-color: pink;
    width: 7rem;
    height: 7rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 3px #999;
}
</style>