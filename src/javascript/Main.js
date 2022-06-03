(function anhlia() {
    let arrayImg=["redimposter1.jpg","infinity.jpg",'galaxy-invander.jpg',"alienshooter.jpg"]
    let arrayContain=["Red Imposter","Galaxy Attack: Alien Shooter","Infinite Shooting: Galaxy Attack","Galaxy Attack: Alien Shooter"]
    let storageContain=[`If you are a fan of the classic Mobi Alien Shooter game and 1945 Airforce, you cannot ignore this game.
In 2021, Alien Shooter: Galaxy Attack has reached 150M installs and ranked #1 in the US market for weeks.`,


        `Are you a fan of space shooting, bullet hell games and like to blast enemies for glory? If the answer is "HELL YES!" Infinity Shooting will suit you best!`,

        `Galaxy Invaders: Alien Shooter - Space Shooter is a combination of classic shoot ‘em up game feels and modernized mechanics, with gameplay reminiscent of old school arcade shooting games like Galaga, Air Strike Force, Chicken Shooter,...`,

        `Red Imposter is an attractive and fun action game. The game was ranked top 1 in the US after only four days of launching..<br><br>The Player's mission is simple: Don't let any astronauts survive!`]
    document.getElementById("utiled-mig").innerHTML = `

    <div class="check" id="utiled-mig-1">

        <div id="utiled-mig-1-conten">
            <span><h1 id="h1-conten" style="font-size: 40px">Red Imposter</h1></span>
            <span id="textxxx">Red Imposter is an attractive and fun action game. The game was ranked top 1 in the US after only four days of launching..<br><br>The Player's mission is simple: Don't let any astronauts survive!</span><br>
            <span></span>
            <span>Find out more</span>
        </div>
    </div>
    <div class="check" id="img-check"></div>
    <div class="clead"></div>`
    document.getElementById("img-check").innerHTML = `<img style="width: 100% ; height: 100%;" id="img-4"  src="./img/${arrayImg[0]}" alt="logouti">`
//dom css
    document.getElementsByClassName("check")[0].style = "width: 50% ; height: 58%;"
    document.getElementsByClassName("check")[1].style = "width: 50%; height: 58%;"
    document.getElementById("utiled-mig-1-conten").style = "display:flex; flex-direction: column; box-sizing:boderbox-sizing: border-box;margin-left: 10px; color:rgb(255,255,255); font-size:18px"
    let spancheck = document.querySelectorAll("div#utiled-mig-1-conten span");
    spancheck[0].style = "margin-bottom: 50px; height:90px"
    spancheck[2].style = "margin-bottom: 50px"
    spancheck[3].style = "display: flex;\n" +
        "    width: 200px;\n" +
        "    margin: 0 35px;\n" +
        "    background-color: rgb(251, 156, 44);\n" +
        "    align-items: center;\n" +
        "    justify-content: center;\n" +
        "    line-height: 50px; " +
        "border-bottom-right-radius: 25px;\n" +
        "    border-top-left-radius: 25px;"
    function name(x) {
        setTimeout(function () {
            document.getElementById("img-check").innerHTML = `<img style="width: 100% ; height: 100%;" id="img-4"  src="./img/${arrayImg[x]}" alt="logouti">`
            document.getElementById("h1-conten").innerHTML=`${arrayContain[x]}`
            document.querySelector("span#textxxx").innerHTML=`${storageContain[x]}`
            x++
            if (x===4){
                x=0
            }
            name(x)
        }, 5000)
    }
    let x=1
    name(x);
})();


(function () {
    let div3leve=document.querySelector("div#div3");
    div3leve.setAttribute("style", `width:100vw; background-color:#fb9c2c;padding: 80px 0;`);

    // tạo ra 1 thẻ p
    let value=document.createElement("p");
    value.innerHTML=`
    “ABI has published 150+ games and has billions of users. We love all categories of mobile games. We are always open to working with new studios and game developers. Mutual respect, trust, and hard work are crucial elements to building strong relationships with our partners”
 <br> Tran Manh Hung – CEO
    `
    div3leve.append(value);
    value.setAttribute("Style","height:178px; max-width: 1140px; margin:0 auto; font-size: 30px;text-align: center; color:#8f1209!important;font-family: 'Poppins',Helvetica,Arial,Lucida,sans-serif;font-weight:500" )
})();







