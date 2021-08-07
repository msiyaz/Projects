function register(){
    let a = {};
    a.username = $("#regusername").val();
    a.password = $("#regpassword").val();
    return a;
}

$("#submit").click(function(event){
     event.preventDefault();
     let reg = register();
    	$.ajax({
            url:'../backend/controller.js',
			method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(reg),
            success: function(response){
                console.log(JSON.stringify(response))
                alert('you have registered' );
            },
            error: function(xhr,status,error){
                var errormessage = xhr.status + ': ' + xhr.statusText
                alert('Error -' + errormessage);
            }
    })
})