# Plano de Testes de Software
<br>
Os testes funcionais a serem realizados na aplicação são descritos a seguir
<br>
<br>
<table>
   <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
   </tr>
   <tr>
    <td>CT-01: Verificar o funcionamento dos links da página inicial</td>
    <td>
     <ul>
      <li>RF-01:	O site deve permitir ao usuário cadastrar uma conta</li>
     <li>RF-02:	O site deve permitir ao usuário fazer o login da sua conta</li>
      <li>RF-10:	O site deve permitir ao usuário acessar a página de Perfil</li>
     </ul>
    </td>
    <td>Verificar se os links da página incial estão encaminhando para as respectivas páginas corretamente</td>
    <td>
     <ol>
      <li>Acessar o navegador</li>
      <li>Informar o endereço do site</li>
      <li>Visualizar a página inicial</li>
      <li>Clicar nos links da página inicial</li>
     </ol>
     </td>
    <td>Todos os links da página inicial devem encaminhar os usuários para as respectivas páginas</td>
    <td>Luiz</td>
   </tr>
  </table>


  <table>
   <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>  
   </tr>
   <tr>
    <td>CT-02: Verficar o Cadastro de Equipamentos</td>
    <td>
     <ul>
      <li>RF-04:	A aplicação deve permitir ao usuário fazer o cadastro de equipamentos, bem como sua edição ou exclusão</li>
     </ul>
    </td>
    <td>Verificar se todas as informações sobre os equipamentos cadastrados foram salvas</td>
    <td>
     <ol>
      <li>Acessar o navegador.</li>
      <li>Informar o endereço do site</li>
      <li>Acessar o perfil do usuário</li>
      <li>Realizar o cadastro na opção "cadastro de equipamento"</li>
      <li>Simular a edição ou exclusão das informações</li>
     </ol>
     </td>
    <td>Todas as informações sobre o equipamento ficam disponíveis na página de cadastro</td>
    <td>André</td>
   </tr>
  </table>

  <table>
   <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
   </tr>
   <tr>
    <td>CT-03: Verificar a Lista de Equipamentos</td>
    <td>
     <ul>
      <li>RF-05 e RF-17:	 O site deve permitir ao usuário acessar a lista de equipamentos cadastrados e as datas de suas futuras manutenções</li>
     </ul>
    </td>
    <td>Verificar se a lista está sendo criada corretamente</td>
    <td>
     <ol>
      <li>Acessar o navegador</li>
      <li>Informar o endereço do site</li>
      <li>Acessar o perfil do usuário</li>
      <li> Clicar em "Lista de Equipamentos", no menu lateral</li>
     </ol>
     </td>
    <td>Todas as informações referentes aos equipamentos cadastrados, bem como suas futuras manutenções, devem estar registradas em uma tabela</td>
    <td>Alana</td>
   </tr>
  </table>

  <table>
   <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
   </tr>
   <tr>
    <td>CT-04: Verificar o funcionamento do filtro de pesquisa de equipamentos</td>
    <td>
     <ul>
     <li>RF-03	O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar equipamentos</li>
     </ul>
    </td>
    <td>Verificar se o filtro de pesquisa está recuperando os dados inseridos pelo usuário</td>
    <td>
     <ol>
      <li>Acessar o navegador</li>
      <li>Informar o endereço do site</li>
      <li>Entrar no perfil do usuário</li>
      <li>Clicar em "Lista de Equipamentos"</li>
      <li>Digitar o nome de um equipamento cadastrado e de um não cadastrado</li>  
     </ol>
     </td>
    <td>Caso o equipamento exista na lista, o filtro de pesquisa deve retornar suas informações na primeira linha da tabela.</td>
    <td>Heitor</td>
   </tr>
  </table>
</body>
</html>
