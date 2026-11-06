const input = document.querySelector(".formone .input");
const copyBtn = document.querySelector(".copybtn");

const strong = document.querySelector(".level1");
const bars = document.querySelectorAll(".bars span");

const length = document.querySelector(".level2 ");
const range = document.querySelector(".range");

const checkboxes = document.querySelectorAll('.item p');

const generateBtn = document.querySelector(".genratebtn");

// input.addEventListener('input' , function(){
//     const uppercase = /[A-Z]/.test(input.value)
//     const lowercase = /[a-z]/.test(input.value)
//     const numbers = /[0-9]/.test(input.value)
//     const symbols = /[!@#$]/.test(input.value)
    
//     const conditions = [
//         uppercase,
//         uppercase&&lowercase,
//         uppercase&&lowercase&&numbers,
//         uppercase&&lowercase&&numbers&&symbols,
//     ]
//     conditions.forEach((condition ,indx)  => {
//         bars[indx].style.backgroundColor = condition ? '#34D399' : '#374151';
//     })
    

// })

sessionStorage.getItem("password")

const completed = new Set()

input.addEventListener('input' , function(){
    const value = input.value
    const conditions = [
        {id : 'uppercase' ,regex:/[A-Z]/ },
        {id : 'lowercase' ,regex:/[a-z]/ },
        {id : 'numbers' ,regex:/[0-9]/ },
        {id : 'symbols' ,regex:/[!@#$]/ }
    ]

    conditions.forEach(condition =>{
        if(condition.regex.test(value)){
            completed.add(condition.id)
        }else
            {completed.delete(condition.id)}
        
        const element = document.getElementById(condition.id)
        const isValid = condition.regex.test(value)
        element.classList.toggle('valid' , isValid)
            
    })

    bars.forEach((bar , indx)=>{
        bar.style.backgroundColor = indx < completed.size ? '#34D399' : '#374151'; //ايا كان الاندكس الي هيطلع هيلون البار و مرجع اكندس متولنش
    })
    checkStrength()
    
    //length
    length.textContent = input.value.length
    
    //length (Range)
    range.value = input.value.length

})
// console.log(completed)

const checkStrength = () => {
    strong.textContent =
        input.value.length < 6 || completed.size <= 1 ? 'Weak' :
        completed.size === 2 ? 'Medium' :
        completed.size === 3 ? 'Strong' :
        completed.size === 4 && input.value.length >= 12 ? 'Very Strong' :
        'Strong';
};

copyBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    navigator.clipboard.writeText(input.value)
    alert("Copy!");
})

generateBtn.addEventListener('click',()=>{
    sessionStorage.setItem("password" , input.value)
    alert("Done!");
    location.reload();

})