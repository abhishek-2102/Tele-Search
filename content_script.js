function load(){
	
	var body=document.body.innerText;
	var lines=[];
	var words=[];
	var numbers=[];
	
	lines=body.split("\n");
	for(var i=0;i<lines.length;i++){
		var tempwords=[];
		tempwords=lines[i].split(" ");
		for(var j=0;j<tempwords.length;j++){
			words.push(tempwords[j])
		}
	}
	
	for(var k=0;k<words.length;k++){
		var regx=/^[0-9\+\-\(\)]*$/;
		var word=words[k];
		if(regx.test(word)){
			if(word.length>=10){
				numbers.push(word);
			}
		}
	}
	alert("Numbers found:"+numbers);
	var bol=confirm("Do you want to save the numbers?");
	if(bol){
		
		
		$.ajax({
			
			url:"http://localhost:8086/TeleSearch/teleSave",
			type:"POST",
			data:{list:numbers},
			success:function(){
				alert("success")
			},
			error:function(){
				alert("error")
			}
		})
	}
}

load();