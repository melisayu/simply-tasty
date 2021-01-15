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

header {
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: $gray;
  z-index: 1;
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
