<template>
  <v-navigation-drawer
    v-model="localDrawer"
    app
    width="280"
    elevation="1"
    color="white"
    class="sidebar"
    :permanent="$vuetify.display.mdAndUp"
    floating
    @scroll.passive="handleScroll"
    ref="sidebar"
  >
    <!-- Scroll Up Button -->
    <v-fade-transition>
      <v-btn
        v-show="showScrollUp"
        icon
        size="small"
        class="scroll-btn scroll-up"
        @click="scrollSidebar('up')"
      >
        <ChevronUp class="w-4 h-4" />
      </v-btn>
    </v-fade-transition>
    <!-- Logo Section -->
    <div class="px-4 py-2 d-flex align-center">
      <v-img 
        :src="logo" 
        alt="Woodnork Green Logo"
        contain
        max-height="38"
        max-width="50"
        class="mr-3"
      />
      <div>
        <div class="text-h6 font-weight-bold text-primary" style="font-family: 'Poppins', sans-serif; letter-spacing: 0.5px;">
          Woodnork Green
        </div>
        <div class="text-caption text-medium-emphasis d-flex align-center mt-n1">
          <v-icon size="14" class="mr-1">mdi-shield-check</v-icon>
          <span>Admin Panel</span>
        </div>
      </div>
    </div>
    
    <v-divider class="my-2" />
    
    <!-- Navigation Items -->
    <v-list density="default" nav class="px-2">
      <v-list-subheader class="text-uppercase text-body-2 font-weight-bold text-medium-emphasis px-4 py-2">Main</v-list-subheader>
      
      <v-list-item
        v-for="(item, i) in items"
        :key="'item-' + i"
        :to="item.to"
        :prepend-icon="null"
        rounded="lg"
        class="mb-1"
        :active-class="'bg-primary-lighten-5 text-primary'"
      >
        <template v-slot:prepend>
          <component :is="item.icon" class="mr-3" size="20" />
        </template>
        <v-list-item-title class="text-body-1 font-weight-medium">{{ item.title }}</v-list-item-title>
      </v-list-item>
      
      <v-list-subheader class="text-uppercase text-body-2 font-weight-bold text-medium-emphasis mt-4 px-4 py-2">Settings</v-list-subheader>
      
      <v-list-item
        v-for="(item, i) in settings"
        :key="'setting-' + i"
        :to="item.to"
        :prepend-icon="null"
        rounded="lg"
        class="mb-1"
      >
        <v-list-item-title class="text-body-1">{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    
    <v-spacer />
    
    <!-- Footer -->
    <div class="px-4 py-3 text-center">
      <v-btn
        variant="text"
        color="primary"
        size="small"
        class="text-none mb-2"
        prepend-icon="mdi-brightness-6"
        @click="toggleTheme"
      >
        Toggle Theme
      </v-btn>
      <div class="text-caption text-medium-emphasis">
        v1.0.0 • {{ new Date().getFullYear() }} Woodnork Green
      </div>
    </div>
    <!-- Scroll Down Button -->
    <v-fade-transition>
      <v-btn
        v-show="showScrollDown"
        icon
        size="small"
        class="scroll-btn scroll-down"
        @click="scrollSidebar('down')"
      >
        <ChevronDown class="w-4 h-4" />
      </v-btn>
    </v-fade-transition>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import { useTheme } from 'vuetify'
import { ChevronUp, ChevronDown } from 'lucide-vue-next'
import logo from '@/assets/images/logo.png'
import { 
  LayoutDashboard, BarChart3, Folder, Calendar, MessageSquare, Users, 
  CheckCircle, FileText, PieChart, Settings, Bell, HelpCircle, LogOut 
} from 'lucide-vue-next'

const theme = useTheme()
const props = defineProps({ 
  modelValue: { 
    type: Boolean, 
    default: true 
  } 
})

const emit = defineEmits(['update:modelValue'])

const localDrawer = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v)
})

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  localStorage.setItem('theme', theme.global.name.value)
}

const items = [
  { title: 'Dashboard', icon: LayoutDashboard, to: '/' },
  { title: 'Analytics', icon: BarChart3, to: '/analytics' },
  { title: 'Projects', icon: Folder, to: '/projects' },
  { title: 'Calendar', icon: Calendar, to: '/calendar' },
  { title: 'Messages', icon: MessageSquare, to: '/messages' },
  { title: 'Team', icon: Users, to: '/team' },
  { title: 'Tasks', icon: CheckCircle, to: '/tasks' },
  { title: 'Files', icon: FileText, to: '/files' },
  { title: 'Reports', icon: PieChart, to: '/reports' },
]

const settings = [
  { title: 'Settings', icon: Settings, to: '/settings' },
  { title: 'Notifications', icon: Bell, to: '/notifications' },
  { title: 'Help & Support', icon: HelpCircle, to: '/help' },
  { title: 'Logout', icon: LogOut, to: '/logout' },
]

// Scroll handling
const sidebar = ref(null)
const showScrollUp = ref(false)
const showScrollDown = ref(false)

const checkScroll = () => {
  if (!sidebar.value) return
  const { scrollTop, scrollHeight, clientHeight } = sidebar.value.$el.querySelector('.v-navigation-drawer__content')
  showScrollUp.value = scrollTop > 0
  showScrollDown.value = scrollTop < scrollHeight - clientHeight - 1
}

const handleScroll = (e) => {
  checkScroll()
}

const scrollSidebar = (direction) => {
  if (!sidebar.value) return
  const content = sidebar.value.$el.querySelector('.v-navigation-drawer__content')
  const scrollAmount = 100 // Adjust scroll amount as needed
  
  if (direction === 'up') {
    content.scrollBy({ top: -scrollAmount, behavior: 'smooth' })
  } else {
    content.scrollBy({ top: scrollAmount, behavior: 'smooth' })
  }
}

// Set initial theme and check scroll
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  theme.global.name.value = savedTheme
  
  nextTick(() => {
    checkScroll()
    // Add scroll event listener
    const content = sidebar.value?.$el?.querySelector('.v-navigation-drawer__content')
    if (content) {
      content.addEventListener('scroll', handleScroll)
    }
  })
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');
</style>

<style scoped>
.sidebar {
  border-right: 1px solid rgba(0, 0, 0, 0.05) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  height: 100vh !important;
  overflow: hidden;
}

/* Hide scrollbar but keep functionality */
.v-navigation-drawer__content {
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  height: 100%;
  padding-bottom: 1rem;
}

.v-navigation-drawer__content::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

/* Scroll buttons */
.scroll-btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: rgba(255, 255, 255, 0.9) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  opacity: 0.8;
  transition: opacity 0.2s;
}

.scroll-btn:hover {
  opacity: 1;
}

.scroll-up {
  top: 1rem;
}

.scroll-down {
  bottom: 1rem;
}

.v-list-item--active {
  font-weight: 600 !important;
}

.v-list-subheader {
  opacity: 1 !important;
  letter-spacing: 0.5px;
}

/* Ensure the list takes full height and allows scrolling */
.v-navigation-drawer__content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  padding-bottom: 100px; /* Extra space at bottom for better scrolling */
}

.v-navigation-drawer__content::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

/* Ensure content doesn't get hidden behind fixed sidebar */
:deep(.v-layout) {
  margin-left: 280px; /* Match sidebar width */
  width: calc(100% - 280px);
}

/* Responsive adjustments */
@media (max-width: 1279px) {
  .sidebar {
    transform: translateX(-100%);
  }
  
  .sidebar.v-navigation-drawer--temporary {
    transform: translateX(0);
  }
  
  :deep(.v-layout) {
    margin-left: 0;
    width: 100%;
  }
}
</style>
