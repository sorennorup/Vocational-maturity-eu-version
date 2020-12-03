let Result = function(id,profile_id){
	this.id = id;
	this.profile_id = profile_id;
	this.res_array = ['result','result2','result3','result4','result5','result6'];
	this.dir_res_array = ['res1','res2','res3','res4','res5','res6'];
	this.labelsarray = ["Rezilientnost","Motivacija","Doloèanje ciljev ","Trg dela in delovno okolje","Prilagodljivost","Poklicne vešèine "];

	this.directResultViewId = function() {
		var resstr = '';
		for(var i = 0; i < this.res_array.length; i++){
			resstr += ' <tr><td>'+this.labelsarray[i]+'</td><td id = "'+this.dir_res_array[i]+'"></td></tr/>';
		}
		return resstr;
	}

	this.setDirectResults = function() {
		for(var i = 0; i < this.dir_res_array.length; i++){
			var keyNum = i+1;
			var result = 'value'+keyNum+'id'+this.profile_id;
			document.getElementById(this.dir_res_array[i]).innerHTML = sessionStorage.getItem(result);
		}
	}
	this.getName = function(obj) {
         return obj[0].value;
	}
	
	this.setResultViewIds = function(){
		var resstr = "";
		for(var i = 0; i < this.res_array.length; i++){
			resstr += ' <tr><td>'+this.labelsarray[i]+'</td><td id = "'+this.res_array[i]+'"></td></tr/>';
		}
		return resstr;
	};
			
	// adds the result to result divs
	this.setResultView = function(){
		for(var i = 0; i < this.res_array.length; i++){
			var keyNum = i+1;
			var result = 'value'+keyNum+'id'+this.profile_id;
			document.getElementById(this.res_array[i]).innerHTML = sessionStorage.getItem(result);
		}
	};

	this.setResultViewIdsDirect = function(){
		let profile_comments = [];
		if (sessionStorage.getItem('profileid') == 1) {
			profile_comments = commentsArrProf1;
		}
		else if (sessionStorage.getItem('profileid') == 2) {
			profile_comments = commentsArrProf2;
		}
		else if (sessionStorage.getItem('profileid') == 3) {
			profile_comments = commentsArrProf3;
		}
		 var resstr = '<div id = "tax-num"></div>';
		 var com = "";
		
		for(var i = 0; i < this.res_array.length; i++){
			if(profile_comments[i]==" "){
				com = "";
			}
			else {
				com = profile_comments[i];
			}
			
			resstr += '<div class = "light-font-color">'+this.labelsarray[i];
			resstr += '<div class = "manual-res"><div id = "'+this.res_array[i]+'"></div><textarea class = "form-control form-control-direct" id = "text-add" placeholder="Komentar">'+com+'</textarea></div>' ;
		}
		
		return resstr;
	};
	
   // set the result into the result divs
	this.setResultViewDirect = function(){
		for(var i = 0; i < this.res_array.length; i++){
			var keyNum = i+1;
			 var result = 'value'+keyNum+'id'+this.profile_id;
			document.getElementById(this.dir_res_array[i]).innerHTML = sessionStorage.getItem(result);
		}
	};

	this.setMobileResultView = function(labelArr){
		let html = ' <ul class="list-group">';
		for(var i = 0; i < this.res_array.length; i++){
			var keyNum = i+1;
			var result = 'value'+keyNum+'id'+this.profile_id;
			html += '   <li class = "list-group-item"><span class = "label-header">'+
			labelArr[i]+'</span>'+
			'<span class = "right">'+sessionStorage.getItem(result)+'</span></li>';
		}
		html += '</ul>';
		document.getElementById('resultMobileView').innerHTML = html;
	};

	// insert the result directly, without the questions
	this.insertResultDirect = function() {
		for(var i = 0; i < this.res_array.length; i++){
			var keyNum = i+1;
			var result = 'value'+keyNum+'id'+this.profile_id; 
			document.getElementById(this.res_array[i]).innerHTML =
			' <input id = "manual-score"  class = "manual-score form-control form-control-lg" min = "0" max = "4"'+
			' placeholder="0" size="2" step="0.1" autocomplete="off" value = "'+
			sessionStorage.getItem(result)+'" name = "manual-input"/>';
		}
	};
	
	this.calculateAverage = function (formObj){
		var sum = 0;
		var num = 0;
		for(var i = 0; i < formObj.length-2; i++){
			sum += parseInt(formObj[i].value);
			if(this.valueNotZero(formObj[i].value)){
				num++;
			}
		}
		return sum/num;
	};

	 // Calculate the average of the the inputs
	this.calculateAverageArray = function (array){
		var sum = 0;
		var num = 0;
		for(var i = 0; i < array.length-1; i++){
			sum += parseInt(array[i]);
			if(this.valueNotZero(array[i])){
				num++;
			}
		}
		return sum/num;
	};
			// Create an array of the form object
	this.resultarray = function (formObj){
		var res = [];
			for(var i = 0; i < formObj.length-1; i++){
				res[i] = formObj[i].value;
			}
			return res;
	};

	this.directResultArray = function (formObj) {
		var res = [];
		var j = 0;
		for(var i = 0; i < formObj.length-1; i+=2){
			res[j] = formObj[i].value;
			j++
		}
		return res;
	}

	this.directResultComments = function (formObj) {
		var res = [];
		var j = 0;
		for(var i = 1; i < formObj.length-1; i+=2){
			res[j] = formObj[i].value;
			j++
		}
		return res;
	}
					
	this.valueNotZero = function(number){
		return  parseInt(number)!== 0; 
	};
};

Result.prototype.setData = function(){
		var results = document.forms[0];
		// store the comment text
		let comment = results.elements.item(results.elements.length-2).value;
		let commentKey = 'comment'+id+'profile'+profile_id;
		sessionStorage.setItem(commentKey,comment);
		sessionStorage.setItem('isStored',true);
		var all_res = this.resultarray(results);
		document.getElementById('result').innerHTML = " ";
		var res = this.calculateAverage(results);
		if(res.toString().length > 3){
			res = res.toFixed(2);
		}
		if(isNaN(res)){
					res = 0;
		}
		else if(res === undefined){
			res = 0;
		}
		var num_of_ids = 6; 
		for(var i = 0; i < num_of_ids; i++){         
			if(this.id == i+1){ 
		   // Create the data keys
				var keyNum = i+1;
			//var value_key = 'value'+keyNum+'id'+this.profile_id;
				let value_key = this.createDataKey(i);
				var all_value_key = 'values'+keyNum+'id'+sessionStorage.profileid;
			//store the data into the sessionstorage
				sessionStorage.setItem(all_value_key,all_res);
				sessionStorage.setItem(value_key,res); 
				sessionStorage.setItem(value_key,res);
				document.getElementById(this.res_array[i]).innerHTML = sessionStorage.getItem(value_key);
		}
	}
};
	
Result.prototype.setManualData = function() {
	var results = document.forms[0];
	
	console.log(results);
	var comments = this.directResultComments(results);
	var resarray = this.directResultArray(results); 
	for(var i = 0; i < 6; i++){        
		var res = resarray[i];
		// Create the data keys
		var keyNum = i+1;
		var value_key = 'value'+keyNum+'id'+this.profile_id;
		var commentKey = 'comment'+keyNum+'profile'+this.profile_id;
		sessionStorage.setItem(value_key,res); 
		sessionStorage.setItem(commentKey,comments[i]);
		//console.log(sessionStorage.getItem(value_key));
		document.getElementById(this.res_array[i]).innerHTML = sessionStorage.getItem(value_key);
	}
};

Result.prototype.createDataKey = function(index){
	var keyNum = index+1;
	var value_key = 'value'+keyNum+'id'+this.profile_id;
	return value_key;
};