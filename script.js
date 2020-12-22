var now=[document.getElementById("9am"),document.getElementById("10am"),document.getElementById("11am"),document.getElementById("12pm"),document.getElementById("1pm"),document.getElementById("2pm"),document.getElementById("3pm"),document.getElementById("4pm"),document.getElementById("5pm")]
var load = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]

newHours()
renderStored()
function saveIt(button){ 
    event.preventDefault()
    //target assigned time range of the clicked button.
    targetimeid = button.getAttribute('form')
    targettext = document.getElementById(targetimeid)
    console.log(targettext) 
    //Save submitted text as value of the time range
    var inputText = targettext.value
    localStorage.setItem(targetimeid, inputText);
    renderStored()
    }

function newHours(){ 
     var currenttime = moment().hour()
   //Color change according to present and past times.
    if (currenttime>=9 && currenttime <=17){
        now[currenttime-9].setAttribute("class","present")
        for(i=0;i<currenttime-9;i++){
        now[i].setAttribute("class","past")    
        }
    }
   
 }
function reset(){
    if (currenttime=18){
        for(i=0;i<=9;i++){
            now[i].removeAttribute("placeholder")
            now[i].setAttribute("class","future")
        }
    }
}

 function renderStored() {
     for(i=0;i<=9;i++){
    var saved = localStorage.getItem(load[i]); 
    if(save!=="null"){
    now[i].setAttribute("placeholder",saved)
    }
}
}
    


