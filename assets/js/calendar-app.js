// Time & Date

function calendar() {
    
    // Variables
    
    var date = new Date(),
        hour = date.getHours(),
        minutes = date.getMinutes(),
        day = date.getDate(),
        monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"],
        month = monthNames[date.getMonth()],
        year = date.getFullYear(),

        displayHour = document.querySelector('#hour'),
        displayDay = document.querySelector('#day'),
        displayMonth = document.querySelector('#month'),
        displayYear = document.querySelector('#year');

    // Display minutes with 0 
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    // Display time and date

    displayHour.innerHTML = hour + ":" + minutes;
    displayDay.innerHTML = day;
    displayMonth.innerHTML = month + " ";
    displayYear.innerHTML = year;

    setTimeout("calendar()", 1000);
}    

calendar();