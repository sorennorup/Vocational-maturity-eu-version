function loadData(){

	$("#table-body").show();
	$.ajax({
			url: "program_server.php",
			data: "last_displayed_punkt_id="+ 0,
			type: "POST",
			success: function(response){
				var res = JSON.parse(response);	       
			    $.each(res, function(index, item) {
		
				var table_data = '<tr ><td align="left" valign="top" width="125"><span style="color:#333333;font-size:14px;font-family:trebuchet ms;">'+
				'<strong> '+item.from_hour+'</strong></span><td>'+
				'<td align="left" valign="top" width="455">'+
				'<span style="font-size:14px;font-family:trebuchet ms;">'+
				item.program_beskrivelse+'<span></td>  </tr>';
				$("#last_displayed_punkt_id").val(item.punkt_id);
				html_result += table_data;   
				$("#table-body").append(table_data);
				$("#last_displayed_punkt_id").val(item.punkt_id);
				
				});
			},
			error: function(error){
				alert("an error occured"+ error);
			}
	    });
		
		}
		
function editMode(){
    $("#form-window,#table-body").hide();
	
    
	$(".disable-input").prop("readonly", true);
	//$("#table-body").hide();
	$("body").css('background-color', 'light-grey');
	$("#show-exit-edit-btn").html('<a href = "programCreater.php?edit_mode=false" id = "leave" value = "true"  class = "btn btn-default" style = "color:#336699;margin-bottom: 30px;´">Forlad redigering</a>');

	$.ajax({
			url: "program_server.php",
			data: "last_displayed_punkt_id="+ 0,
			type: "POST",
			success: function(response){
				
				var res = JSON.parse(response);
				     var count;  
			$.each(res, function(index, item) {
			count = index+1;
			var table_data = 
                '<p> Programpunkt '+count+' </p>'+
				'<form action = "edit_events.php" method = "POST">'+
                '<tr > <td align="left" valign="top" width="125">'+
				'<span style="color:#333333;font-size:14px;font-family:trebuchet ms; ">'+
				'<strong>'+
				'<input type="text" name = "from_hours"  value="'+item.from_hour+'"/>-'+				
				'<td align="left" valign="top" width="541">'+
                '<span style="font-size:14px; font-family:trebuchet ms;">'+
				'<br/><textarea rows="4" id = "sel"  cols="50" name = "opdateret_pr_beskrivelse">'+item.program_beskrivelse+'</textarea>'+
				'</span> '+			
				'</td>  </tr>  '+
				
				'<input type = "hidden" name = "edit_string" value = "true"/>'+
				'<input type = "hidden" name = "saved" value = "true"/>'+
				'<input type = "hidden" name = "id" value = "'+item.punkt_id+'"/>'+
				'<a style = "position:relative;margin-right:70px;" href = "edit_events.php?id='+item.punkt_id+'&edit_mode=true" class = "btn btn-default" onclick = "dialog()" type = "button">Slet</a>'+
				'<input type = "submit" class = "btn btn-default" value = "Gem programpunkt"/></form><br/><br/><hr/>';
				
				
				
		    // $("#richTextField").al(item.program_beskrivelse);
			$("#edit-mode").append(table_data);
			$("#edit").click(function(e){
			e.preventDefault();
			prompt(item.program_beskrivelse);
			
			});
		
			$("#last_displayed_punkt_id").val(item.punkt_id);
			
		
					});
		 	
    
			
				},
			error: function(error){
				alert("an error occured"+ error);
				}
			});
		
		}
        
