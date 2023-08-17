
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

//selector
//1. element selector
//2. class Selector
//3. id selector
//4. descendant selector - div p
//5. child selector
//6. attribute selector input[type="text"]
//7. psudo class selector

//positions in css
//1. Static-default position
//2. Relative
//3. Absoulute
//4. Fixed
//5. Sticky