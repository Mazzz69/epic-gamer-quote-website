window.onload=function(){
  document.getElementById('btn-random').onclick = () => {
    loadquote();
  }

  function loadquote(){
    let url="https://api.kanye.rest"
    fetch(url)
      .then(response=>response.json())
      .then(data=>{
        document.querySelector("#quote").innerText=data.quote
      })
    }

}
