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
      <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#frmSalas">
        <i class="fa-solid fa-door-closed"></i>
        Cadastrar Salas
      </button>
    </div>

    <div class="col-9"></div>
  </header>

  <div
    class="modal fade"
    id="frmSalas"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Cadastrar Sala</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row mb-3">
              <label for="nome_sala" class="col-sm-2 col-form-label">Nome</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="nome_sala" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="descricao_sala" class="col-sm-2 col-form-label">Descrição</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="descricao_sala" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Salvar</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
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

.dt-paging-button {
  font-size: 12px;
}

.dt-info {
  font-size: 12px;
}
</style>
