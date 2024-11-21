const guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];
function checkGuest(name) {
    if (guestList.includes(name)) {
        return "Welcome";
    } else {
        return "Sorry, good luck next time";
    }
}
 console.log(checkGuest("Alice"));  // Output: "Welcome"
 console.log(checkGuest("John")); 