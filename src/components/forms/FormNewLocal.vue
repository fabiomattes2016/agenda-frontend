<script>
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import $ from 'jquery'

export default {
  mounted() {
    $('#salas').DataTable({
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json'
      }
    })
  }
}
</script>

<template>
  <form>
    <input type="hidden" name="id_local" id="id_local" />

    <div class="row mb-3">
      <label for="cod_cooperativa" class="col-sm-2 col-form-label">Cód. Cooperativa</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="cod_cooperativa" />
      </div>
    </div>

    <div class="row mb-3">
      <label for="cod_agencia" class="col-sm-2 col-form-label">Cód. Agência</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="cod_agencia" />
      </div>
    </div>

    <div class="row mb-3">
      <label for="cod_agencia" class="col-sm-2 col-form-label">Nome</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="cod_agencia" />
      </div>
    </div>

    <div class="row mb-3">
      <label for="endereco" class="col-sm-2 col-form-label">Endereço</label>
      <div class="col-sm-6">
        <input type="text" class="form-control" id="endereco" />
      </div>

      <label for="numero" class="col-sm-2 col-form-label">Número</label>
      <div class="col-sm-2">
        <input type="text" class="form-control" id="numero" />
      </div>
    </div>

    <div class="row mb-3">
      <label for="bairro" class="col-sm-2 col-form-label">Bairro</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="bairro" />
      </div>
    </div>

    <div class="row mb-3">
      <label for="cidade" class="col-sm-2 col-form-label">Cidade</label>
      <div class="col-sm-6">
        <input type="text" class="form-control" id="cidade" />
      </div>

      <label for="estado" class="col-sm-2 col-form-label">Estado</label>
      <div class="col-sm-2">
        <select name="estado" id="estado" class="form-select">
          <option value="">Selecione</option>
          <option value="AC">AC</option>
          <option value="AL">AL</option>
          <option value="AP">AP</option>
          <option value="AM">AM</option>
          <option value="BA">BA</option>
          <option value="CE">CE</option>
          <option value="DF">DF</option>
          <option value="ES">ES</option>
          <option value="GO">GO</option>
          <option value="MA">MA</option>
          <option value="MS">MS</option>
          <option value="MT">MT</option>
          <option value="MG">MG</option>
          <option value="PA">PA</option>
          <option value="PB">PB</option>
          <option value="PR">PR</option>
          <option value="PE">PE</option>
          <option value="PI">PI</option>
          <option value="RJ">RJ</option>
          <option value="RN">RN</option>
          <option value="RS">RS</option>
          <option value="RO">RO</option>
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SP">SP</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
        </select>
      </div>
    </div>

    <div class="row mb-3">
      <label for="endereco" class="col-sm-2 col-form-label">Latitude</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="endereco" placeholder="Opcional" />
      </div>

      <label for="numero" class="col-sm-2 col-form-label">Longitude</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="numero" placeholder="Opcional" />
      </div>
    </div>
  </form>

  <table id="salas" class="table table-sm table-hover table-striped" width="100%">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Descrição</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sala 01</td>
        <td>Sala de testes</td>
        <td>
          <button class="btn btn-sm btn-danger">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
@import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
@import 'datatables.net-dt/css/dataTables.dataTables.min.css';

label {
  font-size: 12px !important;
}

input[type='text'] {
  height: 32px !important;
  font-size: 12px;
}

#estado {
  font-size: 12px !important;
  height: 32px;
}

textarea:focus,
input:focus,
select:focus {
  box-shadow: 0 0 0 0 !important;
  outline: 0 !important;
  border-top: solid 1px #28a745 !important;
  border-left: solid 1px #28a745 !important;
  border-right: solid 1px #28a745 !important;
  border-bottom: solid 3px #28a745 !important;
}
</style>
