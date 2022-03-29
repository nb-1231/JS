
//FUNCTIONS CALLS ON CLICK 
$(document).on('click', '.delete', deleteItem);
$(document).on('click', '.editTasks', editTasks);
$(document).on('click', '.save-btn', savetext);
$(document).on('click', '.cancel-btn', cancel);
$(document).on('click', '.btn-complete', completTask);
$(document).on('click', '.btn-restore', restoreTask);

//complete
function completTask() {
  let inp = $(this).parent().parent().children('.textspen').text();
  $('#complete-task').prepend('<li class="p-4 d-flex justify-content-between align-items-center"><span class="textspen"> ' + inp + ' </span><div><button class="btn-restore btn btn-danger me-2">Restore</button></div></li>');
  $('#input').val('');
  $(this).parent().parent().remove();
}

//restore
function restoreTask() {
  let inp = $(this).parent().parent().children('.textspen').text();
  $('#tasks-head').prepend('<li class="p-4 d-flex justify-content-between align-items-center"><span class="textspen"> ' + inp + ' </span><div><button class="delete btn btn-danger me-2">Remove</button><button class="editTasks btn btn-secondary me-2">Edit</button><button class="btn-complete btn btn-success">Complete</button></div></li>');
  $(this).parent().parent().remove();
}

//DELETE 
function deleteItem() {
  $(this).parent().parent().remove();
}
//ADD
function Addtask() {
  $(document).ready(function () {
    var input = $('#input').val();
    if (input == "") {
    }
    else {

      $('#tasks-head').prepend('<li class="p-4 d-flex justify-content-between align-items-center"><span class="textspen"> ' + input + ' </span><div><button class="delete btn btn-danger me-2">Remove</button><button class="editTasks btn btn-secondary me-2">Edit</button><button class="btn-complete btn btn-success">Complete</button></div></li>');
      $('#input').val('');
    }
  });
}
//EDIT ITEMS
function editTasks() {
  str = $(this).parent().parent();
  val = $(str).children()[1]
  $($(this).parent().parent()).append(
    `<div><input type="text" id="forminput2">
        <button type="button" class="save-btn btn btn-primary">Save</button> 
        <button type="button" class="cancel-btn btn btn-danger">Cancel</button></div>`
  );
  val.remove();
}
//SAVE
function savetext() {
  inp = $('#forminput2').val();
  let len = (inp.length);
  if (len == 0) {
    alert("Task Details are required!!");
  }
  else {
    str = $(this).parent().parent().children();
    val = $(str).parent()
    str.remove();
    $(val).append('<span class="textspen"> ' + inp + ' </span><div><button class="delete btn btn-danger me-2">Remove</button><button class="editTasks btn btn-secondary me-2">Edit</button><button class="btn-complete btn btn-success">Complete</button></div>');
  }
}
//CANCEL
function cancel() {
  str = $(this).parent().parent();
  val = $(str).children()[1]
  val.remove();
  $(str).append('<div><button class="delete btn btn-danger me-2">Remove</button><button class="editTasks btn btn-secondary me-2">Edit</button><button class="btn-complete btn btn-success">Complete</button></div>');
}