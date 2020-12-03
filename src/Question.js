Question = function(){
	this.numquestions = 0;
	  
		   // Create the question table row
	this.createQuestion = function(id,row1,row2,input_val){
			var html_code = 
			"<div id = "+id+" class = 'que' ><p id = 'value-holder' class = 'question'>"+row2+ "</p>"+ "<p class = 'question question-comment'>"+row1+"</span></p>"+
			this.addRangeInput(id,input_val);
			document.getElementById('question').innerHTML += html_code;
			
			this.showQuestion();
	};

	 // Get the next off the subquestions
	this.showQuestion = function(){
		$(".next").click({num: this.numquestions},function(event){
		 //console.log('number of questions '+ event.data.num);
			var id = $(this).attr('id');
			var intid = parseInt(id);
			if(intid+1 > event.data.num){
				$("#sub").show();
			}
			$('#'+id).hide();
			id++;
			$('#'+id).fadeIn(1000);
		});
	};

	 // Create the inputfield for the last tablerow  
	this.addInputField = function(val){
		var input_item = '<input id = "score"  class = "score form-control form-control-lg" min = "0" max = "4"'+
		'placeholder="0" size="1" autocomplete="off" value = "'+val+'" required >';
		return input_item;
	  }; 
	  
	this.addRangeInput = function(id,val){
		var input_item = '<div class = "slider-wrapper">'+
		'<div id = "score'+id+'" class = "score"> </div>'+
		'<input class = "score-val" type = "hidden" id = "current-val'+id+'" value = "'+val+'"/>'
		input_item += '<span id = "range-value'+id+'" class = "range-value"> </span></div>';
		return input_item;
	};

	this.addRangeSlider = function(id,val) {
		let rangeId = String(id);
		
		$( "#score1" ).slider({
			value: val,
			min: 0,
			max: 5,
			step: 1,
			slide: function(event, ui){
				//$(this).next("#range-value").html(ui.value);
				//$('#current-val').val(ui.value);
			}
		})	
	}
	this.addRangeSlider2 = function(id,val) {
		let rangeId = String(id);
		$( "#score2" ).slider({
			value: val,
			min: 0,
			max: 5,
			step: 1,
			slide: function(event, ui){
				//$(this).next("#range-value").html(ui.value);
				//$('#current-val').val(ui.value);
			}
		})	
	}

	this.addJsRangeInput = function(val){
		var inp = document.createElement("INPUT");
				inp.setAttribute('value', val);
				inp.setAttribute('max', 5);
				inp.setAttribute('type','range');
				inp.setAttribute('id', 'score');
				inp.setAttribute('class', 'score');
		document.getElementById('rangeslider-box').append(inp);		
	}

		// Put all the questionsrows together
	 Question.prototype.getQue = function(que){
	 	for(var i = 0; i < que.length; i++){
		 //$("#totalcount").html(" af " +" "+que.length);
		 	this.numquestions = que.length;
			 var obj = que[i];
		 	this.createQuestion(i+1,obj.title, obj.question,obj.inputvalue);
		}
	};
	
	Question.prototype.getAllQuestionObjects = function(que){
		 var arr = [];
		 for(var i = 0; i < que.length; i++){
		 var obj = que[i];
		  arr.push( this.createQuestionObj(i+1,obj.title, obj.question,obj.inputvalue));
	 }
		return arr;
	};
	
	this.getNextQuestion = function(que_id,obj){
		for(var i = 0; i < obj.length; i++){
			switch(que_id){
				case i+1 : document.getElementById('question').innerHTML = obj[i];
			 break;
			}
		}
	};

	this.fullPDFdata = function(allQuestions,labelsarray,commentArray){
		let questions_and_score = [];
		for(var i = 0; allQuestions.length > i; i++){
			for(var j = 0; j < allQuestions[i].length; j++){
				if(j === 0){
					let parameter_label = labelsarray[i];
					//console.log(labelsarray[i]);
					let label = [{text: parameter_label,colSpan: 2, alignment:
					 'left',fontSize: 16, bold: true}, ""];
					questions_and_score.push(label);
				}
				var prop = [allQuestions[i][j].question, allQuestions[i][j].inputvalue];
				questions_and_score.push(prop);
			 } 
			if(j = allQuestions.length) {
				if(commentArray[i] === null) {
					commentArray[i] = " ";
				}
				let comment = [{text: labelsarray[i]+':  '+commentArray[i],colSpan:2, alignment: 'left', fontSize: 10}];
				questions_and_score.push(comment);
			}
		}
		return questions_and_score;
	};
 };
		// Handle the question text and inputvalue into objects created in the questionsdatamodel
var question = function(title,question,inputvalue) {	  
	this.title = title;
	this.question = question;
	this.inputvalue = inputvalue;
 };


 
 
