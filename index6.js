 async function fetchApi(){
   fetch("https://jsonplaceholder.typicode.com/users")
        .then(async (res) => {
            let data = await res.json();
            console.log(data);
            })
       
        .catch((e) => {
            console.log(e);
    })
 }
async function fetchApi2() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json();
        console.log(data);

    }
    catch (e) {
        console.log(e);
    }
}
function postdata() {
    try {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json",

            },
            body: JSON.stringify({
                title: "test",
                body: "lorem ipsum",
                userID: 1,
                
            }),
        }).then(async (res) => {
            let data = await res.json();
            console.log(data);
            
        });

    } catch (e) {
        console.log(e);
    }
}
function updateData() {
    try {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({           //api le mageko bela matra lekhne
                id: 1,
                title: "foo",
                body: "far",
                userID: 1,
            }),
        }).then(async (res) => {
            let data = await res.json();
            console.log(data);
        });
    } catch (e) {
        console.log(e);
            }
}
function deleteData() {
    try {
        fetch("", {
            method: "DELETE",
            
        }).then(async (res) => {
            let data = await (res).json();
            console.log(data)
        })
    } catch (e) {
        console.log(e);
    }
}
    

window.onload = () => {
    fetchApi2();
    
}
