$(document).ready(function () {
  var rootURL = 'http://first-ajax-api.herokuapp.com/';
  $('#step12').on('click', function() {
    $.ajax({
      url: rootURL,
      method: 'GET',
      dataType: 'text'
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
      dataType: 'text'
      // data: { limit: 2, stuff: 4 }
    }).done(function(data) {
      $('#step3456').append(data);
      console.log('Got: ' + data)
    }).fail(function() {
      $('#step3456').append('FAILURE: Your code is bad, and you should feel bad!');
    }).always(function() {
      $('#step3456').append('<br>Thank you for your kind request.<br>');
    });
  });

  $('#step7').on('click', function() {
    $.ajax({
      url: rootURL + 'count',
      method: 'GET',
      dataType: 'text'
      // data: { limit: 2, stuff: 4 }
    }).done(function(num) {
      $('#step7').append('Congratulations! You are the ' + num + suffix(num) + ' visitor!');
    }).fail(function() {
      $('#step7').append('FAILURE: Your code is bad, and you should feel bad!');
    }).always(function() {
      $('#step7').append('<br>Thank you for your kind request.<br>');
    });
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

function suffix(num) {
  switch (num % 100) {
    case 11: return 'th';
    case 12: return 'th';
    case 13: return 'th';
    default: switch (num % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
}
