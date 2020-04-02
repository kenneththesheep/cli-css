/*
const complement=(color) => {
    const colors = [color]
    const [h, s, l] = parseHSL(color)

    for(let i = 180; i <= 180; i += 1) {
        const h1 = (h + i) % 360
        const c1 = `hsl(${h1}, ${s}%, ${l}%)`
        colors.push(c1)
    }

    return colors
}

console.log(complement([270,0.49,0.4]));*/