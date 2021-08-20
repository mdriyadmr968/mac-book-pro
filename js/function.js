const  bestprice = 1299;
// totalmemorycost = 0;
// totalstoragecost = 0;
// totaldeliverycost = 0;


// memory section 
document.getElementById('memory-8gb').addEventListener('click', function () {
 
    var totalstoragecosttext = document.getElementById('storage-cost').innerText;
    var totalstoragecost = parseFloat(totalstoragecosttext);
    console.log(totalstoragecost);
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText = 300;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    console.log(totalmemorycost);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    // console.log(totaldeliverycost);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})
document.getElementById('memory-16gb').addEventListener('click', function () {
 
    var totalstoragecosttext = document.getElementById('storage-cost').innerText;
    var totalstoragecost = parseFloat(totalstoragecosttext);
    console.log(totalstoragecost);
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText = 700;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    console.log(totalmemorycost);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    // console.log(totaldeliverycost);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})
    
// // storage section 
document.getElementById('ssd256').addEventListener('click', function () {
 
    var totalstoragecost = document.getElementById('storage-cost').innerText = 300;
    console.log(totalstoragecost);
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    console.log(totalmemorycost);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    console.log(totaldeliverycost);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})
document.getElementById('ssd512').addEventListener('click', function () {
 
    var totalstoragecost = document.getElementById('storage-cost').innerText = 500;
    console.log(totalstoragecost);
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    console.log(totalmemorycost);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    console.log(totaldeliverycost);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})
document.getElementById('ssd1tb').addEventListener('click', function () {
 
    var totalstoragecost = document.getElementById('storage-cost').innerText = 1000;
    console.log(totalstoragecost);
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    console.log(totalmemorycost);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    console.log(totaldeliverycost);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})

// delivery option 
document.getElementById('free').addEventListener('click', function () {
 
    var totalstoragecosttext = document.getElementById('storage-cost').innerText;
    var totalstoragecost = parseFloat(totalstoragecosttext);
    console.log(totalstoragecost);
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    console.log(totalmemorycost);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText=0;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    // console.log(totaldeliverycost);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})

document.getElementById('paid').addEventListener('click', function () {
 
    var totalstoragecosttext = document.getElementById('storage-cost').innerText;
    var totalstoragecost = parseFloat(totalstoragecosttext);
    console.log(totalstoragecost);
    var  totalmemorycosttext = document.getElementById('memory-cost').innerText;
    var totalmemorycost = parseFloat(totalmemorycosttext);
    console.log(totalmemorycost);
    var totaldeliverycosttext = document.getElementById('delivery-cost').innerText=20;
    var totaldeliverycost = parseFloat(totaldeliverycosttext);
    // console.log(totaldeliverycost);
    calculateTotale(totalmemorycost,totalstoragecost ,totaldeliverycost);
    
})



//calculate total
function calculateTotale(totalmemorycost,totalstoragecost,totaldeliverycost) {
    var total = document.getElementById('total-price');
    var totalprice = (bestprice+totalmemorycost+totalstoragecost+totaldeliverycost);
    total.innerText = totalprice;
    console.log(totalprice);
}


// //storage section

// document.getElementById('ssd256').addEventListener('click', function () {
//     var memorycost = document.getElementById('storage-cost');
//     memorycost.innerText = 0;

// })

// document.getElementById('ssd512').addEventListener('click', function () {
//     var memorycost = document.getElementById('storage-cost');
//     memorycost.innerText = 100;

// })

// document.getElementById('ssd1tb').addEventListener('click', function () {
//     var memorycost = document.getElementById('storage-cost');
//     memorycost.innerText = 180;

// })

// // delivery section 
// document.getElementById('free').addEventListener('click', function () {
//     var memorycost = document.getElementById('delivery-cost');
//     memorycost.innerText = 0;

// })
// document.getElementById('paid').addEventListener('click', function () {
//     var memorycost = document.getElementById('delivery-cost');
//     memorycost.innerText = 20;

// })


// total section 




