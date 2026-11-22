:root{
  color-scheme:light;
  --ink:#0a0f16;--muted:#41506b;--line:rgba(10,30,60,.14);
  --bb:#8fd0ff;--bb-soft:rgba(255,255,255,.62);--blue:#1b659f;--black:#070b11;
  --f:"Outfit","Segoe UI",system-ui,sans-serif;
  --mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;
  --rail:4.25rem;--side:14.5rem;
  box-sizing:border-box;
  padding-top:env(safe-area-inset-top,0px);
  padding-bottom:env(safe-area-inset-bottom,0px);
}
html{font-size:100%;-webkit-text-size-adjust:100%;text-size-adjust:100%;scroll-behavior:smooth;scroll-padding-top:1rem}
/* Large screens: the layout scales with the viewport / Telas grandes: o layout acompanha o tamanho da tela */
@media (min-width:1700px){html{font-size:112.5%}}
@media (min-width:2200px){html{font-size:137.5%}}
@media (min-width:3000px){html{font-size:175%}}
@media (min-width:3800px){html{font-size:225%}}
@media (min-width:5000px){html{font-size:300%}}
*,*::before,*::after{box-sizing:inherit}
body{margin:0;background:#d6ebff;color:var(--ink);font:400 1.1rem/1.65 var(--f);overflow-x:hidden;min-width:0}
img{max-width:100%}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--blue);outline-offset:3px;border-radius:0.5rem}

/* Soft blue animated background / Fundo azul suave com movimento leve */
.bg{position:fixed;inset:0;z-index:-1;overflow:hidden;pointer-events:none;background:linear-gradient(160deg,#e6f4ff,#d0e8fc 55%,#bddcf8)}
.bg::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(27,101,159,.22) 1px,transparent 1.5px);background-size:1.75rem 1.75rem;-webkit-mask:radial-gradient(ellipse at 70% 15%,#000,transparent 70%);mask:radial-gradient(ellipse at 70% 15%,#000,transparent 70%)}
.bg i{position:absolute;border-radius:50%;will-change:transform}
.bg i:nth-child(1){width:62vmax;height:62vmax;left:-18vmax;top:-18vmax;background:radial-gradient(circle,rgba(255,255,255,.9),transparent 65%);animation:o1 40s ease-in-out infinite alternate}
.bg i:nth-child(2){width:52vmax;height:52vmax;right:-14vmax;top:22vh;background:radial-gradient(circle,rgba(70,160,235,.38),transparent 65%);animation:o2 48s ease-in-out infinite alternate}
.bg i:nth-child(3){width:46vmax;height:46vmax;left:22vw;bottom:-20vmax;background:radial-gradient(circle,rgba(143,208,255,.7),transparent 65%);animation:o3 56s ease-in-out infinite alternate}
@keyframes o1{to{transform:translate3d(9vmax,7vmax,0) scale(1.12)}}
@keyframes o2{to{transform:translate3d(-8vmax,-6vmax,0) scale(1.1)}}
@keyframes o3{to{transform:translate3d(7vmax,-6vmax,0) scale(1.15)}}

/* Fixed side navigation / Menu lateral fixo */
.rail{position:fixed;left:0;top:0;bottom:0;z-index:50;width:calc(var(--rail) + env(safe-area-inset-left,0px));background:var(--black);color:#fff;border-right:1px solid rgba(255,255,255,.08);
  display:flex;flex-direction:column;align-items:center;overflow-y:auto;scrollbar-width:none;
  padding:calc(env(safe-area-inset-top,0px) + 1rem) 0.375rem calc(env(safe-area-inset-bottom,0px) + 1rem) calc(env(safe-area-inset-left,0px) + 0.375rem)}
.rail::-webkit-scrollbar{display:none}
.brand{display:flex;align-items:center;gap:0.625rem;font:600 1.2rem var(--f);letter-spacing:-.01em}
.brand i{width:1.625rem;height:1.625rem;border-radius:0.5rem;background:linear-gradient(135deg,#fff,var(--bb));flex:none}
.brand b{color:var(--bb);font-weight:600}
.brand span{display:none}
.rail nav{display:flex;flex-direction:column;gap:0.375rem;margin-top:1.625rem;width:100%}
.rail nav a{position:relative;display:flex;flex-direction:column;align-items:center;gap:0.25rem;padding:0.625rem 2px;border-radius:0.75rem;font-size:.68rem;line-height:1.2;text-align:center;color:rgba(255,255,255,.58);transition:color .2s,background .2s}
.rail nav a:hover{color:#fff;background:rgba(255,255,255,.06)}
.rail nav a.on{color:#fff;background:rgba(143,208,255,.14)}
.rail nav a::before{content:"";position:absolute;left:-6px;top:50%;width:3px;height:0;border-radius:3px;background:var(--bb);box-shadow:0 0 0.625rem var(--bb);transform:translateY(-50%);transition:height .25s}
.rail nav a.on::before{height:1.375rem}
.ic{width:1.25rem;height:1.25rem;flex:none}
.side-end{display:none;margin-top:auto;gap:0.625rem;font-size:.9rem;color:rgba(255,255,255,.55)}
.side-end a:hover{color:var(--bb)}
.live{display:flex;align-items:center;gap:0.5rem;color:var(--bb)}
.live::before{content:"";width:0.4375rem;height:0.4375rem;border-radius:50%;background:var(--bb);box-shadow:0 0 0.625rem var(--bb)}
main{margin-left:calc(var(--rail) + env(safe-area-inset-left,0px))}
.wrap{width:min(70rem,100% - clamp(1.75rem,6vw,5rem));margin-inline:auto}
@media (min-width:1024px){
  .rail{width:calc(var(--side) + env(safe-area-inset-left,0px));align-items:stretch;padding:calc(env(safe-area-inset-top,0px) + 1.875rem) 1.25rem calc(env(safe-area-inset-bottom,0px) + 1.625rem) calc(env(safe-area-inset-left,0px) + 1.25rem)}
  .brand{padding:0 0.5rem}.brand span{display:inline}
  .rail nav{gap:0.25rem;margin-top:3.5rem}
  .rail nav a{flex-direction:row;gap:0.75rem;padding:0.6875rem 1rem;font-size:1rem;text-align:left}
  .rail nav a::before{left:0}
  .side-end{display:grid;padding:0 0.5rem}
  main{margin-left:calc(var(--side) + env(safe-area-inset-left,0px))}
}
@media (max-width:380px){:root{--rail:3.625rem}.rail nav a{font-size:.62rem}}
@media (max-height:520px){.rail nav{margin-top:0.875rem;gap:2px}.rail nav a{padding:0.375rem 2px}}

/* Home section and introduction / Seção inicial e apresentação */
.hero{position:relative;overflow:hidden;min-height:100vh;min-height:100svh;display:flex;align-items:center}
#wave{position:absolute;left:0;right:0;bottom:0;width:100%;height:50%;pointer-events:none}
.hero .wrap{position:relative;z-index:2;padding:clamp(2rem,5vw,3.5rem) 0}
.g{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:clamp(1.75rem,4vw,3.5rem);align-items:center}
.g>*{min-width:0}
@media (max-width:1180px){.g{grid-template-columns:minmax(0,1fr)}}
.live2{display:inline-flex;align-items:center;gap:0.5rem;padding:0.3125rem 0.875rem;border-radius:62.4375rem;background:rgba(255,255,255,.75);border:1px solid var(--line);font-size:.88rem;color:var(--muted)}
.live2::before{content:"";width:0.4375rem;height:0.4375rem;border-radius:50%;background:#1fae62;box-shadow:0 0 0 0.25rem rgba(31,174,98,.2)}
h1{margin:1.25rem 0 0;font:600 clamp(2.4rem,5.2vw + .5rem,5.4rem)/1.02 var(--f);letter-spacing:-.045em;overflow-wrap:break-word;background:linear-gradient(100deg,var(--ink) 35%,var(--blue));-webkit-background-clip:text;background-clip:text;color:transparent}
.role{margin:0.875rem 0 0;font:300 clamp(1.25rem,2.4vw + .4rem,2rem) var(--f);color:var(--blue)}
.lead{max-width:30rem;margin:1rem 0 0;color:var(--muted);font-size:clamp(1rem,1vw + .8rem,1.15rem)}
.btns{display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:1.875rem}
.btn{padding:0.8125rem 1.625rem;border-radius:0.75rem;font-weight:500;border:1px solid rgba(10,30,60,.22);background:rgba(255,255,255,.8);transition:transform .2s,box-shadow .2s}
.btn:hover{transform:translateY(-2px);box-shadow:0 0.75rem 1.625rem rgba(27,101,159,.22)}
.btn.main{background:var(--ink);border-color:var(--ink);color:#fff}

/* Code example card / Cartão de exemplo de código */
.dbg{container-type:inline-size;width:100%;max-width:100%;border-radius:1.375rem;background:var(--black);color:#e8f1fb;box-shadow:0 1.875rem 4.375rem rgba(10,30,60,.32),0 0 0 1px rgba(143,208,255,.2);overflow:hidden}
.dbg .bar{display:flex;align-items:center;gap:0.375rem;padding:0.875rem 1.125rem;border-bottom:1px solid rgba(255,255,255,.08)}
.dbg .bar i{width:0.5625rem;height:0.5625rem;border-radius:50%;background:rgba(255,255,255,.18);flex:none}.dbg .bar i:first-child{background:var(--bb)}
.dbg .bar small{margin-left:auto;font:.78rem var(--mono);color:rgba(255,255,255,.45)}
.dbg .steps{display:flex;gap:0.375rem;padding:0.875rem 1rem 0;flex-wrap:wrap}
.dbg .steps span{padding:0.25rem 0.75rem;border-radius:62.4375rem;border:1px solid rgba(255,255,255,.16);font-size:clamp(.7rem,3.4cqi,.84rem);color:rgba(255,255,255,.5);transition:all .4s}
.dbg .steps span.on{background:var(--bb);border-color:var(--bb);color:var(--black);font-weight:500}
.dbg .steps span.ok{border-color:rgba(143,208,255,.5);color:var(--bb)}
.dbg pre{margin:0;padding:0.875rem 1rem;font:clamp(.66rem,3.6cqi,.92rem)/1.85 var(--mono);color:#cfe0f2;white-space:pre-wrap;overflow-wrap:anywhere}
.dbg pre code{display:block}
.dbg .ln{display:block;padding:0 0.5rem;margin:0 -8px;border-radius:0.375rem;transition:background .4s}
.dbg .ln.bad{background:rgba(255,99,99,.18)}.dbg .ln.good{background:rgba(70,210,140,.18)}
.dbg .k{color:var(--bb)}.dbg .s{color:#ffd29a}
.dbg .msg{margin:0 1rem 1rem;padding:0.6875rem 0.875rem;border-radius:0.75rem;background:rgba(255,255,255,.06);border:1px solid rgba(143,208,255,.22);font-size:clamp(.78rem,3.4cqi,.95rem);line-height:1.5;color:rgba(255,255,255,.88);min-height:4.2em;overflow-wrap:anywhere}

/* Quick information cards / Cartões com informações rápidas */
.facts{margin:clamp(1.75rem,4vw,3rem) 0 0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(10.5rem,1fr));gap:1px;background:var(--line);border:1px solid var(--line);border-radius:1.25rem;overflow:hidden}
.facts li{padding:1rem 1.375rem;background:rgba(255,255,255,.62);backdrop-filter:blur(0.75rem);-webkit-backdrop-filter:blur(0.75rem);min-width:0}
.facts small{display:block;color:var(--blue);font-size:.84rem}
.facts span{display:block;font-size:1rem;line-height:1.4;overflow-wrap:anywhere}

/* About and project sections / Seções sobre mim e projetos */
section.sec{padding:clamp(3.5rem,9vw,6.875rem) 0 clamp(1rem,3vw,1.875rem)}
h2.t{margin:0;font:300 clamp(1.7rem,2.6vw + .8rem,2.5rem)/1.15 var(--f);letter-spacing:-.03em;color:var(--blue)}
.about{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:clamp(1rem,4vw,3rem)}
.about p{margin:0;max-width:40rem;font-size:clamp(1.15rem,1.4vw + .8rem,1.45rem);line-height:1.5;font-weight:300}
.row{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:clamp(1.5rem,4.5vw,3.5rem);align-items:center;padding:clamp(2rem,5vw,3.5rem) 0;border-top:1px solid var(--line)}
.row>*{min-width:0}
.row:nth-child(even) .shot{order:2}
.shot{aspect-ratio:16/10;border-radius:1.125rem;overflow:hidden;border:1px solid var(--line);background:var(--black);box-shadow:0 1.375rem 3.125rem rgba(10,30,60,.2)}
.shot img{width:100%;height:100%;object-fit:cover;object-position:top;display:block;transition:transform .6s cubic-bezier(.2,.7,.2,1)}
.row:hover .shot img{transform:scale(1.04)}
.n{font:400 .95rem var(--f);color:var(--blue)}
.row h3{margin:0.375rem 0 0.625rem;font:500 clamp(1.4rem,1.6vw + .9rem,2.2rem)/1.15 var(--f);letter-spacing:-.02em}
.row p{margin:0;color:var(--muted);max-width:30rem}
.tags{display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:1.125rem}
.tags span{padding:0.25rem 0.75rem;border-radius:62.4375rem;border:1px solid rgba(10,30,60,.25);font-size:.86rem}
.tags .ac{background:rgba(255,255,255,.85);border-color:rgba(255,255,255,.85);color:#0c3d66;font-weight:500}
.feat{margin-top:1.25rem;border-radius:1.875rem;background:var(--black);color:#fff;padding:clamp(1.5rem,4vw,2.75rem);border:0;position:relative;overflow:hidden}
.feat::before{content:"";position:absolute;right:-8vmax;top:-10vmax;width:30vmax;height:30vmax;border-radius:50%;background:radial-gradient(circle,rgba(143,208,255,.28),transparent 65%)}
.feat>*{position:relative}
.feat .n{color:var(--bb)}.feat p{color:rgba(255,255,255,.74)}
.feat .tags span{border-color:rgba(143,208,255,.35);color:#fff}.feat .tags .ac{background:var(--bb);border-color:var(--bb);color:var(--black)}
.win{border-radius:1.125rem;background:#0e141c;border:1px solid rgba(143,208,255,.22);overflow:hidden}
.wd{display:flex;gap:0.375rem;padding:0.6875rem 0.875rem;border-bottom:1px solid rgba(255,255,255,.08)}
.wd i{width:0.5rem;height:0.5rem;border-radius:50%;background:rgba(255,255,255,.2)}.wd i:first-child{background:var(--bb)}
.chat{display:grid;grid-template-columns:minmax(0,1fr) 4.875rem;gap:1rem;align-items:center;padding:clamp(0.875rem,3vw,1.375rem);font-size:.88rem}
.msgs{display:grid;gap:0.625rem;min-width:0}.msgs p{padding:0.5625rem 0.875rem;border-radius:0.875rem;max-width:92%;overflow-wrap:anywhere}
.u{justify-self:end;background:var(--bb);color:var(--black)}
.a{background:rgba(255,255,255,.07);border:1px solid rgba(143,208,255,.25)}
.inp{padding:0.5625rem 0.875rem;border-radius:0.75rem;border:1px solid rgba(255,255,255,.14);color:rgba(255,255,255,.5);overflow-wrap:anywhere}
.orb{width:4.875rem;height:4.875rem;border-radius:50%;background:radial-gradient(circle at 32% 30%,#fff,var(--bb) 40%,#2a6fa8 85%);box-shadow:0 0 2.5rem rgba(143,208,255,.55);justify-self:center}

/* Contact section and footer / Seção de contato e rodapé */
.cta{padding:clamp(4rem,9vw,6.875rem) 0 2.75rem;background:var(--black);color:#fff;position:relative;overflow:hidden;margin-top:clamp(2.5rem,6vw,5rem)}
.cta::before{content:"";position:absolute;left:-10vmax;bottom:-18vmax;width:44vmax;height:44vmax;border-radius:50%;background:radial-gradient(circle,rgba(143,208,255,.16),transparent 65%)}
.cta .wrap{position:relative}
.cta h2.t{color:var(--bb)}
.big{margin:0.875rem 0 0;font:600 clamp(2rem,5vw,3.6rem)/1.05 var(--f);letter-spacing:-.04em}
.links{margin-top:2.25rem;border-top:1px solid rgba(255,255,255,.12)}
.links a{display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.375rem 1rem;padding:1.375rem 0.5rem;border-bottom:1px solid rgba(255,255,255,.12);transition:background .2s,padding .2s,color .2s}
.links a:hover{background:rgba(143,208,255,.1);padding-inline:1.25rem;color:var(--bb)}
.links span{color:rgba(255,255,255,.55);overflow-wrap:anywhere}
footer{padding:3.5rem 0 0;text-align:center;color:rgba(255,255,255,.5);font-size:.95rem}

@keyframes up{from{opacity:0;transform:translateY(1rem)}to{opacity:1;transform:none}}
.hero .g>div:first-child>*,.dbg{opacity:0;animation:up .8s cubic-bezier(.2,.7,.2,1) forwards}
.hero .g>div:first-child>:nth-child(2){animation-delay:.08s}.hero .g>div:first-child>:nth-child(3){animation-delay:.16s}.hero .g>div:first-child>:nth-child(4){animation-delay:.24s}.hero .g>div:first-child>:nth-child(5){animation-delay:.32s}
.dbg{animation-delay:.4s}
.js .rv{opacity:0;transform:translateY(1.125rem);transition:opacity .7s,transform .7s cubic-bezier(.2,.7,.2,1)}
.js .rv.vis{opacity:1;transform:none}

@media (max-width:1000px){.about,.row{grid-template-columns:minmax(0,1fr)}.row:nth-child(even) .shot{order:0}}
@media (max-width:480px){.chat{grid-template-columns:minmax(0,1fr)}.orb{display:none}.btn{flex:1 1 100%;text-align:center}.links a{padding-inline:2px}}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}.bg i{animation:none}
  .hero .g>div:first-child>*,.dbg{opacity:1;animation:none}
  .js .rv{opacity:1;transform:none;transition:none}.shot img,.btn,.links a{transition:none}
}

/* Semantic elements use the same layout as the original wrappers.
   Elementos semânticos mantêm o mesmo layout dos contêineres anteriores. */
.intro,
.project-info {
  min-width: 0;
}

.projects-title {
  margin-bottom: 36px;
}

.project-info .tags {
  padding: 0;
  list-style: none;
}

.project-info .tags li {
  display: inline-flex;
  align-items: center;
}

.page-footer p {
  margin: 0;
}

/* Keep the project preview image aligned with its frame.
   Mantém a imagem do projeto alinhada ao espaço reservado. */
.shot {
  margin: 0;
}

/* Make sure paragraphs inside the chat preview keep the original appearance.
   Mantém a aparência original dos parágrafos na prévia do chat. */
.msgs p {
  margin: 0;
}
