class person {
    constructor(name, age, country) {
        this.name = name
        this.age = age
        this.country = country
    }
    display_details() {
        console.log(this.name)
        console.log(this.age)
        console.log(this.country)
    }
}
person1 = new person(' saba Saeed Khan', 21, 'Pakistan')
person2 = new person(' Noor e Rehman', 27, 'Pakistan')

person1.display_details()
person2.display_details()
