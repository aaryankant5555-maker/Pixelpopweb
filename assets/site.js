// Mobile menu + footer year for the inner pages
(function(){
  var nav=document.querySelector('.nav'),b=document.querySelector('.burger');
  if(nav&&b){
    var set=function(o){nav.classList.toggle('open',o);b.setAttribute('aria-expanded',String(o));b.setAttribute('aria-label',o?'Close menu':'Open menu');};
    b.addEventListener('click',function(){set(!nav.classList.contains('open'));});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){set(false);b.focus();}});
    document.querySelectorAll('.m-menu a').forEach(function(a){a.addEventListener('click',function(){set(false);});});
  }
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
