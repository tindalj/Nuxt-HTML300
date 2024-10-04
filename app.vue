<script setup>
import { ref, onMounted } from 'vue'

const apiData = ref(null)
const loading = ref(false)
const errorMessage = ref(null)

onMounted(async () => {
  loading.value = true
  try{
    const response = await fetch('https//jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    apiData.valu = data
  } catch (error) {
    console.error('Error:', error)
    errorMessage.value = error.message
  } finally {
    loading.value = false
  }
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then((response) => response.json())
  // .then((data) => {
  //   apiData.value = data
  // })
  // .catch((error) => {
  //   console.error('Error:', error)
  //   loading.value = false
  //   errorMessage.value = error.message
  // })
  // .finally(() => {
  //   console.log('API call completed.')
  // })
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
