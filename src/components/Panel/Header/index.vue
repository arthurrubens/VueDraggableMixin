<template>
  <div class="headerWrapper">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 3px;
  border: 1px solid #cdcdcd;
  border-radius: 3px 3px 0 0;
  background-color: #cdcdcd;
  font-weight: bold;
  width: calc(100% - 2px);
  margin-bottom: 2px;
  cursor: move;
}
</style>
