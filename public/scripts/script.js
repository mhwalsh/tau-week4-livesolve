console.log('sourced!');

$(document).ready(function() {
  console.log('doc ready');
  getTasks();
  $('#createTask').on('click', createTask);
  $('#taskDiv').on('click', '.deleteTask', deleteTask);
});

// ajax functions
function getTasks(){
  // $.get('/task', appendTasks());
  $.ajax({
    type: 'GET',
    url: '/task',
    success: function(response) {
      console.log('response ->', response);
      appendTasks(response);
    }
  });
}

function createTask(){
  console.log('create task');

  // grab task name off the dom
  var taskName = $("#task").val();

  var objectToSend = {
    name: taskName
  };

  console.log('objectToSend ->', objectToSend);

  $.ajax({
    type: 'POST',
    url: '/task',
    data: objectToSend,
    success: function(response) {
      console.log(response);
      getTasks();
    }
  });
}


function deleteTask(){
  console.log('called delete task');
  var id = $(this).parent().data('id');
  console.log('id ->', id);

  $.ajax({
    type: 'DELETE',
    url: '/task/' + id,
    success: function() {
      console.log(response);
      getTasks();
    }
  });
}

function appendTasks(tasks) {
  console.log('called appendTasks');
  $('#taskDiv').empty();

  tasks.forEach(function(task) {
    console.log('task ->', task);
    $('#taskDiv').append('<div class="task">' + task.name +'</div>');
    $el = $('#taskDiv').children().last();
    $el.data('id', task.id);
    $el.append('<button class="deleteTask">Delete</button>');
  });
}
