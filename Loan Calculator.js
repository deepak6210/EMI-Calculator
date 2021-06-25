let slider1 = document.getElementById("amount");
let slider2 = document.getElementById("interest");
let slider3 = document.getElementById("year");
let output1 = document.getElementById("demo1");
let output2 = document.getElementById("demo2");
let output3 = document.getElementById("demo3");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;

slider1.oninput = function () {
  output1.innerHTML = this.value;
}
slider2.oninput = function () {
  output2.innerHTML = this.value;
}
slider3.oninput = function () {
  output3.innerHTML = this.value;
}
document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {

  const UIamount = slider1.value;
  const UIinterest = slider2.value;
  const UIyears = slider3.value;

  const principal = parseFloat(UIamount);
  const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears) * 12;

  //Compute monthly Payment

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  //Compute Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Compute Total Payment

  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  //Show results

  document.getElementById("monthlyPayment").innerHTML = "₹ " + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "₹ " + totalInterest;

  document.getElementById("totalPayment").innerHTML = "₹ " + totalPayment;
  e.preventDefault();
}
