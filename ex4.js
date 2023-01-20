let clock_mode = 1;

function gen_time()
{
    let now = new Date();
    let days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    let months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    
    let name_day = document.getElementById("name_day");
    let day_month = document.getElementById("day_month");
    let year = document.getElementById("year");
    let hour_minute = document.getElementById("hour_minute");
    let seconde = document.getElementById("second");

    name_day.textContent = days[now.getDay()];
    day_month.innerHTML = now.getDate() + "<br>" + months[now.getMonth()];
    year.textContent = now.getFullYear();
    if (!clock_mode)
    {
        hour_minute.textContent = Math.floor((now.getTime() / (1000 * 60 * 60)) % 24) + ":" + Math.floor((now.getTime() / (1000 * 60)) % 60);
        seconde.textContent = Math.floor((now.getTime() / 1000) % 60);
    }
    else
    {
        hour_minute.textContent = Math.floor((now.getTime() / (1000 * 60 * 60)) % 12) + ":" + Math.floor((now.getTime() / (1000 * 60)) % 60);
        seconde.textContent = Math.floor((now.getTime() / 1000) % 60);
        if (Math.floor((now.getTime() / (1000 * 60 * 60)) % 24) > 12)
            seconde.textContent += " P.M.";
        else
            seconde.textContent += " A.M.";
    }
}

let time = document.getElementById("time");
time.addEventListener("click", function ()
{
    if (clock_mode)
        clock_mode = 0;
    else
        clock_mode = 1;
})
gen_time();
setInterval(gen_time, 1000);