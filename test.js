const yStart = [95, 125, 155, 185, 215, 245];
let fretlocation = 30;
let ft = 30;
let spacing = 150;
let fretWidthArray=[];
let fretPositionsArray=[];
for (let i = 0; i < 10; i++) {
    fretWidth();
    fretPosition(ft, i)
}
function fretPosition(lastFretFinish = 30, i) {
    ft = Math.round((lastFretFinish + fretWidthArray[i]));
    fretPositionsArray.push(ft);
}
function fretWidth()
{
    spacing = Math.round(spacing * (1 / 1.122));
    fretWidthArray.push(spacing);
}
function consoleLogFretsAndPositions()
{
    console.log(fretPositionsArray)
    console.log(fretWidthArray)
}
consoleLogFretsAndPositions();