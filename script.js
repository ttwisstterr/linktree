document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      dataLinks: []
    },
    mounted() {
      this.loadLinks();
    },
    methods: {
      async loadLinks() {
        try {
          const response = await fetch('mylink.json');
          this.dataLinks = await response.json();
        } catch (error) {
          console.error('Error loading links:', error);
        }
      }
    }
  });
});
