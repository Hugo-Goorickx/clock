let clock_mode = 1;

function gen_time()
{
    let now = new Date();
    let days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    let months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

    let hour_minute = document.getElementById("hour_minute");
    let seconde = document.getElementById("second");

    document.getElementById("name_day").textContent = days[now.getDay()];
    document.getElementById("day_month").innerHTML = now.getDate() + "<br>" + months[now.getMonth()];
    document.getElementById("year").textContent = now.getFullYear();
    if (!clock_mode)
    {
        hour_minute.textContent = Math.floor((now.getTime() / (1000 * 60 * 60)) % 24) + ":" + Math.floor((now.getTime() / (1000 * 60)) % 60);
        seconde.textContent = Math.floor((now.getTime() / 1000) % 60);
    }
    else
    {
        hour_minute.textContent = Math.floor((now.getTime() / (1000 * 60 * 60)) % 12) + ":" + Math.floor((now.getTime() / (1000 * 60)) % 60);
        seconde.textContent = Math.floor((now.getTime() / 1000) % 60) + ((Math.floor((now.getTime() / (1000 * 60 * 60)) % 24) > 12) ? " P.M." : " A.M.");
    }
}

document.getElementById("time").addEventListener("click", function () { clock_mode = (clock_mode) ? 0 : 1; });
gen_time();
setInterval(gen_time, 1000);