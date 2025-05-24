let age = 20;
let female = true;

if (age >= 18 && female) {
    console.log("Argument found"); // or "Arguments found", be consistent
} else {
    console.log("No argument");
}

if (age >= 18 || female) {
    console.log("Argument found");
} else {
    console.log("No argument");
}
