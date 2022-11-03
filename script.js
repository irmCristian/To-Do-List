'use strict'

const input = document.querySelector('.input')
const add = document.querySelector('.add')
const liArea = document.querySelector('.list_area')


add.addEventListener('click', addToList)
function addToList() {
    if (!input.value == '') {
        liArea.innerHTML = liArea.innerHTML + `
        <div class="list_container">
            <li>${input.value}</li>
            <div class="remove">X</div>
            <div class="check">&#10003;</div>
        </div>

            `
            input.value = ''
        }
    const remove = document.querySelectorAll('.remove')
    remove.forEach(n => n.addEventListener('click', removeFromList))
    
    function removeFromList(e) {
        if (e.target.classList.contains('remove')) {
            e.target.parentElement.remove()
        }
    }
    
    const check = document.querySelectorAll('.check')
    check.forEach(n => n.addEventListener('click', checked))
    function checked(e) {
        if (e.target.classList.contains('check')) {
            e.target.parentElement.classList.add('green')
        }
    }

}
