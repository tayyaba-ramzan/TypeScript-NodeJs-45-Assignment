"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// Assignment NO 1
// Install Node.js, TypeScript and VS Code on your computer.
//  ------------xxx------------
// Assignment NO 2
var personName = "Eric";
console.log("\"Hello ".concat(personName, " would you like to learn some Python today?\""));
//  ------------xxx------------
// Assignment NO 3
var person_name = "Tayyaba Ramzan";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
//  ------------xxx------------
// Assignment NO 4
var quote = "A person who never made a mistake never treid anything now.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\" "));
//  ------------xxx------------
// Assignment NO 5
// let famous_person:string="Albert Einstein";
// let message:string=`${famous_person} once said, ${quote}`;
// console.log(message);
//  ------------xxx------------
// Assignment NO 6
var PersonName = "\t\n John Doe \n\t";
console.log("Original:", PersonName);
console.log("Stripped:", PersonName.trim());
//  ------------xxx------------
// Assignment NO 7
// console.log(5+3);    Addition
// console.log(10-2);   Subtraction
// console.log(4*2);    Multipication
// console.log(64/8);   Division  
//  ------------xxx------------ 
// Assignment NO 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(64 / 8);
//  ------------xxx------------
// Assignment NO 9
var favoriteNumber = 8;
console.log("\"My favorite Number is ".concat(favoriteNumber, ".\""));
//  ------------xxx------------
// Assignment NO 9
//Author:[Tayyaba Ramzan]
//Date:[20:2:2024]
//  ------------xxx------------
// Assignment NO 10
var friends = ["Areeba", "Tayyaba", "Rida Fatima", "Neha"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
//  ------------xxx------------
// Assignment NO 12
var names = ["Amir", "Faisal", "Hassan", "Ahmed"];
var message = "Do you like to play football?";
console.log("".concat(names[0], " ").concat(message));
console.log("".concat(names[1], " ").concat(message));
console.log("".concat(names[2], " ").concat(message));
console.log("".concat(names[3], " ").concat(message));
//  ------------xxx------------
// Assignment NO 13
var transportation = ["Honda Motorcycle", "Audi", "Honda City"];
transportation.map(function (items) { return console.log("I would like to own a ".concat(items)); });
//  ------------xxx------------
// Assignment NO 14
// let guestArr:string[]=["Ashna","Fatima","Sumaira"];
// guestArr.map((guestArr)=>console.log(`Dear ${guestArr}, You are invited to the dinner!`));
//  ------------xxx------------
// Assignment NO 15
var guestArr = ["Ashna", "Fatima", "Sumaira"];
var canNotAttend = "Ashna";
console.log(canNotAttend + " " + "can not attend the dinner");
//  ------------xxx------------
var newGuest = "Saima";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (guestArr) { return console.log("Dear ".concat(guestArr, ", You are invited to the dinner!")); });
// Assignment NO 16
// let guestArr:string[]=["Saima","Fatima","Sumaira"];
// let canNotAttend:string="Saima";
// let newGuest:string="Muskan";
// guestArr[guestArr.indexOf(canNotAttend)]=newGuest;
// console.log(guestArrArr);
// guestArrArr.map((guestArrArr=>console.log(`Dear ${guestArrArr}, I found a bigger dinner table so I am invited more people.`)));
// Part II
var guestBeg = "Sidra";
guestArr.unshift(guestBeg);
console.log(guestArr);
// Part III
var middleGuest = "Aliya";
var middleIndex = guestArr.length / 4;
guestArr.splice(middleIndex, 2, middleGuest);
console.log(guestArr);
// Part IV
guestArr.push("Hamza");
console.log(guestArr);
// Part V
guestArr.map(function (items) { return console.log("Dear ".concat(items, ", You are invited to the more people category on dinner")); });
//  ------------xxx------------
// Assignment NO 17
// let guests:string[]=["Ali","Ahmed","Umer","Arhem","Ahsan"];
// while(guests.length>2){
//     const removeGuest=guests.pop();
//     console.log(`Sorry, ${removeGuest}, You are no longer invited to dinner.`); 
// }
// guests.forEach(guest)=>{
//     console.log(`Dear ${guest}, You are still invited to dinner.`);
// }
// guests.pop();
// guests.pop();
//  ------------xxx------------
// Assignment NO 18
var placesToVisit = ["Tokyo", "Pakistan", "America", "China", "Japna"];
console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order:", __spreadArray([], placesToVisit.sort(), true));
console.log("Original Order After Sorting:", placesToVisit);
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Original Order After Reverse Sorting", placesToVisit);
placesToVisit.reverse();
console.log("Reverse Order", placesToVisit);
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
//  ------------xxx------------
// Assignment NO 19
var invitaions = ["Abeeha", "Fabeeha"];
var count_invitations = invitaions.length;
console.log("".concat(count_invitations, " People will come to the dinner"));
// Assignment NO 20
var country = ["Pakistan", "India", "Iran", "China"];
console.log("List of Country:");
console.log(country);
//  ------------xxx------------
// Assignment NO 21
var person = { name: "Tayyaba", age: 23, email: "tayyabaramzan.pak@gmail.com" };
console.log(person);
//  ------------xxx------------
// Assignment NO 22
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[6]);
//  ------------xxx------------
// Assignment NO 23
var car = 'subaru';
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');
console.log("Is car !='Honda City'?I pridict true");
console.log(car != 'Honda City');
console.log("Is car=='subaru'&& car.length==6?pridict true");
console.log(car == 'subaru' && car.length == 6);
console.log("Is car.length==6?pridict true");
console.log(car.length == 6);
console.log("Is car.length !=10 ? pridict true");
console.log(car.length != 10);
console.log("10<45 ? predict false");
console.log(10 > 45);
console.log("10<=20 ? predict false");
console.log(30 <= 20);
console.log("10>16 ? prdict false");
console.log(10 > 16);
console.log("5>=7?predict false");
console.log(5 >= 7);
console.log("Is car == 'SUBARU'?predict false");
console.log(car == 'SUBARU');
//  ------------xxx------------
// Assignment NO 25
// Part I
// let alien_color:string="Green";
// if(alien_color=="Green"){
//     console.log("You earned just earned 5 points.");  
// }
// Part II
// let alien_color:string="Red";
// if (alien_color=="Red") {
//     console.log("No Ouptut");  
// }
//  ------------xxx------------
// Assignment NO 26
// let alien_color:string="Green";
// if (alien_color=="Green") {
//     console.log("Player just earned 5 points for shooting the alien.");
// } else {
//     console.log("Player just earned 10 points.");  
// }
// let alien_color:string="Red";
// if (alien_color=="Green") {
//     console.log("Player just earned 5 points for shooting the alien.");
// } else {
//     console.log("Player just earned 10 points.");  
// }
//  ------------xxx------------
// Assignment NO 27
var alien_color = "Red";
if (alien_color == "Green") {
    console.log("Player earned 5 points.");
}
if (alien_color == "Yellow") {
    console.log("Player earned 10 points.");
}
if (alien_color == "Red") {
    console.log("player earned 15 points.");
}
//  ------------xxx------------
// Assignment NO 28
var person_age = 79;
if (person_age < 2) {
    console.log("The person is a baby.");
}
else if (person_age <= 2 && person_age < 4) {
    console.log("The person is a toddler.");
}
else if (person_age <= 4 && person_age < 13) {
    console.log("The person is a kid.");
}
else if (person_age < 20) {
    console.log("the person is a teenager.");
}
else if (person_age < 65) {
    console.log("The person is an adult.");
}
else if (person_age >= 65) {
    console.log("The person is an elder.");
}
//  ------------xxx------------
// Assignment NO 29
var favorite_fruits = ["Banana", "Kivi", "Orange", "Apple"];
if (favorite_fruits.indexOf("Kivi")) {
    console.log("Kivi");
}
if (favorite_fruits.indexOf("Peach")) {
    console.log("Peach");
}
if (favorite_fruits.indexOf("Orange")) {
    console.log("Orange");
}
if (favorite_fruits.indexOf("Berry")) {
    console.log("You really like Berry!");
}
if (favorite_fruits.indexOf("Apple")) {
    console.log("You really lika Apple");
}
//  ------------xxx------------
// Assignment NO 30
// let users:string[]=["Eric","Haseeb","Ali","Fatima","Admin"];
// for(let user of users){
//     if (user==="Admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     }
//     else{
//         console.log(`Hello ${user}, thank you for logging in again.`);
//     }
// }
//  ------------xxx------------
// Assignment NO 31
var users = ["Eric", "Haseeb", "Ali", "Fatima", "Admin"];
if (users.length == 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "Admin") {
            console.log("Hello Eric, thank you for logging in again.");
        }
    }
}
users = [];
if (users.length == 0) {
    console.log("We need to find some users!");
}
//  ------------xxx------------
// Assignment NO 32
var current_users = ["Haseeb", "Ali", "Admin", "Eric", "Fatima"];
var new_users = ["Admin", "Eric", "Sidra", "Alishba", "Bushra"];
var current_users_lower = current_users.map((function (user) { return user.toLowerCase(); }));
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var new_user = new_users_1[_a];
    if (current_users_lower.indexOf(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, ", that name is taken"));
    }
    else {
        console.log("Yes ".concat(new_user, ", is still is available list"));
    }
}
//  ------------xxx------------
// Assignment NO 33
var simpleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _b = 0, simpleNumbers_1 = simpleNumbers; _b < simpleNumbers_1.length; _b++) {
    var simpleNumber = simpleNumbers_1[_b];
    if (simpleNumber === 1) {
        console.log("".concat(simpleNumber, "st"));
    }
    else if (simpleNumber === 2) {
        console.log("".concat(simpleNumber, "nd"));
    }
    else if (simpleNumber === 3) {
        console.log("".concat(simpleNumber, "rd"));
    }
    else if (simpleNumber === 4) {
        console.log("".concat(simpleNumber, "th"));
    }
    else if (simpleNumber === 5) {
        console.log("".concat(simpleNumber, "th"));
    }
    else if (simpleNumber === 6) {
        console.log("".concat(simpleNumber, "th"));
    }
    else if (simpleNumber === 7) {
        console.log("".concat(simpleNumber, "th"));
    }
    else if (simpleNumber === 8) {
        console.log("".concat(simpleNumber, "th"));
    }
    else if (simpleNumber === 9) {
        console.log("".concat(simpleNumber, "th"));
    }
}
//  ------------xxx------------
// Assignment NO 34
var favoritePizzas = ["Pepperoni", "Chicken", "Vegetable"];
for (var _c = 0, favoritePizzas_1 = favoritePizzas; _c < favoritePizzas_1.length; _c++) {
    var favoritePizza = favoritePizzas_1[_c];
    console.log("I really like ".concat(favoritePizza, " Pizza."));
    console.log("I really love Pizza!");
}
//  ------------xxx------------
// Assignment NO 35
var Animals = ["Cat", "Dog", "Lion"];
for (var _d = 0, Animals_1 = Animals; _d < Animals_1.length; _d++) {
    var Animal = Animals_1[_d];
    console.log("A ".concat(Animal, " has a tail."));
}
console.log("All of these are great pets! but I love cats more.");
//  ------------xxx------------
// Assignment NO 36
// function make_shirt(size:string,text:string):void {
//     console.log(`You order a ${size} shirt that boys ${text}`);   
// }
// make_shirt('large','"I Love TypeScript"');
// make_shirt('medium','"I need a big shirt"');
//  ------------xxx------------
// Assignment NO 37
function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I Love TypeScript"; }
    console.log("You have order a ".concat(size, ", shirt that says ").concat(text));
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I need a big shirt to wear.');
//  ------------xxx------------
// Assignment NO 38
function decribe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
decribe_city("Karachi");
decribe_city("France", "Europe");
decribe_city("Lahore", "Punjab");
//  ------------xxx------------
// Assignment NO 39
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
var c1 = city_country('Lahore', 'Pakistan');
var c2 = city_country('Tokyo', 'Japan');
var c3 = city_country('Paris', 'France');
console.log(c1);
console.log(c2);
console.log(c3);
//  ------------xxx------------
// Assignment NO 40
function make_album(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var a1 = make_album("Hammad", "Light");
console.log(a1);
var a2 = make_album("Hamzah", "Red Wave");
console.log(a2);
var a3 = make_album("Rubab", "Seenbreeze");
console.log(a3);
//  ------------xxx------------
// Assignment NO 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
    ;
}
var magician = ["Faisal", "Ahsan", "Hassan", "Daniyal"];
show_magicians(magician);
// Assignment NO 42
function make_great(magicians) {
    for (var i = 1; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
    ;
}
var magician2 = ["Asfahan", "Saeed", "Abid", "Niyaz"];
make_great(magician2);
show_magicians(magician2);
//  ------------xxx------------
// Assignment NO 43
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 1; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    ;
    return greatMagicians;
}
var magician3 = ["Usman", "Umer", "Umair"];
var greatMagicians2 = make_great2(magician3);
make_great(magician3);
show_magicians(greatMagicians2);
//  ------------xxx------------
// Assignment NO 44
function sandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwhich Order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("Enjoy Your Sandwhich Hammad Food!");
sandwhich('Capsicum', 'Tomato', 'Chicken');
sandwhich('Beef', 'Cheese', '');
sandwhich('Garlic Chicken', 'Mayo Sauce');
function create_car(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = create_car("toyota", "Corolla", { color: "Silver", Year: 2024 });
console.log(mycar);
//  ------------xxx---------------
// **Finished TypeScript Assignment**
