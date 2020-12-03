View = function(){

	this.taxomoni = ['Not important ','Want to', 'Just started ','Working on it', 'Doing quite well','Succeded'];

	this.setTitle = function(){
		let html = '<h1>Vocational maturity  <br/><span style = "text-transform:lowercase; font-size: 1.9rem;">- self-evaluation in dialogue </span> </h1>';
		document.getElementById('title').innerHTML = html;
	}

	
	this.displayProfileButtons = function(){
		let html = ' <div class = "profile-buttons">'+
		   '<button id = "profileid_1" class = "btn-success profile-menu-item" value = 1>Svetovanec</button>'+
		   '<button id = "profileid_2" class = "btn-success profile-menu-item" value = 2>Cilj</button>'+
		   '<button id = "profileid_3" class = "btn-success profile-menu-item" value = 3>Svetovalec</button>'+
	   '    </div>';
	   return html;
	}

	this.setTaxamoniView = function(){
		let html = '<div class = "taxo-view">';
		for(let i = 0; i < this.taxomoni.length; i++){
		 html += '<p>'+this.taxomoni[i]+'<span style ="margin-left: 5px;"></span></p>';
		}
		html += '</div>';
		return html;  
	 };

	 this. setTaxamoniViewAddNumbers = function() {
		let html = '<div class = "taxo-view">';
		for(let i = 0; i < this.taxomoni.length; i++){
		 html += '<p>'+this.taxomoni[i]+'<span style ="margin-left: 5px;">'+i+'</span></p>';
		}
		html += '</div>';
		return html;  
	 }
	 
	 this.getTaxomoniView = function(){
		document.getElementById('tax').innerHTML = this.setTaxamoniView();
	 }

	 this.getTaxomoniViewWidthNumbers = function(){
		document.getElementById('tax-num').innerHTML = this.setTaxamoniViewAddNumbers();
	 }
	 
	 this.displayManualInputView = function(){
		 let html = '<div id = "info-box">'+
			   ' <a style = "" class = "" href = "index.html">Odgovori na vprašanja</a><br/> Neposredno vstavi rezultate od 0 – 5, na eno decimalko (npr. 1.4) </div>'+
				'<form action = "resultInsert.html"><div class = "manualView"  id = "resultViewManual"> </div>'+         
				'<input id = "manual-sub"  class = "btn btn-success" type = "submit" value= "Nadaljuj" /></form>';
		 return html;
	 };

	 this.displayInfoMessage = function(){
		  let message = 
			 '<a style = " z-index:9999; color: #71b7df; text-decoration: underline;"  href = "resultInsert.html"> Preskoèi vprašanja      </a>'+
			   ' <br/>'+
			   ' <a style = " z-index:9999; color: #71b7df;" href = "measure.html"></a>';
		return message;
	 };
	
	 this.setBackAndForward = function(){
		let html = '<a id = "back"></a> <a class = "sub"  id = "forward"></a>';
		
		return html;
	}

	this.getBackAndForward = function(){
		document.getElementById('back-and-forward').innerhtml = this.setBackAndForward();
	}

	this.displayFooter = function(){
		let html = '<div class = " container logos">  '+  
						'<img class = "footer-logo"  src = "logoer/YIT-fin-clean-2.png"  />'+
					
						'<img class = "footer-logo"  src = "logoer/Erasmus-250x59.png"  />'+
					
						'<img class = "footer-logo"  src = "logoer/Cene_stupar.png"  />'+

						'<img class ="footer-logo"  src = "logoer/CPI.png"  />'+
					'</div>';
			html +=	'<div id = "footer-links"> '+
						
						'<a href = "IO2-Gradivo za svetovalce_v.4 (1).pdf" target="_blank" class = "footer-arrow footer-link">Priroènik za uporabo v PDF (odpre se novo okno)</a>'+
						'<a href = "http://www.cpi.si/" class = "footer-arrow footer-link-project">CPI</a>'+
						'<a href = "https://www.cene-stupar.si/" class = "footer-arrow footer-link-project">Cene štupar</a>'
						
							'</div>';
			html += '<div id = "footer__meta-info">'+
			         '<p class = "footer__title">Poklicna zrelost – samoevalvacija s pogovorom</p>'+
                   
					'<br/><a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.'+
					'</div>';
					
		return html;
		
	};
};

let newView = new View();

