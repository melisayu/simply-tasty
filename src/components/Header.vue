<template>
  <header>
    <router-link class="navbar-brand" to="/">
      <span class="logo"></span>
      <p>
        simply tasty
      </p>
    </router-link>
    <nav>
      <ul>
        <li><a>Home</a></li>
        <li><a>Categories</a></li>
        <li><a>Random</a></li>
        <li class="bg-yellow"><a>About</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  title: "header",
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

a {
  text-decoration: none;
  color: black;
}

header {
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 80px;
  background: $gray;
  z-index: 1;
}

nav {
  width: 80%;
  ul {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    .bg-yellow {
      background: $main-color;
    }
    .bg-yellow a {
      color: white;
    }
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 48px;
  }
}

@media (max-width: 768px) {
  .navbar-brand {
    width: 60%;
    position: relative;
    right: 60px;
    font-size: 18px;
  }
}

</style>
