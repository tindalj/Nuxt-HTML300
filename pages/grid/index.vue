<template>
    <div class="container my-4">
      <h2 class="text-center mb-4">Bootstrap Grid System</h2>
      <div class="row">
        <div
          v-for="(item, index) in gridItems"
          :key="index"
          class="col-12 col-md-6 col-lg-4 grid-item"
        >
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gridItems: ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6']
      }
    }
  }
  </script>
  
  <style>
  .grid-item {
    background-color: #bf0861;
    border: 1px solid #07157d;
    border-radius: 0.25rem;
    padding: 1rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  </style>
  