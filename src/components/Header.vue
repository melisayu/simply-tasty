<template>
  <header>
    <router-link class="navbar-brand" to="/">
      <span class="logo"></span>
      <p>
        simply tasty
      </p>
    </router-link>
    <nav>
      <input type="checkbox" id="button">
      <label for="button" onclick></label>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/categories">Categories</router-link></li>
        <li><router-link to="/random">Random</router-link></li>
        <li class="bg-yellow"><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})

export default class Header extends Vue {
  name = "header"
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

input[type=checkbox] {
  position: absolute;
  top: -9999px;
  left: -9999px;
}

label {
  display:none;
  cursor: pointer;
  user-select:none;
}

/* Dropdown Menu */
nav {
  position: absolute;
  width: 100%;
  right: 0;

  a,
  label {
    color: $dark-gray;
    text-decoration:none;
    font: 1.4em sans-serif;
    transition:color .3s ease-in-out;
  }

  ul {
    padding: 0;
    width:100%;
    display: flex;
    margin: 0;
    height: 80px;
    justify-content: flex-end;
    font-size: 20px;

    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 48px;

      &:hover {
        background-color: $banana;
        color: $dark-gray;
      }
    }

    .bg-yellow {
      background: $main-color;
    }
    .bg-yellow a {
      color: white;
    }
    .bg-yellow:hover a {
      color: $dark-gray;
    }
  }
}

/* Responsiveness for small screen (ipad and mobile) */
@media (max-width: 768px) {
  header {
    justify-content: space-between;
  }

  .navbar-brand {
    width: auto !important;
    font-size: 18px;
    position: absolute;
  }

  nav {
    width: unset;

    ul {
      display: none;
      height: 100%;
    }

    label {
      position: relative;
      display: block;
      width: 100%;
      font-size: 1.5em;
      margin: 0;
    }

    label:after {
      position: absolute;
      right: .5em;
      top: 0.3em;
      content: "\2261";
      font-size: 1.8em;
      color: $main-color;
    }

    input[type=checkbox]:checked ~ label:after {
      color: $main-color;
    }

    input[type=checkbox]:checked ~ ul {
      display: block;
      position: relative;
      top: 80px;
      background: $gray;
      width: 100vw;

    input[type=checkbox]:checked ~ ul > li {
        width: 100%;
        opacity: .8;
        text-align: left;
        padding: 16px 0;
      }
    }
  }
}

</style>
