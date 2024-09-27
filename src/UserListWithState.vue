<template>
    <div>
        <router-link to="/korisniciStanje">
        <h2>Lista korisnika (sa stanjem)</h2>
      </router-link>
      <ul class="user-list-with-state"> 
        <li v-for="korisnik in korisnici" :key="korisnik.id">{{ korisnik.ime }}</li>
      </ul>
      <input class="unos-korisnika" v-model="noviKorisnik" placeholder="Unesite ime korisnika" />
      <button class="dodaj-korisnika" @click="dodajKorisnika">Dodaj korisnika</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        korisnici: [
          { id: 1, ime: 'John Doe' },
          { id: 2, ime: 'Jane Doe' },
        ],
        noviKorisnik: '',
      };
    },
    methods: {
      dodajKorisnika() {
        if (this.noviKorisnik.trim() !== '') {
          const noviId = this.korisnici.length + 1;
          this.korisnici.push({ id: noviId, ime: this.noviKorisnik });
          this.noviKorisnik = '';
          this.$emit('korisnik-dodan', this.korisnici);
          console.log(this.korisnici)
        }
      },
    },
  };
  </script>
  <style>
  .dodaj-korisnika {
    background-color: #3498db;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
    border-radius: 4px;
  }

  .dodaj-korisnika:hover {
    background-color: #2980b9;
  }

  .user-list-with-state {
    margin-top: 2rem;
    list-style-type: none;
    padding: 0;
  }

  .user-list-with-state li {
    background-color: #3498db;
    color: #fff;
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 4px;
  }
  
  .unos-korisnika {
    padding: 0.5rem;
    margin-top: 1rem;
    border: 1px solid #3498db;
    border-radius: 4px;
    font-size: 1rem;
  }
</style>