// memory section 
document.getElementById('memory-8gb').addEventListener('click', function () { 
    var totalstoragecosttext = document.getElementById('storage-cost').innerText;
    var totalstoragecost = parseFloat(totalstoragecosttext);
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText = 0;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})
document.getElementById('memory-16gb').addEventListener('click', function () {
 
    var totalstoragecosttext = document.getElementById('storage-cost').innerText;
    var totalstoragecost = parseFloat(totalstoragecosttext);
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText = 180;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})
    
// // storage section 
document.getElementById('ssd256').addEventListener('click', function () {
 
    var totalstoragecost = document.getElementById('storage-cost').innerText = 0;
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})
document.getElementById('ssd512').addEventListener('click', function () {
 
    var totalstoragecost = document.getElementById('storage-cost').innerText = 100;
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})
document.getElementById('ssd1tb').addEventListener('click', function () {
 
    var totalstoragecost = document.getElementById('storage-cost').innerText = 180;
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})

// delivery option 
document.getElementById('free').addEventListener('click', function () {
 
    var totalstoragecosttext = document.getElementById('storage-cost').innerText;
    var totalstoragecost = parseFloat(totalstoragecosttext);
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText=0;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})

document.getElementById('paid').addEventListener('click', function () {
 
    var totalstoragecosttext = document.getElementById('storage-cost').innerText;
    var totalstoragecost = parseFloat(totalstoragecosttext);
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText=20;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})



//calculate total function
function calculateTotale(totalmemorycost,totalstoragecost,totaldeliverycost) {
    const  bestprice = 1299;
    var total = document.getElementById('total-price');
    var totalprice = (bestprice+totalmemorycost+totalstoragecost+totaldeliverycost);
    total.innerText = totalprice;
}

//calculate total after apply copon
document.getElementById('right-section').addEventListener('click', function () {
    var previousprice = document.getElementById('total-price').innerText;
    var cupon = document.getElementById('apply-cupon').value;
    var finaltotal = document.getElementById('final-total');

    if (cupon == 'stevekaku') {
        var discount = (previousprice*20)/100;
        finaltotal.innerText = previousprice - discount;
        
    }
    else{
        finaltotal.innerText=previousprice;
    }
    
})







