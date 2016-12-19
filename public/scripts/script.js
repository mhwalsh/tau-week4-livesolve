console.log('sourced!');

$(document).ready(function() {
  console.log('doc ready');
  getTasks();
  $('#createTask').on('click', createTask);
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

function appendTasks(tasks) {
  console.log('called appendTasks');
  $('#taskDiv').empty();
  
  tasks.forEach(function(task) {
    console.log('task ->', task);
    $('#taskDiv').append("<div>" + task.name +"</div>");
  });
}
