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

// Instantiate an object -> runs the Book function
const book2 = new Book('Book Two', 'John Doe', '2018');
const book3 = new Book('Book Three', 'Juan Doe', '2018');

console.log(book2.title);
console.log(book3.getSummary());
