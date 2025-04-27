<template>
  <div class="p-8">
    <h1 class="text-2xl mb-4">Our Products</h1>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div
          v-for="product in products"
          :key="product.id"
          class="border rounded p-4 hover:shadow cursor-pointer"
          @click="buy(product)"
      >
        <h2 class="text-xl">{{ product.name }}</h2>
        <p class="mt-2">€{{ product.price }}</p>
        <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Buy Now
        </button>
      </div>
    </div>

    <div class="card">
      <Timeline :value="events">
        <template #content="slotProps">
          {{ slotProps.item.status }}
        </template>
      </Timeline>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const products = [
  { id: 1, name: '', price: '19.99' },
  { id: 2, name: 'Mug',     price: '9.50' },
  { id: 3, name: 'Sticker', price: '2.00' }
]

async function buy(product: typeof products[0]) {
  try {
    const { checkoutUrl }: { checkoutUrl: string } = await $fetch('/api/payment', {
      method: 'POST',
      body: {
        description: product.name,
        amount: product.price
      }
    })
    // Redirect user to Mollie checkout
    window.location.href = checkoutUrl
  } catch (e) {
    console.error('Payment creation failed', e)
    alert('Sorry, something went wrong.')
  }
}
</script>

<style>
/* add any styling you like */
</style>