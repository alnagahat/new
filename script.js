console.log("Hello aly");
function  switchChange(){
    const greating = document.getElementById('greeting');
    var gottenTxt = greating.textContent;
    greating.innerHTML = "YES!!!!" + "<br>" + gottenTxt + "<br>" + "Hello Aly";
}
function myFunc(){
    const greating = document.getElementById('nationality');
    var gottenTxt = greating.textContent;
    greating.innerHTML = "YES!!!!" + "<br>" + gottenTxt + "<br>" + "Hello Aly";
    
}
function milNumShow(){
    const PMNinput = document.getElementById('PMN');
    PMNinput.style.visibility = "visible";
}
function milNumHide(){
    const PMNinput = document.getElementById('PMN');
    PMNinput.value = "";
    PMNinput.style.visibility = "hidden";
}
const myForm = document.forms[0];
myForm.onsubmit = function(){
    // stop our form submission from refreshing the page
    event.preventDefault();
    const myReport = document.getElementById('Report');
    // PtName PtID PtAge PtMilitarNumber PtNationality PtTel Gender Nationality
  const ePtName = myForm.elements["PtName"].value;
  const ePtID = myForm.elements["PtID"].value;
  const ePtAge = myForm.elements["PtAge"].value;
  const ePtMilitarNumber = myForm.elements["PtMilitarNumber"].value;
  const ePtNationality = myForm.elements["PtNationality"].value;
  const ePtTel = myForm.elements["PtTel"].value;
  const eGender = myForm.elements["Gender"].value;
  const eQNationality = myForm.elements["QNationality"].value;
  
  myReport.innerHTML = "Our patient is called " + ePtName + ". The patient is " + ePtAge + "years old. The QID: " + ePtID + ". Patients nationality is " + ePtNationality+". (" + eQNationality + ") Gender is: " + eGender+". And contact number is: " + ePtTel+"." + "The military number is: " + ePtMilitarNumber;

}