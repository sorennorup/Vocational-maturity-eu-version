Comment = function(){

	this.storeComment = function(){
	let res = document.forms[0];
	
	
	sessionStorage.setItem('comment',res[0].value);
	sessionStorage.setItem('isStored',true);
	//console.log(sessionStorage.getItem('Comment'));      
	};
	
	this.displayComment = function(){
	if(sessionStorage.getItem('Comment') == "" || sessionStorage.getItem('Comment') === null){
			sessionStorage.setItem('Comment', '');
	}
	document.getElementById('comment').innerHTML = '<a href = "" style = "position:absolute;margin-left:210px;" data-toggle="modal" data-target="#editComment">'+
	'rediger </a><br/>'+sessionStorage.getItem('Comment').replace(/\n/g, "<br>");
	};  
};

let newComment = new Comment();
