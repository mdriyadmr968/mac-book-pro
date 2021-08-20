//memory section
function totalmemorycost(memorysize) {
    var totalstoragecosttext = document.getElementById('storage-cost').innerText;
    var totalstoragecost = parseFloat(totalstoragecosttext);
    if(memorysize == 'memory-8gb'){
        var  totalmemorycosttext = document.getElementById('memory-cost').innerText = 0;

    }
    else{
        var  totalmemorycosttext = document.getElementById('memory-cost').innerText = 180;
    } 
    var totalmemorycost = parseFloat(totalmemorycosttext);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
}
  
// storage section 
function totalstoragecost(storagesize) {
    if (storagesize == 'ssd256') {
        var totalstoragecost = document.getElementById('storage-cost').innerText = 0;
    }
    else if(storagesize == 'ssd512'){
        var totalstoragecost = document.getElementById('storage-cost').innerText = 100;
    }
    else{
        var totalstoragecost = document.getElementById('storage-cost').innerText = 180;
    }
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);   
}


// delivery option 
function totaldeliverycost(deliverytype) {
    if (deliverytype == 'free') {
        var totaldeliverycosttext = document.getElementById('delivery-cost').innerText=0;
    }
    else{
        var totaldeliverycosttext = document.getElementById('delivery-cost').innerText=20;
    }
    var totalstoragecosttext = document.getElementById('storage-cost').innerText;
    var totalstoragecost = parseFloat(totalstoragecosttext);
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
}

//total-price calculation function
function calculateTotale(totalmemorycost,totalstoragecost,totaldeliverycost) {
    const  bestprice = 1299;
    var total = document.getElementById('total-price');
    var totalprice = (bestprice+totalmemorycost+totalstoragecost+totaldeliverycost);
    total.innerText = totalprice;
}

//total price after applying cupon
document.getElementById('right-section').addEventListener('click', function () {
    var previousprice = document.getElementById('total-price').innerText;
    var cupon = document.getElementById('apply-cupon').value;
    var finaltotal = document.getElementById('final-total');

    if (cupon == 'stevekaku') {
        var discount = (previousprice*20)/100;
        finaltotal.innerText = previousprice - discount;
        document.getElementById('apply-cupon').value = '';
        
        
    }   
    else{
        finaltotal.innerText=previousprice;
        document.getElementById('apply-cupon').value = '';
        
    }  
})







