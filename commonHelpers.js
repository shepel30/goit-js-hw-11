import{S as f,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(o){const i=`https://pixabay.com/api/?${new URLSearchParams({key:"43104791-fccc42375971f64c47e678deb",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(i).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const h=document.querySelector(".gallery"),d=new f(".gallery a",{captionsData:"alt"});function g(o){const r=o.map(({largeImageURL:i,webformatURL:s,tags:e,likes:t,views:n,comments:u,downloads:p})=>`<li class="photos-list-item">
        <a class="photos-list-link" href="${i}">
        <img class="photo" src="${s}" alt="${e}"/>
        </a>
        <ul class="photo-information-container">
        <li class="item-photo-information-container"><p><span class="accent">Likes</span></br>${t}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Views</span></br>${n}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Comments</span></br>${u}</p></li>
        <li class="item-photo-information-container"><p><span class="accent">Downloads</span></br>${p}</p></li>
        </ul>
        </li>`).join("");h.insertAdjacentHTML("beforeend",r),d.refresh()}let c;const y=document.querySelector(".gallery"),L=document.querySelector("form"),l=document.querySelector(".loader");function b(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}L.addEventListener("submit",P);function P(o){if(o.preventDefault(),y.innerHTML="",c=o.target.elements.search.value.trim(),b(),c===""){a.warning({color:"yellow",message:"Please fill in the field for search!",position:"topRight"});return}m(c).then(r=>{r.hits.length===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",position:"topRight"}),g(r.hits),o.target.reset()}).catch(r=>{console.log(r),a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"})}).finally(()=>w())}
//# sourceMappingURL=commonHelpers.js.map
