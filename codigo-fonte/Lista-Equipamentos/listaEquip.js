
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
  
x
  
  newRow.innerHTML = `
      <td>${equip.nome}</td>
      <td>${equip.fab}</td>
      <td>${dataFormatada}</td>
      <td>${equip.period}</td>

      x
      x
      x
    
 
    document.querySelector('#tableEquip>tbody').appendChild(newRow);
}


x
x
x



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
