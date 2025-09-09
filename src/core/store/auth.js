import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import http from '@/core/api/http';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);
  const isAdmin = computed(() => user.value?.role === 'admin');

  // Mock user data
  const mockUser = {
    id: 1,
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    avatar: 'https://i.pravatar.cc/150?img=32',
  };

  async function login(credentials) {
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // In a real app, this would be an actual API call:
      // const { data } = await http.post('/auth/login', credentials);
      
      // Mock successful login
      const token = 'mock-jwt-token';
      localStorage.setItem('auth_token', token);
      user.value = mockUser;
      
      // Redirect based on role
      const redirectTo = user.value.role === 'admin' ? '/admin/dashboard' : '/dashboard';
      await router.push(redirectTo);
      
      return { success: true };
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, message: 'Invalid credentials' };
    }
  }

  async function logout() {
    // In a real app, you might want to call your logout API
    // await http.post('/auth/logout');
    
    // Clear auth state
    user.value = null;
    localStorage.removeItem('auth_token');
    router.push('/login');
  }

  async function checkAuth() {
    const token = localStorage.getItem('auth_token');
    if (token && !user.value) {
      try {
        // In a real app, verify token with backend
        // const { data } = await http.get('/auth/me');
        user.value = mockUser;
      } catch (error) {
        console.error('Auth check failed:', error);
        logout();
      }
    }
    return isAuthenticated.value;
  }

  return {
    user,
    isAuthenticated,
    isAdmin,
    login,
    logout,
    checkAuth,
  };
});
