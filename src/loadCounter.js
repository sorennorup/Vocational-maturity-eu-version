
function loadCounter(){  
	var n = sessionStorage.getItem('on_load_counter'); 
	if(n === null){
		n = 1;
	}
		// if n > number of questions -1;
	else if(n > 6){
		n = 1;
	}
	else {
		n++;
	}
	sessionStorage.setItem('on_load_counter',n);           
	return n;
}



function subQuestionsCounter(){
	var n = sessionStorage.getItem('next_sub_que');
	if(n === null){
		n = 1;
	}
		// if n > number of questions -1;
	else if(n > 6){
		n = 1;
	}
	else {
		n++;
	}
	sessionStorage.setItem('next_sub_que',n);           	
	return n; 
}