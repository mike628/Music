function makeDemo1() {
    //<1>

    makeMeasure();
    //Measure.insertNote()                   //<3> <4>
};

// Data consists of [ Measure,Position,String, Fret ]
//String Names hidden clickable
const array1 = ['e', 'B', 'G', 'D', 'A', 'E'];
// String Names 
const array2 = ['e1', 'B1', 'G1', 'D1', 'A1', 'E1'];

let staffY = 20;
let stringLineIndex = 0;
let selectedString = "";
let initialPosition = [20, 20]
let currentPosition = [];

let data = [];
data.push("1", "1", "G", "6")
function insertNote(id) {
    let elem = document.querySelector(id);
    let domRect = elem.getBoundingClientRect();
    console.log(domRect);
    //d3.select("svg")
    /* .append("text")
    .attr("id", "text1")
    .attr("x", 10)
    .attr("y", staffY+3)
    .text(element);

    staffY = staffY + 15;
    stringLineIndex++; */
}
function makeMeasure() {



    for (const element of array1) {

        // Lines representing Strings
        d3.select("svg")
            .append("line")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("id", array2[stringLineIndex])
            .attr("x1", 30)
            .attr("y1", staffY)
            .attr("x2", "90%")
            .attr("y2", staffY);

        // Transparent line for clickable area
        d3.select("svg")
            .append("line")
            .on("click", function () {
                selectedString = "#" + this.id + 1;
                insertNote(selectedString);
                //d3.select("#"+this.id+1).style("stroke", "green")
                //selectedString=this.id;
                //console.log("Selected String = "+selectedString)

            })
            .style("stroke", "green")
            .style("stroke-width", 6)
            .attr("id", element)
            .attr("stroke-opacity", 0)
            .attr("x1", 30)
            .attr("y1", staffY)
            .attr("x2", "90%")
            .attr("y2", staffY);

        // String Names
        d3.select("svg")
            .append("text")
            .attr("id", "text1")
            .attr("x", 10)
            .attr("y", staffY + 3)
            .text(element);

        staffY = staffY + 15;
        stringLineIndex++;
        console.log(stringLineIndex);
    }
    // Measure Bar
    d3.select("svg")
        .append("line")
        .style("stroke", "black")
        .style("stroke-width", 3)
        .attr("id", "measureBar")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 0)
        .attr("y2", 50);

    fretboard();
}

