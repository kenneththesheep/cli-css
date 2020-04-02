module.exports.rgbToHsl=(r, g, b)=>{
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

 //   return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
    return `h: ${Math.floor(h * 360)}, s: ${Math.floor(s * 100)}, l: ${Math.floor(l * 100)}`;
}