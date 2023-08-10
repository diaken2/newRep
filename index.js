console.log('dddddd2')
console.log('ooookkkkkk')
const a=5
let A=[]
for (let i=0;i<5;i++){
A.push(i)
}
console.log(A)
let B = A.reduce((add,cor)=>{
if (cor==2){
add.push(cor)
}
return add
},[])
console.log(B)
console.log('АНИМЕ')