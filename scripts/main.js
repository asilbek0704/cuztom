const $=function(e){return Array.isArray(e)?document.querySelectorAll(e):document.querySelector(e)},preview=$([".products__item-preview"]);preview.forEach((e=>{e.querySelectorAll("label").forEach((r=>{r.addEventListener("click",(()=>{let t=r.querySelector("img");e.parentNode.querySelector(".products__item-pic").setAttribute("src",t.getAttribute("src"))}))}))}));
//# sourceMappingURL=main.js.map
