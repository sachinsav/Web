function add(){
    arr = arguments
    ans = 0
    for(i=0;i<arr.length;i++){
        ans += arr[i];
    }
    return ans;
}
obj = {
    desc:"This as add,min functionality",
    add:function(a,b){return a+b},
    min: function(a,b){return a-b}
}
obj2 = Object.create(obj);
console.log(obj2.__proto__==obj); //true because obj2.__proto__ is obj due to inheritance
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
console.log(add(2,3,4));
console.log(obj.desc,obj.add(5,3),obj.min(5,3),typeof obj);
person_obj = new Person('sachin',21);
console.log(person_obj,typeof Person,Person.prototype);