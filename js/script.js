
```text
js/script.js
```

```javascript
/* LOADER */

window.addEventListener("load",()=>{

  document.querySelector(".loader").style.display="none";

});

/* PARTICLES */

const particles=document.querySelector(".particles");

for(let i=0;i<50;i++){

  let particle=document.createElement("div");

  particle.style.position="absolute";
  particle.style.width="3px";
  particle.style.height="3px";
  particle.style.background="#D4AF37";
  particle.style.borderRadius="50%";

  particle.style.left=Math.random()*100+"vw";
  particle.style.top=Math.random()*100+"vh";

  particle.style.opacity=Math.random();

  particles.appendChild(particle);

}

/* CART */

let cart=0;

document.querySelectorAll(".add-cart").forEach(button=>{

  button.addEventListener("click",()=>{

    cart++;

    document.querySelector(".cart").innerHTML=
    `<i class="fa-solid fa-bag-shopping"></i> ${cart}`;

  });

});
```
