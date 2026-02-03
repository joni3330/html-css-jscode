function functionName(Parametri1, Parametri2){
    // code that needs to be executed
}

function showMessage(){
    alert("This message  is inside the function");
}

showMessage();

function sum(number1, number2){
    return number1 + number2;
}

console.log(sum(25,5));

var result = toCelsius(54);

console.log("54 fahreheit is equal to "+result+"celcius")

function toCelcius(f){
    return (5/9) * (f-32);
}

console.log("54 fahreheit is equal to "+toCelcius(54)+"celcius")

var arrowFunction = name => alert('Hello $(name)');
arrowFunction ("John Doe");

function newFunction(){
    var localvar = "This  is a local variable";
    alert(localVar);
}
newFunction();

alert(localVar);



function toSeconds (minutat){
    return minutat * 60;
}

console.log(toSeconds(60));


//objektet


var car = { name:"AUDI" , 
     color:"black",
     year:2024,
     kilometers:"191000",
     startEngine : function (){
        alert("vrom");
      },
      get getKilometers(){
        return this.kilometers;
      },
      set setKilometers(km){
        this.kilometers = km;
      }
    };

    car.startEngine();

var school = {
    name:"Digital School",
    subject:"Programming",
    students:6,
    year:2026
};


alert(car.name);


var computer = new Object();

computer.name = "Lenovo";
computer.CPU = "Intel i7";
computer.RAM = "16GB";
computer.GPU = "nVidia GeForce 3060Ti";

computer.type = function () {
    return this.name + ", " + this.CPU + ", " + this.RAM + ", " +this.GPU
};

delete computer.GPU;

console.log(car.getKilometers);
car.setKilometers;
console.log(car.getKilometers);
