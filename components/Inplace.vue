<template>
  <Inplace closable closeIcon="pi pi-truck">
    <template #display>
            <span class="inline-flex items-center gap-2">
                <span class="pi pi-image"></span>
                <span>View Photo</span>
            </span>
    </template>
    <template #content="{ closeCallback }">
      <img class="w-full sm:w-80 shadow-md" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature8.jpg" @click="closeCallback" />
    </template>
  </Inplace>
</template>
<script setup lang="ts">
</script>