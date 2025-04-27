<template>
  <div v-if="customer" class="card">
    <!-- Bind the visible prop, and emit an event when the drawer's visibility changes -->
    <Drawer :visible="visible" @update:visible="updateVisible" position="right" class="!w-full md:!w-[32rem] lg:!w-[40rem]">
      <template #header>
        <div class="flex items-center gap-2 text-xl">
          <i class="pi pi-user mr-2 text-xl"></i>
          <span>{{ customer.name }}</span>
        </div>
      </template>
      <div class="flex gap-6 py-2">
        <Card>
          <template #title>ADR Rapport</template>
          <template #content>
            <Button label="Mail versturen" icon="pi pi-envelope" size="small" />
            <small class="block text-gray-500 py-1">Laatst verstuurd op 01-01-2025</small>
          </template>
        </Card>
        <Card>
          <template #title>Water & Sludge</template>
          <template #content>
            <Button label="Mail versturen" icon="pi pi-envelope" size="small" />
            <small class="block text-gray-500 py-1">Laatst verstuurd op 01-01-2025</small>
          </template>
        </Card>
      </div>
<!--      <div class="flex gap-6">-->
<!--        <div class="my-4 bg-gray-100 py-4 px-6">-->
<!--          <h2 class="font-bold text-xl my-2">ADR Rapport</h2>-->
<!--          <Button label="Mail versturen" icon="pi pi-envelope" size="small" />-->
<!--          <small class="block text-gray-500 py-1">Laatst verstuurd op 01-01-2025</small>-->
<!--        </div>-->
<!--        <div class="my-4 bg-gray-100 py-4 px-6">-->
<!--          <h2 class="font-bold text-xl my-2">Water & Sludge</h2>-->
<!--          <Button label="Mail versturen" icon="pi pi-envelope" size="small" />-->
<!--          <small class="block text-gray-500 py-1">Laatst verstuurd op 01-01-2025</small>-->
<!--        </div>-->
<!--      </div>-->
      <DataTable :value="products" stripedRows>
<!--        <Column field="type" header="Type">-->
<!--          <template #body="{ data }">-->
<!--            <Button disabled rounded outlined size="small" :icon="data.type" class="mr-2" severity="contrast"></Button>-->
<!--          </template>-->
<!--        </Column>-->
        <Column field="reg" header="Registratie">
          <template #body="{ data }">
<!--            {{data.reg}}-->
            <Button type="button" :label="data.reg" :icon="data.type" severity="contrast" outlined />
          </template>
        </Column>
        <Column field="date" header="ADR Keuring"></Column>
        <Column field="actions" header="W&S Controle">
          <template #body="{ data }">
<!--            <div class="flex gap-3">-->
<!--              <Button size="medium" icon="pi pi-pencil" severity="secondary"></Button>-->
<!--              <Button size="medium" icon="pi pi-cog" severity="secondary"></Button>-->
<!--            </div>-->
          </template>
        </Column>
      </DataTable>
      <template #footer>
        <div class="flex items-center gap-2">
          <Button label="Bekijken" icon="pi pi-user" class="flex-auto"></Button>
          <Button @click="updateVisible();" label="Sluiten" icon="pi pi-sign-out" class="flex-auto" severity="secondary"></Button>
        </div>
      </template>
    </Drawer>
  </div>
</template>

<script setup>
import {ref} from "vue";

const products = ref([
  { reg: 'ADR001', type: 'pi pi-truck', date: '01-05-2024', actions: 'Edit' },
  { reg: 'ADR001', type: 'pi pi-warehouse', date: '22-08-2024', actions: 'Edit' },
  { reg: 'ADR001', type: 'pi pi-truck', date: '15-12-2024', actions: 'Edit' },
  { reg: 'ADR001', type: 'pi pi-truck', date: '03-02-2025', actions: 'Edit' }
]);

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },
  customer: {
    type: Object,
    default: null
  }
});

// Emit an event to the parent when the visibility of the drawer changes
const emit = defineEmits(['update:visible']);
const updateVisible = (newValue) => {
  emit('update:visible', newValue);
};
</script>