# Especificação do Projeto

## Perfis de Usuários


<table>
<tbody>
<tr align=center>
<th colspan="2">Proprietário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Proprietário da clínica e/ou Profissionais da área</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Cadastramento do profissional.</br>
</br>Cadastramento, atualização e edição dos equipamentos da clínica. 

</br>Definição da matriz hierárquica de utilização do sistema. 

</br>Futuras manutenções agendadas. 

</br>Consultas de histórico de manutenções realizadas. 

</br>Contato com fabricante. 

</br>Definição da contratação de serviço externo. 
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Dentista </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Profissionais da área</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Cadastramento do profissional <br/>Atualização e edição dos equipamentos da clínica. 

Futuras manutenções agendadas. 

Consultas de histórico de manutenções realizadas. 

Contato com fabricante.  

Solicitação de orçamentos a empresas terceiras.   

Solicitação do envio de equipamentos defeituosos para manutenção corretiva.  
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Equipe de Apoio </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">ASB (Auxiliar de Saúde Bucal), THD (Técnico em Higiene Dental), TSB (Técnico de Saúde Bucal), Secretaria </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
Atualização e edição dos equipamentos da clínica 

Futuras manutenções agendadas. 

Consultas de histórico de manutenções realizadas. 

Contato com fabricante.  

Solicitação de orçamentos a empresas terceiras.    

Envio de equipamentos defeituosos para manutenção externa. 

Acompanhamento dos prazos de entrega de equipamentos enviados externamente. 
</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

| EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Proprietário 1            | Quero que o sistema mantenha um histórico dos custos financeiros do serviço de manutenção com terceiros                       | Para diminuir os custos de uma manutenção corretiva, tendo maior controle dos meus gastos.   
| Proprietário 2            | Preciso que o sistema estabeleça um calendário de manutenção preventiva                          | Para evitar a desmarcação de pacientes, perda de consultas e transtornos com clientes.     
| Dentista 1             | Necessito que o sistema avise o momento de lubrificar a caneta de auto-rotação periodicamente                          | Para evitar a troca do rolamento que é caro.  
| Dentista 2             | Quero que o sistema mantenha um calendário e registre o histórico das manutenções realizadas                          | Evitar manutenção corretiva do compressor, parada do equipamento e desmarcação de pacientes. 
| Dentista 3             | Necessito que a aplicação me avise com antecedência de x meses o momento de trocar a autoclave                           | Evitar um custo inesperado ao trocar o equipamento por uma questão de segurança  
| Equipe de Apoio 1             | Desejo ser avisada quando chegar o momento de cada manutenção preventiva.                          | Facilitar o trabalho    
| Equipe de Apoio 2             | Preciso consultar o histórico das manutenções realizadas                          | Comprovar históricos anteriores de serviços prestados 
| Equipe de Apoio 3             | Eu quero que o sistema recalcule as datas da manutenção preventiva após a realização de uma manutenção corretiva.                          | Recalcular datas previstas de manutenção de acordo com a execução. 

## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  A aplicação deve permitir ao usuário cadastrar uma conta.                     | ALTA    | 
| RF-02  |  A aplicação deve permitir ao usuário fazer o login da sua conta.             | ALTA    |
| RF-03 |  A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar equipamentos.                      | ALTA    | 
| RF-04  |  A aplicação deve permitir ao usuário fazer o cadastro de equipamentos.              | ALTA    |
| RF-05 |  A aplicação deve permitir ao usuário disponibilizar informações das manutenções preventivas previstas.                      | ALTA    | 
| RF-06  |  A aplicação deve permitir ao usuário disponibilizar informações dos históricos de manutenção              | ALTA    |
| RF-07 |  A aplicação deve apresentar, para cada equipamento, uma imagem correspondente.                      | BAIXA    | 
| RF-08  |  A aplicação deve permitir ao usuário visualizar as informações do arquivo do manual do equipamento.              | MÉDIA    |
| RF-09 |  A aplicação deve permitir ao proprietário visualizar a matriz hierárquica                      | MÉDIA    | 
| RF-10  |  A aplicação deve permitir ao usuário verificar as informações registradas no cadastro na página Perfil, após fazer seu login.            | MÉDIA    |
| RF-11 |  A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar equipamentos.                      | ALTA    | 
| RF-12  |  A aplicação deve permitir ao usuário disponibilizar informações sobre entrada e saída de equipamentos .               | ALTA    |
| RF-13 |  A aplicação deve ser capaz de enviar um Alerta da necessidade de determinada manutenção preventiva.                       | ALTA    | 
| RF-14  |  A aplicação deve atualizar o mapa de manutenção preventiva a partir de uma manutenção corretiva realizada.              | ALTA    |
| RF-15 |  A aplicação deve registrar o custo de cada manutenção corretiva                     | ALTA    | 
| RF-16  |  A aplicação deve permitir o registro de cada manutenção realizada, quem fez e quando.             | ALTA    |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  A aplicação deve ser publicada em um ambiente acessível público na Internet.                     | ALTA    | 
| RNF-02 |  A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.                       | ALTA    | 
| RNF-03 |  A aplicação deve ter bom nível de contraste entre os elementos da tela.                      | ALTA    | 
| RNF-04 |  A aplicação deve ser compatível com os navegadores O site deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox e Microsoft Edge.                     | ALTA    | 

**Prioridade: Alta / Média / Baixa. 

