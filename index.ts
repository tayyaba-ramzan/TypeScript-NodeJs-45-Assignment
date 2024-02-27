
import { unescapeLeadingUnderscores } from "typescript";
// Assignment NO 1
// Install Node.js, TypeScript and VS Code on your computer.
            //  ------------xxx------------

// Assignment NO 2
let personName:string="Eric";
console.log(`"Hello ${personName} would you like to learn some Python today?"`);
            //  ------------xxx------------

// Assignment NO 3
let person_name:string="Tayyaba Ramzan";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
            //  ------------xxx------------

// Assignment NO 4
let quote:string="A person who never made a mistake never treid anything now.";
let author:string="Albert Einstein";
console.log(`${author} once said, "${quote}" `);
            //  ------------xxx------------


// Assignment NO 5
// let famous_person:string="Albert Einstein";
// let message:string=`${famous_person} once said, ${quote}`;
// console.log(message);
            //  ------------xxx------------

// Assignment NO 6
let PersonName:string="\t\n John Doe \n\t";
console.log("Original:",PersonName);
console.log("Stripped:",PersonName.trim());
            //  ------------xxx------------

// Assignment NO 7
// console.log(5+3);    Addition
// console.log(10-2);   Subtraction
// console.log(4*2);    Multipication
// console.log(64/8);   Division  
            //  ------------xxx------------ 

// Assignment NO 8
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(64/8);
            //  ------------xxx------------

// Assignment NO 9
let favoriteNumber:number=8;
console.log(`"My favorite Number is ${favoriteNumber}."`);
            //  ------------xxx------------

// Assignment NO 10

//Author:[Tayyaba Ramzan]
//Date:[20:2:2024]
           //  ------------xxx------------

// Assignment NO 11
let friends:string[]=["Areeba","Tayyaba","Rida Fatima","Neha"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
           //  ------------xxx------------

// Assignment NO 12
let names:string[]=["Amir","Faisal","Hassan","Ahmed"];
let message:string="Do you like to play football?";
console.log(`${names[0]} ${message}`);
console.log(`${names[1]} ${message}`);
console.log(`${names[2]} ${message}`);
console.log(`${names[3]} ${message}`);
           //  ------------xxx------------

// Assignment NO 13
let transportation:string[]=["Honda Motorcycle","Audi","Honda City"];
transportation.map((items)=>console.log(`I would like to own a ${items}`));
           //  ------------xxx------------

// Assignment NO 14
// let guestArr:string[]=["Ashna","Fatima","Sumaira"];
// guestArr.map((guestArr)=>console.log(`Dear ${guestArr}, You are invited to the dinner!`));
           //  ------------xxx------------

// Assignment NO 15
let guestArr:string[]=["Ashna","Fatima","Sumaira"];
let canNotAttend:string="Ashna";
console.log(canNotAttend+" "+"can not attend the dinner");

let newGuest:string="Saima";
guestArr[guestArr.indexOf(canNotAttend)]=newGuest;
console.log(guestArr);

guestArr.map((guestArr)=>console.log(`Dear ${guestArr}, You are invited to the dinner!`));
           //  ------------xxx------------

// Assignment NO 16
// let guestArr:string[]=["Saima","Fatima","Sumaira"];
// let canNotAttend:string="Saima";
// let newGuest:string="Muskan";
// guestArr[guestArr.indexOf(canNotAttend)]=newGuest;
// console.log(guestArrArr);
// guestArrArr.map((guestArrArr=>console.log(`Dear ${guestArrArr}, I found a bigger dinner table so I am invited more people.`)));

// Part II
let guestBeg:string="Sidra";
guestArr.unshift(guestBeg);
console.log(guestArr);

// Part III
let middleGuest:string="Aliya";
let middleIndex=guestArr.length/4;
guestArr.splice(middleIndex,2,middleGuest);
console.log(guestArr);

// Part IV
guestArr.push("Hamza");
console.log(guestArr);

// Part V
guestArr.map((items)=>console.log(`Dear ${items}, You are invited to the more people category on dinner`));
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
let placesToVisit:string[]=["Tokyo","Pakistan","America","China","Japna"];
console.log("Original Order:",placesToVisit);
console.log("Alphabetical Order:",[...placesToVisit.sort()]);
console.log("Original Order After Sorting:",placesToVisit);
console.log("Reverse Alphabetical Order:",[...placesToVisit].sort().reverse());
console.log("Original Order After Reverse Sorting",placesToVisit);
placesToVisit.reverse();
console.log("Reverse Order",placesToVisit);
placesToVisit.reverse();
console.log("Back to Original Order:",placesToVisit);
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:",placesToVisit);
placesToVisit.sort((a,b)=>b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:",placesToVisit);
         //  ------------xxx------------
   
// Assignment NO 19
let invitaions:string[]=["Abeeha","Fabeeha"];
let count_invitations:number=invitaions.length
console.log(`${count_invitations} People will come to the dinner`);

// Assignment NO 20
let country:string[]=["Pakistan","India","Iran","China"];
console.log("List of Country:");
console.log(country);
          //  ------------xxx------------

// Assignment NO 21
let person:{name:string,age:number,email:string}={name:"Tayyaba",age:23,email:"tayyabaramzan.pak@gmail.com"};
console.log(person);
          //  ------------xxx------------

// Assignment NO 22
const days:string[]=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(days[6]);
          //  ------------xxx------------

// Assignment NO 23
let car = 'subaru';

console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

console.log("Is car !='Honda City'?I pridict true");
console.log(car != 'Honda City');

console.log("Is car=='subaru'&& car.length==6?pridict true");
console.log(car=='subaru'&& car.length==6);

console.log("Is car.length==6?pridict true");
console.log(car.length==6);

console.log("Is car.length !=10 ? pridict true");
console.log(car.length != 10);

console.log("10<45 ? predict false");
console.log(10 > 45);

console.log("10<=20 ? predict false");
console.log(30<=20);

console.log("10>16 ? prdict false");
console.log(10>16);

console.log("5>=7?predict false");
console.log(5>=7);

console.log("Is car == 'SUBARU'?predict false");
console.log(car == 'SUBARU');
          //  ------------xxx------------

// Assignment NO 24
let firstName:string="Tayyaba";
let lastName:string="Ramzan";
let fullName:string="Tayyaba Ramzan";
if(firstName===fullName){
    console.log("Names are Equal!");   
}else{
    console.log("Names are not Equal");
    
}
if (firstName!=lastName) {
    console.log("Names are Equal");
    
} else {
    console.log("Names are not Equal");
    
}

let age1:number=18;
let age2:number=22;
if (age1==20) {
    console.log("Eligible for Vote.");
    
} 
if (age1!=22) {
    console.log("Eligible for vote is older category.");
    
} 
if (age1<=age2) {
    console.log("You are Younger.");
    
} 
if (age1>=age2) {
    console.log("You are Older.");
    
} 
if (age1==18 && age2==22) {
    console.log("Person is eligible for vote.");
    
} 
if (age1==18 || age2==22) {
    console.log("Person is eligible not for vote.");
    
} 
let cities:string[]=["Islamabad","Lahore","Sialkot","Karachi"];
if (cities.includes("Karachi")) {
    console.log("Karachi is in city list.");
    
}
if (cities.includes("Hyderabad")) {
    console.log("Hyderabad is not include in an array.");
    
}
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
let alien_color:string="Red";
if (alien_color=="Green") {
    console.log("Player earned 5 points.");   
}
if (alien_color=="Yellow") {
    console.log("Player earned 10 points.");
}
if (alien_color=="Red") {
    console.log("player earned 15 points.");   
}
           //  ------------xxx------------

// Assignment NO 28
let person_age:number=79;
if (person_age<2) {
    console.log("The person is a baby.");
}
else if (person_age<=2 && person_age<4) {
    console.log("The person is a toddler.");
}
else if (person_age<=4 && person_age<13) {
    console.log("The person is a kid."); 
}
else if (person_age<20) {
    console.log("the person is a teenager."); 
}
else if (person_age<65) {
    console.log("The person is an adult."); 
}
else if (person_age>=65) {
    console.log("The person is an elder."); 
}
        //  ------------xxx------------

// Assignment NO 29
let favorite_fruits:string[]=["Banana","Kivi","Orange","Apple"];

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
let users:string[]=["Eric","Haseeb","Ali","Fatima","Admin"];
if (users.length==0) {
    console.log("We need to find some users!");  
}
else{
    for(let user of users){
        if (user==="Admin") {
            console.log("Hello Eric, thank you for logging in again.");
            
        }
    }
    
}
users=[];
if (users.length==0) {
    console.log("We need to find some users!");
    
}
             //  ------------xxx------------


// Assignment NO 32
let current_users:string[]=["Haseeb","Ali","Admin","Eric","Fatima"];
let new_users:string[]=["Admin","Eric","Sidra","Alishba","Bushra"];
let current_users_lower:string[]=current_users.map((user=>user.toLowerCase()));
for(let new_user of new_users){
    if (current_users_lower.indexOf (new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`)  
    }
    else{
        console.log(`Yes ${new_user}, is still is available list`);
        
    }
}
            //  ------------xxx------------
// Assignment NO 33
let simpleNumbers:number[]=[1,2,3,4,5,6,7,8,9];
for(let simpleNumber of simpleNumbers){
if (simpleNumber===1) {
    console.log(`${simpleNumber}st`);

}else if(simpleNumber===2){
    console.log(`${simpleNumber}nd`);

}else if(simpleNumber===3){
    console.log(`${simpleNumber}rd`);
    
}else if(simpleNumber===4){
    console.log(`${simpleNumber}th`);
    
}else if(simpleNumber===5){
    console.log(`${simpleNumber}th`);
    
}else if(simpleNumber===6){
    console.log(`${simpleNumber}th`);
    
}else if(simpleNumber===7){
    console.log(`${simpleNumber}th`);
    
}else if(simpleNumber===8){
    console.log(`${simpleNumber}th`);
    
}else if(simpleNumber===9){
    console.log(`${simpleNumber}th`);
    
}
}
           //  ------------xxx------------

// Assignment NO 34
let favoritePizzas:string[]=["Pepperoni","Chicken","Vegetable"];
for(let favoritePizza of favoritePizzas){
    console.log(`I really like ${favoritePizza} Pizza.`);
    console.log("I really love Pizza!"); 
}
            //  ------------xxx------------

// Assignment NO 35
let Animals:string[]=["Cat","Dog","Lion"];
for(let Animal of Animals){
    console.log(`A ${Animal} has a tail.`);
}
console.log(`All of these are great pets! but I love cats more.`);  
            //  ------------xxx------------

// Assignment NO 36

// function make_shirt(size:string,text:string):void {
//     console.log(`You order a ${size} shirt that boys ${text}`);   
// }
// make_shirt('large','"I Love TypeScript"');
// make_shirt('medium','"I need a big shirt"');
            //  ------------xxx------------

// Assignment NO 37
function make_shirt(size:string="large",text:string="I Love TypeScript"):void {
    console.log(`You have order a ${size}, shirt that says ${text}`);
    
}
make_shirt();
make_shirt('medium');
make_shirt('small','I need a big shirt to wear.');
            //  ------------xxx------------

// Assignment NO 38
function decribe_city(city:string,country:string="Pakistan"):void {
    console.log(`${city} is in ${country}`);
    
}
decribe_city("Karachi");
decribe_city("France","Europe");
decribe_city("Lahore","Punjab");
          //  ------------xxx------------

// Assignment NO 39
function city_country(city:string,country:string):string {
    return `${city} , ${country}`
}
let c1=city_country('Lahore','Pakistan');
let c2=city_country('Tokyo','Japan');
let c3=city_country('Paris','France');
console.log(c1);
console.log(c2);
console.log(c3);
             //  ------------xxx------------
// Assignment NO 40
function make_album(artist:string,title:string):{artist:string,} {
    const dictionaries={
        artist:artist.charAt(0).toUpperCase()+artist.slice(1),
        title:title.charAt(0).toUpperCase()+title.slice(1)
    };
    return dictionaries
    
}
let a1=make_album("Hammad","Light");
console.log(a1);

let a2=make_album("Hamzah","Red Wave");
console.log(a2);

let a3=make_album("Rubab","Seenbreeze");
console.log(a3);
             //  ------------xxx------------

// Assignment NO 41
function show_magicians(magicians:string[]):void {
    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
        
    };
}
const magician:string[]=["Faisal","Ahsan","Hassan","Daniyal"];
show_magicians(magician);

// Assignment NO 42
function make_great(magicians:string[]):void {
    for(let i=1;i<magicians.length;i++){
        magicians[i]=magicians[i] + ' the great'

    };
    
}
const magician2:string[]=["Asfahan","Saeed","Abid","Niyaz"];
make_great(magician2);
show_magicians(magician2);
            //  ------------xxx------------

// Assignment NO 43
function make_great2(magicians:string[]):string[] {
    const greatMagicians:string[]=[];
    for(let i=1;i<magicians.length;i++){
        greatMagicians.push(magicians[i]+ ' the Great');
    };
    return greatMagicians;
    
}
const magician3:string[]=["Usman","Umer","Umair"];
const greatMagicians2:string[]=make_great2(magician3);
make_great(magician3);
show_magicians(greatMagicians2);
           //  ------------xxx------------

// Assignment NO 44
function sandwhich(...items:string[]):void {
    console.log("Sandwhich Order:");
    for(let i=0;i<items.length;i++){
        console.log(`- ${items[i]}`);
        
    }
    
}
console.log("Enjoy Your Sandwhich Hammad Food!");
sandwhich('Capsicum','Tomato','Chicken');
sandwhich('Beef','Cheese','');
sandwhich('Garlic Chicken','Mayo Sauce');
          //  ------------xxx------------

// Assignment NO 45
type car={
    manufacture:string,
    model:string,
    [key:string]:any
};

function create_car(manufacture:string,model:string,optional:Record<string,any>):car {
    return{
    manufacture,
    model,
    ...optional
    }
    
}
const mycar:car=create_car("toyota","Corolla",{color:"Silver",Year:2024});
console.log(mycar);
           //  ------------xxx---------------
           // **Finished TypeScript Assignment**


           





















































































