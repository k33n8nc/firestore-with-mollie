<template>
  <div>
    <div v-if="!authReady">
      <!-- Loading indicator -->
      <p>Loading...</p>
    </div>
    <div v-else>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
const authReady = useState('authReady')
</script>