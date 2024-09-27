<template>
    <div>
        <router-link to="/korisniciBezStanja">
            <h2>Lista korisnika (bez stanja)</h2>
        </router-link>
        <ul class="user-list-without-state">
            <li v-for="korisnik in korisnici" :key="korisnik.id">{{ korisnik.ime }}</li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            podaci: null,
            greska: null,
            korisnici: [
                { id: 1, ime: 'John Custom' },
                { id: 2, ime: 'Jane Custom' },
            ],
        };
    },
};

</script>
<style>
.user-list-without-state {
    margin-top: 2rem;
    list-style-type: none;
    padding: 0;
}

.user-list-without-state li {
    background-color: #ecf0f1;
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 4px;
}

button {
    background-color: blue;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
}

button:hover {
    background-color: darkblue;
}
</style>