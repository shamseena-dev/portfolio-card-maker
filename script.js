 //Define variables for form control 
 const form = document.querySelector(".form1");
const name = document.querySelector(".form-control1");
const email = document.querySelector(".form-control2");
const role = document.querySelector(".form-control3");
const description = document.querySelector(".form-control4");
const linkedIn = document.querySelector(".form-control5");
const phone = document.querySelector(".form-control6");
const place = document.querySelector(".form-control7");
const profilePicture = document.querySelector(".form-control8");
//Define variables for Error messages
const msg1 = document.querySelector(".message1");
const msg2 = document.querySelector(".message2");
const msg3 = document.querySelector(".message3");
const msg4 = document.querySelector(".message4");

//Regular Expression for Email validation
var regEx = /\S+@\S+\.\S+/;
//Regular Expression for Phone number vaildation
var regExPhn = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  

//Define Variable for portfolio card
const ulList = document.querySelector(".list-group");
//Add event Listener to form when clicked on Submit
form.addEventListener('submit',updateDetails);


function updateDetails(e){
//if name input is null or empty
if(name.value == "" || name.value == null){

  msg1.innerHTML = '<p> Please enter a name </p>';
  e.preventDefault(); 
  
}
//if email doesnt match the reg expr pattern
else if(!(regEx.test(email.value))){
     msg1.style.display = 'none';
     msg2.innerHTML = '<p> Please enter a valid email </p>';
     e.preventDefault(); 

}
//if role is empty
else if(role.value == "" || role.value == null){
    msg1.style.display = 'none';
    msg2.style.display = 'none';
    msg3.innerHTML = '<p> Please enter your Role </p>';
     e.preventDefault(); 

}
//if phone num is empty or null or doesnt match the reg expr pattern
else if(phone.value == null || phone.value =="" || regExPhn.test(phone.value) == false){
 
    msg1.style.display = 'none';
    msg2.style.display = 'none';
    msg3.style.display = 'none';
    msg4.innerHTML = '<p> Please enter valid Phone Number </p>';
    e.preventDefault(); 
}

//Else create portfolio card and update the details  
else{

  //Hide all Error messages 
  msg1.style.display = 'none';
  msg2.style.display = 'none';
  msg3.style.display = 'none';
  msg4.style.display = 'none';
  // Update Name
  const li = document.createElement('li');
  console.log(name.value.toUpperCase());
  const nameCaps = name.value.toUpperCase();

  li.appendChild(document.createTextNode(nameCaps));
  li.className = 'list1';
  ulList.appendChild(li);

  //Update Role
  const li2 = document.createElement('li');
  li2.appendChild(document.createTextNode(`Profession : ${role.value}`));
  li2.className = 'list1';
  ulList.appendChild(li2);

  //Update Description of role
  if(description.value != null && description.value !=""){
      const li3 = document.createElement('li');
      li3.appendChild(document.createTextNode(`Description : ${description.value}`));
      li3.className = 'list1';
      ulList.appendChild(li3);
      e.preventDefault(); 
  }
  //Update LinkedIn
  if(linkedIn.value != null && linkedIn.value !=""){
      const li4 = document.createElement('li');
      li4.appendChild(document.createTextNode(`LinkedIn : ${linkedIn.value}`));
      li4.className = 'list1';
      ulList.appendChild(li4);
       e.preventDefault(); 
   }
  
  //Update Email
  const li5 = document.createElement('li');
  li5.appendChild(document.createTextNode(`Email : ${email.value}`));
  li5.className = 'list1';
  ulList.appendChild(li5);

  //Update phn
  const li6 = document.createElement('li');
  li6.appendChild(document.createTextNode(`Phn : ${phone.value}`));
  li6.className = 'list1';
  ulList.appendChild(li6);

  //Update Place
  if(place.value != null && place.value !=""){
      const li7 = document.createElement('li');
      li7.appendChild(document.createTextNode(`Place : ${place.value}`));
      li7.className = 'list1';
      ulList.appendChild(li7);
       e.preventDefault(); 
   }
   //Finally, Clear all input values
    name.value = '';  
    email.value = '';
    role.value = '';
    description.value = '';
    linkedIn.value = '';
    phone.value = '';
    place.value = '';
    profilePicture.value = '';
    e.preventDefault(); 

}
}


//To update profile pic
var openFile = function(file) {
    var input = file.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.querySelector('.card-pic');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };








/*
    name.addEventListener('input', updateName);
    
    email.addEventListener('input', updateEmail);
    role.addEventListener('input', updateRole);
    description.addEventListener('input', updateDescription);
    linkedIn.addEventListener('input', updateLinkedIn);
    phone.addEventListener('input', updatePhone);
    place.addEventListener('input', updatePlace);
    
  

}


function updateName(e){
	cardName.innerHTML =`My Name is ${e.target.value}`;

}
function updateEmail(e){
	cardEmail.innerHTML =`Email : ${e.target.value}`;

}
function updateRole(e){
	cardRole.innerHTML =`Current Role : ${e.target.value}`;

}
function updateDescription(e){
	cardDescription.innerHTML =`${e.target.value}`;

}
function updateLinkedIn(e){
	cardLinkedIn.innerHTML =`LinkedIn : ${e.target.value}`;

}
function updatePhone(e){
	cardPhone.innerHTML =`Phn : ${e.target.value}`;

}
function updatePlace(e){
	cardPlace.innerHTML =`Place : ${e.target.value}`;

}
*/

//To update profile pic
var openFile = function(file) {
    var input = file.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.querySelector('.card-pic');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };

