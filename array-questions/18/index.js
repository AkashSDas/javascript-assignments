const age = prompt("Enter your age: ");
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You are left with ${18 - age} years to drive`);
}
