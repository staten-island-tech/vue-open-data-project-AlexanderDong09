<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="theres Lead in your Blood but probably not as much as these kids" />

      <nav>
        <RouterLink to="/">cards</RouterLink>
        <RouterLink to="/homeviewbutwithachartnow"
          >come one come all take a gander at this donut chart that wonderfully displays the exact
          same data as the homepage
        </RouterLink>
        <RouterLink to="/leadlevelsfilter"
          >want lead? we got lead. we got so much lead. unhealthy levels of lead, even.</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  top: 0;
  left: auto;
  right: a;
  width: 100%;
  z-index: 1000;
  border-bottom: 2px solid var(--color-border);
}

.wrapper {
  display: flex;
  flex-direction: column; /* Always vertical */
  align-items: center;
  text-align: center;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 0.5rem;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
