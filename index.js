function scuberGreetingForFeet(isfeet){
  // Write your code here!
if (isfeet <=400) {
  return "This one is on me!"
}
  else if (isfeet>400 && isfeet<=2000){
    return 'That will be twenty bucks.'
  }
  else if (isfeet>2000 && isfeet<=2500){
    return  'I will gladly take your thirty bucks.'
  }
  else{
    return "No can do."
  }
}
function ternaryCheckCity(checkcity){
  // Write your code here!
if (checkcity==="NYC") {
  return "Ok, sounds good."
}
else {
  return "No go."
}
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip==="generous") {
    return "Thank you so much."
  }
  else if(tip==="not as generous"){
    return "Thank you."
  }
  else{
    return "Bye."
  }
}