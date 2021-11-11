
let count = 0;
const button1 = document.getElementById("tom");
const button2 = document.getElementById("pot");
const button3 = document.getElementById("cflower");
const button4 = document.getElementById("carr");
const button5 = document.getElementById("ban");
const button6 = document.getElementById("aple");
const button7 = document.getElementById("man");
const button8 = document.getElementById("orng");

button1.addEventListener("click", function () {
    let tom = ++count
    var currentdate = new Date();
    var datetime1 = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    firebase.database().ref("SmartShoppyUsers/SmartShopyProduct/Tomato").set({
        ProductId: "tomp101",
        ProductName: "Tomato",
        count: tom,
        LastSync: datetime1,
        Price: '$ 100'
    })

   
});

button2.addEventListener("click", function () {
    let pot = ++count
    var currentdate = new Date();
    var datetime2 = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    firebase.database().ref("SmartShoppyUsers/SmartShopyProduct/Potato").set({
        ProductId: "pot34",
        ProductName: "Potato",
        count: pot,
        LastSync: datetime2,
        Price: '$ 200'
    })

  
});

button3.addEventListener("click", function () {
    let cflower = ++count
    var currentdate = new Date();
    var datetime3 = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    firebase.database().ref("SmartShoppyUsers/SmartShopyProduct/CauliFlower").set({
        ProductId: "cflower321",
        ProductName: "CauliFlower",
        count: cflower,
        LastSync: datetime3,
        Price: '$ 110'
    })

    
});

button4.addEventListener("click", function () {
    let carr = ++count
    var currentdate = new Date();
    var datetime4 = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    firebase.database().ref("SmartShoppyUsers/SmartShopyProduct/Carrot").set({
        ProductId: "carr231",
        ProductName: "Carrot",
        count: carr,
        LastSync: datetime4,
        Price: '$ 160'
    })
});

button5.addEventListener("click", function () {
    let ban = ++count
    var currentdate = new Date();
    var datetime5 = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    firebase.database().ref("SmartShoppyUsers/SmartShopyProduct/Banana").set({
        ProductId: "ban594",
        ProductName: "Banana",
        count: ban,
        LastSync: datetime5,
        Price: '$ 901'
    })
});

button6.addEventListener("click", function () {
    let aple = ++count
    var currentdate = new Date();
    var datetime6 = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    firebase.database().ref("SmartShoppyUsers/SmartShopyProduct/Apple").set({
        ProductId: "aple3421",
        ProductName: "Apple",
        count: aple,
        LastSync: datetime6,
        Price: '$ 210'
    })
});

button7.addEventListener("click", function () {
    let man = ++count
    var currentdate = new Date();
    var datetime7 = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    firebase.database().ref("SmartShoppyUsers/SmartShopyProduct/Mango").set({
        ProductId: "man1",
        ProductName: "Mango",
        count: man,
        LastSync: datetime7,
        Price: '$ 230'
    })
});

button8.addEventListener("click", function () {
    let orgn = ++count
    var currentdate = new Date();
    var datetime8 = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    firebase.database().ref("SmartShoppyUsers/SmartShopyProduct/Orange").set({
        ProductId: "orng123",
        ProductName: "Orange",
        count: orgn,
        LastSync: datetime8,
        Price:'$ 219'
    })
});

