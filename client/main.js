let duck = document.querySelector('img') //if made id duck would type '#duck'


const say = evt => {
    alert("BUBBERDUCK")
}

duck.addEventListener('click', say)
//uh rewatch as to why you can't put alert into the addeventlistener