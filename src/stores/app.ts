import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isMenuOpen: false,
  }),
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
})
