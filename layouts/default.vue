<template>
  <div class="container mx-auto pt-2 px-2">
    <Menubar :model="items">

      <template #item="{ item, props, hasSubmenu, root }">
        <NuxtLink :to="item.href" v-ripple class="flex items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span class="">{{ item.label }}</span>
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
          <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
        </NuxtLink>
      </template>

      <template #end>
        <div class="flex items-center gap-2">
          <Button :icon="darkModeOn ? 'pi pi-sun' : 'pi pi-moon'" class="mr-2" severity="secondary" @click="toggleDarkMode()" />
<!--          <Button icon="pi pi-user" class="mr-2" severity="secondary" />-->
          <Button icon="pi pi-user" class="mr-2" severity="secondary" @click="toggle" />

          <Popover ref="op">
            <div class="flex flex-col gap-4">
              <div>
                <span class="font-medium block mb-2">Paul van Dam</span>
                <ul class="list-none p-0 m-0 flex flex-col">
                  <li><a href="#">Profiel</a></li>
<!--                  <li><a href="#">Uitloggen</a></li>-->
                  <Logout />
                </ul>
              </div>
            </div>
          </Popover>
        </div>
      </template>
    </Menubar>
  </div>

  <div class="container mx-auto py-4 px-2">
    <slot />
  </div>
</template>

<style>
@import 'primeicons/primeicons.css';
</style>

<script setup lang="ts">
import { ref } from 'vue';

const darkModeOn = ref(false);
const toggleDarkMode = () => {
  darkModeOn.value = !darkModeOn.value;
  document.documentElement.classList.toggle('my-app-dark');
}

const items = ref([
  {
    label: 'Klanten',
    icon: 'pi pi-users',
    href: '/'
  },
  {
    label: 'Tanks',
    icon: 'pi pi-truck',
    href: '/tanks'
  },
  {
    label: 'Facturen',
    icon: 'pi pi-envelope',
    href: '/facturen'
  }
]);

const op = ref();
const toggle = (popover: Boolean) => {
  op.value.toggle(popover);
}


</script>