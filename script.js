function login_form(obj) {
  var adr=obj.log.value;
  var par=obj.pas.value;
  var adr_pattern=/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
  var par_pattern=/[0-9a-z]+/i;
  var prov=adr_pattern.test(adr);
  var prov1=par_pattern.test(par);
  
  if (adr.length > 3 && adr.length < 15 && par.length >=8){

  }
  else{
    alert("Wrong login or password. Please, try again!");
  }
  
  
  if (prov==true && prov1==true) {
    document.location.href = "index.html";
  }
  else {
    alert("Wrong login or password. Please, try again!");
  }
}
