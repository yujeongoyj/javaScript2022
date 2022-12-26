function getGCD(n,m) {
  let max = n>m ? n : m;
  let GCD =0;
  for(let i=1; i <=max; i++){
    if(n % i ===0 && m % i===0){
      GCD=i;
    }
  }
  return GCD;
}
console.log(`308과 20의 최대공약수 : ${getGCD(308,20)}`);
