const formEl = document.querySelector('.form');
const personEl = document.getElementById('person');
const hourEl = document.getElementById('hours');
const totalSumEl = document.querySelector(".total-sum");
const sumPerPersonEl = document.querySelector(".sum-per-person");

formEl.addEventListener('submit', onSubmit);


function onSubmit(event) {
    event.preventDefault();
    calculatePrice()
}

function calculatePrice() {
  const numOfPeople = parseInt(personEl.value);
  const numOfHours = parseInt(hourEl.value);

  const pricePerHour = 120;
  const pricePerTwo = 200;
  const pricePerThree = 300;
  
const additionalHourPrice = 100;
const additionalPersonPrice = 50;

  let totalPrice = 0;

  // if (numOfHours === 1) {
  //   totalPrice += pricePerHour;

  // } else if (numOfHours === 2) {
  //   totalPrice += pricePerTwo;

  // } else if (numOfHours === 3) {
  //   totalPrice += pricePerThree;

  // } else {
  //   totalPrice = (numOfHours - 3) * additionalHourPrice + 300;
  // }
  switch (numOfHours) {
    case 1:
      totalPrice += pricePerHour;
      break;
    case 2:
      totalPrice += pricePerTwo;
      break;
    case 3:
      totalPrice += pricePerThree;
      break;
     default:
      totalPrice = (numOfHours - 3) * additionalHourPrice + 300;
      break;     
  }

  if (numOfPeople > 4) {
    totalPrice = (numOfPeople - 4) * additionalPersonPrice + totalPrice;
  }

  const finalPrice = totalPrice;
  const finalPricePerPerson = finalPrice / numOfPeople;

  totalSumEl.textContent = finalPrice;
  sumPerPersonEl.textContent = finalPricePerPerson;
}
