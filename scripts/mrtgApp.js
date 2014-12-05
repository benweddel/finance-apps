var mrtgApp = {};

mrtgApp.init = function(){
  
  $('#mtg-calc').on('click', function(){
    mrtgApp.calc();
  });
};

mrtgApp.calc = function(){
  mrtgApp.amt = $('#mtg-amt').val().replace(/[^0-9.]/g,'');
  mrtgApp.intrst = $('#mtg-int').val().replace(/[^0-9.]/g,'');
  mrtgApp.intrst = mrtgApp.intrst / (100 * 12);
  mrtgApp.period = $('#mtg-period').val().replace(/[^0-9.]/g,'');

  mrtgApp.pmtF = mrtgApp.amt * (mrtgApp.intrst*(Math.pow((1+mrtgApp.intrst),(mrtgApp.period * 12)))) / (Math.pow(1 + mrtgApp.intrst, mrtgApp.period * 12) - 1)

  mrtgApp.pmt = Math.round(mrtgApp.pmtF * 100) / 100;
  
  $('#mtg-result').text('Your monthly mortgage payment is '+'$'+mrtgApp.pmt);
  console.log(mrtgApp.pmt);

};

$(function(){
  mrtgApp.init();
});