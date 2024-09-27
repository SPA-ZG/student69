import { createPinia } from 'pinia';

const pinia = createPinia();

export const useStore = pinia.createStore({
  state: () => ({
    podaci: null,
  }),
  actions: {
    async dohvatiPodatke() {
      try {
        // Simulacija asinkronog dohvata podataka iz backend-a
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.podaci = { message: 'Ovo su podaci iz store-a' };
      } catch (error) {
        console.error('Greška prilikom dohvaćanja podataka:', error);
      }
    },
  },
});
