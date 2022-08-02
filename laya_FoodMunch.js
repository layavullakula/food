let data = {
    name: "Aanandinii",
};
let options = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer 0f42e9838970d20adf62f843e7c667508f70dc6a2f135780654ca45ad34b884f"
    },
    body: JSON.stringify(data),
};
fetch("https://gorest.co.in/public-apt/users/1456", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });