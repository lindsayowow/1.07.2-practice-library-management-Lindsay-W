// You are tasked with designing a library management system. The library 
// lends out various types of items such as books, DVDs, and magazines. While 
// all items share some common properties (e.g., title, id, isAvailable), each 
// type has unique properties and behaviors. For example: 
// ● Books have an author and a genre. 
// ● DVDs have a director and duration. 
// ● Magazines have an issueNumber and publisher. 
// Tasks 
// 1. Step 1: Create a Base Class 
// ○ Define a class LibraryItem to represent shared properties 
// (title, id, isAvailable) and methods (e.g., checkOut() and 
// returnItem()). 
// 2. Step 2: Extend the Base Class 
// ○ Create child classes Book, DVD, and Magazine that inherit from 
// LibraryItem. 
// ○ Add unique properties and methods for each child class: 
// ■ Book: Add properties like author and genre. 
// ■ DVD: Add properties like director and duration. 
// ■ Magazine: Add properties like issueNumber and publisher. 
// 3. Step 3: Instantiate Objects 
// ○ Create instances of each class and test the shared and unique 
// methods. 
// 4. Step 4: Test the Inheritance 
// ○ Use inherited methods like checkOut() and returnItem() to 
// manage the availability of items. 
// ○ Test accessing and displaying unique properties of each child 
// class. 
//--------------------------------------------------------------------------
const input = require("readline-sync");

// 1. Step 1: Create a Base Class 

class LibraryItem {  // parent class
    constructor(title, id,isAvailable) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }

    checkout() {  // method
        if (this.isAvailable) {
            console.log(`"${this.title}" has now been checked out.`);
            return this.isAvailable = false;
        } else {
            console.log(`We are sorry, "${this.title}" is not available at this time.`);
            }
        }

    returnItem() { // method
        console.log(`"${this.title}" item has now been checked in.`);
        return this.isAvailable = true;
    }
}

// 2. Step 2: Extend the Base Class 

class Book extends LibraryItem {  //child class
        // Books have an author and a genre. 
        constructor(title, id, isAvailable,author,genre,condition="new") {
            super(title,id,isAvailable);
            this.author = author;
            this.genre = genre;
            this.condition = condition;
    }
    tornPage() {  // method
            console.log(`"${this.title}" has been damaged, please see the librarian to pay your fine.`);
            return this.condition = "poor";
    }

    renewLoan() {  // method
        const choice = input.question(`Would you like to renew "${this.title}"? (Y/N)  `);
        if (choice.toUpperCase() === "Y" || choice.toUpperCase() === "YES") {
        console.log(`"${this.title}" has been renewed.`);
        } else {
            this.returnItem();
        }
    }
}

class DVD extends LibraryItem {  //child class
        //  DVDs have a director and duration. 
        constructor(title, id, isAvailable,director,duration,rating=5) {
            super(title,id,isAvailable);
            this.director = director;
            this.duration = duration;
            this.rating = rating;
    }
        isTooLong() {  // method
        const choice = input.question(`Can you stay awake for ${this.duration} while watching a movie? (Y/N)  `);
        if (choice.toUpperCase() === "Y" || choice.toUpperCase() === "YES") {
        console.log(`"${this.title}" is a great choice!`);
        } else {
            console.log(`"${this.title}" is not a good choice for you!  \u2639`);
        }
    }

    rateMovie() {  // method
        let choice = Number(input.question(`How many stars would you give "${this.title}"? (0-5)  `));
        while (isNaN(choice) || choice > 5 || choice < 0) {
        console.log(`Please enter a valid rating 1-5`); // error message
        choice = Number(input.question(`How many stars would you give "${this.title}"? (1-5)  `)); // updating choice value
        } 
        this.rating = choice;
        console.log(`The new rating for "${this.title}" is ${this.rating} star(s).`);
        return this.rating;
    }
}


class Magazine extends LibraryItem {  //child class
        //  Magazines have an issueNumber and publisher.
        constructor(title, id, isAvailable, issueNumber, publisher, isFavorite=false) {
            super(title,id,isAvailable);
            this.issueNumber = issueNumber;
            this.publisher = publisher;
            this.isFavorite = isFavorite;
    }
        updateAsFavorite() {  // method
        const choice = input.question(`Would you like us to mark "${this.title}" as a favorite magazine? (Y/N)  `);
        if (choice.toUpperCase() === "Y" || choice.toUpperCase() === "YES") {
            return this.isFavorite = true;
        } else {
            return this.isFavorite = false;
        }
    }

    // rateMovie() {  // method
    //     let choice = Number(input.question(`How many stars would you give "${this.title}"? (1-5)  `));
    //     while (isNaN(choice) || choice > 5 || choice < 0) {
    //     console.log(`Please enter a valid rating 1-5`); // error message
    //     choice = Number(input.question(`How many stars would you give "${this.title}"? (1-5)  `)); // updating choice value
    //     } 
    //     this.rating = choice;
    //     console.log(`The new rating for "${this.title}" is ${this.rating} star(s).`);
    //     return this.rating;
    // }
}

// 3. Step 3: Instantiate Objects 

const faveBook = new Book("La ley del amor", 1, true,"Laura Esquivel","Science-Fiction","good");
const lastBook = new Book("In the Dark", 2, true, "Richard Laymon","Horror","fair");
const nextBook = new Book("Let Them", 3, false, "Mel Robbins", "Self-Help");

const faveDVD = new DVD("The Princess Bride", 4, false,"Rob Reiner","1 hour 38 min");
const firstDVD = new DVD("E.T. the Extra-Terrestrial", 5, true, "Steven Spielberg","1 hour 55 min",3);
const nextDVD = new DVD("Wicked: Part 1", 6, true, "Jon M Chu", "2 hours 40 min", 4);

const magazine1 = new Magazine("Seventeen", 7, true, "November 2025","Hearst",true);
const magazine2 = new Magazine("Tiger Beat", 8, false, "December 2018","Tiger Beat Media, Inc.");
const magazine3 = new Magazine("Vogue", 9, true, "October 2025", "Conde Nast",false);

// 4. Step 4: Test the Inheritance

// ---- Book tests ----- //
console.log(faveBook); // starting values
faveBook.checkout(); // testing checkout method. 
console.log(faveBook); // note change in isAvailable from checkout method
faveBook.renewLoan(); // answer y or yes to verify renewLoan method 
faveBook.tornPage(); // Damage message appears from tornPage
console.log(faveBook);  //note book still checked out and condition has changed to poor per tornPage
console.log(lastBook); // starting values
lastBook.checkout(); // checking out book
lastBook.renewLoan(); // answer no to check renewLoan method  
console.log(lastBook); // checking isAvailable value from returnItem method embedded in renewLoan method above.
console.log(nextBook); // tests condition default value
nextBook.checkout(); // tests checkout method

// ---- DVD tests ----- //
console.log(firstDVD); // starting values
firstDVD.checkout(); // testing checkout method on new child class type
firstDVD.rateMovie(); //testing rate Movie method
console.log(firstDVD); // showing updated values from last 2 methods employed.
nextDVD.isTooLong(); // answer yes to test isTooLong method.
firstDVD.isTooLong(); // answer no to test the isTooLong method.

// ---- Magazine tests ----- //
console.log(magazine3); //starting values
magazine3.updateAsFavorite(); // testing isFavorite method - answer yes
console.log(magazine3); // updated values
magazine1.updateAsFavorite(); // answer no to test isFavorite method again.
magazine1.checkout();
console.log(magazine1);

