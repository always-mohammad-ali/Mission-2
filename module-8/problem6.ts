interface Book{
    title : string;
    author : string;
    publishedYear : number;
    isAvailable : boolean;
}

function printBookDetails(book : Book){
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: false,
};

console.log(printBookDetails(myBook));


interface Course{
  title : string;
  instructor : string;
  price : number;
  isOnline : boolean;
}

function buyCourse(value : {title : string, instructor : string, price : number, isOnline : boolean}[]){
  return value.filter(singleValue => singleValue.price >= 1000)
}

const myCourse : Course = {
  title : "html",
  instructor : "msrb",
  price : 23500,
  isOnline : true
}

const sirCourse : Course ={
  title : "cse215",
  instructor : "mft",
  price : 50000,
  isOnline : false
}

const courses =[myCourse, sirCourse];

console.log(buyCourse(courses));

