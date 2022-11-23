let counter = 0;
let intervalHandler;
let flag = false;
let h;
let m;
let s;

const get = id => document.getElementById(id);

const count = () => {
    counter++;
    h = Math.floor(counter / 3600);
    if (h <= 9) {
        get("hour").innerHTML = "0" + h;
    } else {
        get("hour").innerHTML = h;
    }
    m = Math.floor((Math.floor(counter - 3600 * h)) / 60);
    if (m <= 9) {
        get("min").innerHTML = "0" + m;
    } else {
        get("min").innerHTML = m;
    }
    if (counter < 60) {
        s = counter;
    }
    if (counter <= 9) {
        get("sec").innerHTML = "0" + counter;

    } else {
        get("sec").innerHTML = counter;
    }
    if (counter > 60) {
        s = counter - Math.floor(h * 3600) - Math.floor(m * 60);
    }
    if (s < 9) {
        get("sec").innerHTML = "0" + s;

    } else {
        get("sec").innerHTML = s;
    }
}

get("startbtn").onclick = () => {
    if (!flag) {
        flag = true;
        intervalHandler = setInterval(count, 10);
        get("tablo").style.background = "green";
    }
}

get("stopbtn").onclick = () => {
    clearInterval(intervalHandler);
    flag = false;
    get("tablo").style.background = "red";
}

get("resertbtn").onclick = () => {
    clearInterval(intervalHandler);
    flag = false;
    counter = 0;
    get("hour").innerHTML = "00";
    get("min").innerHTML = "00";
    get("sec").innerHTML = "00";
    get("tablo").style.background = "grey";
}