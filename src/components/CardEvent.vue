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
      <div class="row">
        <div class="col-2">
          <div class="row">
            <div class="col-2 separator text-center">
              <span class="separator-color">&nbsp;</span>
            </div>
            <div class="col-8">
              <div class="row hora">10:00</div>
              <div class="row duracao">1 hr</div>
            </div>
          </div>
        </div>
        <div class="col-10">
          <h6>Compromisso de Teste</h6>
          <div>
            <i class="fa-solid fa-location-dot"></i>&nbsp;
            <span class="description">Jandaia do Sul/PR</span>

            &nbsp;&nbsp;
            <i class="fa-regular fa-building"></i>&nbsp;
            <span class="description">Agência de Testes</span>

            &nbsp;&nbsp;
            <i class="fa-solid fa-tags"></i>&nbsp;
            <span class="description">Auditório</span>
          </div>

          &nbsp;
          <div class="d-flex justify-content-end">
            <button class="btn btn-sm btn-default participantes">
              <i class="fa-regular fa-address-book"></i> Participantes</button
            >&nbsp;
            <button class="btn btn-sm btn-default participantes">
              <i class="fa-regular fa-pen-to-square"></i> Editar evento</button
            >&nbsp;
            <button class="btn btn-sm btn-danger">
              <i class="fa-regular fa-rectangle-xmark"></i> Cancelar evento
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  margin-top: 15px;
}

.eventos-agenda {
  margin-top: 15px;
  margin-bottom: 15px;
}

.title {
  font-weight: bold;
  color: #28a745;
}

.card-title {
  padding: 8px;
}

.separator {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

.separator-color {
  background-color: #28a745;
  height: 100%;
  width: 5px;
  border-radius: 4px;
}

.hora {
  font-size: 14px;
  font-weight: 500;
}

.duracao {
  font-size: 12px;
}

.description {
  font-size: 12px;
}

.btn-danger {
  font-size: 12px;
}

.participantes {
  font-size: 12px;
}
</style>
