<template>
  <v-app :theme="theme">
    <Sidebar :model-value="drawer" @update:model-value="val => drawer = val" />
    <v-main class="bg-grey-lighten-4">
      <Topbar @toggle-drawer="drawer = !drawer" />
      <v-container fluid class="py-6 px-8">
        <v-fade-transition mode="out-in">
          <router-view v-slot="{ Component }">
            <v-slide-x-transition mode="out-in">
              <component :is="Component" />
            </v-slide-x-transition>
          </router-view>
        </v-fade-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'

const drawer = ref(true)
const theme = ref('light')
</script>

<style>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Smooth transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
