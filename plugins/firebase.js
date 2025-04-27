// plugins/firebase.js
import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyAWOcRPmDRkOkrxZP-i2VDitFXwbTLMtFw",
        authDomain: "cybernetix-6aeca.firebaseapp.com",
        projectId: "cybernetix-6aeca",
        storageBucket: "cybernetix-6aeca.firebasestorage.app",
        messagingSenderId: "205189406539",
        appId: "1:205189406539:web:73a5a0fb1c4fcb53c7d2ce"
    }
    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const db = getFirestore(app)

    // Provide Firebase services globally
    nuxtApp.provide('auth', auth)
    nuxtApp.provide('db', db)

    // Initialize global user state
    const user = useState('user', () => null)
    const authReady = useState('authReady', () => false)

    // Set up the authentication state observer
    onAuthStateChanged(auth, (firebaseUser) => {
        user.value = firebaseUser
        authReady.value = true
    })
})