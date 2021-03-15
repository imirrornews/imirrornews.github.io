
$(document).on('click', '#register', function () {
    if($('#createpassword').val()==$('#confirmpassword').val()){
    var username = $('#createusername').val();
    var password = $('#confirmpassword').val();
    var phonenumber = $('#phonenumber').val();
    var balance = $('#createbalance').val();
    var role="user";

    var settings = {
      "url": "http://track-gps-backend.herokuapp.com/api/v1/users",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "data": {
        "name": username,
        "password": password,
        "role": role,
        "phonenumber": phonenumber,
        "balance": balance
      }
    };
  
    $.ajax(settings).done(function (response) {
      if (response.status == true) {  
        $('#createusername').val("");
        $('#createpassword').val("")
        $('#confirmpassword').val("");
        $('#phonenumber').val("");
        $('#createbalance').val("");    
        alert("User Registration Successfully!");
      }
      else {
        alert("User Registration Fail!");
      }
  
    });
}
else{
    alert("Password Do not Match!");
}
  
  });