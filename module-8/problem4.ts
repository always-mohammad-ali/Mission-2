
function filterByRating(items: {title : string, rating : number}[]){
    return items.filter(item => item.rating >= 4);
}

const books = [
    {title: "harry", rating: 4.5},
    {title: "potter", rating: 3.2},
    {title:"heyman", rating: 5.0},
    {title:"man", rating:6.0},
    {title:"damn", rating: 1}
]

console.log(filterByRating(books));