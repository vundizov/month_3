const cards = document.querySelector('.cards')


const fetchData = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
        data.forEach(persons => {
            const person = document.createElement('div')
            person.setAttribute("class", "person-card")
            person.innerHTML = `
                <div class="box">
                <div class="img">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="img">
                </div>
                 <h4>title: ${persons.title}</h4>
                <p>body: ${persons.body}</p>
                </div>
              
            `
            cards.append(person)
            })
}
fetchData()