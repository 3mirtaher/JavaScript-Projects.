const time = document.querySelector(".timer div")
const period = document.querySelector(".timer span")
const date = document.querySelector(".date")

const convertTime = document.querySelector(".convert-time")


let is24Hour = true
function updateTime(){
    const currentDate = new Date()
    const option = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !is24Hour

    };
    return currentDate.toLocaleTimeString("en-GB" , option)
}

// console.log(udateTime())

setInterval(function(){
    time.textContent = updateTime()
},1000)

function updateDate(){
    const currentDate = new Date()
    const option={
        weekday : "long",
        day:"numeric",
        month : "long",
        year:"numeric"
    }
    return currentDate.toLocaleDateString("en-GB" , option)
    
}
date.textContent = updateDate()


convertTime.addEventListener('click', function () {
    is24Hour = !is24Hour;
    // time.style.display = is24Hour ? "none" : "inline";
    time.textContent = updateTime();
    
});


function getPeriod(){
    const currentTime2 = new Date()
    const hour = currentTime2.getHours()
    const period = hour >= 12 ? "PM" : "AM" 
    return period;
}
period.textContent = getPeriod()


// const time = document.querySelector(".timer div");
// const period = document.querySelector(".timer span");
// const date = document.querySelector(".date");
// const convertTime = document.querySelector(".convert-time");

// let is24Hour = true;

// function updateClock() {
//     const now = new Date();

//     const timeText = now.toLocaleTimeString("en-GB", {
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: !is24Hour
//     });

//     // نظام 12: "10:42:35 pm" ← نقسمه لوقت وفترة
//     // نظام 24: "22:42:35"    ← مفيش فترة
//     const [clock, ampm] = timeText.split(/\s+/);

//     time.textContent = clock;
//     period.textContent = ampm ? ampm.toUpperCase() : "";

//     date.textContent = now.toLocaleDateString("en-GB", {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         year: "numeric"
//     });
// }

// updateClock();                   // أول مرة فورًا
// setInterval(updateClock, 1000);  // وبعدها كل ثانية

// convertTime.addEventListener("click", function () {
//     is24Hour = !is24Hour;
//     updateClock();
// });