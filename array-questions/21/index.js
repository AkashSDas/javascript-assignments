const season = prompt("Enter the month of the year: ");

if (season === "September" || season === "October" || season === "November") {
  console.log("The season is Autumn");
} else if (
  season === "December" ||
  season === "January" ||
  season === "February"
) {
  console.log("The season is Winter");
} else if (season === "March" || season === "April" || season === "May") {
  console.log("The season is Spring");
} else if (season === "June" || season === "July" || season === "August") {
  console.log("The season is Summer");
} else {
  console.log("Invalid input");
}
