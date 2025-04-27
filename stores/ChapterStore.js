import { collection, getDocs, addDoc } from "firebase/firestore";
import { useNuxtApp } from '#app';

export const useChapterStore = defineStore('chapterStore', {
    state: () => ({
        chapters: []
    }),
    actions: {
        async getChapters() {
            const { $db } = useNuxtApp();
            const chaptersCollection = collection($db, 'chapters');
            try {
                const querySnapshot = await getDocs(chaptersCollection);
                this.chapters = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
            } catch (error) {
                console.error("Error fetching chapters:", error);
            } finally {
                console.log("Chapters fetched:", this.chapters);
            }
        },
        async addChapter(chapter) {
            const { $db } = useNuxtApp();
            const chaptersCollection = collection($db, 'chapters');
            try {
                const docRef = await addDoc(chaptersCollection, chapter);
                this.chapters.push({ id: docRef.id, ...chapter });
            } catch (error) {
                console.error("Error adding chapter:", error);
            }
        }
    }
});