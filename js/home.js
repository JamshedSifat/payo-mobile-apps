const validPin =1234

document.getElementById('Add-Money-btn').addEventListener('click',function(e){
    e.preventDefault()
    
    const bank = document.getElementById('bank').value

    const accountNum =document.getElementById('account-num').value

    const addAmount = parseInt(document.getElementById('add-amount').value)

    const addPin =parseInt(document.getElementById('add-pin').value)

    const availlableBalance = parseInt(document.getElementById('Availlable-balance').innerText);


    if(accountNum.length <11){
        alert('valid number')
        return
    }

    if(addPin !== validPin){
        alert('please provide valid pin Number')
        return
    }

    const totalNewAvaillableBalance= addAmount + availlableBalance;
  document.getElementById('Availlable-balance').innerText = totalNewAvaillableBalance
    
})

/* CashOut feature */
document.getElementById('withdrow-Money-btn').addEventListener('click',function(e){
    e.preventDefault()
    const AgentBank =parseInt(document.getElementById('agent-account-num').value)
    const amount = document.getElementById('sub-amount').value
     const availlableBalance = parseInt(document.getElementById('Availlable-balance').innerText);
     if(AgentBank<11){
        alert("Please Enter 11 Digit Number")
        return
     }
         if(addPin !== validPin){
        alert('please provide valid pin Number')
        return
    }

      const totalNewAvaillableBalance=  availlableBalance - amount;
       
     document.getElementById('Availlable-balance').innerText = totalNewAvaillableBalance
})

/* toogoling Feature */
document.getElementById('add-money-btn').addEventListener('click',function(){
    document.getElementById('cash-out-parent').style.display ="none"
    document.getElementById('add-money-parent').style.display ="block"
    document.getElementById('Transfer-money-parent').style.display ="none"
    document.getElementById('Get-bonus-parent').style.display ="none"
})
document.getElementById('cash-out-btn').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display ='none'
    document.getElementById('cash-out-parent').style.display ='block'
    document.getElementById('Transfer-money-parent').style.display ="none"
    document.getElementById('Get-bonus-parent').style.display ="none"
})
document.getElementById('transfer-money-btn').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display ='none'
    document.getElementById('cash-out-parent').style.display ='none'
    document.getElementById('Transfer-money-parent').style.display ="block"
    document.getElementById('Get-bonus-parent').style.display ="none"
})
document.getElementById('bonus-btn').addEventListener('click',function(){
   
    document.getElementById('add-money-parent').style.display ='none'
    document.getElementById('cash-out-parent').style.display ='none'
    document.getElementById('Transfer-money-parent').style.display ="none"
    document.getElementById('Get-bonus-parent').style.display ="block"
})
document.getElementById('pay-bill').addEventListener( 'click',function(){
     document.getElementById('add-money-parent').style.display ='none'
    document.getElementById('cash-out-parent').style.display ='none'
    document.getElementById('Transfer-money-parent').style.display ="none"
    document.getElementById('Get-bonus-parent').style.display ="none"
    document.getElementById('pay-bill-parent').style.display ="block"
})