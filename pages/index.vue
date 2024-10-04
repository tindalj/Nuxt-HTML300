<template>
    <div>
      <!-- Jumbotron -->
      <div class="jumbotron">
        <h1 class="display-4">{{ welcomeTitle }}</h1>
        <p class="lead">{{ leadText }}</p>
        <hr class="my-4" />
        <p v-if="showInfo">{{ infoText }}</p>
        <p v-else>No additional information available.</p>
        <button class="btn btn-primary btn-lg" v-b-tooltip.hover title="This button does nothing">
          Learn more
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Define reactive variables
  const welcomeTitle = ref('Welcome to My Website');
  const leadText = ref('This is a simple landing page using Bootstrap.');
  const infoText = ref('Use the navigation bar to explore different pages.');
  const showInfo = ref(true);
  </script>
  
  <style scoped>
  .jumbotron {
    background-color: #e9ecef;
    padding: 2rem;
    border-radius: 0.3rem;
    text-align: center;
  }
  </style>
  