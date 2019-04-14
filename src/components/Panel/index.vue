<template>
  <div class="panelWrapper">
    <Header
      :title="title"
      @mousedown.native="onMouseDown"
    />
    <Body>
      <slot></slot>
    </Body>
  </div>
</template>

<script>
import Header from './Header';
import Body from './Body';
import {draggable} from '../mixins/draggable';

export default {
  name: 'Panel',
  mixins: [draggable],

  components: {
    Header,
    Body
  },

  props: {
    title: String
  },
  
  data: function() {
    return {}
  },

  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panelWrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid #cdcdcd;
  background-color: #f7f7f7;
  padding: 4px;
  width: 400px;
  height: 300px;

  position: absolute;
  top: 20px;
  left: 20px;
  resize: both;
  overflow: auto;
  border-radius: 3px;
}

.shadow {
  -webkit-box-shadow: 7px 7px 18px -5px rgba(0,0,0,0.75);
  -moz-box-shadow: 7px 7px 18px -5px rgba(0,0,0,0.75);
  box-shadow: 7px 7px 18px -5px rgba(0,0,0,0.75);
}
</style>
