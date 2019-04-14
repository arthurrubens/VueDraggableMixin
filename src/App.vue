<template>
  <div id="app">
      <Panel
        title="Draggable Window"
      >
        <form class="form">
          <label for="inputFirstName">First name:</label>
          <input type="text" name="firstname" id="inputFirstName" class="inputField"><br>
          <label for="inputFirstName">Last name:</label>
          <input type="text" name="lastname" id="inputLastName" class="inputField">
        </form>
      </Panel>
  </div>
</template>

<script>
import Panel from './components/Panel'

export default {
  name: 'app',
  components: {
    Panel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.inputField {
  width: calc(100% - 5px);
}
</style>
