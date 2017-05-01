$(document).ready(function () {
  var rootURL = 'http://first-ajax-api.herokuapp.com/';
  $('#step12').on('click', function() {
    $.ajax({
      url: rootURL,
      method: 'GET',
      dataType: 'html'
      // data: { limit: 2, stuff: 4 }
    }).done(function(data) {
      $('#step12').append(data);
      console.log('got' + data)
    }).fail(function() {}).always(function() {
      console.log('First!');
    });
  });

  $('#step3456').on('click', function() {
    $.ajax({
      url: rootURL + pingPong(),
      method: 'GET',
      dataType: 'html'
      // data: { limit: 2, stuff: 4 }
    }).done(function(data) {
      $('#step3456').append(data + '<br>');
      console.log('Got: ' + data)
    }).fail(function() {
      $('#step3456').append('FAILURE: Your code is bad, and you should feel bad!<br>');
    }).always(function() {});
  });

});

var runNum = 0;
function pingPong() {
  if ((runNum % 2) === 0) {
    runNum++;
    return 'ping';
  } else {
    runNum++;
    return 'pong';
  }
}
