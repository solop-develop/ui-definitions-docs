import{aK as c,S as u,U as v,V as e,ac as n,ae as t,a8 as i,aS as d,D as o,ad as l}from"./framework-233955b8.js";const m={},h=e("p",null,"Besides the native features of img, support lazy load, custom placeholder and load failure, etc.",-1),g=e("h3",{id:"basic-usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),n(),e("strong",null,"Basic Usage")],-1),p=e("code",null,"fit",-1),b=e("code",null,"fit",-1),_={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",target:"_blank",rel:"noopener noreferrer"},f=d(`<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> <strong>Props</strong></h3>`,3),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),y=e("td",{style:{"text-align":"center"}},[e("code",null,"src")],-1),k=e("td",{style:{"text-align":"center"}},"image source, same as native.",-1),q={style:{"text-align":"center"}},z=e("strong",null,l("string"),-1),S={style:{"text-align":"center"}},w=e("strong",null,l("True"),-1),I=e("h3",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),n(),e("strong",null,"Attributes")],-1),B=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),D=e("td",{style:{"text-align":"center"}},[e("code",null,"fit")],-1),j={style:{"text-align":"center"}},C={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",target:"_blank",rel:"noopener noreferrer"},F=e("strong",null,l("fit / contain / cover / none / scale-down"),-1),N={style:{"text-align":"center"}},V=e("strong",null,l("string"),-1),L={style:{"text-align":"center"}},E=e("strong",null,l("cover"),-1),T=e("h3",{id:"example-for-developer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-for-developer","aria-hidden":"true"},"#"),n(),e("strong",null,"Example for Developer")],-1),U={href:"https://stackblitz.com/edit/fields-image?file=app.vue",target:"_blank",rel:"noopener noreferrer"},A=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),M=e("figcaption",null,"Open in StackBlitz",-1),O=d(`<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> <strong>Directory</strong></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FielImage                     <span class="token comment"># Field Image specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function W(G,K){const a=o("ExternalLinkIcon"),r=o("ImageBasic"),s=o("el-tag");return u(),v("div",null,[e("span",null,[h,g,e("p",null,[n("Indicate how the image should be resized to "),p,n(" its container by "),b,n(", same as native "),e("a",_,[n("object-fit."),t(a)])]),t(r),f,e("table",null,[x,e("tbody",null,[e("tr",null,[y,k,e("td",q,[t(s,{effect:"Light"},{default:i(()=>[z]),_:1})]),e("td",S,[t(s,{effect:"dark",round:""},{default:i(()=>[w]),_:1})])])])]),I,e("table",null,[B,e("tbody",null,[e("tr",null,[D,e("td",j,[n("indicate how the image should be resized to fit its container, same as "),e("a",C,[n("object-fit."),t(a)]),n(),t(s,{effect:"Light"},{default:i(()=>[F]),_:1})]),e("td",N,[t(s,{effect:"Light"},{default:i(()=>[V]),_:1})]),e("td",L,[t(s,{effect:"dark",round:""},{default:i(()=>[E]),_:1})])])])]),T,e("figure",null,[e("a",U,[A,t(a)]),M]),O])])}const H=c(m,[["render",W],["__file","FieldImage.html.vue"]]);export{H as default};
