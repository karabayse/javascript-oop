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
