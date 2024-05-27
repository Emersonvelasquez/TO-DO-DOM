
// boton de crear
const btntarea = document.querySelector('#btntarea')
// input donde se escribe la tarea
const creatarea = document.querySelector('#creatarea')

let value = ''

// evento para capturar el valor del input
creatarea.addEventListener('change', (e) => {
    value = e.target.value
})

let contador = 0

//crea la tarea
const creartareita = () => {

    if (value != '') {

        contador = contador + 1;

        const div =
            `  <div id="padre-${contador}" class="card d-flex mt-2" > 
    <div id="color-${contador}" class=" d-flex  justify-content-between fondo p-3">
     <div class="form-check">
    <input id="tarea-${contador}" class="form-check-input" type="checkbox" value="">
    <label class="form-check-label" for="defaultCheck1">
        <p id="parrafo-${contador}">${value}</p>
    </label>
</div>
<div>
        <button id="btnDelete-${contador}" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
      </svg></button>
    </div>
    </div>
    </div>
`
        const tareas = document.querySelector('#tareas')
        tareas.insertAdjacentHTML('afterbegin', div)

        const CheckboxCreado = document.querySelector(`#tarea-${contador}`)
        const parrafoCreado = document.querySelector(`#parrafo-${contador}`)


        CheckboxCreado.addEventListener('click', () => {
            parrafoCreado.classList.toggle('text-decoration-line-through')
        })

        creatarea.value = ''
        value = ''


        const EliminarCreado = document.querySelector(`#padre-${contador}`)
        const btnDelete = document.querySelector(`#btnDelete-${contador}`)
        btnDelete.addEventListener('click', () => {
            EliminarCreado.remove()
        })


    }
    else {
        alert('ingrese texto')
    }
}
//evento que escucha el click de crear tarea
btntarea.addEventListener('click', creartareita)


