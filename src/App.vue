<template>
  <div id="app">
    <nav class="c-nav">
      <ul class="c-nav-list">
        <li class="c-nav-list-item">
          Home
        </li>
        <li class="c-nav-list-item">
          Contact
        </li>
      </ul>
    </nav>

    <h1>
      Eurosong-festival
    </h1>

    <div class="c-feedback warning">
      Er is iets fout gelopen
    </div>

    <div class="c-feedback error">
      Kapot!
    </div>

    <div class="c-feedback success">
      Het werkt
    </div>
  </div>
</template>

<script>
// import styling
import style from './scss/style.scss';

export default {
  name: 'App'  
}
</script>