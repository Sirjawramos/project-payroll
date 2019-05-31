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


    //Delete Button Function
    $('#myTable').delegate('.delete-btn', 'click', function(){
        var del = $(this).attr('data-id');

        //Delete Method Call
        $.ajax({
            method: "DELETE",
            url: site + del,
            success: function(){
                alert('Employee is no longer on the database');
            },
            error: function() {
                alert('Failed to delete');
            }
        });
    });    


    // Get Method to Populate Pay Tab
    $.getJSON(site, function(data){
        var employeePay = '';
        $.each(data, function(key, val){
            employeePay += '<tr>';
            employeePay += "<td id=''"+key+"''>"+val.name+"</td>";
            employeePay += "<td id=''"+key+"''>"+val.role+"</td>";
            employeePay += "<td id=''"+key+"''>"+val.level+"</td>";
            employeePay += "<td id=''"+key+"''>"+val.qualification+"</td>";
            employeePay += "<td id=''"+key+"''>"+val.paid+"</td>";
            employeePay += '<td <input class= "pay-btn btn-success" data-id="';
            employeePay += val.id + '" type= "button"">Pay</td>';
            employeePay += '<td <input class= "reset-btn btn-success" data-id="';
            employeePay += val.id + '" type= "button"">Reset</td>';
            employeePay += '</tr>';
        });

        $('#payTable').append(employeePay);

    });

    //Pay Button Function
    $('#payTable').delegate('.pay-btn', 'click', function(){
        var pay = $(this).attr('data-id');

        //Patch Method Call
        $.ajax({
            method: "PATCH",
            url: site + pay,
            data: {paid: "Yes"},
            success: function(){
                alert('Employee have been paid');
            },
            error: function() {
                alert('Failed to pay Employess');
            }
        });

    });

    //Reset Button Function
    $('#payTable').delegate('.reset-btn', 'click', function(){
        var reset = $(this).attr('data-id');

        //Patch Method Call
        $.ajax({
            method: "PATCH",
            url: site + reset,
            data: {paid: "No"},
            success: function(){
                alert('Has been Reset');
            },
            error: function() {
                alert('Failed to Rest');
            }
        });

    });

    //Get Function to Populate Salary Structure Table
    $.getJSON(salary, function(data){
        var employeeSal = '';
        $.each(data, function(key, val){   
            employeeSal += '<tr>';
            employeeSal += "<td id=''"+key+"''>"+val.id+"</td>";
            employeeSal += "<td id=''"+key+"''>"+val.salary+"</td>";
            employeeSal += '</tr>';
        });

        $('#salTable').append(employeeSal);

    });


    //Update Button Function
    $('#btn-update').on('click', function(event){
        event.preventDefault();
        var name = $('#update-name').val();
        var address = $('#update-add').val();
        var role = $('#update-role').val();
        var gender = $('#update-gender').val();
        var phone = $('#update-phone').val();
        var email = $('#update-email').val();
        var level = $('#update-level').val();
        var qualification = $('#update-qual').val();
        var paid = $('#update-paid').val();
        var id = $('#update-id').val();

        var updateEmployee = {
            name: name,
            address: address,
            role: role,
            gender: gender,
            phone: phone,
            email: email,
            level:  level,
            qualification: qualification,
            paid: paid
        };

        //Put Method Call
        $.ajax({
            method: "PUT",
            url: site + id,
            data: updateEmployee,
            cache: false,
            success: function(){
                alert("Employee Infomation has been updated!");
                $('#updateform').get(0).reset();

            },
            error: function(){
                alert("Failed to update");
            }
        });

    });
})
