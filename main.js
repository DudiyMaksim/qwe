function showinfo(a){
    for(let i in a){
        alert(a[i])
    }
}
function T(S, ob){
    let a=S/ob["serV"];
    let b=Math.floor(a/4);
    alert(a+b);
}

function plusdrib(d1,d2){
    alert((d1.numerator/d1.denominator)+(d2.numerator/d2.denominator))
}
function minusdrib(d1,d2){
    alert((d1.numerator/d1.denominator)-(d2.numerator/d2.denominator))
}
function multiplicationdrib(d1,d2){
    alert((d1.numerator/d1.denominator)*(d2.numerator/d2.denominator))
}
function divisiondrib(d1,d2){
    alert((d1.numerator/d1.denominator)/(d2.numerator/d2.denominator))//?))
}
function shortdrib(d1){
    var i = 2;
    if ((d1.numerator%2==0 && d1.denominator%2==0) || (d1.numerator%3==0 && d1.denominator%3==0)){
        while(d1.numerator%i!=0 || d1.denominator%i!=0){
            i++;
        }
        d1.numerator=d1.numerator/i;
        d1.denominator=d1.denominator/i;
        alert(`${d1.numerator}/${d1.denominator}`)
    }
    else{
        alert(`You cant SHORT it, ${d1.numerator}/${d1.denominator}`)
    }
}

function showtime(t){
    alert(`${t.hours}:${t.min}:${t.sec}`)
}

function addsectime(t, addsec){
    totalsec=t.hours*3600+t.min*60+t.sec+addsec
    t.hours=Math.floor(totalsec/3600)%24
    t.min=Math.floor((totalsec%3600)/60)
    t.sec=totalsec%60
    alert(`${t.hours}:${t.min}:${t.sec}`)
}

function addmintime(t,addmin){
    totalsec=t.hours*3600+t.min*60+t.sec+addmin*60
    t.hours=Math.floor(totalsec/3600)%24
    t.min=Math.floor((totalsec%3600)/60)
    t.sec=totalsec%60
    alert(`${t.hours}:${t.min}:${t.sec}`)
}

function addhourtime(t,addhour){
    totalsec=t.hours*3600+t.min*60+t.sec+addhour*3600
    t.hours=Math.floor(totalsec/3600)%24
    t.min=Math.floor((totalsec%3600)/60)
    t.sec=totalsec%60
    alert(`${t.hours}:${t.min}:${t.sec}`)
}
// // task 1 ========
// let obj = {
//     manufacturer:"Mercedes",
//     model:"G 63 AMG",
//     serV:80
// };
// obj["year of manufacture"]=2015;
// showinfo(obj);
// T(330, obj);
// // task 2 ========
// let drib = {
//     numerator:3,
//     denominator:6
// }
// let drib2 = {
//     numerator:1,
//     denominator:2
// }
// plusdrib(drib,drib2)
// shortdrib(drib)
// task 3!!
// let time = {
//     hours:20,
//     min:30,
//     sec:45
// }
// showtime(time);
// addsectime(time,3060)
// addmintime(time,30)
// addhourtime(time,1)