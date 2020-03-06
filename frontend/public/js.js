$(function() {
  $.get( "http://0.0.0.0:8081/api/books", function( data ) {
    console.log(data);
  }, 'json');
});
