"use strict";
// Decorative robotics-inspired animation: kinematic linkages and data flow.
// All geometry is illustrative, not a visualisation of a real robot.
(() => {
  const canvas=document.getElementById("robot-background");
  const shell=canvas?.parentElement;
  const ctx=canvas?.getContext("2d");
  if(!ctx || !shell)return;
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
  let w=0,h=0,dpr=1,frame=0,visible=true,pointer={x:.5,y:.5};
  const TAU=Math.PI*2;
  function resize(){
    w=shell.clientWidth; h=shell.clientHeight;
    dpr=Math.min(window.devicePixelRatio||1,1.7);
    canvas.width=Math.floor(w*dpr); canvas.height=Math.floor(h*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    if(reduced.matches)draw(0);
  }
  function line(a,b,color,width=1){
    ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
    ctx.strokeStyle=color; ctx.lineWidth=width; ctx.stroke();
  }
  function dot(x,y,r,fill,stroke){
    ctx.beginPath(); ctx.arc(x,y,r,0,TAU);
    if(fill){ctx.fillStyle=fill;ctx.fill();}
    if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1;ctx.stroke();}
  }
  function draw(ms){
    const t=ms*.00038, scale=Math.min(w,h)/660;
    ctx.clearRect(0,0,w,h);
    const glow=ctx.createRadialGradient(w*.82,h*.35,10,w*.82,h*.35,Math.max(w*.72,h*.85));
    glow.addColorStop(0,"#163d43");glow.addColorStop(1,"#091a22");
    ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
    const step=54;
    ctx.strokeStyle="rgba(133,197,184,.075)";ctx.lineWidth=1;
    ctx.beginPath();
    for(let x=0;x<w;x+=step){ctx.moveTo(x,0);ctx.lineTo(x,h);}
    for(let y=0;y<h;y+=step){ctx.moveTo(0,y);ctx.lineTo(w,y);}
    ctx.stroke();
    const points=[];
    for(let i=0;i<27;i++){
      const x=(i*193.43%w)+Math.sin(t*.9+i*2.1)*17;
      const y=(i*113.21%h)+Math.cos(t*.65+i)*21;
      points.push({x,y});
      dot(x,y,2+(i%3)*.35,"rgba(118,226,195,.32)");
    }
    for(let i=0;i<points.length;i++){
      for(let j=i+1;j<points.length;j++){
        const a=points[i],b=points[j],distance=Math.hypot(a.x-b.x,a.y-b.y);
        if(distance<235){
          line(a,b,"rgba(109,208,181,"+((1-distance/235)*.23)+")");
          if((i+j)%5===0){
            const u=(t*.34+(i+j)*.113)%1;
            dot(a.x+(b.x-a.x)*u,a.y+(b.y-a.y)*u,2.1,"#6cd5b4");
          }
        }
      }
    }
    // Animated robotic linkage in the background; not tied to real telemetry.
    const base={x:w*.73+(pointer.x-.5)*24,y:h*.87};
    const lengths=[Math.max(85,155*scale),Math.max(75,145*scale),Math.max(50,100*scale)];
    const angles=[-1.32+Math.sin(t)*.38,-.66+Math.cos(t*.8)*.62,-1.5+Math.sin(t*1.1)*.52];
    let previous=base;
    dot(base.x,base.y,25*scale,"rgba(91,194,171,.045)","rgba(132,216,195,.24)");
    for(let i=0;i<3;i++){
      const next={x:previous.x+Math.cos(angles[i])*lengths[i], y:previous.y+Math.sin(angles[i])*lengths[i]};
      line(previous,next,"rgba(115,212,185,.11)",18*scale);
      line(previous,next,"rgba(115,212,185,.42)",1.3);
      dot(next.x,next.y,12*scale,"#113239","rgba(125,218,192,.45)");
      dot(next.x,next.y,3,"rgba(125,218,192,.7)");
      previous=next;
    }
    for(let i=0;i<3;i++){
      const r=(20+((t*55+i*35)%105))*scale;
      dot(previous.x,previous.y,r,null,"rgba(125,218,192,"+Math.max(0,.2-r/500)+")");
    }
    // Sweeping lidar-like line across the technical grid.
    const scan=(Math.sin(t*.55)+1)*h/2;
    const gradient=ctx.createLinearGradient(0,0,w,0);
    gradient.addColorStop(0,"rgba(107,211,184,0)");
    gradient.addColorStop(.5,"rgba(107,211,184,.16)");
    gradient.addColorStop(1,"rgba(107,211,184,0)");
    ctx.fillStyle=gradient;ctx.fillRect(0,scan,w,1);
  }
  function animate(ms){frame=0;if(!visible||document.hidden||reduced.matches)return;draw(ms);frame=requestAnimationFrame(animate);}
  function sync(){if(frame)cancelAnimationFrame(frame);frame=0;if(visible&&!document.hidden&&!reduced.matches)frame=requestAnimationFrame(animate);else draw(0);}
  shell.addEventListener("pointermove",e=>{
    const bounds=shell.getBoundingClientRect();pointer.x=(e.clientX-bounds.left)/bounds.width;pointer.y=(e.clientY-bounds.top)/bounds.height;
  },{passive:true});
  if("ResizeObserver"in window)new ResizeObserver(resize).observe(shell);else window.addEventListener("resize",resize,{passive:true});
  if("IntersectionObserver"in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();}).observe(shell);
  document.addEventListener("visibilitychange",sync);
  reduced.addEventListener?.("change",sync);
  resize();sync();
})();
