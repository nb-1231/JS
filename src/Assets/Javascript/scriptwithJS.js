// add task
function addtask() {
    let input = document.getElementById('maininput').value;
    if (input === "") {
        alert("Input Required")
    } else {
        let inputsave = document.getElementById('inputsave');
        inputsave.insertAdjacentHTML('afterbegin', `<li class="p-4 d-flex justify-content-between align-items-center"><span id="span"> ${input}</span><div><button class="delete btn btn-danger me-2" onclick="deletetask(this)">Delete</button><button class="editTasks btn btn-secondary me-2" onclick="edittask(this)">Edit</button><button class="btn-complete btn btn-success" onclick="completetask(this)">Complete</button></div></li>`);
        input = document.getElementById('maininput').value = "";
    }
}
//complete
function completetask(link) {
    value = link.parentNode.parentNode.querySelector('span').textContent;
    document.getElementById('complete-task').insertAdjacentHTML('beforeend', `<li class="p-4 d-flex justify-content-between align-items-center"><span id="span">${value}</span><div><button class="btn-restore btn btn-danger" onclick="Restoretask(this)">Restore</button></div></li>`);
    link.parentNode.parentNode.remove();
}
//restore
function Restoretask(link) {
    value = link.parentNode.parentNode.querySelector('span').textContent;
    parent = document.getElementById('inputsave');
    parent.insertAdjacentHTML('beforeend', `<li class="p-4 d-flex justify-content-between align-items-center"><span id="span"> ${value}</span><div><button class="delete btn btn-danger me-2" onclick="deletetask(this)">Delete</button><button class="editTasks btn btn-secondary me-2" onclick="edittask(this)">Edit</button><button class="btn-complete btn btn-success" onclick="completetask(this)">Complete</button></div></li>`);
    link.parentNode.parentNode.remove();
}
//delete
function deletetask(link) {
    link.parentNode.parentNode.remove();
}
//edit
function edittask(link) {
    link.parentNode.parentNode.insertAdjacentHTML('beforeend', '<div><input type="text" id="input2"><button onclick="savetask(this)" type="button" class="save-btn btn btn-primary">Save</button><button onclick="canceltask(this)" type="button" class="cancel-btn btn btn-danger">Cancel</button></div>')
    link.parentNode.remove();
}
// /cance/ 
function canceltask(link) {
    link.parentNode.parentNode.insertAdjacentHTML('beforeend', '<div><button class="delete btn btn-danger me-2" onclick="deletetask(this)">Delete</button><button class="editTasks btn btn-secondary me-2" onclick="edittask(this)">Edit</button><button class="btn-complete btn btn-success" onclick="completetask(this)">Complete</button></div></li>');
    link.parentNode.remove();
}
//save
function savetask(link) {
    span1 = link.parentNode.parentNode.querySelector('span');
    value2 = link.parentNode.querySelector('#input2').value;
    if (value2 === '') {
        alert("Input is required!")
    } else {
        span1.remove();
        link.parentNode.parentNode.insertAdjacentHTML('afterbegin', `<span id="span"> ${value2}</span><div><button class="delete btn btn-danger me-2" onclick="deletetask(this)">Delete</button><button class="editTasks btn btn-secondary me-2" onclick="edittask(this)">Edit</button><button class="btn-complete btn btn-success" onclick="completetask(this)">Complete</button></div></li>`);
        link.parentNode.remove();
    }
}
