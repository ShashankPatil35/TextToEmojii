var clutter = ""


function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click",function () {
        var input = document.getElementById("txtmsg").value
        console.log(input)
        var passsword = document.getElementById("password").value
        console.log(passsword)

        var str = input.split("")
        //console.log(str)

        str.forEach(element => {
            clutter+= `&#128${(element.charCodeAt())} `
        });

        // document.querySelector("#result").style.display = "block"
       document.querySelector("#result").innerHTML = clutter

     var dataarr = [];
  //  dataarr = [{"pass":password,"input":input,"clutter":clutter}]
    // console.log(dataarr)
      
    if(JSON.parse(localStorage.getItem('data1'))){
    dataarr = JSON.parse(localStorage.getItem('data1'))
    console.log(dataarr)
    dataarr.push({"pass":password, "input":input, "clutter":clutter})
    }
    else{
        dataarr = [{"pass":password,"input":input,"clutter":clutter}]
    }
    localStorage.setItem("data1",JSON.stringify(dataarr))


    }
    )
}


function decryption() {
    document.querySelector("#decrypt-btn").addEventListener("click",function () {
    //2
        var clutter2 = ""

        var input2 = document.querySelector("#emojimsg").value
        
        var pass2 = document.querySelector("#finalpassword").value

        var user = JSON.parse(localStorage.getItem("data1"))
        console.log(user)

        var str2 = input2.split(" ")
        str2.forEach(element=>{
            clutter2+= `&#${element.codePointAt(0)} `
        })
        console.log(clutter2)

        var found;

        for(let i of user){
            if(i.clutter == clutter2){
                found = i
            console.log(i)
            }
        }

        if(found.clutter === clutter2){
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.display = "#eee"

            document.querySelector("#result").innerHTML = found.input

        }
        else{
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `red`
            document.querySelector("#result").innerHTML = "Wrong password"
        }


    })
}




function btnClicking(){
    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
        // console.log(localStorage.getItem("password"))
        // console.log(localStorage.getItem("emojis"))
    })
    document.querySelector("#dec-btn").addEventListener("click",function (){
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#result").style.display = "none"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        // document.querySelector("#result").style.display = "block"
        document.querySelector("#main>h1 span img").style.rotate = "270deg"
    })
    document.querySelector("#enc-btn").addEventListener("click",function (){
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate = "90deg"
        document.querySelector("#result").style.display = "none"
    })

    // document.querySelector("encrypt-btn").addEventListener("click",function(){
    //     document.querySelector("#result").style.display = "block"
    // })
    // document.querySelector("decrypt-btn").addEventListener("click",function(){
    //     document.querySelector("#result").style.display = "block"
    // })
}
btnClicking();


encryption();
decryption();

