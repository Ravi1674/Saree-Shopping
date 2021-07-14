$(function(){
                
    $('#fname').blur(function(){
        valNameNew();
    });
    $('#lname').blur(function(){
        valLastNameNew();
    });
    $('#email').blur(function(){
        valEmailNew();
    });
    $('#mno').blur(function(){
        valMnoNew();
    });
    $('#pw').blur(function(){
        valPassNew();
    });

    $('#cpw').blur(function(){
        valConPassNew();
    });

    $('#showPw').change(function(){
        let chk = $("#showPw");
        console.log(chk);
        if(chk.prop('checked')){
            $('#pw').attr("type","text");
            $('#cpw').attr("type","text");
        }
        else{
            $('#pw').attr("type","password");
            $('#cpw').attr("type","password");
        }
    });

    $('#regForm').submit(function(){
        console.log("In submit event")
        let fname = valNameNew();
        let lname = valLastNameNew();
        let email = valEmailNew();
        let mno = valMnoNew();
        let pass = valPassNew();
        let cpass = valConPassNew();
    
        if (fname && lname && email && mno && pass && cpass) {
            return true;
        }
        else{
            return false;
        }
    });
});
function valNameNew(){
    $('#fnameError').html("");
    let fname = $('#fname').val();
    if (fname == "") {
        $('#fnameError').html("this field is required");
        return false;
    }
    return true;
}
function valLastNameNew(){
    $('#lnameError').html("");
    let lname = $('#lname').val();
    if (lname == "") {
        $('#lnameError').html("this field is required");
        return false;
    }
    return true;
}
function valEmailNew(){
    $('#emailError').html("");
    let em = $('#email').val();
    if(em == ""){
        $('#emailError').html("this field is required");
        return false;
    }
    if(!em.includes('@' && '.')){
        $('#emailError').html("Enter correct email");
    }
    return true;
}
function valMnoNew(){
    $('#mnoError').html("");
    $('#mnoError1').html("");
    let mobile = $('#mno').val();
    if (mobile == "") {
        $('#mnoError').html("this field is required");
    }
    else{
        if(isNaN(mobile)){
            $('#mnoError').html("only digits are allowed");
            return false;
        }
        if(mobile.length!=10){
            $('#mnoError1').html("mobile number should have 10 digits");
            return false;
        }
    }
    return true;
}

function valPassNew(){
    $('#pwError').html("");
    let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{4,})");

    let pass = $('#pw').val();
    if (pass == "") {
        $('#pwError').html("this field is required");
        return false;
    }
    else{
        if(pattern.test(pass)!=true){
            console.log(pattern.test(pass));
            $('#pwError').html("keep one special char, character and number");
            return false;
        }
    }
    return true;
}

function valConPassNew(){
    $('#cpwError').html("");
    let pass = $('#pw').val();
    let conpass = $('#cpw').val();

    if (conpass == "") {
        $('#cpwError').html("this field is required");
        return false;
    }
    if(pass != conpass){
        $('#cpwError').html("Both password should match");
        return false;
    }
    return true;
}