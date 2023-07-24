var stateobject={
    states:
    [
        {state:"West Bengal",cities:["Kolkata","Asansol","Siliguri","Howrah"]},
        {state:"Tamil Nadu",cities:["Chennai","Coimbatore","Vellore"]},
        {state:"Gujarat",cities:["Ahmedabad","Surat","Rajkot"]},
        {state:"Kerala",cities:["Trivandrum","Kochi","Kollam"]},
        {state:"Maharashtra",cities:["Mumbai","Pune","Aurangabad","Thane","Nagpur"]},
        {state:"Odisha",cities:["Bhubaneswar","Balasore","Rourkela","Cuttack"]},
        {state:"Punjab",cities:["Amritsar","Ludhiana","Jalandhar","Patiala"]},
        {state:'Telengana',cities:["Hyderabad"]}
    ]
}
window.onload = function(){
    var first = document.getElementById('state')
    var second = document.getElementById('cities')
    second.disabled = true;

    stateobject.states.forEach((value) => {
        first.appendChild(createOption(value.state, value.state));
      });
    
      first.addEventListener("change", function (e) {
        second.disabled = false;
        stateobject.states.forEach((detail, index) => {
          if (detail.state == e.target.value) {
            second.innerHTML = "";
            second.append(createOption("Select City", ""));
            stateobject.states[index].cities.forEach((city) => {
              second.append(createOption(city, city));
            });
          }
        });
      });

      function createOption(displayMember, valueMember) {
        const newOption = document.createElement("option");
        newOption.value = valueMember;
        newOption.text = displayMember;
        return newOption;}
    
};

function clearErrors(){

  errors = document.getElementsByClassName('formerror');
  for(let item of errors)
  {
    item.innerHTML = "";
  }
}
function seterror(id, error){
  //sets error inside tag of id 
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm()
{
  const regval=new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
  var returnval = true;
  clearErrors();

  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms['myForm']["fname"].value;
  if(!isNaN(name)){
    console.log(!isNaN(name));
    seterror("name1","**only alphabets");
    returnval=false;
  }
  if (name==""){
    seterror("name1", "*Length of name cannot be zero!");
    returnval = false;
  }
    
  var lname = document.forms['myForm']["lname"].value;
  if(!isNaN(lname)){
    console.log(!isNaN(lname));
    seterror("name2","**only alphabets");
    returnval=false;
  }
  if (lname==""){
    seterror("name2", "*Length of name cannot be zero!");
    returnval = false;
  }

  var email = document.forms['myForm']["fmail"].value;
  if (email.length>15){
    seterror("email", "*Email length is too long");
    returnval = false;
  }

  var phone = document.forms['myForm']["fmobile"].value;
  if (phone.length != 10){
    seterror("mobile", "*Phone number should be of 10 digits!");
    returnval = false;
  }
  if(isNaN(phone)){
    seterror("mobile", "*only numeric value");
    returnval = false;
  }

  var password = document.forms['myForm']["fpass"].value;
  var result=regval.test(password);
  if (result==false){
    seterror("pass", "*should be minimum 8 characters with atleast one capital,small letter,one number and special characters");
    returnval = false;
  }

  var cpassword = document.forms['myForm']["confirmps"].value;
  if(cpassword==""){
    seterror("cpass", "*Confirm password is empty!");
    returnval = false;
  }
  if (cpassword != password){
    seterror("cpass", "*Password and Confirm password should match!");
    returnval = false;
  }
    
  var pincode = document.forms['myForm']["fpincode"].value;
  if (pincode.length != 6 ){
    seterror("pin", "*Wrong pin code");
    returnval = false;
  }
  if(isNaN(pincode)){
    seterror("pin", "*only numeric value");
    returnval = false;
  }
  return returnval;
}
