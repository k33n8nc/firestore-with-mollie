<template>
    <form @submit.prevent="onLogin">
      <Card>
          <template #title>
            PVD Administratie
          </template>
          <template #subtitle>
            Login met e-mailadres en wachtwoord
          </template>
          <template #content>
            <IconField class="mb-2 mt-6">
              <InputText v-model="username" type="email" variant="filled" placeholder="e-mailadres" class="w-full"/>
              <InputIcon class="pi pi-user" />
            </IconField>

            <IconField>
              <InputText v-model="password" type="password" variant="filled" placeholder="wachtwoord" class="w-full"/>
              <InputIcon class="pi pi-lock" />
            </IconField>

            <div class="flex justify-between text-xs">
              <a href="#" class="underline mt-3">Wachtwoord vergeten?</a>
            </div>
          </template>
          <template #footer>
            <div class="flex">
              <Button label="Login" type="submit" class="w-full mt-4"/>
            </div>
          </template>
      </Card>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useNuxtApp } from '#app'
import { signInWithEmailAndPassword } from 'firebase/auth'

const username = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()
const { $auth } = useNuxtApp()
const save = ref(false);

const onLogin = async () => {
  try {
    await signInWithEmailAndPassword($auth, username.value, password.value)
    router.push('/')
  } catch (err) {
    error.value = err.message
  }
}

definePageMeta({
  layout: 'login'
})

</script>