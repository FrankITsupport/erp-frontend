<template>
  <v-app-bar
    app
    color="white"
    flat
    elevation="0"
    class="border-b"
    height="70"
  >
    <!-- Left Section -->
    <div class="d-flex align-center">
      <v-btn
        icon
        variant="text"
        @click="$emit('toggle-drawer')"
        class="mr-2"
        size="small"
        color="primary"
        :ripple="false"
      >
        <Menu class="w-5 h-5 text-medium-emphasis" />
      </v-btn>
      
      <!-- Breadcrumbs -->
      <v-breadcrumbs :items="breadcrumbs" class="pa-0">
        <template v-slot:divider>
          <ChevronRight class="w-4 h-4 text-medium-emphasis" />
        </template>
      </v-breadcrumbs>
    </div>

    <v-spacer />

    <!-- Right Section -->
    <div class="d-flex align-center">
      <!-- Search Bar -->
      <v-text-field
        v-model="search"
        placeholder="Search..."
        variant="outlined"
        density="compact"
        hide-details
        class="mr-4"
        style="max-width: 240px;"
      >
        <template v-slot:prepend-inner>
          <Search class="w-4 h-4 text-medium-emphasis mr-2" />
        </template>
      </v-text-field>

      <!-- Notifications -->
      <v-menu offset-y>
        <template v-slot:activator="{ props: menuProps }">
          <v-btn
            v-bind="menuProps"
            icon
            variant="text"
            class="mx-1"
          >
            <v-badge
              color="error"
              :content="notifications.length"
              :model-value="notifications.length > 0"
              dot
            >
              <Bell class="w-5 h-5" />
            </v-badge>
          </v-btn>
        </template>
        <v-card width="360" max-height="400">
          <v-card-title class="d-flex align-center">
            <span class="text-h6">Notifications</span>
            <v-spacer />
            <v-btn
              variant="text"
              size="small"
              color="primary"
              @click="markAllAsRead"
            >
              Mark all as read
            </v-btn>
          </v-card-title>
          <v-divider />
          <v-list>
            <v-list-item
              v-for="(notification, i) in notifications"
              :key="i"
              :title="notification.title"
              :subtitle="notification.time"
              :prepend-avatar="notification.avatar"
              :class="{ 'bg-grey-lighten-4': notification.unread }"
              @click="handleNotification(notification)"
            >
              <template v-slot:prepend>
                <v-avatar color="primary" size="40" class="flex items-center justify-center">
                  <component :is="notification.icon" class="w-5 h-5 text-white" />
                </v-avatar>
              </template>
            </v-list-item>
            <v-list-item v-if="!notifications.length">
              <v-list-item-title class="text-center text-medium-emphasis">
                No new notifications
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <!-- User Menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ props: menuProps }">
          <v-btn
            v-bind="menuProps"
            variant="text"
            class="ml-2"
          >
            <v-avatar size="36" class="mr-2">
              <v-img src="https://i.pravatar.cc/150?img=32" alt="User" />
            </v-avatar>
            <span class="text-body-1 font-weight-medium d-none d-sm-flex">John Doe</span>
            <ChevronDown class="w-5 h-5 ml-1" />
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in userMenu"
            :key="i"
            :title="item.title"
            :to="item.to"
            link
          >
            <template v-slot:prepend>
              <component :is="item.icon" class="w-5 h-5 mr-2" />
            </template>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, Mail, UserPlus, Bell, ChevronRight, ChevronDown, Search, User, Settings as SettingsIcon, LogOut } from 'lucide-vue-next'

const route = useRoute()
const search = ref('')

// Mock notifications
const notifications = ref([
    { 
      title: 'New message from Sarah', 
      time: '5 min ago', 
      icon: Mail,
      unread: true 
    },
    { 
      title: 'New user registered', 
      time: '1 hour ago', 
      icon: UserPlus,
      unread: true 
    },
    { 
      title: 'New update available', 
      time: '2 days ago', 
      icon: Bell,
      unread: false 
    },
])

const userMenu = [
  { title: 'Profile', icon: User, to: '/profile' },
  { title: 'Settings', icon: SettingsIcon, to: '/settings' },
  { title: 'Logout', icon: LogOut, to: '/logout' },
]

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(Boolean)
  const breadcrumbs = pathArray.map((item, index) => ({
    title: item.charAt(0).toUpperCase() + item.slice(1),
    disabled: index === pathArray.length - 1,
    to: '/' + pathArray.slice(0, index + 1).join('/')
  }))
  
  // Add home if not present
  if (breadcrumbs.length === 0 || breadcrumbs[0].title !== 'Dashboard') {
    breadcrumbs.unshift({
      title: 'Dashboard',
      disabled: route.path === '/',
      to: '/'
    })
  }
  
  return breadcrumbs
})

const markAllAsRead = () => {
  notifications.value = notifications.value.map(n => ({ ...n, unread: false }))
}

const handleNotification = (notification) => {
  // Handle notification click
  notification.unread = false
  // Add navigation logic here if needed
}
</script>

<style scoped>
.v-app-bar {
  border-color: rgba(0, 0, 0, 0.05) !important;
}

.v-breadcrumbs :deep(.v-breadcrumbs-item) {
  opacity: 1;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.875rem;
}

.v-breadcrumbs :deep(.v-breadcrumbs-item--disabled) {
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
}

.v-list-item--active {
  background: rgba(var(--v-theme-primary), 0.08);
}
</style>
