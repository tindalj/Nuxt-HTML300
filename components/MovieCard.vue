<template>
    <div class="movie-card" @click="toggleDetails">
      <img :src="imageUrl" alt="Movie Poster" />
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div v-if="showDetails" class="statistics">
        <p>Rating: {{ statistics.rating }}</p>
        <p>Release Date: {{ statistics.releaseDate }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      statistics: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        showDetails: false,
      };
    },
    computed: {
      imageUrl() {
        return this.image !== 'N/A' ? this.image : '/placeholder-image.png'; // Fallback for no image
      },
    },
    methods: {
      toggleDetails() {
        this.showDetails = !this.showDetails;
      },
    },
  };
  </script>
  
  <style scoped>
  .movie-card {
    border: 1px solid #ccc;
    margin: 1rem;
    padding: 1rem;
    transition: transform 0.2s;
    cursor: pointer;
    width: 200px;
    text-align: center;
  }
  .movie-card:hover {
    transform: scale(1.05);
  }
  .statistics {
    margin-top: 1rem;
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 5px;
  }
  </style>