<script>
let dataAtual = new Date()

let monthNameLong = dataAtual.toLocaleString('pt-BR', { month: 'long' })

let ano = dataAtual.getFullYear()
let dataFormatada = `${monthNameLong} de ${ano}`

export default {
  data: () => {
    return {
      dataFormatada: dataFormatada,
      dataAtual: dataAtual
    }
  },
  methods: {}
}
</script>

<template>
  <header class="calendar-header">
    <div class="col-3">
      <button class="btn btn-default today">
        <i class="fa-regular fa-calendar-check"></i>&nbsp;&nbsp; Hoje
      </button>
      <button class="btn btn-default">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="btn btn-default">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      <button class="btn btn-default date">
        {{ dataFormatada }}
      </button>
    </div>

    <div class="col-9">
      <div class="float-end view">
        <select class="form-select" aria-label="Select view">
          <option value="1">Dia</option>
          <option value="2">Semana</option>
          <option value="3" selected>Agenda</option>
        </select>
      </div>
    </div>
  </header>
</template>

<style>
.calendar-header {
  border-top: 1px solid rgb(219, 219, 219);
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f8f9fa;
}

.today {
  margin-right: 15px;
  margin-left: 15px;
  font-size: 15px;
  line-height: 14px;
}

.date {
  font-weight: bold;
}

.view {
  margin-right: 5px;
}

.form-select {
  background-color: #f8f9fa;
  border: none;
  font-size: 15px !important;
}
</style>
