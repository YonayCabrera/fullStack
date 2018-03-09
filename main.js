$.get("https://jsonplaceholder.typicode.com/posts")
    .then((callback) => {
        console.log(callback);
    }).catch((errorCallback) => {
        console.log(errorCallback);
    })