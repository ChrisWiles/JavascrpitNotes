/*
r - the monthly interest rate, expressed as a decimal, not a percentage. Since the quoted yearly percentage rate is not a compounded rate, the monthly percentage rate is simply the yearly percentage rate divided by 12; dividing the monthly percentage rate by 100 gives r, the monthly rate expressed as a decimal.
N - the number of monthly payments, called the loan's term, and
P - the amount borrowed, known as the loan's principal.
*/
// Math.pow(base, exponent)

function percentToDecimal(percent) {
  return percent / (100 * 12);
}

function loanTerm(x) {
  return x * 12;
}

function monthlyPayment(intrestRate, periodYears, P) {
  var r = percentToDecimal(intrestRate);
  var N = loanTerm(periodYears);
  var c = (P * r * (Math.pow((1 + r), N))) / (Math.pow((1 + r), N) - 1);
  totalCost(c, N);
  return c.toFixed(2);
}

function output(payment) {
  var htmlEl = document.getElementById('outMonthly');
  htmlEl.innerText = "$" + payment;
}

function totalCost(c, N) {
  var htmlEl = document.getElementById('outTotal');
  var x = c * N
  htmlEl.innerText = "$" + x.toFixed(2);
}

function button() {
  var P = document.getElementById('inCost').value;
  var intrestRate = document.getElementById('inAPR').value;
  var periodYears = document.getElementById('inPeroid').value;

  var c = monthlyPayment(intrestRate, periodYears, P);
  output(c);
}
