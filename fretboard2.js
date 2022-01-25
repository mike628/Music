let fretWidthArray = [];
let fretPositionsArray = [];
let spacing = 150;
const upperLeftCorner = 60;
let fret = upperLeftCorner
let isEdit = false;
let isInsert = false;
function fretboard() {

    createPositionAndWidthOfFrets();

    //STRINGS - Start at 60 and 30 between them.
    for (const strg of ArrayOfGuitarStringNames) {
        d3.select("#fretboard")
            .append("line")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("id", strg)
            .attr("x1", upperLeftCorner)
            .attr("y1", staffY)
            .attr("x2", 1200)
            .attr("y2", staffY);
        staffY = staffY + 30;
        stringLineIndex++;
    }

    // FRETS
    for (let k = 0; k < 18; k++) {
        d3.select("#fretboard")
            .append("line")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("id", array2[stringLineIndex])
            .attr("x1", fretPositionsArray[k])
            .attr("y1", 110)
            .attr("x2", fretPositionsArray[k])
            .attr("y2", 260);
        //console.log(fretPositionsArray[k])
    }



    d3.select("#fretboard")
        .append('circle')
        .attr('cx', 337)
        .attr('cy', 185)
        .attr('r', 10)
        .style('fill', 'black');
    d3.select("#fretboard")
        .append('circle')
        .attr('cx', 526)
        .attr('cy', 185)
        .attr('r', 10)
        .style('fill', 'black');
    d3.select("#fretboard")
        .append('circle')
        .attr('cx', 677)
        .attr('cy', 185)
        .attr('r', 10)
        .style('fill', 'black');
    d3.select("#fretboard")
        .append('circle')
        .attr('cx', 796)
        .attr('cy', 185)
        .attr('r', 10)
        .style('fill', 'black');
    d3.select("#fretboard")
        .append('circle')
        .attr('cx', 931)
        .attr('cy', 155)
        .attr('r', 10)
        .style('fill', 'black');
    d3.select("#fretboard")
        .append('circle')
        .attr('cx', 931)
        .attr('cy', 215)
        .attr('r', 10)
        .style('fill', 'black');
    const yStart = [95, 125, 155, 185, 215, 245];
    let j = 1
    for (const string of yStart) {
        let i = 0;
        for (let fret of fretPositionsArray) {
            createfretboard(fret, string, i, j)
            i++
        }
        j++
    }
}
function createPositionAndWidthOfFrets() {
    const yStart = [95, 125, 155, 185, 215, 245];
    let ft = 60;
    let spacing = 150;
    fretPositionsArray.push(ft);
    for (let i = 0; i < 18; i++) {
        fretWidth();
        fretPosition(ft, i)
    }
    function fretPosition(lastFretFinish, i) {
        //console.log("Last Fret Finish = "+lastFretFinish)
        ft = Math.round((lastFretFinish + fretWidthArray[i]));
        fretPositionsArray.push(ft);
    }
    function fretWidth() {
        spacing = Math.round(spacing * (1 / 1.122));
        fretWidthArray.push(spacing);
    }
    function consoleLogFretsAndPositions() {
        // console.log(fretPositionsArray)
        // console.log(fretWidthArray)
    }
    consoleLogFretsAndPositions();
}
function createfretboard(fret, string, i, j) {
    d3.select("#fretboard")
        .append('rect')
        .on("click", function () {
            let strfrt = { str: j, frt: i }
            music.set(Math.random(), strfrt);
            localStorage.setItem("testMusic", JSON.stringify(Array.from(music.entries())));


        })
        .on("mouseover", function () {
            d3.select(this).attr('fill', 'green')
        })
        .on('mouseout', function () {
            d3.select(this).attr('fill', 'orange')
        })
        .attr("id", "S" + j + "F" + (i + 1))
        .attr('x', fret)
        .attr('y', string)
        .attr('width', fretWidthArray[i])
        .attr('height', 30)
        //.attr('stroke', 'green')
        .attr('stroke-linecap', 'butt')
        .attr('stroke-width', '1')
        .attr('fill', '#FFFAEF')
        .attr('fill-opacity', .1)

}
function getstaffPositionToPutNote() {
    if (isEdit) {
        // If note is being Edited
        getstaffPositionOfEdit()
    }
    else if (isInsert) {
        //if note is being isnserted BETWEEN 2 notes
        getPostionBeforeInsert()
    }
    else {
        // if note goes on the end
        putNoteAtEnd()
    }
}

function getstaffPositionOfEdit() {

}
function getPostionBeforeInsert() {

}

function putNoteAtEnd() {

}