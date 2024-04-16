// Task 1
class Worker {
    constructor(name,surname,rate,days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days;
    }
}
let worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
console.log()


// Task 2
class Worker2 extends Worker{
    getName() {return this.name}
    getSurname() {return this.surname}
    getRate() {return this.rate}
    getDays() {return this.days}
    getSalary(){return this.rate * this.days;}
}
let worker2 = new Worker2('Иван', 'Иванов', 10, 31);
console.log(worker2.getName()); //выведет 'Иван'
console.log(worker2.getSurname()); //выведет 'Иванов'
console.log(worker2.getRate()); //выведет 10
console.log(worker2.getDays()); //выведет 31
console.log(worker2.getSalary()); //выведет 310 - то есть 10*31
console.log()


// Task 3
class Worker3 extends Worker2{
    setRate(rate){this.rate=rate}
    setDays(days){this.days=days}
}
let worker3 = new Worker3('Иван', 'Иванов', 10, 31);
console.log(worker3.getRate()); //выведет 10
console.log(worker3.getDays()); //выведет 31
console.log(worker3.getSalary()); //выведет 310 - то есть 10*31
//Теперь используем сеттер:
worker3.setRate(20); //увеличим ставку
worker3.setDays(10); //уменьшим дни
console.log(worker3.getSalary()); //выведет 200 - то есть 20*10
console.log()

// Task 4
class User {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        return this.name + ' ' + this.surname;
    }
}
class Student extends User {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    getCourse(){
        let today = new Date()
        let currentYear = today.getFullYear()
        return currentYear-this.year
    }
}
let student = new Student('Иван', 'Иванов', 2019);
console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2019
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2022