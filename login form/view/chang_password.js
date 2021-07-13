//this function will get all the values in the inputs
//and will create a valid object to be send to the server-side
function login(){
    let a = {};
    a.password = $("#changepassword").val();
    return a;
}

//
//

$("#submit").click(function(event){
                event.preventDefault();
                let logi = login();
				$.ajax({
                    url:'./backend/controllers',
					method: 'PUT',
                    contentType: 'application/json',
                    data: JSON.stringify(logi),
                    success: function(response){
                        console.log(JSON.stringify(response))
                    },
                    error: function(xhr,status,error){
                        var errormessage = xhr.status + ': ' + xhr.statusText
                        alert('Error -' + errormessage);
                    }
            })
})