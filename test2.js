localStorage.getItem("myMusic");
/* function addtoJSON()
{
    console.log(JSON.parse(music));
}
fetch("music.json")
  .then(response => response.json())
  .then(json => {

    let musicData = json;
    localStorage.setItem("myMusic",JSON.stringify(musicData));
    console.log(musicData)

  }
    ); */
    
    const music = new Map();
   // music.set({str:"4",fret:"6"});
    //music.set({str:"5",fret:"2"});
    //music.set({str:"4",fret:"3"});
    //music.set({str:"5",fret:"12"});
    music.set('2345',{str:"4",fret:"6"});
    music.set('5478',{str:"5",fret:"2"});
    music.set('431',{str:"4",fret:"3"});
    music.set('3455',{str:"5",fret:"12"});
    localStorage.setItem("testMusic",JSON.stringify(Array.from(music.entries())));
    /* console.log(music.get("1-2"));
    console.log(music.has("1-2"));
    console.log(music.has("1-8"));
    console.log(music.size); */
    for( let position of music.keys())
    {
     // console.log(position)
    }
    for( let position of music.values())
    {
     // console.log(position)
    }
    

    /*keys will be Measure-Position (Ex 3-12)
     values are {str:2,fret:8}
     these can there be mapped to String and Note names later

     Need thisto get them from localstorage
     map = new Map(JSON.parse(localStorage.myMap));
     */


    // data needed
    // 1.measure
    // 2. position in measure
    // 3. string
    // 4. fret
    /* const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1 */