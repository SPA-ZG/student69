<template>
  <div>
    <h1>404 - Stranica nije pronađena</h1>
    <p>Žao nam je, ali tražena stranica nije pronađena.</p>
    <router-link to="/">Povratak na početnu stranicu</router-link>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
  h1 {
    color: red;
  }

  p {
    color: #333;
  }

  router-link {
    margin-top: 20px;
    display: inline-block;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
