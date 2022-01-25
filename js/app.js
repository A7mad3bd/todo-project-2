
function Promitquestion() {
f1();
f2();
f3();
f4();
f5();
f6();
f7();
}
        
var user1 = [];

function f1(){

var getName = prompt("What is your name? ");


while (getName == "" ){

        alert("Invalid name, please try again");

         getName = prompt("What is your name? ");
       
   
}
 user1.push(getName);

}


//user1.push(getName);


var flag=false;

function f2(){
var getgender = prompt("What is your gender? Write Just male or female");



while(flag==false){
if (getgender == "male" || getgender == "female")
   {
        user1.push(getgender);
        flag=true;

    }   
    else 
    {
            alert("Invalid gender, please try again");
             getgender = prompt("What is your gender? Write Just male or female");

             if (getgender == "male" || getgender == "female")
             {
                     
                user1.push(getgender);
                flag=true;
              }   

    }
        
}
}

function f3(){
var getage = prompt("What is your age? ");

while (getage <= 0 )
   {
        alert("Invalid age, please try again");
         getage = prompt("What is your age? ");

}
user1.push(getage);

}


function f4 (){

var q1 = prompt("Did you study at university for a bachelor's degree? , Hint: ans:yes,no,y,n");

if (q1 == "yes" || q1 == "no"|| q1 == "n"|| q1 == "y")
   {
        user1.push(q1);

    }   
    else
    {
            alert("Invalid answer, please try again");
            var q1 = prompt("Did you study at university for a bachelor's degree? , Hint: ans:yes,no,y,n");
            user1.push(q1);


    }
}
        
    function f5 (){    
    var q2 = prompt("Do you like programming? , Hint: ans:yes,no,y,n");
    if (q2 == "yes" || q2 == "no"|| q2 == "n"|| q2 == "y")
   {
        user1.push(q2);

    }   
    else
    {
            alert("Invalid answer, please try again");
            var q2 = prompt("Do you like programming? , Hint: ans:yes,no,y,n");
            user1.push(q2);



    }
    
}
function f6(){    

        var q3 = prompt("Are you comfortable in the first week of the course? , Hint: ans:yes,no,y,n");
        if (q3 == "yes" || q3 == "no"|| q3 == "n"|| q3 == "y")
        {
             user1.push(q3);
     
         }   
         else
         {
                 alert("Invalid answer, please try again");
                 var q3 = prompt("Are you comfortable in the first week of the course? , Hint: ans:yes,no,y,n");
                 user1.push(q3);

     
     
         }
                  
        }
        
function f7()
{

        var arrayLength = user1.length;
        for (var i = 0; i < arrayLength; i++) {
            console.log(user1[i]);
        }
}