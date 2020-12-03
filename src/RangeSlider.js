RangeSlider = function(){
    
    let taxominies = ['Ikke vigtigt','Vil gerne','Pr?ver','I gang','Godt p? vej','Styr p? det'];

    this.setRangeSlider = function(i,val,max){

        let rangeId = '#score'+String(i+1);
        var slideFull = $('<div class = "thumb-width"></div>');
        //$("#range-value"+String(i+1)).html(val);
        $('#current-val'+String(i+1)).val(val);
        slideFull.css('width',val*10*2+'%');
          
        $(rangeId).append(slideFull);
            $( rangeId ).slider({
                value: val,
                animate: true,
                change: function(event, ui) {
                    console.log(this);
                    let widthVal = String(ui.value*10*2+'%');
                    slideFull.css('width', widthVal);     
                },
                min: 0,
                max: 5,
                step: 1,
                slide: function(event, ui){
                    //$("#range-value"+String(i+1)).html(ui.value);
                    $('#current-val'+String(i+1)).val(ui.value);
                }   
            })
            .each(function() {
                var opt2 = $(this).data().uiSlider.options;
                var vals = opt2.max - opt2.min;
                // Space out values
                for (var j = 0; j <= vals; j++) {   
                    $(this).css('width',(j/vals*100)+'%');
                    var el = $('<label class = "point-class">.'+'</label>').css('left',(j/vals*100)+'%');
                    $(this).append(el);        
                } 
            }); 
        }    
}