
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_equip')) ?? []
const setLocalStorage = (dbEquip) => localStorage.setItem("db_equip", JSON.stringify(dbEquip))




const readEquip = () => getLocalStorage()

const createEquip = (equip) => {
    const dbEquip = getLocalStorage()
    dbEquip.push (equip)
    setLocalStorage(dbEquip)
}


const createRow = (equip, index) => {
  const newRow = document.createElement('tr');
  const dataFormatada = new Date(equip.date).toLocaleDateString('pt-BR');
  const proximasManutencoes = criarProximasManutencoes(equip.date, equip.period, 4);
  
  newRow.innerHTML = `
      <td>${equip.nome}</td>
      <td>${equip.fab}</td>
      <td>${dataFormatada}</td>
      <td>${equip.period}</td>
      <td>
        <ol style="list-style: none; padding-left: 0;">
          ${proximasManutencoes.map(data => <li style="margin-bottom: 7px;">${data}</li>).join('')}
        </ol>
      </td>`;          
 
    document.querySelector('#tableEquip>tbody').appendChild(newRow);
}


const criarProximasManutencoes = (date, period, count) => {
  const proximasManutencoes = [];
  let data = new Date(date);
  
  for (let i = 0; i < count; i++) {
    data.setDate(data.getDate() + parseInt(period));
    const dataFormatada = data.toLocaleDateString('pt-BR');
    proximasManutencoes.push(dataFormatada);
  }

  return proximasManutencoes;
};


const clearTable = () => {
    const rows = document.querySelectorAll('#tableEquip>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbEquip = readEquip()
    clearTable()
    dbEquip.forEach(createRow)
}


updateTable()

const filterEquip = (term) => {
    const dbEquip = readEquip();
    const filteredEquip = dbEquip.filter(equip => {
        return equip.nome.toLowerCase().includes(term.toLowerCase()) ||
               equip.fab.toLowerCase().includes(term.toLowerCase());
    });
    return filteredEquip;
};
 
const handleSearch = () => {
    const searchTerm = document.getElementById('searchInput').value;
    const filteredEquip = filterEquip(searchTerm);
    clearTable();
    filteredEquip.forEach(createRow);
};
 
document.getElementById('searchInput').addEventListener('input', handleSearch);


// Eventos
document.getElementById('cadastrarCliente')
.addEventListener('click', openModal)

document.getElementById('modalClose')
.addEventListener('click', closeModal)

document.getElementById('salvar')
.addEventListener('click', saveClient)

document.querySelector('#tableEquip>tbody')
.addEventListener('click', editDelete)

document.getElementById('cancelar')
.addEventListener('click', closeModal)
