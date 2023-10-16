// function handlePromise() {
//     let x = 1;
//     console.log("First");
//     const promise = new Promise((resolve, reject) =>
//         setTimeout(() => {
//             if (x === 1) {
//                 resolve("Valid");
//             } else {
//                 reject("Invalid");
//             }
//         }, 2000) //It waits for this period of time.
//     );
//     promise
//         .then((x) => {
//             console.log(x);
//         })
//         .catch((x) => {
//             console.log(x);
//         });
//         console.log("second");
// }
// handlePromise();


 async function handleDisplay() {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            
                reject("invalid");
            
            
           
        }, 2000);

    });
    let newText = await promise.catch((x)=> x);
    document.getElementById("main").innerHTML = newText;

}
handleDisplay();
