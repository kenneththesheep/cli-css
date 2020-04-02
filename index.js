//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------Global Variables------------///

let firstNumber=0;
let secondNumber=0;
let thirdNumber=0;












//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//----Function Number Conversion---------///

function numberConversion(numberInString) {
    let interger=parseInt(numberInString);
    return interger;
}













//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------Function hex to RGB------------///

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}








//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------Function RGB to HEX------------///

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}










if(process.argv.length===3)
{
console.log(hexToRgb(process.argv[2]));
}
else
if(process.argv.length===6)
{
    firstNumber=numberConversion(process.argv[3]);
    secondNumber=numberConversion(process.argv[4]);
    thirdNumber=numberConversion(process.argv[5]);
    console.log(rgbToHex(firstNumber,secondNumber,thirdNumber));
}