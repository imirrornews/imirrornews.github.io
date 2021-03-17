$(document).ready(function () {
    // $('#historytbl tbody').append(
    //     "<tr>" +
    //     "<td>" + '1' + "</td>" +
    //     "<td>" + '12-2-2021' + "</td>" +
    //     "<td>" + '1000' + "</td>" +
    //     "<td>" + '500' + "</td>" +
    //     "<td><input type='button' value='View' userid=" + sessionStorage.getItem("Userid") + " date=" + '12-2-2021' + " class='viewdetail'/></td>" +
    //     "</tr>"
    // )

    $('#historytbl tbody').empty();
    var obj = {};
    var user_id = sessionStorage.getItem("Userid")
    //obj.user_id = sessionStorage.getItem("Userid");
    //obj.name = sessionStorage.getItem("Username");

    var settings = {
        "url": "https://track-gps-backend.herokuapp.com/api/v1/bets",
        "method": "GET",
        "timeout": 0,
        "Content-Type": "application/json",
        "data": user_id,
    };

    $.ajax(settings).done(function (response) {
        if (response.status == true) {         
            var num=1;        
            for (var i = 0; i < response.data.length; i++) {
                $('#historytbl tbody').append(
                    "<tr>" +
                    "<td>" + num + "</td>" +
                    "<td>" +  response.data[i].date + "</td>" +
                    "<td>" + response.data[i].bet + "</td>" +                   
                    "<td><input type='button' value='View' userid=" + sessionStorage.getItem("Userid") + " date=" + response.data[i].date + " class='viewdetail'/></td>" +
                    "</tr>"
                )
                num++;
            }
        }
    });


});

$(document).on('click', '.viewdetail', function () {
    $('#showdate').html($(this).attr("date"));
    $('#detaillist tbody').empty();
    // $('#detaillist tbody').append(
    //     "<tr>" +
    //     "<td>" + '1' + "</td>" +
    //     "<td>" + '56' + "</td>" +
    //     "<td>" + '100' + "</td>" +
    //     "<td>" + 'aiwefjaifan' + "</td>" +
    //     "</tr>"
    // )
    
    var obj = {};
    obj.user_id = sessionStorage.getItem("Userid");
    obj.date = $(this).attr("date");
    var settings = {
        "url": "https://track-gps-backend.herokuapp.com/api/v1/bets",
        "method": "GET",
        "timeout": 0,
        "Content-Type": "application/json",
        "data": obj,
    };

    $.ajax(settings).done(function (response) {
        if (response.status == true) {
         var j=1;
            for (var i = 0; i < response.data.length; i++) {
                $('#detaillist tbody').append(
                    "<tr>" +
                    "<td>" + j + "</td>" +
                    "<td>" + response.data[i].num + "</td>" +  
                    "<td>" + response.data[i].bet + "</td>" +
                    "<td>" + checkampm(response.data[i].ampm) + "</td>" +
                    "</tr>"
                )
             j++;
            }
        }
    });
    $('#detail').modal('show');
})

var state;
function checkampm(ampm){
    if(ampm=="am"){
        state="Morning";
    }
    else{
        state="Evening";
    }
    return state;
}