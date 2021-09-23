// Given an input of products in the below format (Name Quantity Price)
//     Input

// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

//     Create an object with the key data which is an array of objects with the format {name: "Rice", quantity: 2, price: 60}
//     The object must have a method called total which calculates the total values of items (multiplying quantity of each with its price)
//     Sample output for the above case 290
var products =
{
  data : [
    {name: "Rice", quantity: 2, price: 60},
    {name: "Dal", quantity: 3, price: 50},
    {name: "Salt", quantity: 1, price: 20} 
  ],
  total : function()
  {
    var total =0;
    for(var i=0; i<this.data.length; i++)
      total = total+(this.data[i].quantity * this.data[i].price);

    return total;
  }
};

console.log(products.total());