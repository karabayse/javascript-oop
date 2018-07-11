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

// Object of Protos
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
};

// Create Object
const book4 = Object.create(bookProtos);
book4.title = 'Book Four';
book4.author = 'Jane Doe';
book4.year = '2015';

// ES6
class es6Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
  }
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }
  // Static Method
  static topBookStore() {
    return 'Barnes & Noble';
  }
}

// Instantiate Object
const es6Book1 = new Book('ES6 Book One', 'Jane Doe', '2014')

// Subclasses
class eMagazine extends Book() {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const eMag = new eMagazine('Mag One', 'Jane Doe', '2017', 'February');

console.log(book2.title);
console.log(book3.getSummary());
console.log(book3.getAge());
console.log(mag1.getSummary());
console.log(book4);
console.log(es6Book1);
es6Book1.revise('2015');
console.log(es6Book1);
book3.revise('2018');
console.log(book3);
console.log(Book.topBookStore());
console.log(eMag.getSummary());
