import{aK as v,S as g,U as h,V as e,ae as t,a8 as s,ac as l,aS as r,D as a,ad as i}from"./framework-233955b8.js";const m={},p=e("p",null,"Progress is used to show the progress of current operation, and inform the user the current status.",-1),_=e("h3",{id:"basic-usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),l(),e("strong",null,"Basic Usage")],-1),b=r(`<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-card class=&quot;box-card&quot;&gt;
    &lt;FieldProgress :percentage=&quot;50&quot; :textInside=&quot;true&quot; /&gt;
  &lt;/el-card&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="internal-percentage" tabindex="-1"><a class="header-anchor" href="#internal-percentage" aria-hidden="true">#</a> <strong>Internal percentage</strong></h3><p>In this case the percentage takes no additional space <br><code>stroke-width</code> attribute decides the <code>width</code> of progress bar, and use <code>text-inside</code> attribute to put description inside the progress bar.</p>`,4),f=r(`<h4 id="viwer-source-1" tabindex="-1"><a class="header-anchor" href="#viwer-source-1" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-card class=&quot;box-card&quot;&gt;
    &lt;FieldProgress
      :textInside=&quot;true&quot;
      :strokeWidth=&quot;22&quot;
      :percentage=&quot;80&quot;
    /&gt;
    &lt;FieldProgress
      :textInside=&quot;true&quot;
      :strokeWidth=&quot;22&quot;
      :percentage=&quot;80&quot;
      status=&quot;success&quot;
    /&gt;
    &lt;FieldProgress
      :textInside=&quot;true&quot;
      :strokeWidth=&quot;22&quot;
      :percentage=&quot;80&quot;
      status=&quot;warning&quot;
    /&gt;
    &lt;FieldProgress
      :textInside=&quot;true&quot;
      :strokeWidth=&quot;22&quot;
      :percentage=&quot;80&quot;
      status=&quot;exception&quot;
    /&gt;
  &lt;/el-card&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="circular-progress-bar" tabindex="-1"><a class="header-anchor" href="#circular-progress-bar" aria-hidden="true">#</a> <strong>Circular progress bar</strong></h3><p>You can specify <code>type</code> attribute to <code>circle</code> to use circular progress bar, and use <code>width</code> attribute to change the size of circle.</p>`,4),q=r(`<h4 id="viwer-source-2" tabindex="-1"><a class="header-anchor" href="#viwer-source-2" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-card class=&quot;box-card&quot;&gt;
    &lt;FieldProgress
      type=&quot;circle&quot;
      :percentage=&quot;0&quot;
      :textInside=&quot;true&quot;
    /&gt;
    &lt;FieldProgress
      type=&quot;circle&quot;
      :percentage=&quot;25&quot;
      :textInside=&quot;true&quot;
    /&gt;
    &lt;FieldProgress
      type=&quot;circle&quot;
      :percentage=&quot;25&quot;
      status=&quot;success&quot;
      :textInside=&quot;true&quot;
    /&gt;
    &lt;FieldProgress
     type=&quot;circle&quot;
      :percentage=&quot;25&quot;
      status=&quot;warning&quot;
      :textInside=&quot;true&quot;
    /&gt;
    &lt;FieldProgress
     type=&quot;circle&quot;
      :percentage=&quot;25&quot;
      :textInside=&quot;true&quot;
      status=&quot;exception&quot;
    /&gt;
  &lt;/el-card&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> <strong>Props</strong></h3>`,3),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),y=e("td",{style:{"text-align":"center"}},[e("code",null,"percentage")],-1),k=e("td",{style:{"text-align":"center"}},"percentage.",-1),w={style:{"text-align":"center"}},P=e("strong",null,i("number"),-1),I={style:{"text-align":"center"}},F=e("td",{style:{"text-align":"center"}},[e("code",null,"textInside")],-1),S=e("td",{style:{"text-align":"center"}},[l("whether to place the percentage inside progress bar, only works when "),e("code",null,"type"),l(" is 'line'.")],-1),B={style:{"text-align":"center"}},L=e("strong",null,i("Boolean"),-1),V={style:{"text-align":"center"}},z=e("strong",null,i("True"),-1),C=e("h3",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),l(),e("strong",null,"Attributes")],-1),D=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),T=e("td",{style:{"text-align":"center"}},[e("code",null,"type")],-1),N={style:{"text-align":"center"}},W=e("code",null,"type",-1),E=e("strong",null,i("line/circle/dashboard"),-1),A={style:{"text-align":"center"}},M=e("strong",null,i("String"),-1),O={style:{"text-align":"center"}},U=e("strong",null,i("line"),-1),G=e("td",{style:{"text-align":"center"}},[e("code",null,"strokeWidth")],-1),K=e("td",{style:{"text-align":"center"}},"the width of progress bar",-1),Y={style:{"text-align":"center"}},j=e("strong",null,i("number"),-1),H={style:{"text-align":"center"}},J=e("strong",null,i("6"),-1),Q=e("td",{style:{"text-align":"center"}},[e("code",null,"status")],-1),R={style:{"text-align":"center"}},X=e("strong",null,i("success/exception/warning"),-1),Z={style:{"text-align":"center"}},$=e("strong",null,i("String"),-1),ee={style:{"text-align":"center"}},te=e("strong",null,i("────"),-1),ne=e("td",{style:{"text-align":"center"}},[e("code",null,"indeterminate")],-1),se=e("td",{style:{"text-align":"center"}},"set indeterminate progress",-1),ie={style:{"text-align":"center"}},le=e("strong",null,i("Boolean"),-1),ae={style:{"text-align":"center"}},re=e("strong",null,i("False"),-1),de=e("h3",{id:"example-for-developer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-for-developer","aria-hidden":"true"},"#"),l(),e("strong",null,"Example for Developer")],-1),oe={href:"https://stackblitz.com/edit/fields-progress?file=app.vue",target:"_blank",rel:"noopener noreferrer"},ce=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),ue=e("figcaption",null,"Open in StackBlitz",-1),ve=r(`<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> <strong>Directory</strong></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FieldProgress                 <span class="token comment"># Field Progress specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function ge(he,me){const d=a("ProgressBasic"),o=a("ProgressInternalPercentage"),c=a("ProgressType"),n=a("el-tag"),u=a("ExternalLinkIcon");return g(),h("div",null,[e("span",null,[p,_,t(d),b,t(o),f,t(c),q,e("table",null,[x,e("tbody",null,[e("tr",null,[y,k,e("td",w,[t(n,{effect:"Light"},{default:s(()=>[P]),_:1})]),e("td",I,[t(n,{effect:"dark",round:""},{default:s(()=>[l(i("True"))]),_:1})])]),e("tr",null,[F,S,e("td",B,[t(n,{effect:"Light"},{default:s(()=>[L]),_:1})]),e("td",V,[t(n,{effect:"dark",round:""},{default:s(()=>[z]),_:1})])])])]),C,e("table",null,[D,e("tbody",null,[e("tr",null,[T,e("td",N,[l("the "),W,l(" of progress bar "),t(n,{effect:"Light"},{default:s(()=>[E]),_:1})]),e("td",A,[t(n,{effect:"Light"},{default:s(()=>[M]),_:1})]),e("td",O,[t(n,{effect:"dark",round:""},{default:s(()=>[U]),_:1})])]),e("tr",null,[G,K,e("td",Y,[t(n,{effect:"Light"},{default:s(()=>[j]),_:1})]),e("td",H,[t(n,{effect:"dark",round:""},{default:s(()=>[J]),_:1})])]),e("tr",null,[Q,e("td",R,[l("the current status of progress bar "),t(n,{effect:"Light"},{default:s(()=>[X]),_:1})]),e("td",Z,[t(n,{effect:"Light"},{default:s(()=>[$]),_:1})]),e("td",ee,[t(n,{effect:"dark",round:""},{default:s(()=>[te]),_:1})])]),e("tr",null,[ne,se,e("td",ie,[t(n,{effect:"Light"},{default:s(()=>[le]),_:1})]),e("td",ae,[t(n,{effect:"dark",round:""},{default:s(()=>[re]),_:1})])])])]),de,e("figure",null,[e("a",oe,[ce,t(u)]),ue]),ve])])}const _e=v(m,[["render",ge],["__file","FieldProgress.html.vue"]]);export{_e as default};
