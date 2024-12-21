function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access the array element
console.log(greeter(user[0])); // Accesses the first element of the array

// Solution 2: Modify the function to accept an array
function greeterArray(people: string[]): string {
    return "Hello, " + people.join(" ");
}
console.log(greeterArray(user)); //Correctly handles the array