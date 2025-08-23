//login button functionality
document.getElementById('Login-btn').addEventListener('click',function(e){
    e.preventDefault()
    const mobileNumber = 01966147075
    const PinNumber =1234
    const mobileNumberValue =document.getElementById('mobile-Num').value
    const mobileNumberValueConverted =parseInt(mobileNumberValue)
    const PinNumberValue = document.getElementById('Pin-Num').value
    const PinNumberValueConverted = parseInt(PinNumberValue)
   console.log(mobileNumberValueConverted,PinNumberValueConverted)

   if(mobileNumberValueConverted===mobileNumber && PinNumberValueConverted===PinNumber){
    window.location.href="./home.html"
   }
   else{
   alert("Please Try Again")
   }

})