//case plus
function updateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number')
    let caseNumber = caseInput.value
    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber) + 1
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1
    }
    caseInput.value = caseNumber
    //case-total
    const caseTotal = document.getElementById(product + '-total')
    caseTotal.innerText = caseNumber * price
    //calculet total
calculateTotal()
  
}
//casing-plus
document.getElementById('phone-plus').addEventListener('click', function(){
    updateCaseNumber('phone', 59, true)

})
//casing-minus
document.getElementById('phone-minus').addEventListener('click', function (){
updateCaseNumber('phone',59,false)
})
//phone-plus
document.getElementById('case-plus').addEventListener('click', function (){
  updateCaseNumber( 'case', 1219,true)
})

//phone-minus
document.getElementById('case-minus').addEventListener('click', function (){

    updateCaseNumber('case', 1219,false)   
})

function getInputValue(product){
    const phoneInput = document.getElementById(product + '-number')
    const phoneNumber = parseInt(phoneInput.value) 
    return phoneNumber
}

function calculateTotal(){
   
    
    const phoneTotal = getInputValue('phone') * 59
    const Total = getInputValue('case') * 1219
    const subTotal = phoneTotal + Total
    //update total
    //tax
    const tax = subTotal / 10
    const totalPrice = subTotal + tax
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = totalPrice
    
}
//update








