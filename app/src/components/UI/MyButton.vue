<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default{
    name : 'my-button',
}
</script>

<style scoped>
.btn{
  align-self: flex-end;
  margin-top: 15px;
  padding-left: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  width: 170px;
  height: auto;
  padding: 10px;
}
</style>