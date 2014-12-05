var mrtgApp = {};

mrtgApp.init = function(){
  
  $('#mtg-calc').on('click', function(){
    mrtgApp.amt = $('#mtg-amt').val();
    mrtgApp.intrst = ($('#mtg-int').val())/100;
    mrtgApp.calc();
  });
};

mrtgApp.calc = function(){
  console.log(mrtgApp.amt);
  console.log(mrtgApp.intrst);
};

$(function(){
  mrtgApp.init();
});