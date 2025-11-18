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