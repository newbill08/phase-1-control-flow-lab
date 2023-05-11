function scuberGreetingForFeet(someNumber){
  // Write your code here!
  if(someNumber < 400){
  return 'This one is on me!'
  } else if (someNumber > 401 && someNumber < 2000){
    return 'That will be twenty bucks.'
  }else if(someNumber > 2000 && someNumber < 2500){
   return 'I will gladly take your thirty bucks.'
  }
  else{
    return 'No can do.'
   }
}

function ternaryCheckCity(dataIn){
  // Write your code here!
   // Write your code here!
   return dataIn === 'Pittsburgh' ? 'No go.' 
   : 'Ok, sounds good.'
}

function switchOnCharmFromTip(argument){
  // Write your code here!
  switch(argument){
      case 'generous':
          return 'Thank you so much.'
      case 'not as generous':
              return 'Thank you.'
      default:
      return 'Bye.'
  }
}

