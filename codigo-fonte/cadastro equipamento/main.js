'use strict'
 
const openModal = () => document.getElementById('modal')
    .classList.add('active')
 
const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}
 
 
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_equip')) ?? []
const setLocalStorage = (dbEquip) => localStorage.setItem("db_equip", JSON.stringify(dbEquip))
 
// CRUD - create read update delete
const deleteEquip = (index) => {
    const dbEquip = readEquip()
    dbEquip.splice(index, 1)
    setLocalStorage(dbEquip)
}
 
const updateEquip = (index, equip) => {
    const dbEquip = readEquip()
    dbEquip[index] = equip
    setLocalStorage(dbEquip)
}
 
const readEquip = () => getLocalStorage()
 
const createEquip = (equip) => {
    const dbEquip = getLocalStorage()
    dbEquip.push (equip)
    setLocalStorage(dbEquip)
}
 
const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}
 
//Interação com o layout
 
const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
    document.querySelector(".modal-header>h2").textContent  = 'Novo Equipamento'
}
 
const saveClient = () => {
    if (isValidFields()) {
        const equip = {
            nome: document.getElementById('nome').value,
            fab: document.getElementById('fab').value,
            date: document.getElementById('date').value,
            period: document.getElementById('period').value
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createEquip(equip)
            updateTable()
            closeModal()
        } else {
            updateEquip(index, equip)
            updateTable()
            closeModal()
        }
    }
}
 
const createRow = (equip, index) => {
    const newRow = document.createElement('tr')
    const dataFormatada = new Date(equip.date).toLocaleDateString('pt-BR');
    newRow.innerHTML = `
        <td>${equip.nome}</td>
        <td>${equip.fab}</td>
        <td>${dataFormatada}</td>
        <td>${equip.period}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
 
    `
    document.querySelector('#tableEquip>tbody').appendChild(newRow)
}
 
const clearTable = () => {
    const rows = document.querySelectorAll('#tableEquip>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}
 
const updateTable = () => {
    const dbEquip = readEquip()
    clearTable()
    dbEquip.forEach(createRow)
}
 
const fillFields = (equip) => {
    document.getElementById('nome').value = equip.nome
    document.getElementById('fab').value = equip.fab
    document.getElementById('date').value = equip.date
    document.getElementById('period').value = equip.period
    document.getElementById('nome').dataset.index = equip.index
}
 
const editEquip = (index) => {
    const equip = readEquip()[index]
    equip.index = index
    fillFields(equip)
    document.querySelector(".modal-header>h2").textContent  = `Editando ${equip.nome}`
    openModal()
}
 
const editDelete = (event) => {
    if (event.target.type == 'button') {
 
        const [action, index] = event.target.id.split('-')
 
        if (action == 'edit') {
            editEquip(index)
        } else {
            const equip = readEquip()[index]
            const response = confirm(`Deseja realmente excluir o equipamento ${equip.nome}?`)
            if (response) {
                deleteEquip(index)
                updateTable()
            }
        }
    }
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
 


