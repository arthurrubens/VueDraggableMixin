<template>
  <div class="bodyWrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Body',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bodyWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid #cdcdcd;
  background-color: #f7f7f7;
  width: calc(100% - 2px);
  height: 100%;
  padding: 5px;
  border-radius: 0 0 5px 5px;
}
</style>
