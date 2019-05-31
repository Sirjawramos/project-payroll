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


    //Create Button Function to create new Employee
    $('#btn-create').on('click', function(event){
        event.preventDefault();
        var name = $('#name').val();
        var address = $('#address').val();
        var role = $('#role').val();
        var gender = $('#gender').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var level = $('#level').val();
        var qualification = $('#qualification').val();


        var newEmployee = {
            name: name,
            address: address,
            role: role,
            gender: gender,
            phone: phone,
            email: email,
            level:  level,
            qualification: qualification,
            paid: "No"

        };

        console.log(newEmployee);

        //Post Method Being Applied
        $.ajax({
            method: "POST",
            url: site,
            data: newEmployee,
            cache: false,
            success: function(){
                alert("New Employee has been registered!");
                $('#myform').get(0).reset();

            },
            error: function(){
                alert("Failed to create");
            }
        });

    });
   

    // Search Button Function
    $("#btnSearch").click(function() {
        $("#myTable tbody tr").show();
        if($("#search").val().length > 0) {
            $("#myTable tbody tr").filter(function(index, elm) {
                return $(elm).html().toUpperCase().indexOf($("#search").val().toUpperCase()) < 0;
            }).hide();
        }
    });

})
