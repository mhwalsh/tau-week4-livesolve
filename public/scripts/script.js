console.log('sourced!');

$(document).ready(function() {
  console.log('doc ready');
  getTasks();
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

function appendTasks(tasks) {
  console.log('called appendTasks');
  tasks.forEach(function(task) {
    console.log('task ->', task);
    $('#taskDiv').append("<div>" + task.name +"</div>");
  });
}
