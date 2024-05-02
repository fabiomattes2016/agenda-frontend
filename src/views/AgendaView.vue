<script>
import NavBar from '../components/NavBar.vue'
import HeaderCalendar from '../components/HeaderCalendar.vue'
import CardEvent from '../components/CardEvent.vue'
import CardEmpty from '../components/CardEmpty.vue'

export default {
  components: {
    NavBar,
    HeaderCalendar,
    CardEvent,
    CardEmpty
  }
}
</script>

<template>
  <div>
    <NavBar />
  </div>
  <div>
    <HeaderCalendar />
  </div>
  <main>
    <div class="container cards">
      <CardEmpty />
      <CardEvent />
      <CardEvent />
    </div>
  </main>
</template>

<style>
.cards {
  width: 40% !important;
}
</style>
