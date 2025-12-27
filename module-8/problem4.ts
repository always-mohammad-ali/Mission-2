
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



function filterByPrice(mobiles: {model : string, netprice : number, isAvailable : boolean}[]){
    return mobiles.filter(mobile => mobile.netprice >= 100000 || mobile.isAvailable == true);
}

const mobile = [
    {model : "samsung", netprice : 234000000, isAvailable : true},
    {model : "apple", netprice : 4000, isAvailable : true}
]

console.log(filterByPrice(mobile));