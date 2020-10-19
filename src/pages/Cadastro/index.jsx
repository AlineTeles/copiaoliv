import React from 'react'
import { Container, DivAgrupa, DivFormCad, DivImgCad, DivImgLinhas, DivTitulo } from './styles'
import IconCadastro from '../../assets/IconCadastro.png'
import linhasImage from '../../assets/linhas.png';

const Cadastro = () => {

  return (
    <Container>
      <DivTitulo>
        <h1>
          Bem vindo!
        </h1>
        <h2>
          Cadastro
        </h2>
      </DivTitulo>
      <DivFormCad>
        <form>
          <label>
            Nome Completo:
            <input type="text" />
          </label>

          <label>
            Username:
            <input type="text" />
          </label>

          <label>
            CPF/CNPJ:
            <input type="text" />
          </label>

          <label >
            Senha:
            <input type="password" />
          </label>

        </form>
      </DivFormCad>

      <DivImgCad>
        <img src={IconCadastro} alt="Icone do cadastro" />
      </DivImgCad>
      <DivImgLinhas>
        <img src={linhasImage} alt="Icone do cadastro" />
      </DivImgLinhas>
      <h2>
        Oferecemos a maior linha de produtos para a sua empresa.
      </h2>

    </Container>

  )
}

export default Cadastro
