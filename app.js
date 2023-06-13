const main = document.getElementById("qr");
const input = document.getElementById("input");
const generate = document.getElementById("generate");
const clear = document.getElementById("clear");
const output = document.getElementById("output");

generate.addEventListener("click",()=>{

        


        if(input.value != ""){
            output.textContent = "";
            console.log(input.value);
        main.innerHTML = " <img src='https://api.qrserver.com/v1/create-qr-code/?data=" + input.value+ "&amp;size=100x100' alt='' title='' />";

        }
        else{
            output.textContent = "Input Empty!"
        }
   
})

clear.addEventListener("click",()=>{
    main.innerHTML = "";
    input.value = "";
    output.textContent = "";

})





