
  function file(){
    if (fan==1&&sfi==1&&poli==0)
    {
       sw.style.display = "block";
    }
    else{
      sw.style.display= "none";
    }
    if (fan==1&&sfi==1&&poli==0)
    {
      wh40k.style.display= "block";
    }
    else{
      whfb.style.display="none";
    }
    if (fan==0&&sfi==1&&poli==1 ){
      ex.style.display ="block";
    }
    else
  {
    ex.style.display="none";
  }
  }
  function Experimentalfilter() {
    run=1
    while(run==1){
      var sci = document.getElementById("sci");
      var fant = document.getElementById("fant");
      var pol = document.getElementById("pol");

      var sw=document.getElementById("sw");
      var wh40k=document.getElementById("Wh40k");
      var whfb=document.getElementById("Whfb");
      var ex=document.getElementById("ex")
      var sfi,fan,poli;
      sfi=0
      fan=0
      poli=0
      if (sci.checked == true){
        sfi=sfi+1;
      }
      if (fant.checked==true){
        fan=fan+1;
      }
      if (poli.checked == true){
        poli=poli+1;
      }
      var nsci = document.getElementById("Nsci");
      var nfant = document.getElementById("Nwh40k");
      var npol = document.getElementById("Npol");
      if (nsci.checked == true){
        sfi=sfi-1;
      }
      if (nfant.checked==true){
        fan=fan-1;
      }
      if (npoli.checjed == true){
        poli=poli-1;
      }

    file();

    }

    }

window.readyHandlers = [];
window.ready = function ready(handler) {
  window.readyHandlers.push(handler);
  handleState();
};

window.handleState = function handleState () {
  if (['interactive', 'complete'].indexOf(document.readyState) > -1) {
    while(window.readyHandlers.length > 0) {
      (window.readyHandlers.shift())();
    }
  }
};

document.onreadystatechange = window.handleState;
ready(function () {
Experimentalfilter();




});
