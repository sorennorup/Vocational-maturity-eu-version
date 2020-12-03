InputControl = function() {

    this.CheckNumber1 = function() {
        var letters = /^[A-Za-z]+$/;
        console.log('keydown');
 
        if( this.value.length > 1 ) {
              //alert(this.value.substring(1,2));
              if(this.value.substring(1,2) > 5){
                this.value = this.value.substring(0,1);
         }
         if( this.value.match(letters) ) {
             this.value = this.value.substring(0,1);
               }
             this.value = this.value.substring(1,2);
         }else {
             if( (this.value < 0) || (this.value > 5) ) {
                 this.value = this.value.substring(0, 0);
             }
             if( this.value.match(letters) ) { 
                 this.value = 0;
               }    
             if( this.value % 1 !== 0 ) { 
                 this.value = 0;
             }    
         }
     };
     
     this.CheckNumberManual = function() {
         var letters = /^[A-Za-z]+$/;
         //console.log('keydown');
             //If the user inserts comma seperator it will be replaced with the prefered dot 
          if(this.value.substring(1,2) == ','){
             this.value = this.value.replace(",",".");
          }  
          if(this.value.length > 3) {
              //alert(this.value.substring(1,2));
             if(this.value.substring(1,2) > 5){    
                 this.value = this.value.substring(0,1);
          }
          if(this.value.match(letters)){  
             this.value = this.value.substring(0,1);
         }
         this.value = this.value.substring(1,2);
         } else {
             if((this.value < 0) || (this.value > 5)) {    
                 this.value = this.value.substring(0, 0);
             }
             if(this.value.match(letters)){
                 this.value = 0;
             }    
         }
     };
 
     this.SetSelected = function() {
         this.select();
     };
          
     this.heiglightChosenField = function(){
         var curr = $(this);
         curr.css({'background-color':'#65b78f','color':'white'});
         curr = curr.prev();
     };
    
     this.limitDecimals = function(res){
         if(res.length > 3){
           console.log('larger');
        }
    };
 
     this.emptyFieldOnFocus = function(){
       $(this).val(' ');
    };
     
 }; 