var Reset = function(){
  
     // This set the resultview fields to 0, when page loads the first time
     this.resetResultView = function(){
                            
              if(sessionStorage.value1id1 === undefined){
                             sessionStorage.value1id1 = 0;
                        }
              if(sessionStorage.value2id1 === undefined){
                              sessionStorage.value2id1 = 0;
              }
              if(sessionStorage.value3id1 === undefined){
                              sessionStorage.value3id1 = 0;
              }
              if(sessionStorage.value4id1 === undefined){
                              sessionStorage.value4id1 = 0;
              }
              if(sessionStorage.value5id1 === undefined){
                              sessionStorage.value5id1 = 0;
              }
              if(sessionStorage.value6id1 === undefined){
                              sessionStorage.value6id1 = 0;
              }
              if(sessionStorage.value1id2 === undefined){
                             sessionStorage.value1id2 = 0;
                        }
              if(sessionStorage.value2id2 === undefined){
                              sessionStorage.value2id2 = 0;
              }
              if(sessionStorage.value3id2 === undefined){
                              sessionStorage.value3id2 = 0;
              }
              if(sessionStorage.value4id2 === undefined){
                              sessionStorage.value4id2 = 0;
              }
             if(sessionStorage.value5id2 === undefined){
                              sessionStorage.value5id2 = 0;
              }
               if(sessionStorage.value6id2 === undefined){
                              sessionStorage.value6id2 = 0;
              }
              
              if(sessionStorage.value1id3 === undefined){
                             sessionStorage.value1id3 = 0;
                        }
              if(sessionStorage.value2id3 === undefined){
                              sessionStorage.value2id3 = 0;
              }
              if(sessionStorage.value3id3 === undefined){
                              sessionStorage.value3id3 = 0;
              }
              if(sessionStorage.value4id3 === undefined){
                              sessionStorage.value4id3 = 0;
              }
             if(sessionStorage.value5id3 === undefined){
                              sessionStorage.value5id3 = 0;
              }
               if(sessionStorage.value6id3 === undefined){
                              sessionStorage.value6id3 = 0;
              }
              if(sessionStorage.comment === undefined){
                        sessionStorage.comment = "empty space";
              }
              
          };
    
          this.resetEveryting = function() {
               sessionStorage.clear();
          }     
     };
    
     var resetAll = new Reset();
     resetAll.resetResultView();
     
     