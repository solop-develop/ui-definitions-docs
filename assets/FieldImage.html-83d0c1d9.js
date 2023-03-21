import{aK as r,Q as u,S as v,U as e,ac as t,ae as n,a8 as i,aS as d,C as o,ad as l}from"./framework-e19f4168.js";const m={},h=e("p",null,"Besides the native features of img, support lazy load, custom placeholder and load failure, etc.",-1),g=e("h3",{id:"basic-usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),t(" Basic Usage")],-1),p=e("code",null,"fit",-1),b=e("code",null,"fit",-1),_={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",target:"_blank",rel:"noopener noreferrer"},f=d(`<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div class=&quot;demo-image&quot;&gt;
    &lt;div v-for=&quot;fit in fits&quot; :key=&quot;fit&quot; class=&quot;block&quot;&gt;
      &lt;span class=&quot;demonstration&quot;&gt;{{ fit }}&lt;/span&gt;
      &lt;FieldImage style=&quot;width: 100px; height: 100px&quot; :src=&quot;url&quot; :fit=&quot;fit&quot; /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
const fits = [&#39;fill&#39;, &#39;contain&#39;, &#39;cover&#39;, &#39;none&#39;, &#39;scale-down&#39;]
const url =
  &#39;https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg&#39;
&lt;/script&gt;

&lt;style scoped&gt;
.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
&lt;/style&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>`,3),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),y=e("td",{style:{"text-align":"center"}},[e("code",null,"src")],-1),k=e("td",{style:{"text-align":"center"}},"image source, same as native.",-1),q={style:{"text-align":"center"}},z=e("strong",null,l("string"),-1),S={style:{"text-align":"center"}},w=e("strong",null,l("True"),-1),I=e("h3",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),t(" Attributes")],-1),B=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),C=e("td",{style:{"text-align":"center"}},[e("code",null,"fit")],-1),j={style:{"text-align":"center"}},D={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",target:"_blank",rel:"noopener noreferrer"},F=e("strong",null,l("fit / contain / cover / none / scale-down"),-1),N={style:{"text-align":"center"}},L=e("strong",null,l("string"),-1),V={style:{"text-align":"center"}},E=e("strong",null,l("cover"),-1),T=e("h3",{id:"example-for-developer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-for-developer","aria-hidden":"true"},"#"),t(" Example for Developer")],-1),U={href:"https://stackblitz.com/edit/fields-image?file=app.vue",target:"_blank",rel:"noopener noreferrer"},A=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),M=e("figcaption",null,"Open in StackBlitz",-1),O=d(`<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> Directory</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FielImage                     <span class="token comment"># Field Image specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function W(G,K){const a=o("ExternalLinkIcon"),c=o("ImageBasic"),s=o("el-tag");return u(),v("div",null,[e("span",null,[h,g,e("p",null,[t("Indicate how the image should be resized to "),p,t(" its container by "),b,t(", same as native "),e("a",_,[t("object-fit."),n(a)])]),n(c),f,e("table",null,[x,e("tbody",null,[e("tr",null,[y,k,e("td",q,[n(s,{effect:"Light"},{default:i(()=>[z]),_:1})]),e("td",S,[n(s,{effect:"dark",round:""},{default:i(()=>[w]),_:1})])])])]),I,e("table",null,[B,e("tbody",null,[e("tr",null,[C,e("td",j,[t("indicate how the image should be resized to fit its container, same as "),e("a",D,[t("object-fit."),n(a)]),t(),n(s,{effect:"Light"},{default:i(()=>[F]),_:1})]),e("td",N,[n(s,{effect:"Light"},{default:i(()=>[L]),_:1})]),e("td",V,[n(s,{effect:"dark",round:""},{default:i(()=>[E]),_:1})])])])]),T,e("figure",null,[e("a",U,[A,n(a)]),M]),O])])}const Q=r(m,[["render",W],["__file","FieldImage.html.vue"]]);export{Q as default};
