$( document ).ready(function() { 
 
      
      
    var myFacebookToken ='EAACEdEose0cBAPR7mZCYzpoxa2BxcWn8cDtWGg7pQZCC8AwNc4ooGm0yHZCmVcGUAp6PhEL1OwFMX1HyNGlibDXBBZBFxzehsgIgrtYZBcaPwqRncbC6GdlQyLKKZCNgkkbdHPaj7qLv6gBcfJLmTjfgChwMDnX9o8qHlzzXXSi5VMwheCfvddZAgZBa3heJcLMZD'; 
    //please use a new token
   function getFacebookPost(){ 
        

        
        $.ajax('https://graph.facebook.com/me/feed?access_token='+myFacebookToken,{ 
                
               success : function(response){ 
                    console.log(typeof(response)); 
                     var input = document.getElementById("number").value; //to get input value
                    for (i=1 ;i<=input;i++){ 
                       
                       $(".well").append( i + ").&nbsp&nbsp" + "Story:" + response.data[i].story + "<br>" + "Message:" + response.data[i].message + "<br>" 
                                +  "Created-time:"  + response.data[i].created_time + "<br>" + "Id:" + response.data[i].id + "<br>") 
                           
                           } //for loop totake data from facebook
                    
                }, 
                     error : function(request,errorType,errorMessage){ 
                        alert("Please check your console for further details");
                        console.log(request); 
                        console.log(errorType); 
                        alert(errorMessage); 
                        }, 
 
                        timeout:5000// in ms 
 
                    
 
            }//end argument list 
 
 
 
        );// end ajax call 
 
 
    }// end get facebook info 
 
    $("#click1").on('click',getFacebookPost) 

    $("#click2").on('click',function(){

    	$(".well").hide(1000);
        alert("YOU have hidden your recent feed");

    $("#click3").on('click',function(){
 
    $(".well").show(1000);
        alert("YOU have shown your recent feed");
        alert("please refesh your page to get more feed info....");
    

    });

    });
  
  });
