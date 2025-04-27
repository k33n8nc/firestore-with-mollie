<template>
  <div class="container">
    <div v-for="customer in customerStore.customers">
      <CustomerCardNew :customer="customer"/>
    </div>
    <CustomerForm />
  </div>
</template>

<script setup>
import { useCustomerStore } from '~/stores/CustomerStore';
const customerStore = useCustomerStore();

onMounted(async () => {
  await customerStore.getCustomers();
});

</script>
