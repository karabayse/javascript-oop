const s1 = 'Hello';
console.log(typeof s1);

const s2 = new String('Hello');

console.log(window);

window.alert(1);
alert(1);

console.log(navigator.appVersion);


// Object Literal
const book1 = {
  title: 'Book One',
  author: 'Jane Doe',
  year: '2013',
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));


// ES5 Object Constructor
function Book(title, author, year) {
  console.log('Book instantiated...');
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// Prototype: getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Prototype: getAge
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Prototype: Revise / Change Year
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instantiate an object -> runs the Book function
const book2 = new Book('Book Two', 'John Doe', '2018');
const book3 = new Book('Book Three', 'Juan Doe', '2018');

// Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'Jane Doe', '2018', 'January');


console.log(book2.title);
console.log(book3.getSummary());
console.log(book3.getAge());
console.log(mag1.getSummary());

book3.revise('2018');
console.log(book3);
