//tags = p   
//class=.test
// id = #test
//$("#container")
// $(document).ready(function (){
//     let container = $("#container");
// console.log(container.html());
// });
// $("#container").html("This is test");
// $(document).ready(function () {
//     $("#container").html(`<button id="btn" > Submit</button >
//     <p id="result"></p>`);
//     $("#btn").css("background-color", "red");
//     $("#btn").css("color", "white");
//     //events
//     $("#btn").on("click", function () {
//        $("#result").text("clicked");
//     });
//     $("#btn").on("mouseover", function () {
//          $("#result").text("hovered-in");
//     });
//     $("#btn").on("mouseout", function () {
//         $("#result").text("hover-out");
//     })
// })
$(document).ready(function () {
    $("#api-calls").on("click",function(){
        $.get("https://jsonplaceholder.typicode.com/users", function (data) {
       
            console.log(data);
            let setdata = data.map(x => {//`<table><thead></thead>
                return `<div>id:${x.id},name:${x.name}</div>`;
            })
            join();
            $("#content").html(setData);
        });
    });
});