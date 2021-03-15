$(document).ready(function () {
    var settings = {
      "url": "http://track-gps-backend.herokuapp.com/api/v1/users",
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    
    };
  
    $.ajax(settings).done(function (response) {
      if (response.status == true) {  
       var num=1;
       for(var i=0;i<response.data.length;i++){  
        if(response.data[i].role!="admin") {       
        $('#userlilst tbody').append(
            "<tr>"+
            "<td style='vertical-align:middle;text-align:right;'>" +num+ "</td>"+
            "<td style='vertical-align:middle;text-align:left;'>" + response.data[i].name + "</td>"+
            "<td style='vertical-align:middle;text-align:right'>" + response.data[i].balance + "</td>"+
            "<td><input type='button' id='" + response.data[i]._id + "'class='btn btn-info' value='Check'/></td>"+
            "</tr>"
          )
          num++;
       }
      }
      }  
  
    });  
  });