<script>
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import $ from 'jquery'

export default {
  methods: {
    destroyTables() {
      $('#locais').DataTable().destroy()
      $('#salas').DataTable().destroy()
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="fa-solid fa-calendar-days icon"></i>
        Cadastrar Novo Local
      </a>
      <div class="buttons">
        <router-link to="/new-local" class="btn btn-success"
          ><i class="fa-regular fa-floppy-disk"></i> Salvar</router-link
        >
        <router-link to="/" class="btn btn-danger" @click="destroyTables()"
          ><i class="fa-regular fa-rectangle-xmark"></i> Cancelar</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style>
.navbar-brand {
  font-size: 15px;
  font-weight: bold;
}

.btn-success {
  background-color: #28a745;
  font-size: 13px;
  margin: 2px;
  border: none;
  font-weight: bold;
}

.btn-danger {
  font-size: 13px;
  margin: 2px;
  border: none;
  font-weight: bold;
}

.icon {
  margin: 5px;
  background-color: #28a745;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
}
</style>
