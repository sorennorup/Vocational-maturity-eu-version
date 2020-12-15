View = function(){

	this.taxomoni = ['Not important ','Want to', 'Just started ','Working on it', 'Doing quite well','Succeded'];

	this.setTitle = function(){
		let html = '<h1>Vocational maturity  <br/><span style = " font-size: 1.63rem;">a self-evaluation in dialogue </span> </h1>';
		document.getElementById('title').innerHTML = html;
	}
	
	this.setAboutText = function() {
		let html = "<p>This tool makes it possible to create a profile of vocational maturity.</p>"+
		"<p>Vocational maturity reflects the competencies and potentials that are necessary for starting in and retaining a job or an internship. This can also be true for starting in a vocational program and during the education. </p><br/>"+
		"<h3>PROCEDURE</h3>"+
		"<p>A series of statements, divided into 6 thematic sections, are answered through self-evaluation. The self-evaluation is supported by a professional counselor, teacher or other relevant professional.  </p>"+
		"<p>The results create a visual profile. This profile is individual and valid only for the counselee's current situation. The counselee will always be able to further develop and change his/her situation. </p>"+
		"<p>This tool is an artificial generic version, not meant to be applied to practice, but meant to be considered for the elaboration of local versions of a tool. Adaptation is necessary to meet local needs and conditions. </p>"+
		"<p>Typically, completion will take approx. 20 minutes. The optional functionality 'Your name' is activated in the country versions. The individual data and profile will not be saved or forwarded to others. It is possible to print the profile and the answers locally, if desirable.</p><br/>"+
		"<h3>ADDITIONAL INFORMATION</strong></h3>"+
		"<p>The tool is tested broadly in Denmark, Slovenia and Iceland, quality assured by researchers from the University of Hamburg. </p>"+
		"<p>The validity of the tool is dependent on the pedagogical and ethical application during a professional counseling process. </p>"+
		"<p>Read more about youth progression, as well as background of the tool and pedagogical recommendations for the counseling process: <a style='color: #5593c2' href= 'youth-it.cool'>youth-it.cool</a> </p>"+
		//"<p> Download brochure 'Youth in transition' </p><br/>"+
		"<h3>NATIONAL VERSIONS OF THE TOOL</h3>"+
		"<a style='color: #5593c2' href = 'https://ungemedkant.dk/toolbox/erhvervsparathed/'>Denmark</a><br/>"+
		"<a style='color: #5593c2' href = 'https://poklicnazrelost.cene-stupar.si/'>Slovenia</a><br/>"+
		"<a style='color: #5593c2' href = '#'>Iceland</a><br/>"

		;
		return html;
	}
	
	this.getAboutText = function(){
		document.getElementById('accordion__body').innerHTML = this.setAboutText();
	}
	
	this.displayProfileButtons = function(){
		let html = ' <div class = "profile-buttons">'+
		   '<button id = "profileid_1" class = "btn-success profile-menu-item" value = 1>Youth</button>'+
		   '<button id = "profileid_2" class = "btn-success profile-menu-item" value = 2>Goal</button>'+
		   '<button id = "profileid_3" class = "btn-success profile-menu-item" value = 3>Professional</button>'+
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
			   ' <a style = "" class = "" href = "index.html">Answer with questions</a><br/> Score on a scale of 0-5 (decimals are possible) </div>'+
				'<form action = "resultInsert.html"><div class = "manualView"  id = "resultViewManual"> </div>'+         
				'<input id = "manual-sub"  class = "btn btn-success" type = "submit" value= "Next" /></form>';
		 return html;
	 };

	 this.displayInfoMessage = function(){
		  let message = 
			 '<a style = " z-index:9999; color: #71b7df; text-decoration: underline;"  href = "resultInsert.html"> Skip questions'+
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

	this.setMyName = function() {
		document.getElementById('your-name').innerHTML = 'Your name'
	}

	this.displayFooter = function(){
		let html = '<div class = " container logos__first">  '+  
						'<img class = "footer-logo_1"  src = "logoer/YIT-fin-clean-2.png"  />'+
					
						'<img class = "footer-logo_1"  src = "logoer/Erasmus-250x59.png"  />'+
						
						
						
					'</div><br/>';
		html +=	 '<div class = " container logos">  '+  
						'<img class = "footer-logo"  src = "logoer/Cene_stupar.png"  />'+

						'<img class ="footer-logo"  src = "logoer/CPI.png"  />'+

						'<img class = "footer-logo"   src = "logoer/UUDK-logo-300W.png"   />'+

						'<img class = "footer-logo"  src = "logoer/moeve.png" width = "140"  />'+

						'<img class = "footer-logo"  src = "logoer/kolding.png" width = "140"  />'+
						'<img class = "footer-logo"  src = "logoer/odsherred-1.png" width = "100"   />'+

						'<img class = "footer-logo"  src = "logoer/UHH.png"  />'+
						'<img class = "footer-logo"  src = "logoer/vmst.png"   />'+
						
						
						
					
					'</div>';
						
		html +=	'<div id = "footer-links"> '+
						
						'<br><a href = "https://youth-it.cool/" target="_blank" class = "footer-arrow footer-link-project">Youth in transition</a>'+
						'<a href = "https://ungemedkant.dk/toolbox/erhvervsparathed/" class = "footer-arrow footer-link-project">Erhvervsparathed (Danish version)</a>'+
						'<a href = "https://poklicnazrelost.cene-stupar.si/" class = "footer-arrow footer-link-project">Slovenian version</a>'
						
							'</div>';
			html += '<div id = "footer__meta-info">'+
			         '<p class = "footer__title">Vocational maturity a self-evaluation in dialogue</p>'+
                   
					'<br/><a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.'+
					'</div>';
					
		return html;
		
	};
};

let newView = new View();

