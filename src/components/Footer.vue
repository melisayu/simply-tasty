<template>
  <footer>
    <div class="social-icons">
      <a>
        <svg>
          <use xlink href="@/assets/images/icons.svg#facebook"></use>
        </svg>
      </a>
      <a>
        <svg>
          <use xlink href="@/assets/images/icons.svg#instagram"></use>
        </svg>
      </a>
      <a>
        <svg>
          <use xlink href="@/assets/images/icons.svg#twitter"></use>
        </svg>
      </a>
    </div>
    <div class="sitemap">
      <router-link v-for="data in sitemap" v-bind:key="data.name" :to="data.url"> {{ data.name }} </router-link>
    </div>
    <div class="brand-wrap">
      <p class="copyright">
        Copyright &copy; 2021. Created by Melisa Yulia Kristina
      </p>
      <router-link class="navbar-brand" to="/">
        <span class="logo"></span>
        <p>
          simply tasty
        </p>
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  title: "footer",
  data() {
    return {
      sitemap: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Categories",
          url: "/categories",
        },
        {
          name: "Random",
          url: "/random",
        },
        {
          name: "About",
          url: "/about",
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

footer {
  background: $banana;

  .social-icons {
    width: 250px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    svg {
      width: 2em;
    }
  }

  .sitemap {
    border-top: 1px solid $main-color;
    padding: 40px 0;
    margin: 0 32px;
    a {
      padding: 24px;
      font-size: 18px;
      text-decoration: underline;
    }
  }

  .brand-wrap {
    display: flex;
    justify-content: space-between;
  }

  .copyright {
    font-size: .5em;
    padding: 0 40px;
    display: flex;
    align-items: center;
    color: $dark-gray;
  }
}

</style>
