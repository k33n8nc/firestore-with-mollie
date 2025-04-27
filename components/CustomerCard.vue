<template>
  <Card style="overflow: hidden">
    <template #title>
      <div class="text-sm">
        <h1 class="font-bold">
          {{ chapter.chapter }}. {{ chapter.name }}
        </h1>
        <p class="py-2">{{ chapter.summary }}</p>
        <ul class="list-inside list-disc">
          <li v-for="goal in chapter.goals">{{goal}}</li>
        </ul>
      </div>
    </template>
    <template #subtitle>
      <p>
        <i class="pi pi-book mr-1"></i>
        {{ chapter.pages }}
      </p>
      <p>
        <i class="pi pi-calendar-clock mr-1"></i>
        <Badge :value="`${chapter.pages}`" severity="danger"></Badge>
      </p>
    </template>
    <template #content>

    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <Button label="nog x dagen" icon="pi pi-calendar-clock" severity="secondary" outlined class="" />
        <Button label="x tanks" icon="pi pi-truck" severity="secondary" outlined class="min-w-16" />
<!--        <Button label="11-11-1111" icon="pi pi-envelope" severity="danger" outlined />-->
        <Button
            label="Bekijken"
            severity="primary"
            icon="pi pi-user"
            @click="$emit('openDrawer')"
        />
      </div>
    </template>
  </Card>
</template>

<script setup>
const props = defineProps({
  chapter: {
    type: Object,
    required: true
  }
});
</script>