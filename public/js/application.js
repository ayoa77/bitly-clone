document.ready(function(){
  // $('#main-heading').animate(){


  // }
  $('#url-form').submit(function(event){
    event.preventDefault();
    $.ajax({
      url: '/url',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json'
    },
      success: function(data){console.log(data)}
      }
    });
  });
});
