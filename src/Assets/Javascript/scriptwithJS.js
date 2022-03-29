//button
function buttonset() {
    Delete = document.createElement('button');
    Delete.innerHTML = 'Delete';
    Delete.setAttribute("class", "delete btn btn-danger me-2");
    Delete.setAttribute("onclick", "deletetask(this)");
    Edit = document.createElement('button');
    Edit.innerHTML = 'Edit';
    Edit.setAttribute("class", "editTasks btn btn-secondary me-2");
    Edit.setAttribute("onclick", "edittask(this)");
    Complete = document.createElement('button');
    Complete.innerHTML = 'Complete';
    Complete.setAttribute("class", "btn-complete btn btn-success");
    Complete.setAttribute("onclick", "completetask(this)");
    return [Delete, Edit, Complete];
}
// add task
function addtask() {
    let input = document.getElementById('tasksInput').value;
    if (input === "") {
        alert("Input Required")
    } else {
        let li = document.createElement('li');
        li.setAttribute('class', 'p-4 d-flex justify-content-between align-items-center');
        span = document.createElement('span');
        span.id = 'span';
        span.innerHTML = input;
        li.appendChild(span);
        div = document.createElement('div');
        let arr = buttonset();
        div.appendChild(arr[0]);
        div.appendChild(arr[1]);
        div.appendChild(arr[2]);
        li.appendChild(div)
        li.appendChild(div);
        let inputsave = document.getElementById('inputsave');
        inputsave.insertBefore(li, inputsave.childNodes[0]);
        input = document.getElementById('tasksInput');
        input.value = " ";
    }
}
//complete
function completetask(link) {
    let parent = link.parentNode.parentNode;
    value = link.parentNode.parentNode.querySelector('span').textContent;
    let li = document.createElement('li');
    li.setAttribute('class', 'p-4 d-flex justify-content-between align-items-center');
    parent = document.getElementById('complete-task').appendChild(li);
    span = document.createElement('span');
    span.id = 'span';
    span.innerHTML = value;
    parent.appendChild(span);
    div = document.createElement('div');
    restore = document.createElement('button');
    restore.innerHTML = 'Restore';
    restore.setAttribute("class", "btn-restore btn btn-danger");
    restore.setAttribute("onclick", "Restoretask(this)");
    div.appendChild(restore);
    parent.appendChild(div);
    link.parentNode.parentNode.remove();
}
//restore
function Restoretask(link) {
    value = link.parentNode.parentNode.querySelector('span').textContent;
    li = document.createElement('li');
    li.setAttribute('class', 'p-4 d-flex justify-content-between align-items-center');
    parent = document.getElementById('inputsave').appendChild(li);
    span = document.createElement('span');
    span.id = 'span';
    span.innerHTML = value;
    parent.appendChild(span);
    div = document.createElement('div');
    let arr = buttonset();
    div.appendChild(arr[0]);
    div.appendChild(arr[1]);
    div.appendChild(arr[2]);
    parent.appendChild(div);
    link.parentNode.parentNode.remove();
}
//delete
function deletetask(link) {
    link.parentNode.parentNode.remove();
}
//edit
function edittask(link) {
    let parent = link.parentNode.parentNode;
    div = document.createElement('div');
    let inputhtml = document.createElement('input');
    inputhtml.type = 'text';
    inputhtml.id = "input2";
    Save = document.createElement('button');
    Save.innerHTML = 'Save';
    Save.setAttribute("class", "save-btn btn btn-primary mx-2");
    Save.setAttribute("onclick", "savetask(this)");
    Cancel = document.createElement('button');
    Cancel.innerHTML = 'Cancel';
    Cancel.setAttribute("class", "cancel-btn btn btn-danger");
    Cancel.setAttribute("onclick", "canceltask(this)");
    div.appendChild(inputhtml);
    div.appendChild(Save);
    div.appendChild(Cancel);
    parent.appendChild(div);
    link.parentNode.remove();
}
// /cance/ 
function canceltask(link) {
    div = document.createElement('div');
    let arr = buttonset();
    div.appendChild(arr[0]);
    div.appendChild(arr[1]);
    div.appendChild(arr[2]);
    link.parentNode.parentNode.appendChild(div);
    link.parentNode.remove();
}
//save
function savetask(link) {
    let parent = link.parentNode.parentNode;
    span1 = link.parentNode.parentNode.querySelector('span');
    value2 = link.parentNode.querySelector('#input2').value;
    if (value2 === '') {
        alert("Input is required!")
    } else {
        span1.remove();
        span = document.createElement('span');
        span.id = 'span';
        span.innerHTML = value2;
        parent.appendChild(span);
        div = document.createElement('div');
        let arr = buttonset();
        div.appendChild(arr[0]);
        div.appendChild(arr[1]);
        div.appendChild(arr[2]);
        parent.appendChild(div);
        link.parentNode.remove();
    }
}
