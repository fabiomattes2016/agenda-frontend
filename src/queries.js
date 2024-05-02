import { gql } from '@apollo/client/core'

export const GET_LOCAIS = gql`
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
