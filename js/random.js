window.onload = function(){
	document.getElementById('btn-random').onclick = () => {
		loadquote();
	}

	function loadquote(){
		let url="http://api.quotable.io/random"
		fetch(url)
      .then(response=>response.json())
      .then(data=>{
        document.querySelector("#quote").innerText=data.content+"\n-"+data.author
      })
	}
}