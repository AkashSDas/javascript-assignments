var dob = document.querySelector("#dob");
var years = document.querySelector("#years");
var months = document.querySelector("#months");
var days = document.querySelector("#days");
var error = document.querySelector(".error");
var desc = document.querySelector(".desc");
var age = document.querySelector(".age");
var btn = document.querySelector("#btn");
var today = new Date();

function calculateAge() {
  var birthDate = new Date(dob.value);
  var year = today.getFullYear() - birthDate.getFullYear();
  var month = today.getMonth() - birthDate.getMonth();
  var day = today.getDate() - birthDate.getDate();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    year--;
    month = 12 + month;
  }
  if (today.getDate() < birthDate.getDate()) {
    day = 31 + day;
    month--;
  }
  years.innerHTML = year;
  months.innerHTML = month;
  days.innerHTML = day;
}

function showError() {
  error.style.display = "block";
  desc.style.display = "none";
  age.style.display = "none";
}

function hideError() {
  error.style.display = "none";
  desc.style.display = "block";
  age.style.display = "block";
}

function checkDate() {
  if (dob.value === "") {
    showError();
  } else {
    hideError();
    calculateAge();
  }
}

dob.addEventListener("change", checkDate);
