function calculateTotalPrice(items : {name : string, price : number, quantity : number, discount ?: number}[]){
    const itemsPriceArray = items.map(item => {
       if(typeof item.discount == 'number' && item.discount >= 0 && item.discount <= 100){
           return ((item.price * item.quantity) - ((item.price * item.quantity) * item.discount / 100))
       }
       else{
        return (item.price * item.quantity);
       }
    })

    const totalPrice = itemsPriceArray.reduce((total, currentPrice) => total + currentPrice, 0);
    return totalPrice;
}


const products = [
    {name : "mouse", price : 1, quantity : 2, discount : 1},
    {name : "keyboard", price : 5, quantity : 3},
    {name : "printer", price : 2, quantity : 2, discount : 100}
]

console.log(calculateTotalPrice(products));