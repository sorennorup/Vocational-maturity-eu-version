BackAndForward = function(){
   
    this.forwardEvent = function() {
        $('#forward').click(function(){
         location.reload();
        });
    }

}