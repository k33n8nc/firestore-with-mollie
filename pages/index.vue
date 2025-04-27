<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <!-- Loop through the customers and render CustomerCard for each -->
      <CustomerCard
          v-for="chapter in chapters"
          :key="chapter.id"
          :chapter="chapter"
          @openDrawer="openDrawer(chapter)"
      />
    </div>
    <!-- Drawer for customer-specific information -->
    <DrawerTable :visible="visibleRight" :chapter="selectedChapter" @update:visible="visibleRight = $event" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useChapterStore } from '~/stores/ChapterStore';
import { storeToRefs } from 'pinia';

const chapterStore = useChapterStore();
const { chapters } = storeToRefs(chapterStore);

onMounted(async () => {
  await chapterStore.getChapters();
});

const visibleRight = ref(false);
const selectedChapter = ref(null);

const openDrawer = (chapter) => {
  selectedChapter.value = chapter;
  visibleRight.value = true;
};
</script>