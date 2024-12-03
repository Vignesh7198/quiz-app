bodyContainer = document.querySelectorAll(".box")
instructions = document.querySelector("#instructions")
quizMainContainer = document.getElementById("quizmain")
quizInput = quizMainContainer.querySelectorAll("input")
timer = document.querySelectorAll(".timer")
mainButton = quizMainContainer.querySelector("button")
minute=1
second=60
score=0
userName=null
userMail=null
userAnswers={
    answer1:'unanwered',
    answer2:'unanwered',
    answer3:'unanwered',
    answer4:'unanwered',
    answer5:'unanwered'
}

correctAnswers={
    answer1:"2",
    answer2:"4",
    answer3:"1",
    answer4:"2",
    answer5:"4"
}


    
    quizInput[0].addEventListener("keyup",()=>{
        validName = quizMainContainer.querySelector(".valid-name")
       if(/\d/.test(quizInput[0].value)){
        validName.style.display = "block"
       }
       else{
        validName.style.display = "none"
       }

    })

    quizInput[1].addEventListener("keyup",()=>{
        validEmail = quizMainContainer.querySelector(".valid-email")
       if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-0-9]+\.[a-zA-Z]{2,}$/.test(quizInput[1].value)||quizInput[1].value.length==0){
        validEmail.style.display = "none"
       }
       else{
        validEmail.style.display = "block"

       }

    })


mainButton.addEventListener('click',function(){
   input =  quizMainContainer.querySelectorAll("input")
    if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-0-9]+\.[a-zA-Z]{2,}$/.test(input[1].value)){
         userMail=input[1].value
    }
    if(!/\d/.test(input[0].value)){
        userName=input[0].value
    }
    if(userName.length>0 && userMail.length>0){
        quizMainContainer.classList.add('hidden')
        bodyContainer[1].style.display="block"
    }
    else{
        fillstatus = quizMainContainer.querySelector(".fill-status")
        fillstatus.style.display="block"
    }
})

bodyContainer[1].querySelector('button').addEventListener('click',()=>{
    bodyContainer[1].style.display="none"
    bodyContainer[2].classList.remove("hidden")
    interval = setInterval(()=>{
        second--;
        if(second%60==0){
            second=60
              minute--
        }
        if(second<10){
            timer.forEach((element)=>{
                element.innerHTML = `<h1>${minute}:0${second}</h1>`
            })
            }else{ timer.forEach((element)=>{
                element.innerHTML = `<h1>${minute}:${second}</h1>`
            })
            }
     },1000)

      timeout = setTimeout(()=>{
            clearInterval(interval)
            bodyContainer.forEach((element,index)=>{
                if(index===7){
                element.style.display="block"
                if(bodyContainer[7].style.display=="block"){
                    for(let answer in userAnswers,correctAnswers){
                        bodyContainer[7].querySelector('.playername').textContent=userName
                        bodyContainer[7].querySelector('.playeremail').textContent=userMail
                        bodyContainer[7].querySelector('.gamescore').textContent=score+' / 5'
                        }
                  }
                }
                else{
                element.style.display="none"
                }

            })


     },120000)
})

bodyContainer[2].querySelector('button').addEventListener('click',()=>{
   inputs =  bodyContainer[2].querySelectorAll('input')
   inputs.forEach(element => {
       if(element.checked){
          userAnswers.answer1=element.value
       }
   });
          bodyContainer[2].style.display="none"

          bodyContainer[3].style.display="block"

})

bodyContainer[3].querySelector('.nextbutton').addEventListener('click',()=>{
    inputs =  bodyContainer[3].querySelectorAll('input')
    inputs.forEach(element => {
        if(element.checked){
           userAnswers.answer2=element.value
        }
    });
           bodyContainer[3].style.display="none"
 
           bodyContainer[4].style.display="block"
 
 })

 bodyContainer[3].querySelector('.previousbutton').addEventListener('click',()=>{
    bodyContainer[2].style.display="block"
    bodyContainer[3].style.display="none"
 
    bodyContainer[4].style.display="none"
 })


 bodyContainer[4].querySelector('.nextbutton').addEventListener('click',()=>{
    inputs =  bodyContainer[4].querySelectorAll('input')
    inputs.forEach(element => {
        if(element.checked){
           userAnswers.answer3=element.value
        }
    });
           bodyContainer[4].style.display="none"
           bodyContainer[5].style.display="block"
 })

 bodyContainer[4].querySelector('.previousbutton').addEventListener('click',()=>{
    bodyContainer[3].style.display="block"
    bodyContainer[4].style.display="none"
 
    bodyContainer[5].style.display="none"
 })

 bodyContainer[5].querySelector('.nextbutton').addEventListener('click',()=>{
    inputs =  bodyContainer[5].querySelectorAll('input')
    inputs.forEach(element => {
        if(element.checked){
           userAnswers.answer4=element.value
        }
    });
           bodyContainer[5].style.display="none"
 
           bodyContainer[6].style.display="block"
 
 })

 bodyContainer[5].querySelector('.previousbutton').addEventListener('click',()=>{
    bodyContainer[4].style.display="block"
    bodyContainer[5].style.display="none"
 
    bodyContainer[6].style.display="none"
 })

 bodyContainer[6].querySelector('.nextbutton').addEventListener('click',()=>{
    inputs =  bodyContainer[6].querySelectorAll('input')
    inputs.forEach(element => {
        if(element.checked){
           userAnswers.answer5=element.value
        }
    });
           bodyContainer[6].style.display="none"
           bodyContainer[7].style.display="block"
           if(bodyContainer[7].style.display=="block"){
            for(let answer in userAnswers,correctAnswers){
               if(userAnswers[answer]==correctAnswers[answer]){
                           score++
               }
           }
          }
          clearTimeout(timeout)
          bodyContainer[7].querySelector('.playername').textContent=userName
          bodyContainer[7].querySelector('.playeremail').textContent=userMail
          bodyContainer[7].querySelector('.gamescore').textContent=score+' / 5'



 })

 bodyContainer[7].querySelector(".nextbutton").addEventListener('click',()=>{
   bodyContainer[7].style.display="none"

   bodyContainer[8].style.display="block"
   yourAnswers =  bodyContainer[8].querySelectorAll(".your-answer")
   inputTag1 = bodyContainer[2].querySelectorAll('input')
   inputTag2 = bodyContainer[3].querySelectorAll('input')
   inputTag3 = bodyContainer[4].querySelectorAll('input')
   inputTag4 = bodyContainer[5].querySelectorAll('input')
   inputTag5 = bodyContainer[6].querySelectorAll('input')
   showCorrectAnswers =  bodyContainer[8].querySelectorAll(".correct-answer")
   finalCorrectAnswers=[]
   showCorrectAnswers.forEach((element)=>{
        finalCorrectAnswers.push(element.innerText.split('Answer: ')[1])
   })

   console.log(finalCorrectAnswers)

   inputTag1.forEach((element)=>{
     if(element.value==userAnswers.answer1){
        console.log(element.nextElementSibling)
        yourAnswers[0].innerHTML = element.nextElementSibling.textContent
        if(finalCorrectAnswers[0].toLowerCase().trim().includes(element.nextElementSibling.textContent.toLowerCase().trim())){
            console.log(finalCorrectAnswers[0].toLowerCase().trim()+''+element.nextElementSibling.textContent.toLowerCase().trim())
            yourAnswers[0].classList.add('bg-green-500')    
        }
        else{
            console.log(element.nextElementSibling.textContent.toLowerCase().trim())
            console.log(finalCorrectAnswers[0].toLowerCase().trim()+''+element.nextElementSibling.textContent.toLowerCase().trim())
            yourAnswers[0].classList.add('bg-red-500')
        }


     }
   })
   inputTag2.forEach((element)=>{
    if(element.value==userAnswers.answer2){
        console.log(element.nextElementSibling)
       yourAnswers[1].innerHTML = element.nextElementSibling.textContent
       if(finalCorrectAnswers[1].toLowerCase().trim().includes(element.nextElementSibling.textContent.toLowerCase().trim())){
        yourAnswers[1].classList.add('bg-green-500')    
    }
    else{
        console.log(finalCorrectAnswers[1],element.nextElementSibling.textContent)
        yourAnswers[1].classList.add('bg-red-500')
    }
    }
  })
  inputTag3.forEach((element)=>{
    if(element.value==userAnswers.answer3){
        console.log(element.nextElementSibling)
       yourAnswers[2].innerHTML = element.nextElementSibling.textContent
       if(finalCorrectAnswers[2].toLowerCase().trim().includes(element.nextElementSibling.textContent.toLowerCase().trim())){
        yourAnswers[2].classList.add('bg-green-500')    
    }
    else{
        yourAnswers[2].classList.add('bg-red-500')
    }
    }
  })
  inputTag4.forEach((element)=>{
    if(element.value==userAnswers.answer4){
        console.log(element.nextElementSibling)
       yourAnswers[3].innerHTML = element.nextElementSibling.textContent
       if(finalCorrectAnswers[3].toLowerCase().trim().includes(element.nextElementSibling.textContent.toLowerCase().trim())){
        yourAnswers[3].classList.add('bg-green-500')    
    }
    else{
        yourAnswers[3].classList.add('bg-red-500')
    }
    }
  })
  inputTag5.forEach((element)=>{
    if(element.value==userAnswers.answer5){
        console.log(element.nextElementSibling)
       yourAnswers[4].innerHTML = element.nextElementSibling.textContent
       if(finalCorrectAnswers[4].toLowerCase().trim().includes(element.nextElementSibling.textContent.toLowerCase().trim())){
        yourAnswers[4].classList.add('bg-green-500')    
    }
    else{
        yourAnswers[4].classList.add('bg-red-500')
    }
    }
  })
   
 })

 bodyContainer[6].querySelector('.previousbutton').addEventListener('click',()=>{
    bodyContainer[5].style.display="block"
    bodyContainer[6].style.display="none"
    bodyContainer[7].style.display="none"
 })

 bodyContainer[8].querySelector('button').addEventListener('click',function(){
    bodyContainer[8].style.display='none';
    bodyContainer[7].style.display='block';

 })

 bodyContainer[7].querySelector(".previousbutton").addEventListener('click',()=>{

    window.location.reload();

 })












 


