Label = function(){
	
	this.labelarr = ["Rezilientnost","Motivacija","Dolo�anje ciljev ","Trg dela in delovno okolje","Prilagodljivost","Poklicne ve��ine "];
	
	this.setLabels = function(view){
		var labelstr = "";
		for(var i = 0; i < this.labelarr.length; i++){
			if(view.innerHTML.includes(this.labelarr[i])){
				labelstr += '<th align = "left"  class = "label  selected clickevent">'+this.labelarr[i]+'</th>';
			}
			else{
				labelstr += '<th align = "left"  class = "label clickevent ">'+this.labelarr[i]+'</th>';
			}
		}
		return labelstr;   
	}; 

	this.setCommentViewLabels = function(){
		let profiles = ['Svetovanec','Cilj','Svetovalec'];
		let comments = [commentsArrProf1,commentsArrProf2,commentsArrProf3];
		var labelarr = ["Rezilientnost","Motivacija","Dolo�anje ciljev ","Trg dela in delovno okolje","Prilagodljivost","Poklicne ve��ine "];
		let html = "";
		for(let j = 0; j < profiles.length; j++){
		 html += "<tr><th>"+profiles[j]+"</th></tr>";
			for(let i = 0; i < labelarr.length; i++){
				html += '<tr><td>'+labelarr[i]+'</td><td> '+comments[j][i]+'</td>';
			}
		}
		return html;
	}
};      
  
var labelsarray = ["Rezilientnost","Motivacija","Dolo�anje ciljev ","Trg dela in delovno okolje","Prilagodljivost","Poklicne ve��ine "];
var profile1_labelarr = ["testaf ny profio","nye labels","wordtest","hvad er det", "mums"];
	   var label;
	   
	   var id = sessionStorage.getItem('on_load_counter');
	  
	   if(id == 1){
		label = labelsarray[0];
	   }
	   else if(id == 1){
		label = labelsarray[1];
	   }
	   else if(id == 3){
		label = labelsarray[2];
	   }
   
 labelobj = new Label();
   
labelobj.setCommentViewLabels();