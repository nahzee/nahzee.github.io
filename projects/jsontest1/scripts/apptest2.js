$(document).ready(function(){

	// Get JSON file
	$.ajax({
		type: 'GET',
		url: 'scripts/data.json',
		dataType: 'json',
		success: function(data) {			
				var jsonData = data;	

				var randomArrayItem = Math.floor(Math.random * myArray.length); 		

				var thing = [];
		    for(var i = 0; i < jsonData.length; i++)
				{
						if (jsonData[i].thingYouWantToDo) { 
								thing.push(jsonData[i].thingYouWantToDo);	
						}
			  }

				var select = Math.floor(Math.random()*thing.length);

loop1:	 
		    for(var i = 0; i < jsonData.length; i++)
				{
				  if(jsonData[i].thingYouWantToDo == thing[select])
				  { 	  	
				  	 $("#message").append(jsonData[i].name);
		  			 $("#message2").append(jsonData[i].thingYouWantToDo);
						 $("#message3").append(jsonData[i].thingYouWantToDo + ":");
						 var related = [];
loop2:	
				      for(var j = 0; j < jsonData.length; j++)
							{
					 	     if(jsonData[j].thingYouWantToDo == thing[select])
					       {  
					       	 
					       	  related.push(jsonData[j].name);
					       }					     
				  		}
				  		$("#related").append(related.join(", "));
				  		break loop1;
						}
		    }
		},  
	});
});