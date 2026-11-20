(function(){
  var still=matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* onda de partículas (escala junto com a tela) */
  var cv=document.getElementById('wave'),cx=cv.getContext('2d'),W=0,H=0,t=1,u=1,off=[];
  for(var i=0;i<4000;i++)off.push(Math.random()*2-1);
  function size(){var r=cv.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);u=(parseFloat(getComputedStyle(document.documentElement).fontSize)||16)/16;
    W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);draw()}
  function draw(){
    cx.clearRect(0,0,W,H);var n=0;
    for(var x=0;x<W;x+=7*u){
      var k=x/W,base=H*.6+Math.sin(x/u*.01+t)*H*.2+Math.sin(x/u*.026-t*1.3)*H*.07;
      for(var j=0;j<13;j++){
        var o=off[n++%4000],a=.14+.55*(1-Math.abs(o)),
            r=Math.round(42-32*k),g=Math.round(134-119*k),b=Math.round(207-185*k);
        cx.fillStyle='rgba('+r+','+g+','+b+','+a+')';
        var s=(1+(1-Math.abs(o))*1.1)*u;cx.fillRect(x,base+o*34*u,s,s);
      }
    }
  }
  function loop(){t+=.012;draw();requestAnimationFrame(loop)}
  size();addEventListener('resize',size);if(!still)requestAnimationFrame(loop);

  /* menu: seção ativa */
  var links=[].slice.call(document.querySelectorAll('.rail nav a'));
  var spy=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})})
  },{rootMargin:'-40% 0px -55% 0px'});
  links.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(s)spy.observe(s)});

  /* identificar, diagnosticar, corrigir */
  var L=document.getElementById('L'),msg=document.getElementById('msg'),st=[0,1,2].map(function(i){return document.getElementById('s'+i)});
  var bad='<span class="k">  if</span> (usuario = <span class="k">null</span>) {',good='<span class="k">  if</span> (usuario === <span class="k">null</span>) {';
  var texts=['Identificar: o login falha para todos os usuários.','Diagnosticar: o código usa = (atribuição) em vez de === (comparação).','Corrigir: comparação ajustada, teste refeito e problema resolvido.'];
  function show(i){L.innerHTML=i<2?bad:good;L.className='ln '+(i<2?'bad':'good');msg.textContent=texts[i];st.forEach(function(s,j){s.className=j===i?'on':(j<i?'ok':'')})}
  var cur=0;show(still?2:0);
  if(!still)setInterval(function(){cur=(cur+1)%3;show(cur)},3200);

  /* aparecer ao rolar */
  var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');rv.unobserve(e.target)}})},{threshold:.1});
  [].forEach.call(document.querySelectorAll('.rv'),function(el){rv.observe(el)});
})();