const form = document.getElementById('form')
const output = document.getElementById('output')

form.addEventListener('submit', async (event)=> {
    event.preventDefault()

    let response = await handleSubmit(`http://localhost:3000/api/movie/create`, {
        title: event.target.title.value,
        rating: event.target.rating.value,
        year: event.target.year.value,
        director: event.target.director.value,
        run_time: `0${event.target.hr.value}:${event.target.min.value}:00`,
        user_rating: event.target.user_rating.value
    })

    const { Last_id} = response
    output.innerText = `Last id:${Last_id}`
})

let handleSubmit = async (url, data)=> {
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response.json()
}

// let searchForm = document.getElementById('searchForm')

// searchForm.addEventListener('submit', ()=> {
//     event.preventDefault()
//     console.log('searched')
// })

