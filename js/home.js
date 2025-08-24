const validPin =1234
const transactionData =[]

 //function to get input values
function getInputValueNumber(id){
    const InputFieldValueNumber = parseInt(document.getElementById(id).value)
    return InputFieldValueNumber
}
//function to get  innertext
function getInnerText(id){
    const elementValuesNumber = parseInt(document.getElementById(id).innerText)
    return elementValuesNumber
}
// function to set InnerText
function setInnerText(value){
    const availlableBalance = document.getElementById("Availlable-balance").innerText =value
    return availlableBalance
}

//add money function
document.getElementById('Add-Money-btn').addEventListener('click',function(e){
    e.preventDefault()
    
    const bank = document.getElementById('bank').value

    const accountNum = getInputValueNumber ('account-num')

    const addAmount =  getInputValueNumber ('add-amount') 

    const addPin = getInputValueNumber ('add-pin') 

    const availlableBalance =getInnerText('Availlable-balance') 


    if(accountNum.length <11){
        alert('valid number')
        return
    }

    if(addPin !== validPin){
        alert('please provide valid pin Number')
        return
    }

    const totalNewAvaillableBalance= addAmount + availlableBalance;
  
    setInnerText(totalNewAvaillableBalance)

    const data ={
        transactionType: 'Add Money',
        bank: bank,
        date: new Date().toLocaleTimeString(),

    }
    transactionData.push(data)
})

/* CashOut feature */
document.getElementById('withdrow-Money-btn').addEventListener('click',function(e){
    e.preventDefault()
    const AgentBank =getInputValueNumber('agent-account-num') 

    const amount =getInputValueNumber('sub-amount') 
  
     const addPin = getInputValueNumber ('add-cashout-pin')

      const availlableBalance =getInnerText('Availlable-balance') 
     
     if(AgentBank.length <11){
        alert('please valid number')
        return
    }

    if(addPin !== validPin){
        alert('please provide valid pin Number')
        return
    }

     const totalNewAvaillableBalance=  availlableBalance - amount;
       
     setInnerText(totalNewAvaillableBalance)

       const data ={
        transactionType: 'cash Out',
        bank: bank,
        date: new Date().toLocaleTimeString()

    }
    transactionData.push(data)
    
})
/* Transection Money feature */

document.getElementById('transaction-btn').addEventListener('click',function(e){
    e.preventDefault()
   const transactionContainer = document.getElementById('transection-container')
   transactionContainer.innerText =''
   for(const data of transactionData){
    const div =document.createElement('div')
    div.innerHTML= `
    <div class=" flex justify-between items-center max-w-lg mx-auto p-4">
    <h1 class="font-bold">Transaction History</h1>
    <p>View All</p>
  </div>
    <div class="max-w-lg mx-auto mt-4 bg-white rounded-xl  p-3 flex justify-between items-center border-b-1 border-gray-300 ">
    <div class="flex items-center gap-4  border-gray-300 py-3">
      <div class=" p-3 rounded-full bg-[#F4F5F7]">
        <img class="mx-auto" src="./assets/wallet1.png" alt="">
      </div>
      <div class="">
        <h1>${data.transactionType}</h1>
        <p>${data.bank}</p>
        <p>${data.date}</p>
        
      </div>
    </div>
      <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>
 
    `

   transactionContainer.appendChild(div)
   }

})


//function to toggole
function handleToggle(id){
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display ="none"
    }
    document.getElementById(id).style.display="block"
}
/* toogoling Feature */
document.getElementById('add-money-btn').addEventListener('click',function(e){
 
     handleToggle('add-money-parent')
    document.getElementById('transection-container').style.display="none"

     const formBtns =document.getElementsByClassName("form-btn")
     
     for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
     }
     document.getElementById("add-money-btn").classList.remove("border-gray-300")
     document.getElementById("add-money-btn").classList.add("border-[#0874f2]","bg-[#0874f20d]")
  
})
document.getElementById('cash-out-btn').addEventListener('click',function(){

        handleToggle('cash-out-parent')
        document.getElementById('transection-container').style.display="none"

    const formBtns =document.getElementsByClassName('form-btn')
     
     for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
     }
     document.getElementById("cash-out-btn").classList.remove("border-gray-300")
     document.getElementById("cash-out-btn").classList.add("border-[#0874f2]","bg-[#0874f20d]")


})
document.getElementById('transfer-money-btn').addEventListener('click',function(){
       handleToggle('Transfer-money-parent')

    const formBtns =document.getElementsByClassName('form-btn')
     
     for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
     }
     document.getElementById("transfer-money-btn").classList.remove("border-gray-300")
     document.getElementById("transfer-money-btn").classList.add("border-[#0874f2]","bg-[#0874f20d]")
 
})
document.getElementById('bonus-btn').addEventListener('click',function(){

    handleToggle('Get-bonus-parent')

    
    const formBtns =document.getElementsByClassName('form-btn')
     
     for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
     }
     document.getElementById("bonus-btn").classList.remove("border-gray-300")
     document.getElementById("bonus-btn").classList.add("border-[#0874f2]","bg-[#0874f20d]")
    
})
document.getElementById('pay-bill').addEventListener('click',function(){

    handleToggle('pay-bill-parent')
    
    const formBtns =document.getElementsByClassName('form-btn')
     
     for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
     }
     document.getElementById("pay-bill").classList.remove("border-gray-300")
     document.getElementById("pay-bill").classList.add("border-[#0874f2]","bg-[#0874f20d]")
    
    
})
document.getElementById('transaction-btn').addEventListener('click',function(){
    document.getElementById('transection-container').style.display="block"

     handleToggle('transaction-parent')
    
    
    const formBtns =document.getElementsByClassName('form-btn')
     
     for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
     }
     document.getElementById("transaction-btn").classList.remove("border-gray-300")
     document.getElementById("transaction-parent").classList.add("border-[#0874f2]","bg-[#0874f20d]")
    
    
})

