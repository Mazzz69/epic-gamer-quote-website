window.onload=function(){
  let einser=0 //made by me, ladet beim ersten mal immer "Geben sie mir eine 1"
  document.getElementById('btn-random').onclick = () => {
    if (einser==0) {
      loadeinser()
    }
    else {
      loadquote()
    }
    einser++
  }

  function loadquote(){
    let url="https://drachenlordstexte.godflod.repl.co/quote"
    fetch(url)
      .then(response=>response.json())
      .then(data=>{
        document.querySelector("#quote").innerText=data.quote
      })
    }

    function loadeinser(){
      let url="https://drachenlordstexte.godflod.repl.co/quote?id=84"
      fetch(url)
        .then(response=>response.json())
        .then(data=>{
          document.querySelector("#quote").innerText=data.quote
        })
      }
}
