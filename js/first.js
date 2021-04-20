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
console.log(add(2,3,4));
console.log(add(2,3,4));
adjfakj
console.log(obj.desc,obj.add(5,3),obj.min(5,3),typeof obj);
