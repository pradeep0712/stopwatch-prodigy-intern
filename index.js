const butt = document.querySelector("button")
const flag = document.querySelector(".flag")
const hour = document.querySelector(".hourj")
const minute = document.querySelector(".minutej")
const second = document.querySelector(".secondj")
var flag1div = document.querySelector(".col2mark")
const count = document.querySelector(".col1mark p")

var int
var sec = parseInt(second.textContent)
var min =  parseInt(minute.textContent)
var hr = parseInt(hour.textContent)

butt.addEventListener("click",toggle)
flag.addEventListener("click",markflag)

   /*  let j = 2
    function paddwithzero(num)
    {
        return  ((num < 10)? '0':'') +num
    }
          */
    function markflag()
    {
         /* var para = document.createElement('p')
         var para1 = document.createElement('p')
         const content = `${paddwithzero(parseInt(hour.textContent))} : ${paddwithzero(parseInt(minute.textContent))} : ${paddwithzero(parseInt(second.textContent))}`
         para.textContent = content
         flag1div.appendChild(para)

         para1.textContent = j
         
         count.appendChild(para1)
         j+=1 */
         minute.innerHTML = "00"
         second.innerHTML = "00"
         hour.innerHTML = '00'
         butt.textContent = "Start"
         sec=0
         hr=0
         min = 0
         clearInterval(int)


    }

    function toggle()
    {
            
        if (butt.textContent === "Start")
        {

            /* let sec = parseInt(second.textContent)
            let min =  parseInt(minute.textContent)
            let hr = parseInt(hour.textContent) */
            butt.textContent = "Stop"
            
             int = setInterval(time,1000);
            function time()
            {    
                if(sec<59)
                {
                    sec+=1
                    sec = sec.toString().padStart(2,'0')
                    second.innerHTML = sec
                    sec = parseInt(sec)
                    
                }
                 else
                {
                    min+=1
                    min = min.toString().padStart(2,'0')
                    minute.innerHTML = min
                    min = parseInt(min)
                    
                    if (min > 59)
                    {
                        minute.innerHTML = 0
                        min = 0
                        hr+=1
                        hr = hr.toString().padStart(2,'0')
                        hour.innerHTML = hr
                        hr = parseInt(hr)
                        if (hr>23)
                        {
                            second.innerHTML = 0  
                            minute.innerHTML = 0
                            hour.innerHTML = 0
                            sec,hr,min = 0

                        }
                        
                    }
                    second.innerHTML = 0
                    sec = 0

                    
                }  
                console.log(sec)

                
            }
        }    
        else{
            butt.textContent = "Start"
            clearInterval(int)
        }
    }

     