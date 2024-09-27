<template>
    <div id="app">
      <div class="content">
        <h1>Dobrodošli na početnu stranicu</h1>

        <UserListWithState v-if="korisniciSaStanjem.length > 0" />
        <UserListWithoutState v-if="korisniciBezStanja.length > 0" :korisnici="korisniciBezStanja" />
  
        <button @click="dohvatiPodatke">Dohvati sve podatke</button>
  
        <p v-if="podaci && podaci.length > 0">{{ podaci.message }}</p>
        <p v-else-if="podaci && podaci.length === 0">Nema korisnika u listi.</p>
        <p v-if="greska">Greška prilikom dohvaćanja podataka: {{ greska }}</p>
        
      </div>
  </div>
  </template>
  
  <script>
  import UserListWithoutState from './UserListWithoutState.vue';
  import UserListWithState from './UserListWithState.vue';
  
  export default {
    components: {
      UserListWithoutState,
      UserListWithState  },
    data() {
      return {
        naslov1: 'Komponenta bez stanja',
        naslov2: 'Komponenta sa stanjem',
        korisniciBezStanja: [],
        korisniciSaStanjem: [],
        podaci: null,
        greska: null,
        isUnknownRoute: false, 
        vlastitiStorage: {
          korisnici: [
            { id: 1, ime: 'John Custom' },
            { id: 2, ime: 'Jane Custom' },
          ],
        },
      };
    },
    methods: {
      handleKorisnikDodan(noviKorisnici) {
      this.vlastitiStorage.korisnici = noviKorisnici;
    },
      dohvatiPodatke() {
        // Provjeri trenutnu rutu
        const trenutnaRuta = this.$route.path;
  
        // Simuliraj asinkroni poziv
        setTimeout(() => {
          if (trenutnaRuta === '/korisniciStanje') {
            this.korisniciBezStanja = [];
            this.korisniciSaStanjem = this.vlastitiStorage.korisnici;
          } else if (trenutnaRuta === '/korisniciBezStanja') {
            this.korisniciBezStanja = this.vlastitiStorage.korisnici;
            this.korisniciSaStanjem = [];
          } else if (trenutnaRuta === '/') {
            this.korisniciBezStanja = this.vlastitiStorage.korisnici;
            this.korisniciSaStanjem = this.vlastitiStorage.korisnici;
          } 
  
          this.podaci = this.vlastitiStorage.korisnici;
          this.greska = null; // Resetiraj greska ako je prethodno postavljena
        }, 1000); // Simuliraj kašnjenje od 1 sekunde
      },
    },
  };
  </script>
  
  <style scoped>
  #app {
    font-family: 'Arial', sans-serif;
    text-align: center;
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    /* Boja pozadine */
  }
  
  .content {
    max-width: 600px;
    width: 100%;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #3498db;
  }
  
  button {
    background-color: #2ecc71;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  button:hover {
    background-color: #27ae60;
  }
  
  p {
    margin-top: 1rem;
    color: #333;
  }
  </style>
  