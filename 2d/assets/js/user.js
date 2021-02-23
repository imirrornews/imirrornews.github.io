var array2D = [];

//For Choose Morning or Evening
$(document).on('click', '.dayornight', function () {  
  $('.dayornight').removeClass('btnactive');
  $(this).addClass('btnactive');
})
//For Choose Morning or Evening

//For Choose 2D Number
    $(document).on('click', '.number', function () {
      console.log($('#morning').hasClass('btnactive'));
      if($('#morning').hasClass('btnactive') == true){
        $(this).addClass('chosennumbermorning');
      }
      else{
      $(this).addClass('chosennumberevening');
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
      array2D =[];
      $(".chosennumber").removeClass('chosennumber').removeClass('chosennumbermorning').removeClass('chosennumberevening').addClass('number');
      console.log(array2D);
    })
//For Clear All 2D Number

//For Amount
    $(document).on('click', '#bet', function () {
      $('#betlist tbody').empty();
      for(var i=0;i<array2D.length;i++){
        j=i+1;
        $('#betlist tbody').append(
                    "<tr  id='rrA'>" +
                      "<td  id='A'>" + j+ "</td>" +
                      "<td style='text-align:center;'  id='B'>" + array2D[i]+ "</td>" +
                      "<td style='text-align:center;'  id='C'><input type='text' id=" + array2D[i] + " class='form-control' style='border:none'/></td>" +                  
                    "</tr>");
            }    
      $('#betmodal').modal('show'); 
    })
//For Amount
    
//For Bet
    $(document).on('click', '#Bet2D', function () {
      var BetArray=[];
      var obj={};
      for(var i=0;i<array2D.length;i++){
        obj.num = array2D[i];
        obj.amount= $('#betlist tbody').children().eq(i).children().eq(2).children(0).val();
        BetArray[i]=obj;
        obj={};
        }
      console.log(BetArray);
    })
//For Bet

//For Cancel 
  $(document).on('click', '#Cancel', function () {
    $('#betlist tbody').empty();
    $('#betmodal').modal('hide'); 
  })
 //For Cancel 
