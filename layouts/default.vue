<template>
    <div>
      <header>
      <!-- Navbar (if needed) -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NuxtLink class="navbar-brand" to="/">My Website</NuxtLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="(page, index) in pages" :key="index">
                <NuxtLink class="nav-link" :to="page.path">{{ page.name }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
      <!-- This is where the content of your pages will be rendered -->
      <NuxtPage />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pages: [
          { name: 'Home', path: '/' },
          { name: 'Images', path: '/images' },
          { name: 'Accordion', path: '/accordion' },
          { name: 'Grid', path: '/grid' },
          { name: 'Movies', path: '/movies' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .nav {
    margin-bottom: 20px; /* Adds spacing between the navbar and page content */
    background-color: #f2f2f2;
    padding: 10px;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: start;
    gap: 12px;
  }

  li {
    margin-right: 10px;
  }

  NuxtLink {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }

  NuxtLink.active {
    color: #ff0000;
  }

  </style>
  