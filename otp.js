const inputs=document.querySelectorAll(".otp-field input");

inputs.forEach((input,index)=>{
    input.dataset.index=index;
    input.addEventListener("paste",handleOnPasteOtp);
    input.addEventListener("keyup",handleOtp);
    // console.log(input.dataset.index);
});

function handleOnPasteOtp(e){
    
}

function handleOtp(e){

}