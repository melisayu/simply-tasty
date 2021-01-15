<template>
  <header>
    <router-link class="navbar-brand" to="/">
      <span></span>
      simply tasty
    </router-link>
    <nav>
      <ul>
        <li><a>Explore</a></li>
        <li><a>Recipes</a></li>
        <li class="bg-yellow"><a>About</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  title: "Header",
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

a {
  text-decoration: none;
  color: black;
}

ul {
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  font-size: 20px;
  
  li {
    padding: 10px 30px;
  }
  .bg-yellow {
    background: $main-color;
    border-radius: 4px;
  }
}

header {
  display: flex;
}

.navbar-brand {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

span {
  background: $main-color;
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  right: -25px;
  z-index: -1;
}

nav {
  width: 80%;
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
