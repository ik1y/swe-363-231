/*let posts = 
[
    {
        "src":"https://sm.ign.com/t/ign_in/review/s/sekiro-sha/sekiro-shadows-die-twice-review_jbms.1200.jpg",
        "title":"Sekiro",
        "brief":"A shinobi who fights for discovering a way to defeat immortality.",
    },
    {
        "src":"https://image.api.playstation.com/cdn/EP9000/CUSA00207_00/PYBKeRa0XQYnX6IL4TyQwAdjsG1yIiHr.png",
        "title":"BloodBorne",
        "brief":"follows the player's character, a Hunter, through the decrepit Gothic, Victorian-era–inspired city of Yharnam, whose inhabitants are afflicted with a blood-borne disease which transforms the residents, called Yharnamites, into horrific beasts." 
    },
    {
        "src":"https://goombastomp.com/wp-content/uploads/2021/04/Dark-Souls-III.jpg",
        "title":"Dark souls 3",
        "brief":"Dark Souls 3 takes place in a transitory place, revolving around the first flame and the cycle of fire and dark. You play as a protagonist whose goal is to find and return the five Lords of Cinder to their thrones at Firelink Shrine in order to link the flame again.",
    },
    
    
]
for(let post of posts){
    let section=document.createElement("section")
    let p = document.createElement("p")
    let h2 = document.createElement("h2")
    let img = document.createElement("img")
    img.src=post.src
    img.alt = "Game Image"
    img.style.height='300px'
    img.style.width='400px'
    p.innerHTML=post.brief
    h2.innerHTML=post.title
    section.append(h2)
    section.append(p)
    section.append(img)
    document.querySelector("#Games").appendChild(section)
}*/
class CreateSection {
    constructor(src, title, brief) {
        this.title = title;
        this.brief = brief;
        this.src = src;
    }
}
let posts =
    [
        new CreateSection("https://sm.ign.com/t/ign_in/review/s/sekiro-sha/sekiro-shadows-die-twice-review_jbms.1200.jpg",
            "Sekiro", "A shinobi who fights for discovering a way to defeat immortality."),
        new CreateSection("https://image.api.playstation.com/cdn/EP9000/CUSA00207_00/PYBKeRa0XQYnX6IL4TyQwAdjsG1yIiHr.png", "BloodBorne",
            "follows the player's character, a Hunter, through the decrepit Gothic, Victorian-era–inspired city of Yharnam, whose inhabitants are afflicted with a blood-borne disease which transforms the residents, called Yharnamites, into horrific beasts."),
        new CreateSection("https://goombastomp.com/wp-content/uploads/2021/04/Dark-Souls-III.jpg",
            "Dark souls 3",
            "Dark Souls 3 takes place in a transitory place, revolving around the first flame and the cycle of fire and dark. You play as a protagonist whose goal is to find and return the five Lords of Cinder to their thrones at Firelink Shrine in order to link the flame again.")
    ]
/*function fillContent(posts){
    for(let post of posts){
        let section=document.createElement("section")
        let p = document.createElement("p")
        let h2 = document.createElement("h2")
        let img = document.createElement("img")
        img.src=post.src
        img.alt = "Game Image"
        img.style.height='300px'
        img.style.width='400px'
        p.innerHTML=post.brief
        h2.innerHTML=post.title
        section.append(h2)
        section.append(p)
        section.append(img)
        document.querySelector("#Games").appendChild(section)
    }
}*/
function fillContent(posts) {
    const addElements = posts.map((post) => {
        let section = document.createElement("section")
        let p = document.createElement("p")
        let h2 = document.createElement("h2")
        let img = document.createElement("img")
        img.src = post.src
        img.alt = "Game Image"
        img.style.height = '300px'
        img.style.width = '400px'
        p.innerHTML = post.brief
        h2.innerHTML = post.title
        section.append(h2)
        section.append(p)
        section.append(img)
        document.querySelector("#Games").appendChild(section)
    });
}
fillContent(posts);

