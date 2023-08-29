var names=['alex','billy','rafin',24,30];
names['color']='blue';
console.log(names);
console.log(names.length);
console.log(Object.getOwnPropertyNames(names));
//remove indices from an array using splice
var names1=names.splice(1,2);
console.log(names1);
for(name in names)
{
    console.log(names[name]);
}
//adding items to an array using push
var names2=names;
names2.push("rat");
names2.push(20,40);
console.log(names2);
for(var x=0; x<=names2.length-1; x++)
{
    console.log(names2[x]);
}
var names3=[];
names3[0]=names2.pop();
console.log(names3);
names3[1]='erika';
console.log(names3);
var names4='alen';
console.log(names4.length);
console.log(names4.charAt(2));
console.log(names4.search("n"));
console.log(names4.search("b"));