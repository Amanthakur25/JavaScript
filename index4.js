// intro to objects

let car={
    color:"black",
    model:"2023",
    Company:"BMW"

}

// console.log(car);

// Accessing methods

// console.log(car["model"]);
// console.log(car.Company);

// let propertyname="Company";   it can be computed
// console.log(car[propertyname]);

// car.color="brown"
// console.log(car);


// fucntion vs  method

// method : function inside the object is called method both are same 

// let obj ={
//     ageCal:function(birth){
//         let age=2023-birth;
//         return age;
//     }
    
// }

// console.log(obj.ageCal(2002));



// this Keyword

// in each method we have access of special keyword called this 

// this keywored repersent the object . calling the method this is present 

let person={
    fistName:"aman",
    lastName:"thakur",
    city:"indore",
    birthyear:2003,
    Study:"Software Developer",
    getSummery:function(){
        return `${this.firstName}`
    }
}

console.log(person.getSummery());
