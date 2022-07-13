



export let productCart = [];


export function RemoveProductInCart(product){
    console.log(product)
    productCart = product
    
}


export function SetProductToCart(element){
    console.log(element)
    productCart.push(element)
    console.log(productCart)
    
    
};



export function GetProductInCart(){
      return productCart;

}






