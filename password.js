// var myArgs = process.argv.slice(2).toString();
var myArgs = "password";

// console.log(obfuscated(myArgs));

function obfuscate(password){
  var tempstr = "";
  for(var x = 0; x < password.length; x++){
    if (password[x] == "a"){
      tempstr += "4";
    }
    else if (password[x] == "e"){
      tempstr += "3";
    }
    else if (password[x] == "o"){
      tempstr += "0";
    }
    else if (password[x] == "l"){
      tempstr += "1";
    }
    else
      tempstr += password[x];
  }
  return tempstr;
}

console.log(obfuscate(myArgs));


