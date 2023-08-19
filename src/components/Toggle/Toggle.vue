<template>
    <div class="toggle">
      <div class="toggle-label"> {{ label  }} </div>
      <div class="toggle-left"> {{ left  }} </div>
      <div class="toggle-right"> {{ right  }}</div>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'Toggle',
    props: {
      label: String,
      left: String,
      right: String,
    },
  }
</script>
  
<style>
  .toggle {
    display: flex;
    align-items: center;
    font-size: 24px;
    background-color: inherit;
  }
  .toggle-label {
    margin-right: 20px;
    background-color: inherit;
  }
  .toggle-left {
    text-align: center;
    background-color: rgb(245, 109, 109);
    padding: 4px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
  } 
  .toggle-right {
    text-align: center;
    background-color: gray;
    padding: 4px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
  }
</style>
  