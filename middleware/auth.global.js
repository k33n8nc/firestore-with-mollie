// middleware/auth.global.js

import { defineNuxtRouteMiddleware, navigateTo, useState } from '#app'
import { watch } from 'vue'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useState('user')
    const authReady = useState('authReady')

    // Wait until the authentication state is initialized
    if (!authReady.value) {
        await new Promise((resolve) => {
            const unwatch = watch(authReady, (value) => {
                if (value) {
                    unwatch()
                    resolve()
                }
            })
        })
    }

    // Redirect unauthenticated users to the login page
    if (!user.value && to.path !== '/login') {
        return navigateTo('/login')
    }

    // Redirect authenticated users away from the login page
    if (user.value && to.path === '/login') {
        return navigateTo('/')
    }
})