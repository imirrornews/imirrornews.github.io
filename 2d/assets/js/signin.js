$(document).ready(function () {
  $('#password').attr("type", 'password');
});

$(document).on('click', '.eye', function () {
  $(".eye").addClass('show').removeClass('hide');
  $(this).addClass('hide');
  if ($(this).attr("id") == "hidepwd") {
    $('#password').attr("type", 'text');
  }
  else {
    $('#password').attr("type", 'password');
  }
})


$(document).on('click', '#signin', function () {

  var username = $('#username').val();
  var password = $('#password').val();
  console.log(username);
  console.log(password);
  var settings = {
    "url": "http://track-gps-backend.herokuapp.com/api/v1/users/login",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
      "name": username,
      "password": password
    }
  };

  $.ajax(settings).done(function (response) {
    if (response.status == true) {
      sessionStorage.setItem("Userid", response.data[0]._id);
      sessionStorage.setItem("Username", response.data[0].name);
      sessionStorage.setItem("Userbalance", response.data[0].balance);
      window.location.assign("home.html");
    }
    else {
      alert("Username and Password do not match!");
    }

  });

});