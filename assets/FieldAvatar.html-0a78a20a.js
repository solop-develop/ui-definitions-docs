import{aK as u,S as v,U as h,V as e,ac as t,ae as n,a8 as l,aS as r,D as a,ad as s}from"./framework-233955b8.js";const _={},m=e("h2",{id:"basic-usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),t(),e("strong",null,"Basic Usage")],-1),g=e("code",null,"fit",-1),b=e("code",null,"fit",-1),p={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",target:"_blank",rel:"noopener noreferrer"},f=r(`<h3 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> <strong>Viwer Source</strong></h3><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">
&lt;template&gt;
  &lt;div class=&quot;demo-image&quot;&gt;
    &lt;div v-for=&quot;fit in fits&quot; :key=&quot;fit&quot; class=&quot;block&quot;&gt;
      &lt;span class=&quot;demonstration&quot;&gt;{{ fit }}&lt;/span&gt;
      &lt;FieldImage shape=&quot;shape&quot; :size=&quot;100&quot; :src=&quot;url&quot; :fit=&quot;fit&quot; /&gt;
      &lt;br&gt;
      &lt;el-divider /&gt;
      &lt;br&gt;
      &lt;FieldImage shape=&quot;circle&quot; :size=&quot;100&quot; :src=&quot;url&quot; :fit=&quot;fit&quot; /&gt;
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
&lt;/style&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>`,3),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),y=e("td",{style:{"text-align":"center"}},[e("code",null,"src")],-1),k=e("td",{style:{"text-align":"center"}},"the source of the image for an image avatar.",-1),q={style:{"text-align":"center"}},z=e("strong",null,s("string"),-1),w={style:{"text-align":"center"}},S=e("strong",null,s("True"),-1),A=e("h2",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),t(" Attributes")],-1),B=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),L=e("td",{style:{"text-align":"center"}},[e("code",null,"fit")],-1),D={style:{"text-align":"center"}},F=e("strong",null,s("fit / contain / cover / none / scale-down"),-1),N={style:{"text-align":"center"}},V=e("strong",null,s("string"),-1),C={style:{"text-align":"center"}},I=e("strong",null,s("cover"),-1),j=e("td",{style:{"text-align":"center"}},[e("code",null,"size")],-1),E={style:{"text-align":"center"}},T=e("strong",null,s("large"),-1),U=e("strong",null,s("default"),-1),M=e("strong",null,s("small"),-1),O={style:{"text-align":"center"}},G=e("strong",null,s("String"),-1),K=e("strong",null,s("Number"),-1),P={style:{"text-align":"center"}},W=e("td",{style:{"text-align":"center"}},[e("code",null,"shape")],-1),H={style:{"text-align":"center"}},J=e("strong",null,s(" circle / shape"),-1),Q={style:{"text-align":"center"}},R=e("strong",null,s("string"),-1),X={style:{"text-align":"center"}},Y=e("strong",null,s("cover"),-1),Z=e("h2",{id:"example-for-developer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-for-developer","aria-hidden":"true"},"#"),t(" Example for Developer")],-1),$={href:"https://stackblitz.com/edit/fields-avatar?file=app.vue",target:"_blank",rel:"noopener noreferrer"},ee=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),te=e("figcaption",null,"Open in StackBlitz",-1),ne=r(`<h2 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> Directory</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FielAvatar                    <span class="token comment"># Field Avatar specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function se(ie,le){const d=a("ExternalLinkIcon"),c=a("AvatarBasic"),i=a("el-tag"),o=a("el-divider");return v(),h("div",null,[e("span",null,[t(" Besides the native features of img, support lazy load, custom placeholder and load failure, etc. "),m,e("p",null,[t("Indicate how the image should be resized to "),g,t(" its container by "),b,t(", same as native "),e("a",p,[t("object-fit."),n(d)])]),n(c),f,e("table",null,[x,e("tbody",null,[e("tr",null,[y,k,e("td",q,[n(i,{effect:"Light"},{default:l(()=>[z]),_:1})]),e("td",w,[n(i,{effect:"dark",round:""},{default:l(()=>[S]),_:1})])])])]),A,e("table",null,[B,e("tbody",null,[e("tr",null,[L,e("td",D,[t("set how the image fit its container for an image avatar "),n(i,{effect:"Light"},{default:l(()=>[F]),_:1})]),e("td",N,[n(i,{effect:"Light"},{default:l(()=>[V]),_:1})]),e("td",C,[n(i,{effect:"dark",round:""},{default:l(()=>[I]),_:1})])]),e("tr",null,[j,e("td",E,[t("avatar size "),n(i,{effect:"Light"},{default:l(()=>[T,t(),n(o,{direction:"vertical"}),t(),U,t(),n(o,{direction:"vertical"}),t(),M]),_:1})]),e("td",O,[n(i,{effect:"Light",round:""},{default:l(()=>[G,t(),n(o,{direction:"vertical"}),t(),K]),_:1})]),e("td",P,[n(i,{effect:"dark",round:""},{default:l(()=>[t(s("default"))]),_:1})])]),e("tr",null,[W,e("td",H,[t("avatar shape "),n(i,{effect:"Light"},{default:l(()=>[J]),_:1})]),e("td",Q,[n(i,{effect:"Light"},{default:l(()=>[R]),_:1})]),e("td",X,[n(i,{effect:"dark",round:""},{default:l(()=>[Y]),_:1})])])])]),Z,e("figure",null,[e("a",$,[ee,n(d)]),te]),ne])])}const oe=u(_,[["render",se],["__file","FieldAvatar.html.vue"]]);export{oe as default};
