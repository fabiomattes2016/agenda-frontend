<script>
import TitleEvent from '../components/TitleEvent.vue'

export default {
  components: {
    TitleEvent
  }
}
</script>

<template>
  <div class="eventos-agenda">
    <TitleEvent />
    <div class="card shadow-sm p-3 mb-5 bg-body rounded">
      <div class="row d-flex justify-content-center text-center">
        <span
          >Você não tem eventos hoje! Crie um novo <router-link href="#">aqui</router-link></span
        >
      </div>
    </div>
  </div>
</template>

<style>
.card {
  margin-top: 15px;
  font-size: 12px;
}
</style>
