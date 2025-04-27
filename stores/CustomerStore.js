import { collection, getDocs, addDoc } from "firebase/firestore";
import { useNuxtApp } from '#app';

export const useCustomerStore = defineStore('customerStore', {
    state: () => ({
        customers: [],
    }),
    actions: {
        async getCustomers() {
            try {
                // Access the globally provided Firestore instance
                const { $db } = useNuxtApp();
                const customersCollection = collection($db, 'customers');
                const querySnapshot = await getDocs(customersCollection);
                this.customers = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
            } catch (error) {
                console.error("Error fetching customers:", error);
            } finally {
                console.log("Customers fetched:", this.customers);
            }
        },
        async addCustomer(customer) {
            try {
                const { $db } = useNuxtApp();
                const customersCollection = collection($db, 'customers');
                // Use addDoc to let Firestore auto-generate an ID
                const docRef = await addDoc(customersCollection, customer);
                this.customers.push({ id: docRef.id, ...customer });
            } catch (error) {
                console.error("Error adding customer:", error);
            }
        },
    },
});