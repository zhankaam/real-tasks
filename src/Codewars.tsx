export function Codewars(props: any) {
    return <div>
      {/*  <h3>Task 1</h3>
        function helloWorld() {
        const str = "Hello World!"
        console.log(str)
    }

        helloWorld = function() {
        let string = "Hello World!";
        console.log( str );
    }*/}

    {/*<h3>Task 2 </h3>
        const v1 = 50
        const v2 = 100
        const v3 = 150
        const v4 = 200
        const v5 = 2
        const v6 = 250

        const equal1 = () => v1 + v1
        const equal2 = () => v4 - v2
        const equal3 = () => v1 * v5
        const equal4 = () => v4 / v5
        const equal5 = () => v6 % v3*/}

        {/*<h3>Task 3 </h3>
        let a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
        function Dad(){
        //select some variable to combine "Dad"
        return d1+a2+d2;
    }
        function Bee(){
        //select some variable to combine "Bee"
        return b1+e2+e2;
    }
        function banana(){
        //select some variable to combine "banana"
        return b2+a2+n2+a2+n2+a2;
    }

        //answer some questions if you finished works above
        function answer1(){
        //the answer should be "yes" or "no"
        return "no";
    }
        function answer2(){
        //the answer should be "yes" or "no"
        return "no";
    }
        function answer3(){
        //the answer should be "yes" or "no"
        return "yes";
    }*/}

    {/*<h3>Task 4</h3>
        function getLength(arr){
        //return length of arr
        return arr.length;
    }
        function getFirst(arr){
        //return the first element of arr
        return arr[0];
    }
        function getLast(arr){
        //return the last element of arr
        return arr[arr.length - 1];
    }
        function pushElement(arr){
        var el=1;
        //push el to arr
        arr.push(el)
        return arr;
    }
        function popElement(arr){
        //pop an element from arr
        arr.pop();
        return arr;
    }

    <h3>Task 5</h3>
   function animal(obj){
    return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.'
    `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
     function animal(obj){
  return ['This',obj.color,obj.name,'has',obj.legs,'legs.'].join(' ');
}

   animal = obj => {
  let arr = [];
  arr.push('This');
  arr.push(obj.color, obj.name);
  arr.push('has');
  arr.push(obj.legs);
  arr.push('legs.');
  return arr.join(' ');
}

    <h3>Task 6 <h3/>
      function trueOrFalse(val){
  if (val)  { return 'true';}
  else { return 'false'; }
}
function trueOrFalse(val){
  return Boolean(val) ? 'true' : 'false';
}
function trueOrFalse(val){
 return (val) ? 'true' : 'false'
}

function trueOrFalse(val){
  return !val ? 'false':'true'
}

function trueOrFalse(val){
  if (val === false || val === 0 || val === -0 || val === ""
  || val === null || val === undefined || val === NaN){
    return false;
  }
  else{
    return true;
  }
}

 <h3>Task 7</h3>
 function saleHotdogs(n){
  return n * ( n<5 ? 100 : n>=5 && n<10 ? 95 : n>=10 ? 90 : price(cents))
  }

  const saleHotdogs=n=>n*(n<5?100:n<10?95:90);

  const saleHotdogs = (n) => {
  switch (true) {
    case n < 5: return n * 100;
    case n < 10: return n * 95;
    default: return n * 90;
  }
}

function saleHotdogs(n){
  if (n < 5) return n * 100;
  if (n >= 5 && n < 10) return n * 95; else return n * 90;
}

let saleHotdogs=n=>(
n<5
    ?100*n
    :n<10
        ?95*n
        :90*n
);

function saleHotdogs(n){
  var money = 0;
  if (n < 5 ) {
    money = n * 100
  }
  else if ( n >= 5 && n < 10 ) {
    money = n * 95
  }
  else if ( n >= 10 )  {
   money = n * 90
  }
  return money
}

const saleHotdogs = customersNumber => customersNumber * (customersNumber < 5 ? 100 : customersNumber > 9 ? 90 : 95);

function saleHotdogs(n) {
  return  n*(n<5 ? 100 : n<10 ? 95 : 90);
}

saleHotdogs = n => {
  if (n < 5) return 100 * n;
  if (n >= 10) return 90 * n;
  return 95 * n;
}

       <h3>Task 8 </h3>
    function howManydays(month){
     switch (month){
    case 2: return 28;
    case 4:
    case 6:
    case 9:
    case 11: return 30;
default:
return 31;
}
}

    function howManydays(month){
     let days;
     switch (month){
    case 2: days=28;
      break;
     case 4:
     case 6:
      case 9:
     case 11: days=30;
       break;
   default:
   days=31;
   }
  return days;
}

function howManydays(month){
  switch ( month ){
    case 2 : return 28
    case 4: case 6: case 9: case 11: return 30
    default: return 31
  }
}

let howManydays = m => {
  var days;
  switch (m) {
    case 4: case 6: case 9: case 11:
      days = 30; break;
    case 2:
      days = 28; break;
    default:
      days = 31;
  }
  return days;
}

function howManydays(month){
  var days;
  switch (month){
    case 1:
     days = 31;
      break;
    case 2:
      days = 28;
      break;
    case 2:
      days = 31;
      break;
    case 3:
      days = 31;
      break;
    case 4:
      days = 30;
      break;
    case 5:
      days = 31;
      break;
    case 6:
      days = 30;
      break;
    case 7:
      days = 31;
      break;
    case 8:
      days = 31;
      break;
    case 9:
      days = 30;
      break;
    case 10:
      days = 31;
      break;
    case 11:
      days = 30;
      break;
    case 12:
      days = 31;
      break;
  }
  return days;
}

function howManydays(month){
  var days;
  switch (true){
    case month === 1 || month === 3 || month === 5 || month === 7 ||
         month === 8 || month === 10 || month === 12 :

         days = 31
         break
    case month === 4 || month === 6 || month === 9 || month === 11 :

         days = 30
         break

    default :

         days = 28
         break
  }
  return days;
}

function howManydays(month){
  var days;
  switch (month){
      case 2: days = 28;
      break;
      case 4 || 6 || 9 || 11 : days = 30;
  break;
      default: days = 31
  }
  return days;
}   // submit не пройдет(

    <h3>Task 9</h3>
 const padIt = (string, n) => {
  let result = string
  let i = 0

  while (i < n) {
    if (i % 2 === 0) {
      result = `*${result}`
    } else {
      result = `${result}*`
    }

    i += 1
  }

  return result
}

function padIt(str,n){
  while(n>0){
    if(n%2 === 0) {
      str = str + "*";
    }else{
      str = "*" + str;
    }
    n --;
  }
  return str;
}

function padIt(str,n){
  let counter = 1;
  while(counter <= n){
    if(counter % 2 != 0) str = '*' + str;
    if(counter % 2 == 0) str += '*'
    counter++
  }
  return str
}

function padIt(str,n){
  let i = 0;
  let result = [str];

  while(n > i) {
    if (i % 2 === 0) {
       result.unshift('*');
       i++
    } else {
       result.push('*');
       i++
    }
  }

  return result.join('');
}

function padIt(str,n){
    let result = str, i = 0;
    while (i < n) {
        if(i % 2 === 0) result = `*${result}`
        else result = `${result}*`
        i++
    }
    return result;
}

 <h3>Task 10</h3>
 const pickIt = array => {
  for (let i = 0; i < array.length; i++) {}
  return [array.filter(number => number % 2 !== 0),
          array.filter(number => number % 2 === 0)]
}

function pickIt (arr) {

  let odd = []
  let even =[]

  for (var x of arr) {
      ((x % 2) ? odd : even).push(x)
  }

  return [odd, even]
}

function pickIt(arr){
  var odd=[],even=[];
  for (i of arr) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }


  return [odd,even];
}

function pickIt(arr){
  var odd=[],even=[]
  //coding here
  for (var i=0;i<arr.length;i++){
    if (arr[i]%2==1) odd.push(arr[i]);
    else            even.push(arr[i]);
  }
  return [odd,even];
}

function pickIt(arr) {
  let odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd, even];
}




*/}




















    </div>
}











