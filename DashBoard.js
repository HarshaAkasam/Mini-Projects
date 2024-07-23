var data = [
    {
        icon:"fa-solid fa-fan",
        name:"FAN",
        count:100
    },
    {
        icon:"fa-regular fa-lightbulb",
        name:"LIGHT",
        count:120
    },
    {
        icon:"fa-solid fa-chair",
        name:"CHAIRS",
        count:2410
    },
    {
        icon:"fa-solid fa-tv",
        name:"TV",
        count:76
    },
    {
        icon:"fa-solid fa-wifi",
        name:"WIFI",
        count:100
    },
    {
        icon:"fa-solid fa-video",
        name:"PROJECTER",
        count:100
    },

]
var Boxes = document.getElementsByClassName("Boxes1")[0];
Boxes.innerHTML = data.map((ele,index) => {
    return ` <div class="box1">
                <div class="asset_logo">
                    <i class="${ele.icon}"></i>
                </div>
                <div class="Name">${ele.name}</div>
                <div class="count" id="${index}">
                    ${ele.count}
                </div>
            </div>`
}).join('')

data.map((ele,index) =>{
    var x = document.getElementById(index);
    
    let demo = new CountUp(x, 0,ele.count,0,3)
    // console.log(demo)
    demo.start()
})
var data1 = [
    {
        icon:"fa-solid fa-shop",
        name1:"1ST-FLOOR",
        name:"1.1-HALL"
    },
    {
        icon:"fa-regular fa-lightbulb",
        name1:"1ST-FLOOR",
        name:"1.2-HAll"
    },
    {
        icon:"fa-solid fa-chair",
        name1:"2ND-FLOOR",
        name:"2.1-HAll"
    },
    {
        icon:"fa-solid fa-tv",
       name1:"2ND-FLOOR",
        name:"2.2-HAll"
    },
    {
        icon:"fa-solid fa-computer",
        name1:"3TH-FLOOR",
        name:"3.1-BAY"
    },
    {
        icon:"fa-solid fa-computer",
        name1:"3TH-FLOOR",
        name:"3.2-BAY"
    },
    ,
    {
        icon:"fa-solid fa-computer",
        name1:"3TH-FLOOR",
        name:"3.3-BAY"
    },
    {
        icon:"fa-solid fa-computer",
        name1:"3TH-FLOOR",
        name:"3.4-BAY"
    },
    {
        icon:"fa-solid fa-restroom",
        name1:"4TH-FLOOR",
        name:"4.1-HAll"
    },,
    {
        icon:"fa-solid fa-restroom",
        name1:"4TH-FLOOR",
        name:"4.2-HAll"
    },
    ,
    {
        icon:"fa-solid fa-restroom",
        name1:"5TH-FLOOR",
        name:"5.1-HAll"
    },
    {
        icon:"fa-solid fa-restroom",
        name1:"5TH-FLOOR",
        name:"5.2-HAll"
    },

]
var Boxes11= document.getElementsByClassName("Boxes2")[0];
Boxes11.innerHTML = data1.map((ele) =>{
    return ` <div class="box2">
                <div class="asset_logo2">
                    <i class="${ele.icon}"></i>
                </div>
                <div class="Name1">${ele.name1}</div>
                <div class="Name2">${ele.name}</div>
            </div>`

}).join('')