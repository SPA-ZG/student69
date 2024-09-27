Šesti projekt
1. interpolation/one-way binding -> podaci iz modela 'korisnici' se prikazuju u templateu
2. two-way binding -> za two-way binding koristi, v-model u inputu kako bi vezao noviKorisnik s unosom korisnika
3. methods -> koristim metode poput 'dohvatiPodatke', 'dodajKorisnika', 'handleKorisnikDodan'
4. nemam computed properties
5. scoped style postoji
6. mounted hook (implicitno, jer koristi createApp i mount), koji se izvršava nakon što se instanca komponente prvi put stvori i poveže
7. routing -> router.js 
   bookmarkable stranice -> router konfiguriran je tako da podržava bookmarkable stranice, npr. /korisniciBezStanja i /korisniciStanje
   ima komponentu notfound kad se pojavi ruta koja ne postoji
8. komponenta bez stanja (props): UserListWithoutState koristi properties za prikazivanje podataka
   komponenta sa stanjem (emitiranje događaja): UserListWithState emitira događaj kada se korisnik doda ($emit('korisnik-dodan',    this.korisnici)).
9. emitiranje dogadanja opisano u prošloj točki
10. Store(Pinia) -> koristim pinia state kao managment riješenje
11. asinkroni dohvat podataka u funkciji dohvati podatke iz vlastitog storage
