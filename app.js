const field  =document.querySelector('#field');
const button = document.querySelector('#button');
const wrapper = document.querySelector('#todo-wrapper');

function createItem(value) {
    return `
          <div class="item">
                    <div class="left">
                         <input type="checkbox" name="" id="">
                         <p>${value}</p>
                    </div>

                    <div class="right">
                         <button>
                              <i class="fa-regular fa-pen-to-square"></i>
                              <span>Edit</span>
                         </button>

                         <button>
                              <i class="fa-solid fa-trash-can"></i>
                              <span>Del</span>
                         </button>

                    </div>
               </div>
     `;
}

function validate() {
    const todo = field.value;
    if (todo.length < 5) {
        alert("Eng kamida 6 ta beldidan iborat bolishi shart");
        field.focus();
        field.style.outlineColor = 'red'
        return false;
    }

    return true;
}

button && button.addEventListener('click', function(event) {
    event.preventDefault();
    const todo = field.value;
    const isValid = validate();
    if (!isValid) {
        return;
    }

    const item = createItem(todo);
    wrapper.innerHTML += item;
    field.value = '';
    field.focus();
})