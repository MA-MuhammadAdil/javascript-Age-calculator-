 
 let userInp = document.querySelector("#data")

 userInp.max = new Date().toISOString().split("T")[0];

 let result = document.querySelector("#result")

 function calculateAge (){

    let birthDate = new Date(userInp.value)

    let d1 = birthDate.getDate()
    let m1 = birthDate.getMonth() + 1 ;
    let y1 = birthDate.getFullYear()


    let todty = new Date()

    let d2 = todty.getDate()
    let m2 = todty.getMonth() + 1;
    let y2 = todty.getFullYear()

    let d3, m3 ,y3;
    y3 =  y2  - y1 

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3-- ;
        m3 = 12 + m2 - m1;
    }

if(d2 >= d1){
    d3 = d2  - d1
}
else{
    m3--
    d3 = getdateMonth(y1 , m1) + d2 - d1
}


if(m3  < 0 ){
    m3 = 11
    y3--
}

result.innerHTML = `You are ${y3} Year , ${m3} months , ${d3} days old`


function getdateMonth(){
    return new Date(year, month,0).getDate()
}


 }