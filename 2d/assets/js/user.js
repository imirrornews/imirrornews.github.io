$(document).ready(function () {
  var anum = 0;
  var bnum = 10;
  var cnum = 20;
  var dnum = 30;
  var fnum = 40;
  var gnum = 50;
  var hnum = 60;
  var inum = 70;
  var jnum = 80;
  var knum = 90;
  for (var i = 0; i <= 9; i++) {
    if (i == 0) {
      anum = '00'
    }
    if (i <= 9) {
      anum = '0' + i;
    }
    $('#a').append(
      "<td class='number'>" + anum + "</td>"
    )
    $('#b').append(
      "<td class='number'>" + bnum + "</td>"
    )
    $('#c').append(
      "<td class='number'>" + cnum + "</td>"
    )
    $('#d').append(
      "<td class='number'>" + dnum + "</td>"
    )
    $('#f').append(
      "<td class='number'>" + fnum + "</td>"
    )
    $('#g').append(
      "<td class='number'>" + gnum + "</td>"
    )
    $('#h').append(
      "<td class='number'>" + hnum + "</td>"
    )
    $('#i').append(
      "<td class='number'>" + inum + "</td>"
    )
    $('#j').append(
      "<td class='number'>" + jnum + "</td>"
    )
    $('#k').append(
      "<td class='number'>" + knum + "</td>"
    )
    anum = parseInt(anum) + 1;
    bnum = parseInt(bnum) + 1;
    cnum = parseInt(cnum) + 1;
    dnum = parseInt(dnum) + 1;
    fnum = parseInt(fnum) + 1;
    gnum = parseInt(gnum) + 1;
    hnum = parseInt(hnum) + 1;
    inum = parseInt(inum) + 1;
    jnum = parseInt(jnum) + 1;
    knum = parseInt(knum) + 1;
  }
  
})



var array2D = [];

//For Choose Morning or Evening
$(document).on('click', '.dayornight', function () {
  $('.dayornight').removeClass('btnactive');
  $(this).addClass('btnactive');
})
//For Choose Morning or Evening

//For Choose 2D Number
$(document).on('click', '.number', function () {
  // console.log($('#morning').hasClass('btnactive'));
  if ($('#evening').hasClass('btnactive') == true) {
    $(this).addClass('chosennumberevening');
    sessionStorage.setItem("ampm", "pm")
  }
  else {
    sessionStorage.setItem("ampm", "am")
    $(this).addClass('chosennumbermorning');
  }
  $(this).addClass('chosennumber');
  $(this).removeClass('number');
  array2D.push($(this).html());
  console.log(array2D);
})
//For Choose 2D Number

//For UnChoose 2D Number 
$(document).on('click', '.chosennumber', function () {
  $(this).removeClass('chosennumber').removeClass('chosennumbermorning').removeClass('chosennumberevening').addClass('number');
  var removenumber = $(this).html();
  array2D = $.grep(array2D, function (value) {
    return value != removenumber;
  });
  console.log(array2D);
})
//For UnChoose 2D Number 

//For Clear All 2D Number
$(document).on('click', '#clear', function () {
  array2D = [];
  $(".chosennumber").removeClass('chosennumber').removeClass('chosennumbermorning').removeClass('chosennumberevening').addClass('number');
  console.log(array2D);
})
//For Clear All 2D Number

//For Amount
$(document).on('click', '#bet', function () {
  $("#currentbalance").html(sessionStorage.getItem("Userbalance") + " Ks");
  $('#betlist tbody').empty();
  for (var i = 0; i < array2D.length; i++) {
    j = i + 1;
    $('#betlist tbody').append(
      "<tr>" +
      "<td >" + j + "</td>" +
      "<td style='text-align:center;'>" + array2D[i] + "</td>" +
      "<td style='text-align:center;'><input type='text' id=" + array2D[i] + " class='form-control betinput' style='border:none'/></td>" +
      "</tr>");
  }
  $('#betmodal').modal('show');
})
//For Amount

var prebet = 0;
//For Change Number
$(document).on('keyup', '.betinput', function () {
  $(this).val(EnglishNumber($(this).val()));
})
//For Change Number

//For Change Current Balance
$(document).on('focus', '.betinput', function () {
  prebet = $(this).val();
  // console.log(prebet);  
})


$(document).on('change', '.betinput', function () {
  var currentbalance = $("#currentbalance").html().split(" ");

  var bet = $(this).val();
  if (bet !== "") {
    if (prebet !== "") {
      $("#currentbalance").html((parseInt(currentbalance[0]) + parseInt(prebet) - parseInt(bet)).toString() + " Ks");
    }
    else {
      $("#currentbalance").html((parseInt(currentbalance[0]) - parseInt(bet)).toString() + " Ks");
    }
  }
  else {
    $("#currentbalance").html((parseInt(currentbalance[0]) + parseInt(prebet)).toString() + " Ks");
  }
  var checkbalance = $("#currentbalance").html().split(" ");
  if (parseInt(checkbalance[0]) <= 0) {
    $(this).addClass("chosennumberevening");
  }
})

//For Change Current Balance


//For Bet
$(document).on('click', '#Bet2D', function () {
  var obj = {};
  for (var i = 0; i < array2D.length; i++) {
    obj.user_id = sessionStorage.getItem("Userid"),
      obj.num = array2D[i];
    obj.bet = $('#betlist tbody').children().eq(i).children().eq(2).children(0).val();
    obj.date = ShowDate(),
      obj.ampm = (sessionStorage.getItem("ampm")).toLowerCase();
    console.log(obj);
    var settings = {
      "url": "https://track-gps-backend.herokuapp.com/api/v1/bets",
      "method": "POST",
      "timeout": 0,
      "Content-Type": "application/json",
      "data": obj,
    };

    $.ajax(settings).done(function (response) {
      if (response.status == true) {
        obj = {};
        console.log("success");
      }

    });
  }
})
//For Bet

//For Cancel 
$(document).on('click', '#Cancel', function () {
  $('#betlist tbody').empty();
  $('#betmodal').modal('hide');
})
 //For Cancel



// //For Bet
//     $(document).on('click', '#Bet2D', function () {
//       var BetArray=[];
//       var obj={};
//       for(var i=0;i<array2D.length;i++){
//         obj.num = array2D[i];
//         obj.amount= $('#betlist tbody').children().eq(i).children().eq(2).children(0).val();
//         BetArray[i]=obj;
//         obj={};
//         }
//       console.log(BetArray);

//     })
// //For Bet