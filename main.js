$.get("https://jsonplaceholder.typicode.com/posts")
    .then((callback) => {
        console.log(callback.slice(0,10));
        paintCards(callback.slice(0,10))
        
    }).catch((errorCallback) => {
        console.log(errorCallback);
    })

    function paintCards(callbacks){
        callbacks.forEach((x)=>{
            $( "body" ).append( `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt=${x.title}>
        <div class="card-body">
            <p class="card-text">${x.body}</p>
        </div>
    </div>`); 
        })
        
    }