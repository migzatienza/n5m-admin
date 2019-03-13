function httpGetAjax(link,meth,data,ref){
	$.ajax({
		url:link,
		method:meth,
		dataType:"JSON",
		success:function(data){
			body="";
			data.map(e=>{
				body+=data;
			});
			document.getElementById(ref).html = body;
		}
	});
}

function httpPostAjax(link,meth){
	
}