
let labelDay = document.getElementById("labelDay"),
  labelMonth = document.getElementById("labelMonth"),
  labelYear = document.getElementById("labelYear"),
  inputDay = document.getElementById("inputDay"),
  inputMonth = document.getElementById("inputMonth"),
  inputYear = document.getElementById("inputYear"),
  parDay = document.getElementById("parDay"),
  parMonth = document.getElementById("parMonth"),
  parYear = document.getElementById("parYear"),
  spanYear = document.getElementById("spanYear"),
  spanMonth = document.getElementById("spanMonth"),
  spanDay = document.getElementById("spanDay"),
  submitButton = document.getElementById("submitButton"),
  currentDate = new Date();
console.log(currentDate.getFullYear());

function validateInput() {
  if (inputDay.value === "") {
    parDay.innerHTML = "Enter a valid day.";
    inputDay.className = "inputError";
    parDay.className = "parError";
    labelDay.className = "parError";
  } else if (inputDay.value < 1 || inputDay.value > 31) {
    parDay.innerHTML = "Must be a valid day";
    inputDay.className = "inputError";
    parDay.className = "parError";
    labelDay.className = "parError";
  } else {
    parDay.innerHTML = "";
    inputDay.className = "";
    parDay.className = "";
    labelDay.className = "";
  }

  if (inputMonth.value === "") {
    parMonth.innerHTML = "Enter a valid month.";
    inputMonth.className = "inputError";
    parMonth.className = "parError";
    labelMonth.className = "parError";
  } else if (inputMonth.value < 1 || inputMonth.value > 12) {
    parMonth.innerHTML = "Must be a valid month";
    inputMonth.className = "inputError";
    parMonth.className = "parError";
    labelMonth.className = "parError";
  } else {
    parMonth.innerHTML = "";
    inputMonth.className = "";
    parMonth.className = "";
    labelMonth.className = "";
  }
  if (inputYear.value === "") {
    parYear.innerHTML = "Enter a valid year.";
    inputYear.className = "inputError";
    parYear.className = "parError";
    labelYear.className = "parError";
  } else if (inputYear.value > currentDate.getFullYear()) {
    parYear.innerHTML = "Must be in the past";
    inputYear.className = "inputError";
    parYear.className = "parError";
    labelYear.className = "parError";
  } else {
    parYear.innerHTML = "";
    inputYear.className = "";
    parYear.className = "";
    labelYear.className = "";
  }

  let dateString = `${inputYear.value}-${inputMonth.value}-${inputDay.value}`;
  var dateEntry = new Date(dateString);
  console.log(dateEntry);

  if (
    dateEntry.getDate() != inputDay.value ||
    dateEntry.getMonth() + 1 != inputMonth.value ||
    dateEntry.getFullYear() != inputYear.value ||
    inputYear.value.length !== 4
  ) {
    parDay.innerHTML = "Must be a valid date";
    inputDay.className = "inputError";
    parDay.className = "parError";
    labelDay.className = "parError";
    inputMonth.className = "inputError";
    parMonth.className = "parError";
    labelMonth.className = "parError";
    inputYear.className = "inputError";
    parYear.className = "parError";
    labelYear.className = "parError";
  } else {
    var years;
    if (
      currentDate.getMonth() > dateEntry.getMonth() ||
      (currentDate.getMonth() == dateEntry.getMonth() &&
        currentDate.getDate() >= dateEntry.getDate())
    ) {
      years = currentDate.getFullYear() - dateEntry.getFullYear();
    } else {
      years = currentDate.getFullYear() - dateEntry.getFullYear() - 1;
    }

    var months;
    if (currentDate.getDate() >= dateEntry.getDate()) {
      months = currentDate.getMonth() - dateEntry.getMonth();
    } else if (currentDate.getDate() < dateEntry.getDate()) {
      months = currentDate.getMonth() - dateEntry.getMonth() - 1;
    }
    months = months < 0 ? months + 12 : months;

    var days;
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (currentDate.getDate() >= dateEntry.getDate()) {
      days = currentDate.getDate() - dateEntry.getDate();
    } else {
      days =
        currentDate.getDate() -
        dateEntry.getDate() +
        monthDays[dateEntry.getMonth()];
    }
    spanYear.innerHTML = years;
    spanMonth.innerHTML = months;
    spanDay.innerHTML = days;
    console.log(years, months, days);
  }
}

submitButton.addEventListener("click", validateInput);