<template>
  <span @click="logout" class="cursor-pointer">Uitloggen</span>
</template>

<script setup>
import { useNuxtApp } from '#app'
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const { $auth } = useNuxtApp()
const router = useRouter()

const logout = async () => {
  await signOut($auth)
  await router.push('/login')
}
</script>