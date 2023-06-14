$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true

            },
            password:{
                minlength:6
            },
            day:{
                required:true,
                
            },
            Month:{
                required: true
            },
            sex:{
                required:true
            }

        },
        messages:{
            fname:{
            required:"Enter first name",
            minlength:"enter atleast 4 characters"
            }
        }
            
        
        
        
    })
})