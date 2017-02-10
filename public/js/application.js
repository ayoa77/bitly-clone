$(document).ready(function(){
  // $('#main-heading').animate(){


  // }
  $('#url-form').submit(function(event){
    event.preventDefault();
    
    $.ajax({
      type: 'POST',
      url: '/urls',
      data: $(this).serialize(),
      dataType: 'json',
      success: function(data){
        console.log(data)

      }
    })

    });
  });
