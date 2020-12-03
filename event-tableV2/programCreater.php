
<!DOCTYPE html>
<meta charset="utf-8" /> 
<html>
<head>
    <title>Indtast programpunkter</title>
    <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link rel="stylesheet" href="jquery-ui.min.css">
	<script src = "js/wysiwyg.js"></script>	
	<script src = "js/ajax.js"></script>
	<script src = "js/actions.js" ></script>
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  
</head>
   <body cz-shortcut-listen="true" >
	  <div id = "show-alert"></div>
	  <div class = "container" style = "width: 600px;">
	  <div id = "tekst"></div>
      <h1>Lav program</h1>
      <h4>Laver et pænt layout af programmet. <a href="#" onclick= "outputHtml(html_result);" > Download tabellens kildekode her</a> </h4>
      <div id = "check_funktion"></div><br>
     
	  <div id = "form-window">
			<form id ="form" name = "myForm"  method="POST" class = "save disable-input" enctype="application/x-www-form-urlencoded">  
			<label for= "tidspunkt">Tidspunkt fra/til</label><br/>
			<input id = "timepicker" class="form-control disable-input input-small"  name = "from_hours" type="text"/> <br/>
            
		<div class="form-group">
			<label for="program-beskrivelse">Programpunkt - og beskrivelse:</label>
		   <div id = "wysiwyg_cn" style = "padding-bottom:8px; width: 600px;">
			 <input type = "button" class="btn btn-default" onclick = "iBold();" value = "B" />
			 <input type = "button" class="btn btn-default" onclick = "iItalic();" value = "I" />
             <input type = "button" class="btn btn-default" onclick = "iLink();" value = "Link" />
             <input type = "button" class="btn btn-default" onclick = "iUnorderedList();" value = "ul" />
			  <input type = "button" class="btn btn-default" onclick = "iTextcolor();" value = "Color" />
			   <input type = "button" class="btn btn-default" onclick = "iImage();" value = "Img" /> 
		   </div>
		     <textarea class="form-control disable-input" style = "display:none;" name = "program_beskrivelse" rows="5" id="comment"></textarea>
		     <iframe class="form-control disable-input" name = "richTextField" id = "richTextField" style = " width: 580px;height: 300px;"></iframe>
		</div>        
			<input type="text" style = "display:none;" id="last_displayed_punkt_id" name="last_displayed_punkt_id" readonly=true value="0" />
		   <div id = "my-button">
			<button type="submit" id = "submit_data" class="btn btn-default">Tilføj programpunkt</button> 
	
			</form>
			<button class = "btn btn-default" id = "dismiss" >Fortryd</button>
			<script>$("#dismiss").click(function(e){
			e.preventDefault();
			displayTableView();			
			
			});
			
	</script>
		  </div>
    </div>
    <script>
		
		var edit_mode = <?php echo $_REQUEST['edit_mode']; ?>;
		if(edit_mode===true){
			
			$("#buttons").html('<a href = "programCreater.php?edit_mode=false" id = "leave" value = "true"  class = "btn btn-default">Forlad redigering</a>');
		}
		var saved = <?php echo $_REQUEST['just_saved']; ?>;
		if(saved === true){
			 // Display a green succes alert on top of the page
		   $("#show-alert").html('<div class="alert alert-success" role="alert">Programmet er opdateret</div>');
		}
		    // Remove the green success alert when starting a new action
		   $(".disable-input,#pr_punkt").click(function(){
				$("#show-alert").html("");
			});
			$(".disable-input,#pr_punkt").keyup(function(){
				$("#show-alert").html("");
			});
			
	 </script>
	
	   <br/>
	   <div id = "show-exit-edit-btn"></div>
     <table id = "edit2"  height="" width="580">
		  <tbody>
	 <div id = "table-body" ></div> <div id = "edit-mode" class = "pre-scrollable"  ></div>
	   <div id = "buttons">
		  <button  class = "btn btn-default" id = "new-table-cell">Nyt programpunkt</button>
		  <a href = "edit_events.php?edit_mode=true" id = "edit" value = "true"  class = "btn btn-default">Rediger program</a>
		  <a href = "#" onclick = "deleteAllDialog();"  class = "btn btn-default">Slet alle programpunkter</a>
	   </div>	 
	 <script>
		
		  $("#new-table-cell").click(function(){
			// display the form/ slide_in
			$("#form-window").show().css({'margin-top':'-500px',opacity:0}).animate({
			opacity: 1,
			'margin-top': '+=500px'
			}, 500);
			// hide the table output
			$("#table-body").hide();
			
			
			});		
		
		 $(document).ready(function(){
			//hide the form window when displaying table
			$("#form-window").hide();
			// set iframe to receive input
			iFrameOn();
			// call the ajax function that loads the data
			loadData();
			// set last displayed punkt id to 0		
			$("#last_displayed_punkt_id").val("0");
			
			// if edit-mode is true use the edit-mode method
			
			if(edit_mode===true){
				editMode();				
			}
			
	});
			
	</script>
	</tbody>
	</table>
	
	<script>
			var html_result = " ";
			$("#submit_data").click(function(e){
			// Slide the tableview in and hide the form window
			displayTableView();	
			//Set iframe value to the texarea field
			$("#comment").val(window.frames.richTextField.document.body.innerHTML);   
			e.preventDefault();
			//Get the inputdata from the fields
			var requestData = $("#timepicker,#comment,#last_displayed_punkt_id").serialize();
	
	$.ajax({
				url: "program_server.php",
				type: "POST",
				data: requestData,
				success: function(response){
				
				var res = JSON.parse(response);
				$.each(res, function(index,item){
				 //create the tablerow to insert in the event
				var table_data = '<tr><td align="left" valign="top" width="125"><span style="color:#333333">'+
					'<span style="font-size:14px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">'+
					'<strong> '+item.from_hour+' </strong></span></span></span><td>'+
					'<td align="left" valign="top" width="541">'+
					'<span style="font-size:14px">'+
					'<span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">'+
					item.program_beskrivelse+'</span></td>  </tr>';
					 
				// ad the row to the table
				$("#table-body").append(table_data);
				//update insert_id;
				$("#last_displayed_punkt_id").val(item.punkt_id);
				html_result += table_data;
				//Remove input data in the fields after submit
				$("#comment").val(" ");
		   
				// Set starttime to the previous endtime
				$("#timepicker").val($("#timepicker2").val());
						
				});				
			},
			error: function(error){
				alert("an error occured"+ error);
			}		
	    });
		return false;
	
});
	
  </script>

</div>
 </div>
	<script>		  
		$("#edit").click(function(e){
			$("#table-body").show();
			e.preventDefault();
			
			editMode();

			});

		</script>

	</body>

</html>

