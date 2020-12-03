Storage = function(){
    
    this.getSessionStorageValues = function(arrayLength){
        let storageArr = [];
        for( var i = 0; i < arrayLength; i++ ){
            var num = i+1;
            storageArr[i] = sessionStorage.getItem("Que"+ num);
        }
        return storageArr;
         
    };
    this.getAllSessionStorage = function(){
        
          for(var i=0, len=sessionStorage.length; i<len; i++) {
                    var key = sessionStorage.key(i);
                     var value = sessionStorage[key];
                    console.log(key + " => " + value);
}
        
        
    }
    
    
    
    
    
    
    
}