(function () {
    let array=[`https://abigames.com.vn/wp-content/uploads/2022/01/abi-applovin-1.png`,
        `https://abigames.com.vn/wp-content/uploads/2022/01/abi-bytedance-5.png`,
        `https://abigames.com.vn/wp-content/uploads/2022/01/abi-ghost-8.png`,
        `https://abigames.com.vn/wp-content/uploads/2022/01/abi-adMob-4.png`,
        "https://abigames.com.vn/wp-content/uploads/2022/01/abi-adcolony-3.png",
        `https://abigames.com.vn/wp-content/uploads/2022/01/abi-google-adsword-12.png`,
        `https://abigames.com.vn/wp-content/uploads/2022/01/abi-inmobi-10.png`,
        'https://abigames.com.vn/wp-content/uploads/2022/01/abi-ironsourge-11.png',
        `https://abigames.com.vn/wp-content/uploads/2022/01/abi-mintegral-13.png`,
        'https://abigames.com.vn/wp-content/uploads/2022/01/abi-mopub-6.png',
        `https://abigames.com.vn/wp-content/uploads/2022/01/abi-tyroo-7.png`,
        `https://abigames.com.vn/wp-content/uploads/2022/01/abi-unityAds-9.png`,
        `https://abigames.com.vn/wp-content/uploads/2022/01/abi-vungle-2.png`,
        ``,
    ]
    for (let i = 0; i < array.length; i++) {
        let div=document.createElement("div");
        div.setAttribute("class","brand-logo");
        div.innerHTML=
            `<img onclick="check(${i})" loading="lazy" style="height: 20px" src=${array[i]}>`
        document.getElementById("next-brand").append(div);
    }
    check=(key)=>{
        let bandLogo=document.querySelectorAll("div[class='brand-logo']");
        console.log("đây rồi anh em ơi ",bandLogo[key].offsetLeft);
    }
})();