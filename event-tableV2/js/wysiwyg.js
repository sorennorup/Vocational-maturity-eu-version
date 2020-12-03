function iFrameOn(){
    richTextField.document.designMode = "On";
      
}
function iBold(){
    richTextField.document.execCommand('bold',false, null);
    
}

function iItalic(){
    richTextField.document.execCommand('italic',false, null);
    
}
function iLink(){
    var url = prompt('Enter url',"http://");
    richTextField.document.execCommand('createLink',false, url);
}
function iUnorderedList(){
    richTextField.document.execCommand("insertUnorderedList",false, 'newUL');
}
function submitForm(){
     var theForm = document.getElementById('myForm');
     theForm.elements.myTextArea.value = window.frames.richTextField.document.body.innerHTML;
     theForm.submit();
    
}

function iTextcolor(){
    var color = prompt("Enter hexcode");
    richTextField.document.execCommand('ForeColor',false, color);
}
function iImage(){
    var imageUrl = prompt("Enter imageurl");
    var imgSrc = "<img src ="+imageUrl+"/>";
    richTextField.document.execCommand("insertHTML",imgSrc);
    
    
}