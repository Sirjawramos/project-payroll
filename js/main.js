$(function(){ 

    var site = 'http://localhost:3000/users/'; //database/users
    var salary = 'http://localhost:3000/salary/'; //database/salary

    //Ajax Get Function To Populate Main Table
    $.getJSON(site, function(data){
        var employeeData = '';
        $.each(data, function(key, val){   
            employeeData += '<tr>';
            employeeData += "<td id=''"+key+"''>"+val.id+"</td>";
            employeeData += "<td id=''"+key+"''>"+val.name+"</td>";
            employeeData += "<td id=''"+key+"''>"+val.address+"</td>";
            employeeData += "<td id=''"+key+"''>"+val.phone+"</td>";
            employeeData += "<td id=''"+key+"''>"+val.email+"</td>";
            employeeData += "<td id=''"+key+"''>"+val.role+"</td>";
            employeeData += '<td <input class= "delete-btn btn-block btn-success" data-id="';
            employeeData += val.id + '" type= "button"">Delete</td>';
            employeeData += '</tr>';
        });

        $('#myTable').append(employeeData);

    });

})
