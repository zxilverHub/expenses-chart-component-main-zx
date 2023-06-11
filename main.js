const json = `[
      {
        "day": "mon",
        "amount": 17.45
      },
      {
        "day": "tue",
        "amount": 34.91
      },
      {
        "day": "wed",
        "amount": 52.36
      },
      {
        "day": "thu",
        "amount": 31.07
      },
      {
        "day": "fri",
        "amount": 23.39
      },
      {
        "day": "sat",
        "amount": 43.28
      },
      {
        "day": "sun",
        "amount": 25.48
      }
    ]`


let data = JSON.parse(json);
      
const label = document.querySelectorAll('.label'),
      day_graph = document.querySelectorAll('.day-graph'),
      amount = document.querySelectorAll('.data');

label.forEach((l, i) => {
      l.innerHTML = `${data[i].day}` 
      day_graph[i].setAttribute('style', `height: ${data[i].amount + 8}%;`)
      amount[i].innerHTML = `$${data[i].amount}`
})

day_graph.forEach((graph, i) => {
      graph.addEventListener('click', () => {
            amount[i].classList.toggle('block');
            graph.classList.toggle('tion')
            setTimeout(() => {
                  amount[i].classList.toggle('block');
                  graph.classList.toggle('tion')
            }, 4000)
      })
})
