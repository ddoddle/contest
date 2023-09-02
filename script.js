let p = "https://kontests.net/api/v1/all"
let response=fetch(p)
response.then((value1)=>{
    return value1.json()
}).then((contests)=>{
    console.log(contests)
ihtml=""
    for(item in contests ){
        console.log(contests[item])
        ihtml +=` 
        <div class="card mx-2 my-2" style="width: 22rem; ">
        <img src="contest.jpg" class="card-img-top" alt="no-image">
        <div class="card-body">
            <h5 class="card-title">${contests[item].name}</h5>
            <p class="card-text"> Status is: ${contests[item].status}</p>
            <p class="card-text"> In 24 Hours?:${contests[item].in_24_hours}</p>
            <p class="card-text"> Site: ${contests[item].site}</p>
            <p> Start at: ${contests[item].start_time}<p>
            <p> End  at: ${contests[item].end_time}<p>
            <a href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>
        </div>
    </div>
        `
    }
    card_Container.innerHTML=ihtml
})

