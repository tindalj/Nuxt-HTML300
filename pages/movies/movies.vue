<template>
    <div>
      <h1>Movies</h1>
      <div class="movie-list">
        <MovieCard
          v-for="movie in movies"
          :key="movie.imdbID"
          :title="movie.Title"
          :description="movie.Plot"
          :image="movie.Poster"
          :statistics="{ rating: movie.imdbRating, releaseDate: movie.Released }"
        />
      </div>
    </div>
  </template>
  
  <script>
  import MovieCard from '@/components/MovieCard.vue';
  
  export default {
    components: { MovieCard },
    data() {
      return {
        movies: [],
      };
    },
    async mounted() {
    //   const response = await fetch(http://www.omdbapi.com/?s=movies&apikey=YOUR_API_KEY);
      const data = await response.json();
      if (data.Search) {
        this.movies = data.Search;
      }
    },
  };
  </script>
  
  <style scoped>
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  </style>