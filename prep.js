
//promise
function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const name = "vinod"
            if (name) {
                resolve(name)
            } else {
                reject("Error")
            }
        }, 1000);
    })
}

//class

class Person {
    constructor(name,age,city){
        this.name=name;
        this.age=age;
        this.city=city
    }
    printCity (){
        console.log(`${this.city} is my city`);
    }
}

const Person1=new Person("Vinod",27,"Pune")
Person1.printCity()
