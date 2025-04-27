<template>
  <div>
    {{ customer }}
  </div>
</template>

<script setup>
  const props = defineProps({
    customer: {
      type: Object,
      default: 'Default Value'
    }
  })
</script>