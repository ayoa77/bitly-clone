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

        var newDiv = document.getElementById('added');
        var choix = document.createElement('div');
          if(data.response == "Error") {
            choix.innerHTML = "Gross! Feed me proper urls!"
            newDiv.appendChild(choix);
          } else {
            choix.innerHTML = "Yummy! " + data.long_url + " is now " + "https://linkmuncher.herokuapp.com/" + data.short_url ;
            newDiv.appendChild(choix);
         }
      }
    })

    });
  });
