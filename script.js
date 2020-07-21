const container = document.querySelector('.plane__container-seats')
const seats= document.querySelectorAll('.line .seat:not(.occupied)')

const count= document.querySelector('#count')
const total= document.querySelector('#total')
const category= document.querySelector('#category')
let categoryValue= parseInt(category.value) 

container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateCount()
    }
  
})

function updateCount(){
    const selSeats= document.querySelectorAll('.line .seat.selected')
    
    const selSeatsCount= selSeats.length
    count.innerText=selSeatsCount
    total.innerText=selSeatsCount* categoryValue
    if(total.innerText=== 'NaN'){
        total.innerText=0 
    }
    console.log(total.innerText)
}

category.addEventListener('change', (e) =>{
    categoryValue= parseInt(e.target.value)
    updateCount()
})