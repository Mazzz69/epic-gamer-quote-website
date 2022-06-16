window.onload=function(){
  document.getElementById('btn-random').onclick = () => {
    loadquote();
  }

  function loadquote(){
    let url="https://zerotwohub.tk/BOBROSS"
    fetch(url)
      .then(response=>response.json())
      .then(data=>{
        document.querySelector("#quote").innerText=data.response[0].quote
      })
    }

}
