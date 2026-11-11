// PART 1: TIME-BASED GREETING

let userName = prompt("What is your name?");

[11, 12, 17, 18].forEach(currentHour => {

    if (currentHour < 12) {
        console.log("Good morning, " + userName + "!");
    } else if (currentHour < 18) {
        console.log("Good afternoon, " + userName + "!");
    } else {
        console.log("Good evening, " + userName + "!");
    }

});

// PART 2: AGE AND DAYS LIVED

let birthYear = prompt("What is your birth year?");

let age = 2026 - Number(birthYear);

let daysLived = age * 365;

console.log("Your age is " + age + " years.");

console.log("You have lived approximately " + daysLived + " days.");


// PART 3: AGE VERIFICATION

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
// PART 4: DARK MODE TOGGLE

let themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙 Dark Mode";
    } else {
        themeButton.textContent = "☀️ Light Mode";
    }

});