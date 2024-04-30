<script></script>

<template>
  <nav class="navbar navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="fa-solid fa-calendar-days icon"></i>
        Agenda de Compromissos
      </a>
      <div class="buttons">
        <a href="#" class="btn btn-success"><i class="fa-solid fa-plus"></i> Novo local</a>
        <a href="#" class="btn btn-success"><i class="fa-solid fa-plus"></i> Novo evento</a>
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

.icon {
  margin: 5px;
  background-color: #28a745;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
}
</style>
