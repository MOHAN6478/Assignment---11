const Form = document.getElementById("form");

const newpassword = document.getElementById("newpass");
const confirmpassword = document.getElementById("confirmpass");

newpasserror = document.getElementById("newPasswordErrMsg");
samepasserror = document.getElementById("confirmPasswordErrMsg");

comparepassword = (npass,cpass) => {

    if(npass === ""){
        newpasserror.textContent = "*required";
    }

    if(cpass === ""){
        samepasserror.textContent = "*required";
    }

    if(npass === cpass){
        console.log("correct");
    }
    else{
        console.log("Incorrect");
    }
}

Form.addEventListener("submit",(m)=>{
    m.preventDefault();

    //compare to password  same or Not same

    Newpass = newpassword.value;
    Conpass = confirmpassword.value;

    comparepassword(Newpass,Conpass);

    Form.reset();
})