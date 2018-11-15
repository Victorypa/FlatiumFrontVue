<template>
  <div>
<div id="main">
  <div id="areas">
    <div class="column">
      <h1>Drag To Here</h1>
      <div class="well">
        <draggable :list="list1" :options="{group:{ name: 'stuff'}}" @start="drag=true" @end="drag=false" :move="onMove">
          <div v-for="ele in list1" class="item">{{ele.name}}</div>
        </draggable>
      </div>
    </div>
    <div class="column">
      <h1>Drag From Here</h1>
      <div class="well">
        <draggable :list="list2" :options="{group:{ name: 'stuff'}}" @start="drag=true" @end="drag=false" :move="onMove">
          <div v-for="ele in list2" class="item">{{ele.name}}</div>
        </draggable>
      </div>
    </div>

        <div class="column">
      <h1>Drag From Here</h1>
      <div class="well">
        <draggable :list="list3" :options="{group:{ name: 'stuff'}}" @start="drag=true" @end="drag=false" :move="onMove">
          <div v-for="ele in list3" class="item">{{ele.name}}</div>
        </draggable>
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
        components: {
            draggable,
        },
          data() {
    return {
      future_index: "START",
            list3: [{
        name: 'New 3'
      }, {
        name: 'New Three'
      }],
      list2: [{
        name: 'New 1'
      }, {
        name: 'New Two'
      }],
      list1: [{
        name: 'Existing 1'
      }, {
        name: 'Existing 2'
      }]
    }
  },
    methods: {
    onMove: function(event, oEvent) {
      this.future_index += ', ' + event.draggedContext.futureIndex;
    }
  }
}
</script>

<style lang="css" scoped>
#main{
  margin: 30px;
}

p {
  padding: 10px;
}

#areas {
  display: flex;
  
}

.column {
  flex: 1;
}

.column .item {
  border: 1px solid blue;
  border-radius: 15px;
  margin: 5px;
  padding: 5px;
  width: 40%;
  float: left;
}

.well {
  background: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  min-height: 300px;
}

.well>div{
  height: 200px;
}

.sortable-ghost {
  background: #ccc;
}

</style>
