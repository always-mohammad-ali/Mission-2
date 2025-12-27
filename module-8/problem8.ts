function calculateTotalPrice(products: {name: string, price: number, quantity: number, discount ?: number}[]){
   const productPriceArray = products.map(product => {
     if(typeof product.discount == 'number' && product.discount >0 && product.discount <=100)
      {
        return (product.price - (product.price * (product.discount / 100))) * product.quantity;
      }
   else{
    return product.price * product.quantity}
   }
   
  );
   

   const totalPrice = productPriceArray.reduce((total, item) => total + item, 0);
   return totalPrice;

} 


const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 100 },
  { name: 'Bag', price: 50, quantity: 1 },
];

console.log(calculateTotalPrice(products));