function CalculateDiscount(price, DiscountPercentage) { 
    var discount = (price * DiscountPercentage) / 100; 
    var discountedPrice = price - discount; 
    return discountedPrice; 
  } 
   
  var price = 150; 
  var discountPercentage = 25; 
  var discountedPrice = CalculateDiscount(price, discountPercentage); 
  console.log(discountedPrice);