 // Display a dialog before a delete action. 
function deleteAllDialog(){
	var answer = prompt('Vil du slette hele programmet? Skriv "slet program" i teksboksen');
		if(answer == 'slet program'){
			window.location.href = "edit_events.php?delete_all=true";
			return true;
			}
			else {
			return false;
			    
			}
				
		}
function dialog(){
		var answer = prompt('ønsker du at slette punktet? skriv "slet punkt" i textboksen');
		if(answer == 'slet punkt' ){			
			return true;
			}
			else {
			return false; 
				}			
		}
        
function outputHtml(code_result){
        alert(document.HTMLouter = '<table height="" width="580">'+
		'<tbody>' +code_result+' </tbody></table> ');
		}
	
function displayTableView(){
        $("#form-window").hide();
        $("#table-body").show().css({'margin-top':'500px',opacity:0}).animate({
			opacity: 1,
			'margin-top': '-=500px'
			}, 500);
        
}