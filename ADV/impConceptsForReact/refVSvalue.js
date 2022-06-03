// In JS all premetive data-types(num,str,undef,null,bool) are value based and others(arr,obj,class) are reference based

let a = 1; // value of a is 1 (meance in memory a is stored and it's val = 1)
let b = 2;

b = a; // Here b is change in 1
b = 3; // Here b is changed but a not change (because 1 is value of a)

console.log(a);
console.log(b);

const c = [1, 2]; // Here value of c is the memory(0x01 demo) where c is stored,but it refers the array [1,2]
d = c; // Now d is stored in antoher memory(0x02 suppose) means both's val are different but it is also referred the same arr.
d.push(3);
c.push(4);

console.log(c); // After pushing in d , c also updated becuase their value is not same but their reference point is same and the poin is updated
console.log(d); // Same here

// For that reason also we update c after being constant{because we are actually not chaing it's value as it is a memory portion, rather than we change the referencing point.}
