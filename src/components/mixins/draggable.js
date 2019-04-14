export const draggable = {
  data: function() {
    return {
      draggable: {
        fromPosition: {
            x: 0,
            y: 0
        },
        toPosition: {
            x: 0,
            y: 0
        }        
      }
    }
  },

  methods: {
    onMouseDown: function(e) {
      e = e || window.event;
      e.preventDefault();
      this.draggable.fromPosition.x = e.clientX;
      this.draggable.fromPosition.y = e.clientY;
      document.onmouseup = this.closeDragElement;
      document.onmousemove = this.elementDrag;
      this.$el.classList.add('shadow');
    },

    elementDrag: function(e) {
      e = e || window.event;
      e.preventDefault();
      this.draggable.toPosition.x = this.draggable.fromPosition.x - e.clientX;
      this.draggable.toPosition.y = this.draggable.fromPosition.y - e.clientY;
      this.draggable.fromPosition.x = e.clientX;
      this.draggable.fromPosition.y = e.clientY;
      this.$el.style.top = (this.$el.offsetTop - this.draggable.toPosition.y) + "px";
      this.$el.style.left = (this.$el.offsetLeft - this.draggable.toPosition.x) + "px";
    },

    closeDragElement: function() {
      document.onmouseup = null;
      document.onmousemove = null;
      this.$el.classList.remove('shadow');
    }
  }
};