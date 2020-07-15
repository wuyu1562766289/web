<template>
    <li>
        <slot></slot>
    </li>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'my-li',
    data() {
        return {

        }
    },
    components: {

    }
}
</script>

<style scoped>
li {
    list-style: none;
    float: left;
    width: 33.333%;
    text-align: center;
}
</style>
