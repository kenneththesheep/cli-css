    const complement=(color, start, end, interval) => {
    const colors = [color[0],color[1]/100,color[2]/100];
    let colorReturn=[];
    const [h, s, l] = color;

    for(let i = start; i <= end; i += interval) {
        const h1 = (h + i) % 360
        const c1 = `hsl(${h1}, ${s}%, ${l}%)`
        colorReturn.push(c1)
    }

    return colorReturn;
}

module.exports.harmony=colorArray=>{
    console.log("Complement HSL: "+complement(colorArray,180,180,1));
    console.log("Split HSL: "+complement(colorArray,150,210,60));
    console.log("Triad HSL: "+complement(colorArray,120,240,120));
    console.log("Tetra HSL: "+complement(colorArray,90,270,90));
    console.log("Analogous HSL: "+complement(colorArray,30,90,30));



}