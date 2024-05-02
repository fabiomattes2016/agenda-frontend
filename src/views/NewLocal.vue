<script>
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import $ from 'jquery'

import { useQuery } from 'villus'

import NavBarNewLocal from '../components/NavBarNewLocal.vue'
import HeaderNewLocal from '../components/HeaderNewLocal.vue'
import FormNewLocal from '../components/forms/FormNewLocal.vue'

export default {
  methods: {
    getLocais() {
      const locais = `
        query {
            listLocais {
                id
                codCooperativa
                codAgencia
                nome
                endereco
                numero
                bairro
                cidade
                estado
                lat
                long
                ativa
                salas {
                    id
                    nome
                    descricao
                }
            }
        }
        `

      const { data } = useQuery({
        query: locais
      })

      this.locais = data

      setTimeout(() => {
        console.log('pausa')

        $('#locais').DataTable({
          language: {
            url: 'https://cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json'
          }
        })
      }, 300)
    }
  },
  created() {
    this.getLocais()
  },
  setup() {},
  components: {
    NavBarNewLocal,
    HeaderNewLocal,
    FormNewLocal
  },
  data() {
    return {
      locais: []
    }
  },
  mounted() {}
}
</script>

<template>
  <div>
    <NavBarNewLocal />
  </div>
  <div>
    <HeaderNewLocal />
  </div>
  <main>
    <div class="row">
      <div class="col-6">
        <div class="d-flex justify-content-start">
          <div class="form-new-local">
            <FormNewLocal />
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="d-flex justify-content-end">
          <div class="listagem-locais">
            <table id="locais" class="table table-sm table-hover table-striped">
              <thead>
                <tr>
                  <th>Cód. Cooperativa</th>
                  <th>Cód. Agência</th>
                  <th>Nome</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-if="locais">
                <tr v-for="local in locais.listLocais" v-bind:key="local.id">
                  <td>{{ local.codCooperativa }}</td>
                  <td>{{ local.codAgencia }}</td>
                  <td>{{ local.nome }}</td>
                  <td>{{ local.cidade }}</td>
                  <td>{{ local.estado }}</td>
                  <td>
                    <button class="btn btn-sm btn-danger">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
@import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
@import 'datatables.net-dt/css/dataTables.dataTables.min.css';

.form-new-local {
  margin-top: 25px;
  margin-left: 50px;
  width: 100%;
}

.listagem-locais {
  margin-top: 25px;
  margin-right: 15px;
  width: 100%;
}

.table {
  width: 100% !important;
  font-size: 12px !important;
}

.dt-input {
  font-size: 12px;
  height: 32px !important;
}
</style>
