/**
 * @class
 */
class Children{

    name  = ""
    age   = 0
    defaultPolitesse = "Bonjour"
    timer = 1000
    /**
     * 
     * @param {string} name 
     * @param {number} age 
     */
    constructor(name, age){
        this.name = name
        this.age  = age
    }

    /**
     * @return {string} name
     */
    get getName(){
        return this.name
    }

    /**
     * @param {number} newName
     * @return void
     */
    setName(newName){
        this.name = newName
    }

    /**
     * @return {number} age
    */
    get getAge(){
        return this.age
    }

    /**
     * @param {number} newAge
     * @return void
     */
    setAge(newAge){
        this.age = newAge
    }
    /**
     * 
     * @param {*} politesse 
     * @returns new Promise()
     */
    showMessage = (politesse = this.defaultPolitesse)=>{
        return new Promise((accecp, reject)=>{
            setTimeout(()=>{
                this.setName(this.name,Math.round(Math.random())*10)
                accecp(`${politesse} ${this.getName} vous avez ${this.getAge} an${this.age >1 ? "s" : ""}`)
            },this.timer * Math.random())
        })
    }
}

/**
 * @class  Children <b>Classe permettant de gerer les children</b>
 * @site_web https://online.js
 */
class MultiChildren{

    childrens = []

    constructor(childrens){
        this.childrens = childrens
    }

    fetch = ()=>{
        this.childrens && this.childrens.map((children)=>{
    
            let child = new Children(children.name, children.age)
            child.showMessage().then(msg=>console.log(msg))
        
        });
    }
}

let childrens = [
    {name:"Idriss", age:19},
    {name:"Frank", age:17},
    {name:"Brice", age:15},
    {name:"Carel", age:13}
];

const childs = new MultiChildren(childrens)
childs.fetch()