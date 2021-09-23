// Problem-1 Rectangle Object

//     Create a rectangle object with length and width properties
//     Create two methods area and perimeter, that will return the area and perimeter of the rectangle
var rect =
{
  length : 10,
  width : 20,
  perimeter : function()
  {
    return (2*(this.length+this.width));
  },
  area : function()
  {
    return this.length+this.width;
  }
};

console.log("Area of Rectangle -> "+rect.area());
console.log("Perimeter of Rectangle -> "+rect.perimeter());