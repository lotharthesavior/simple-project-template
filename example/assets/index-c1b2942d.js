import{createApp as n}from"https://unpkg.com/vue@3/dist/vue.esm-browser.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();n({data(){return{title:"Simple Project",subtitle:"A VueJS + Vite <strong>template</strong> for small projects.",subtitle_mobile:"A VueJS + Vite <strong>template</strong> for small projects.",links:[{href:"https://savioresende.com",text:`Visit the <strong class="group-hover:underline">Author's Website</strong>`}],logo:"/imgs/brand.svg",color:"#292d3e"}},mounted(){this.loaded()},methods:{loaded(){document.querySelector("#loading").classList.add("hidden"),document.querySelector("#app").classList.remove("hidden")}}}).mount("#app");
