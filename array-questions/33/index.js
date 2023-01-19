function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return Math.round(bmi);
}
