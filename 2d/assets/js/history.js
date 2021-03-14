$(document).ready(function () {
    $('#historytbl tbody').append(
        "<tr>" +
        "<td>" + '1' + "</td>" +
        "<td>" + '12-2-2021' + "</td>" +
        "<td>" + '1000' + "</td>" +
        "<td>" + '500' + "</td>" +
        "<td><input type='button' value='View' userid=" + sessionStorage.getItem("Userid") + " date=" + '12-2-2021' + " class='viewdetail'/></td>" +
        "</tr>"
    )

    // $('#historytbl tbody').empty();
    // var obj = {};
    // obj.user_id = sessionStorage.getItem("Userid");
    // obj.name = sessionStorage.getItem("Username");

    // var settings = {
    //     "url": "https://track-gps-backend.herokuapp.com/api/v1/bets",
    //     "method": "POST",
    //     "timeout": 0,
    //     "Content-Type": "application/json",
    //     "data": obj,
    // };

    // $.ajax(settings).done(function (response) {
    //     if (response.status == true) {
    //         for (var i = 0; i < response.data[0].length; i++) {
    //             $('#historytbl tbody').append(
    //                 "<tr>" +
    //                 "<td>" + '1' + "</td>" +
    //                 "<td>" + '12-2-2021' + "</td>" +
    //                 "<td>" + '1000' + "</td>" +
    //                 "<td>" + '500' + "</td>" +
    //                 "<td><input type='button' value='View' userid=" + sessionStorage.getItem("Userid") + " date=" + '12-2-2021' + " class='viewdetail'/></td>" +
    //                 "</tr>"
    //             )
    //         }
    //     }
    // });


});

$(document).on('click', '.viewdetail', function () {
    $('#showdate').html($(this).attr("date"));
    $('#detaillist tbody').empty();
    $('#detaillist tbody').append(
        "<tr>" +
        "<td>" + '1' + "</td>" +
        "<td>" + '56' + "</td>" +
        "<td>" + '100' + "</td>" +
        "<td>" + 'aiwefjaifan' + "</td>" +
        "</tr>"
    )
    
    // var obj = {};
    // obj.user_id = sessionStorage.getItem("Userid");
    // obj.date = $(this).attr("date");

    // var settings = {
    //     "url": "https://track-gps-backend.herokuapp.com/api/v1/bets",
    //     "method": "POST",
    //     "timeout": 0,
    //     "Content-Type": "application/json",
    //     "data": obj,
    // };

    // $.ajax(settings).done(function (response) {
    //     if (response.status == true) {
    //      var num=1;
    //         for (var i = 0; i < response.data[0].length; i++) {
    //             $('#historytbl tbody').append(
    //                 "<tr>" +
    //                 "<td>" + num + "</td>" +
    //                 "<td>" + '12-2-2021' + "</td>" +
    //                 "<td>" + '1000' + "</td>" +
    //                 "<td>" + '500' + "</td>" +
    //                 "</tr>"
    //             )
    //          num++;
    //         }
    //     }
    // });
    $('#detail').modal('show');
})