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

