
// =========================================== ============  CGAPTER 21 T0 25 ========================================================/////





//=== ======= TASK 1 =============================//


// var first = prompt("Enter first name  ");
// var lastname = prompt("Enter last name ");

// alert("Hello "  + first  + " " + lastname )






// ===================== TASK 2 =============//

//  var a =  prompt("Enter your favorite mobile phone model ")

//   var b = a.length;
//   alert(b)




// ===================  TASK 3 ===============//


// var text = "Pakistan";

// var a = text.indexOf("n")
// document.write( "String: "+ text +"<br>" +"Index of 'n' is " + a)





// ================= TASK 4 ====================//


// var text = "Hello World";

// var a = text.lastIndexOf("l")
// document.write( "String: "+ text +"<br>" +"Index of 'n' is " + a)



// ==============  TASK 5 ========================== //

// var text = "Pakistan";

// var a = text.charAt(3)
// document.write( "String: "+ text +"<br>" +"Index of 'n' is " + a)





// ===================   TASK 7 ==================== //

//  var a =   "hyderabad"
//  var b  = a.replace(/hyderabad/g, " Islamabad")

//  document.write(" City: " + a + " <br>" + "After replacement: " + b)



// ================== TASK 8 ========================= //


// var message = "  Ali and sami  are best friend, they play cricket and football together"

// var b =    message.replace(/and/g, " &");
// document.write(b)




// =================== TASK 9 ===================== //


// var  str = "472"

// var num = Number(str);


// document.write("Value: " + str +  "<br>" + " Type : String " + " <br>" + "  Value: " + num + "<br>" + " Type: Number")





// =================== TASK 10 ========================= //


//  var pea = prompt(" write something");

//  var b = pea.toUpperCase();
//  alert(b)



//  ================== TASK  11 ========================= //



// var a = prompt("Enter something ");

// var  b = a.slice(0,1);

// var  c = a.slice(1)

// var d = b.toUpperCase();

// var e = c.toLowerCase();

// alert (  d + e)




// ===================== TASK 12 =================//




// var num = 35.36;
// var str = num.toString().replace(".","");


// document.write("Number: " + num + "<br>" + "Result: " + str)




// ==================== TASK 17 ==================== //



//  var a = prompt("Enter name ");

//   var b = a.charAt(-1)

//   alert (b)




// ====================   TASK 18 =================== //

















// ==========================================================  CHAPTER NO 26 TO 30 ==================================================/////////////




// ======================= TASK 1 =====================//


//  var a =  prompt("Enter positive floating number ");

//  var b = Math.round(a);

//  var c = Math.floor(b);

//  var d  =  Math.ceil(c);


//  document.write("number: " + a + "<br>" + " round off value: " + b +  "<br>" + " floor value: " + c + "<br>" + " Ciel value: " + d)





// ================== TASK 2 ========================== //



// var a =  prompt("Enter negative floating number ");

//  var b = Math.round(a);

//  var c = Math.floor(b);

//  var d  =  Math.ceil(c);


//  document.write("number: " + a + "<br>" + " round off value: " + b +  "<br>" + " floor value: " + c + "<br>" + " Ciel value: " + d)



// ====================== TASK 4 ===================== //





// var value = Math.random() * 9 

// var dice = Math.floor(value)

// document.write("random dice value: " + dice  )






// =============== TASK 6 =====================//


// var a = Math.random() * 100;
// var b =  Math.floor(a);
// document.write("The random number between 1-100 is: " + b)











// ===================== TASK 8 ================ //



// var b = +prompt("Enter number between 1=10  ");
// var a = 6;
// if (a === 6){
//     alert("you have guess the right number ")

// }else{
//     alert("Try again")
// }


















//  ====================================  CHAPTER NO 31 T0 34 ===========================================================================///



// ============= TASK 1 =========///


// var date =  new Date();
// document.write(date)


// ============== TASK 2 =================//

// var a = new Date();

// var b  = a.toString();
// var currentmonth= b.slice(0,3)
// alert(currentmonth)




// ====== TASK 3 =====//


// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
//  alert(" Today is " + c )






// ====== TASK 4 =======//


// var a = prompt("Enter day")

// if (a === "sun"){
//     alert(" it's Fun day ")
// }else if(a === "sat"){
//     alert("it's Fun day")
// }





//=========TASK 5 ========//


// var a = prompt("Enter days of month ")
// if (a < 15){
//     alert("First fifteen days of month")
// }else if(a  > 15){
//     alert("Last days of month")
// }



// ========== TASK 7 =======//


// var a = prompt("Enter Time in 24 hour clock")
// if (a < 12 ){
//     alert("It's AM")
// }else if (a > 12){
//     alert("It's PM")
// }





// ============ TASK 6 =========//


// var a = new Date();
// document.write("Current date: " + a + "<br>");
// var c =   a.getTime();
// document.write("Elapsed millisecond since January 1,1970: " + c + "<br>")
// var d = c/(1000*60*60);
// document.write("Elapsed minutes since January 1,1970: " + d)


// ======= TASK 8 ========//

// var a = new Date("Dec 31, 2020")
// document.write(a)



// =========== TASK 9=========//


// var a = new Date("June 18, 2020");
//  var b = a.getTime();

//  var c = new Date(" March 24, 2020");

//  var d = c.getTime()

//  var e = d-b;

//  var f = e/(1000*60*60*24);


// var h = Math.floor(e);

// alert(h)








// ============== task 10 =========//


// var a  = new Date( "June 17 ,2020");

//  var b =  a.getTime();

 

//  var  c  = new Date("January 1, 2020 ");
//   var d  = c.getTime();


// var milli =  b-d;
//  var seconds = milli/(1000*60)
// document.write(" on reference  date " + a + "  " + seconds +"  " + "seconds had passed since beginnig of 2020" )




// ================== TASK 11 ===================//

// var a = new Date();

//  var b = a.setHours(2)

//  document.write("current date: " + a + "<br>" + " 1 Hour ago it was" + b)











// =============== TASK 12 =================//



//  var a = new Date();
// var c = new Date( " June 18, 1920")
// document.write( " current date : " + a + " <br>" + "100 years back,  it was " + c )










// ============ TASK  13 ===============//













// =============== TASK 14================//


// document.write("<h1> K-Electric Bill <h1>")

// var a = prompt("Enter customer name")
// var b = prompt("Enter current month")
// var c = +prompt("Enter number of units ")
// var d = +prompt("Enter charges unit")

// document.write ("Customer name :" + a + " <br>")
// document.write(" Month: " + b + " <br>" )
// document.write (" Number of units: " +c + "<br>" )
// document.write(" Charges per unit: " + d + " <br>")


// var netamount = d * c;
// document.write(" Net amount payable (within due date): " + netamount +"<br>")

// var late = 350
// document.write("Late payment surcharge: "  + " <b>" + late + "</b>" +  " <br>" );

// var gross =  netamount + late 

// document.write ("gross amount payable (after due date) : "  + " <b>" + gross + " </b>")

















// ============================================================ CHAPTER 35 TO 38 =======================================================///





// =============== TASK 1 ==================//

// function date(){
//     var a = new Date()
//     document.write(a)

// }

// date()



//==================== TASK 2 ===================//


// function name(){
//  var a = prompt("Enter first name");
//  var b = prompt("Enter Last  name");
//  alert("Hello " + a + " " + b )

// }
// name()



// ====================== Task 3 =====================//


// function add(){

//     var a = +prompt("Enter first number ")
//     var b = +prompt(" Enter second number ")
//      return  a +  b

// }

//  alert(add ())



// ================ TASK 4 ===================//




// function add(num1,opr,num2){
//     var num1 = +prompt(" Enter first number ");
//     var opr = prompt(" Enter operator ");
//     var num2 = +prompt(" Enter second number ")
    
//     if (opr === "+"){
//         return num1 + num2
//      }
//      else if ( opr === "-"){
//         return num1 - num2
//     }
//     else if (opr === "*"){
//          return num1 * num2
//     }


// }

// alert (" your answer is " + add())




// ====================== TASK 5 ==================//




// function sqr(a){

// var a = +prompt("Enter number ")
//  return a*a

// }

// alert(" the square of your number is " + sqr())






// ==================  TASK 6=====================//


// function sqr(n){

//      var n = +prompt("Enter number ")
//       return n!
    
//      }
    
//      alert(" the square of your number is " + sqr())
    



// ========================= TASK 8 ====================//



// function hypo(a,b){

//     var a =  +prompt(" enter base ")
//     var b = +prompt("enter perpendicular ")
//      return   Math.sqrt( a * a + b * b)     


// }



// var c = alert(" the hypotenuse is " + hypo())





// =====================  Task 9 =============///

    
//   function area(a,b){
     
//         var a =  +prompt("Enter width")
//         var b =  +prompt(" Enter Height")
//         return a * b

// }

// var c = alert("The area of rectangle is  " + area())







// ======================= TASK 14  =====================//




//   function calcircumference(r){
//       var r = +prompt("Enter radius ")
//       return  2 * 3.142 * r  
//   }

//   var c = alert(" "the circumference of circle is "  +  calcircumference());


// function calcarea(r){
//      var r =  +prompt("Enter radius");
//      return  3.142 * r

// }

// var c =  alert("The area  of circle is " + calcarea())









