const name=document.getElementById("name");
const  email=document.getElementById("email");
const  subject=document.getElementById("subject");
const  message=document.getElementById("message");
const  form=document.getElementById("submit-form");
const errorElement = document.getElementById('error')
form.addEventListener('submit',(e)=>{
  let message=[]
  if(name.value=== '' || name.value==null){
    message.push('Name is Required')
  }
  if(message.length>0){
    e.preventDefault()
    errorElement.innerText = message.join(',')
  }
  if(email.value=== '' || email.value==null){
    message.push('email is Required')
  }
  if(message.length>0){
    e.preventDefault()
    errorElement.innerText = message.join(',')
  }
  if(subject.value=== '' || subject.value==null){
    message.push('Subject is Required')
  }
  if(message.length>0){
    e.preventDefault()
    errorElement.innerText = message.join(',')
  }
  if(message.value=== '' || message.value==null){
    message.push('Message is Required')
  }
  if(message.length>0){
    e.preventDefault()
    errorElement.innerText = message.join(',')
  }
  // if(password.value.length<=6){
  //   message.push('password must be longer than 6 characters')
  // }
  // if(password.value.length>=20){
  //   message.push('password must be longer than 20 characters')
  // }
  
  
}
)


// var nameError=document.getElementById('name-error');
// var emailError=document.getElementById('email-error');
// var subjectError=document.getElementById('subject-error');
// var messageError=document.getElementById('message-error');
// var submitError=document.getElementById('submit-error');

// function validateName(){
//         var name=document.getElementById('name').Value; 
//         if(name.length==0){
//           nameError.innerHTML='Name is required';
//           return false;
//         }  
//         nameError.innerHTML='Valid';                                 
// return true;
// }
// function validateEmail(){
//   var email = document.getElementById('email').Value;
//   if(email.length==0){
//     emailError.innerHTML='Email is required';
//     return false;
//   }
//   emailError.innerHTML='email is required';
//   return true;
// }


$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxTibzsksq6-vt96rBQEe5sl9hm9j8vvC3D8SZsEpEptrpOtmBaeGRrTknc5i0CU18M/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
           
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})