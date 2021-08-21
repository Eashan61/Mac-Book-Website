// memory button 1
const ramPriceTotal = document.getElementById('ramprice-total');
document.getElementById('ram-btn1').addEventListener('click', function () {
 const ram1Input = 0;

 //console.log(ram1Input);
 //show ram price

 const ramPriceTotalText = ramPriceTotal.innerText;
 ramPriceTotal.innerText = ram1Input;
 console.log(ramPriceTotalText);
 calculation();
});
//memory button 2
document.getElementById('ram-btn2').addEventListener('click', function () {
 const ram2Input = 180;

 //console.log(ram1Input);
 //show ram price
 const ramPriceTotal = document.getElementById('ramprice-total');
 const ramPriceTotalText = ramPriceTotal.innerText;
 ramPriceTotal.innerText = ram2Input;
 console.log(ramPriceTotalText);
 calculation()
});

// storage button 1
const drivePriceTotal = document.getElementById('driveprice-total');
document.getElementById('drive-btn1').addEventListener('click', function () {
 const drive1Input = 0;

 //console.log(drive1Input);
 //show drive price

 const drivePriceTotalText = drivePriceTotal.innerText;
 drivePriceTotal.innerText = drive1Input;
 console.log(drivePriceTotalText);
 calculation()
});

// storage button 2
document.getElementById('drive-btn2').addEventListener('click', function () {
 const drive2Input = 100;

 //console.log(drive2Input);
 //show drive price
 const drivePriceTotal = document.getElementById('driveprice-total');
 const drivePriceTotalText = drivePriceTotal.innerText;
 drivePriceTotal.innerText = drive2Input;
 console.log(drivePriceTotalText);
 calculation()
});

// storage button 3
document.getElementById('drive-btn3').addEventListener('click', function () {
 const drive3Input = 180;

 //console.log(drive3Input);
 //show drive price
 const drivePriceTotal = document.getElementById('driveprice-total');
 const drivePriceTotalText = drivePriceTotal.innerText;
 drivePriceTotal.innerText = drive3Input;
 console.log(drivePriceTotalText);
 calculation()
});

// delivery button 1
const deliveryPriceTotal = document.getElementById('delivery-total');
document.getElementById('deli-btn1').addEventListener('click', function () {
 const deli1Input = 0;

 //console.log(deli1Input);
 //show Delivery price

 const deliveryPriceTotalText = deliveryPriceTotal.innerText;
 deliveryPriceTotal.innerText = deli1Input;
 console.log(deliveryPriceTotalText);
 calculation()
});

// delivery button 2
document.getElementById('deli-btn2').addEventListener('click', function () {
 const deli2Input = 20;

 //console.log(deli2Input);
 //show Delivery price
 const deliveryPriceTotal = document.getElementById('delivery-total');
 const deliveryPriceTotalText = deliveryPriceTotal.innerText;
 deliveryPriceTotal.innerText = deli2Input;
 console.log(deliveryPriceTotalText);
 calculation()
});



//show total price

let totalPrice = document.getElementById('total-price');

let total = document.getElementById('total');


function calculation() {
 let sum = 1299 + parseInt(ramPriceTotal.innerText) + parseInt(drivePriceTotal.innerText) + parseInt(deliveryPriceTotal.innerText);
 totalPrice.innerText = sum;
 total.innerText = sum;
}


//adding cupon

document.getElementById('cupon').addEventListener('click', function (e) {
 e.preventDefault();

 const typedCupon = document.getElementById('typed-cupon').value;
 if (typedCupon == 'stevekaku') {

  let finalAmmout = parseInt(totalPrice.innerText) - parseInt(totalPrice.innerText) * 0.2;

  total.innerText = finalAmmout;


 } else {
  alert('invalid promo code');
 }

});


