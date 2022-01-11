function fretboard() {
    // twelfth root of two 
    //let fretSpacing = Math.pow(2, 2/12);
    let fretSpacing = 1.122;
    d3.select("#fretboard")
        .append('rect')
        .attr('x', 33)
        .attr('y', 110)
        .attr('width', 800)
        .attr('height', 150)
        .attr('stroke', 'black')
        .attr('fill', '#FFFAEF');
    console.log(fretSpacing);

    //STRINGS
    for (const element of array1) {
        d3.select("#fretboard")
            // 6
           
            .append("line")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("id", array2[stringLineIndex])
            .attr("x1", 30)
            .attr("y1", staffY)
            .attr("x2", 800)
            .attr("y2", staffY);
        staffY = staffY + 30;
        stringLineIndex++;
    }
    
    let spacing = 120;
    let nextfret = 30 * fretSpacing;
    // FRETS
    for (let step = 0; step < 16; step++) {
        d3.select("#fretboard")
            .append("line")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("id", array2[stringLineIndex])
            .attr("x1", nextfret)
            .attr("y1", 110)
            .attr("x2", nextfret)
            .attr("y2", 260);
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