function fretboard() {
    // twelfth root of two 
    //let fretSpacing = Math.pow(2, 2/12);
    let fretSpacing = 1.122;
    console.log(fretSpacing);
    for (const element of array1) {
        d3.select("#fretboard")
        // .attr("viewBox", "0 0 300 300")
        .classed("svg-content", true)
            .append("line")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("id", array2[stringLineIndex])
            .attr("x1", staffY)
            .attr("y1", 30)
            .attr("x2", staffY)
            .attr("y2", 600);
        staffY = staffY + 15;
        stringLineIndex++;
    }
    let spacing = 50;
    let nextfret = 30 * fretSpacing;
    for (let step = 0; step < 16; step++) {
        d3.select("#fretboard")
            .append("line")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("id", array2[stringLineIndex])
            .attr("x1", 110)
            .attr("y1", nextfret)
            .attr("x2", 185)
            .attr("y2", nextfret);
        spacing = spacing * (1 / 1.122);
        console.log(spacing);
        nextfret = nextfret + spacing;
        console.log(nextfret);
    }
    d3.select("#fretboard")
    .append('circle')
    .attr('cx', 148)
    .attr('cy', 135)
    .attr('r', 6)
    .style('fill', 'black');
    d3.select("#fretboard")
    .append('circle')
    .attr('cx', 148)
    .attr('cy', 199)
    .attr('r', 6)
    .style('fill', 'black');
    d3.select("#fretboard")
    .append('circle')
    .attr('cx', 148)
    .attr('cy', 249)
    .attr('r', 6)
    .style('fill', 'black');
    d3.select("#fretboard")
    .append('circle')
    .attr('cx', 148)
    .attr('cy', 288)
    .attr('r', 6)
    .style('fill', 'black');
    d3.select("#fretboard")
    .append('circle')
    .attr('cx', 133)
    .attr('cy', 334)
    .attr('r', 6)
    .style('fill', 'black');
    d3.select("#fretboard")
    .append('circle')
    .attr('cx', 163)
    .attr('cy', 334)
    .attr('r', 6)
    .style('fill', 'black');
    
}