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
      url: rootURL + 'ping',
      method: 'GET',
      dataType: 'html'
      // data: { limit: 2, stuff: 4 }
    }).done(function(data) {
      $('#step3456').append(data);
      console.log('Got: ' + data)
    }).fail(function() {}).always(function() {});
  });

});
