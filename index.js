//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------Section: Global Variables-------------///
let firstNumber = 0;
let secondNumber = 0;
let thirdNumber = 0;
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//----Section: Function Number Conversion---------///

const numberConversion = () =>  {
                                firstNumber=parseInt(process.argv[3]);
                                secondNumber=parseInt(process.argv[4]);
                                thirdNumber=parseInt(process.argv[5]);
                                }
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------Section: Function hex to RGB-----------///

var hexToRgb = require('./hexToRgb.js');


//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------Section: Function hex to hsl-----------///

var hexToHsl = require('./hexToHsl.js');

//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------SectionL Function RGB to HEX------------///

var rgbToHex = require('./rgbToHex.js')

//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------SectionL Function RGB to HSL------------///

var rgbToHsl = require('./rgbToHsl.js')

//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------------------------------------///
//---------SectionL Function RGB to Ansi------------///

var rgbToAnsi=require('./rgbToAnsi.js')






if(process.argv.length===3)
{

let Ansi= rgbToAnsi.rgbToAnsi256(hexToRgb.hexToRgb(process.argv[2]).r,hexToRgb.hexToRgb(process.argv[2]).g,hexToRgb.hexToRgb(process.argv[2]).b);
//console.log(Ansi);
console.log(`\x1b[38;5;${Ansi}m%s\x1b[0m: `,hexToRgb.hexToRgb(process.argv[2]));
console.log(`\x1b[38;5;${Ansi}m%s\x1b[0m: `,hexToHsl.hexToHsl(process.argv[2]));
}
else
if(process.argv.length===6)
{
    numberConversion();
    //console.log(rgbToHex.rgbToHex(firstNumber,secondNumber,thirdNumber));
    //console.log(rgbToHsl.rgbToHsl(firstNumber,secondNumber,thirdNumber));
    let Ansi=rgbToAnsi.rgbToAnsi256(firstNumber,secondNumber,thirdNumber);
    console.log(`\x1b[38;5;${Ansi}m%s\x1b[0m: `, rgbToHsl.rgbToHsl(firstNumber,secondNumber,thirdNumber));
    console.log(`\x1b[38;5;${Ansi}m%s\x1b[0m: `, rgbToHex.rgbToHex(firstNumber,secondNumber,thirdNumber));
}
else
    if(process.argv[2]==="hex")
    {
        console.log("test");
        const readline = require('readline');
        const fs = require('fs');
        var myInterface=readline.createInterface({
        input: fs.createReadStream('colors.txt')
        });
        const printData=(data)=>{
            let Ansi= rgbToAnsi.rgbToAnsi256(hexToRgb.hexToRgb(data).r,hexToRgb.hexToRgb(data).g,hexToRgb.hexToRgb(data).b);
        console.log(`Item: ${data}`);
        console.log(`\x1b[38;5;${Ansi}m%s\x1b[0m: `,hexToRgb.hexToRgb(data));
        console.log(`\x1b[38;5;${Ansi}m%s\x1b[0m: `,hexToHsl.hexToHsl(data));
        };
        myInterface.on('line', printData);
    }