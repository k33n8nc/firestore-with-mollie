<template>
  <form @submit.prevent="handleSubmit">
    <label>
      Name:
      <input v-model="name" required />
    </label>
    <label>
      Email:
      <input v-model="email" type="email" required />
    </label>
    <button type="submit">Add Customer</button>
  </form>
</template>

<script setup>
import {ref} from 'vue';

import {useCustomerStore} from '~/stores/CustomerStore';
const customerStore = useCustomerStore();

const name = ref('');
const email = ref('');

const handleSubmit = async () => {
  if (name.value && email.value) {
    await customerStore.addCustomer({name: name.value, email: email.value});
    // Clear the form
    name.value = '';
    email.value = '';
  }
};
</script>