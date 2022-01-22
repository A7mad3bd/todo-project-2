
function myFunction() {
    var getName = prompt("What is your name? ");
    
    
    if (getName === null || !isNaN(getName)){
    
            alert("Invalid name, please try again");
           
       
    }
    
    
    var getgender = prompt("What is your gender? Write Just male or female");
    
    if (getgender == "male" || getgender == "female")
       {
            
        }   
        else
        {
                alert("Invalid gender, please try again");
    
        }
            
            
                    
    var getage = prompt("What is your age? ");
    
    if (getage <= 0 )
       {
            alert("Invalid age, please try again");
           
    }
    
    
    var r=confirm("if you would to See the  welcoming message click OK                                                                                                                   if you wouldn't skip the message click Cancel ");
    if (r==true)
      {
      x="You pressed OK!";
      }
     else
      {
      x="You pressed Cancel!";
      }
        
     
     
      if (x =="You pressed OK!"){
      
    if(getgender=="male"){
            alert("Welcome Mr "+getName);
            }
            else if(getgender=="female")
            {
                    alert("Welcome Ms "+getName);
    
            }
            else
            {
            
                            alert("Welcome");
    
            }
     
      }
    
    
      }
      
    