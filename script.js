let hh = document.getElementById('clock-hours')
let mm = document.getElementById('clock-minutes')
let ss =  document.getElementById('clock-seconds')
let AMPM = document.querySelector('.timer-period');

let wakeup = document.querySelector('.morning-greetings-message');
let message = document.querySelector('.greetings-message');

function theTimer() {
    let d =new Date();
    let hours =d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    hh.innerHTML = hours;
    mm.innerHTML = minutes;
    ss.innerHTML = seconds;

   // To change content below the clock
    if (hours>=4 && hours<10 ){
        message.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"
        
    }
    else if (hours>=10 && hours<16 ){
        message.innerHTML = " LET'S HAVE SOME LUNCH !!"
        
    }
    else if (hours>=16 && hours<20 ){
        message.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    }
    else{
        message.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
    }
    
   // to make clock in 12 hrs format
    if (hh.innerHTML>12){
        hh.innerHTML = hh.innerHTML - 12;
        AMPM.innerHTML = "PM"
    }
    
}
setInterval(() =>{
    theTimer();
},1000)


but1 = document.querySelector('.btn')

but1.addEventListener('click',() =>{
    let d =new Date();
    let hours =d.getHours();

    let img = document.querySelector('#photo')
    
    let night = document.getElementById('select-night');
    let ntext = night.options[night.selectedIndex].textContent;
    let nPrint = document.querySelector('#set-night-time');
    nPrint.textContent = ntext ;

    let nap = document.getElementById('select-evening');
    let naptext = nap.options[nap.selectedIndex].textContent;
    let napPrint = document.querySelector('#set-nap-time');
    napPrint.textContent = naptext

    let lunch = document.getElementById('select-afternoon');
    let ltext = lunch.options[lunch.selectedIndex].textContent;
    let lPrint = document.querySelector('#set-lunch-time');
    lPrint.textContent = ltext

    let morn = document.getElementById('select-morning');
    let mtext = morn.options[morn.selectedIndex].textContent;
    let mPrint = document.querySelector('#set-wakeup-time');
    mPrint.textContent = mtext

     // to change the text and image based on selected option 
   
    if(parseInt(morn.value) === hours){
        wakeup.innerHTML = "GOOD MORNING!! WAKE UP !!"
        img.src="./images/Component-30–1.svg"
    }
    else if(parseInt(lunch.value) === hours){
        wakeup.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP"
        img.src="./images/Group 5183.jpg"
      
    }
    else if(parseInt(nap.value) === hours){
        wakeup.innerHTML = "GOOD EVENING !!";
        img.src="./images/lunch_image.jpg";
       
    }
    else if(parseInt(night.value) === hours){
        wakeup.innerHTML = "GOOD NIGHT !!"
        img.src="./images/Group 5194.jpg";
    }
})