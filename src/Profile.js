Profile = function(questions,profile_name,profile_id,labels){
              
    this.profile_id = profile_id;
       this.profile_name = profile_name;
       this.questions =  questions;
       this.labels =  labels;
       //this.results = results;

   this.get_profile_name = function(){
          return this.profile_name;
       };
       // Working on solution that only displays on question at a time; 
   this.getQuestionsObj = function(){
     quetionobj = new Question();
      var label;
      var id = sessionStorage.getItem('on_load_counter');
      //var sub_id = 1;
      
       if(id === null){
               id = 1;
           }
           
           if (id == 1){
          //var obj = this.questionobj.getAllQuestionObjects(this.questions[0]);
              
              if(sessionStorage.next_sub_que === undefined){
                 sessionStorage.next_sub_que = 1;
              }
             
               this.getNextQuestion(parseInt(sessionStorage.next_sub_que),obj);
               
               label = labelsarr[0];
           }
           
            else if(id == 2){
              
               var obj2 = this.getAllQuestionObjects(this.questions[1]);
                this.getNextQuestion(parseInt(sessionStorage.next_sub_que),obj2);
               label = labelsarr[1];
           }
     
   };
   
   this.getQuestions = function(){
       var quetionobj = new Question();
       
         var label;
           var id = sessionStorage.getItem('on_load_counter');

           if(id === null){
               id = 1;
           }
           
           if (id == 1){
               console.log(this.questions[0]);
           quetionobj.getQue(this.questions[0]);
               label = labelsarray[0];
           }
           
           else if(id == 2){
               quetionobj.getQue(this.questions[1]);
               label = labelsarray[1];
           }
           else if(id == 3){
               
               quetionobj.getQue(this.questions[2]);
               label = labelsarray[2];
           }
           else if(id == 4){
               
               quetionobj.getQue(this.questions[3]);
               label = labelsarray[3];
           }
           else if(id == 5){
               
               quetionobj.getQue(this.questions[4]);
               label = labelsarray[4];
           }
           else if(id == 6){
               console.log(this.questions[5]);
               quetionobj.getQue(this.questions[5]);
               label = labelsarray[5];
           }
            document.getElementById("labelsView").innerHTML = label;
            document.getElementById('step-count-container').innerHTML = '<span class = "step-count">'+id+ ' af 6 </span><div id ="back-and-forward"></div>';
   };

   this.getResults = function(){
      
       var values_array = [];
       
       for(var i = 0; i < 6; i++){
                   var keyNum = i+1;
                    var result = 'value'+keyNum+'id'+this.profile_id;
                    
                  values_array[i] = sessionStorage.getItem(result);
               }
               
     
       return values_array;
     
       
   };
       
   
};
