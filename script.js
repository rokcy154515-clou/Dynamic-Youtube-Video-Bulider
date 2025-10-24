function createCard(title,cName,views,monthsOld,Duration,thumbnail){
    let viewstr
    if(views<1000){
        viewstr=views
    }
    else if(views>1000000){
        viewstr=views/1000000+"M"
    }
    else{
        viewstr=views/1000+"k"
    }
    let html=`<div class="card">
            <div class="image">
                <img src=${thumbnail} alt="">
                <div class="capsule">${Duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewstr} views . ${monthsOld} months ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1","CodeWithHarry",727000,7,"31:06","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w")