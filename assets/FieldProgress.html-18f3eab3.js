import{aK as v,Q as g,S as h,U as e,ae as t,a8 as s,ac as a,aS as d,C as l,ad as i}from"./framework-e19f4168.js";const m={},p=e("p",null,"Progress is used to show the progress of current operation, and inform the user the current status.",-1),_=e("h3",{id:"basic-usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),a(" Basic Usage")],-1),b=d(`<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-card class=&quot;box-card&quot;&gt;
    &lt;FieldProgress :percentage=&quot;50&quot; :textInside=&quot;true&quot; /&gt;
  &lt;/el-card&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="internal-percentage" tabindex="-1"><a class="header-anchor" href="#internal-percentage" aria-hidden="true">#</a> Internal percentage</h3><p>In this case the percentage takes no additional space <br><code>stroke-width</code> attribute decides the <code>width</code> of progress bar, and use <code>text-inside</code> attribute to put description inside the progress bar.</p>`,4),f=d(`<h4 id="viwer-source-1" tabindex="-1"><a class="header-anchor" href="#viwer-source-1" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="circular-progress-bar" tabindex="-1"><a class="header-anchor" href="#circular-progress-bar" aria-hidden="true">#</a> Circular progress bar</h3><p>You can specify <code>type</code> attribute to <code>circle</code> to use circular progress bar, and use <code>width</code> attribute to change the size of circle.</p>`,4),q=d(`<h4 id="viwer-source-2" tabindex="-1"><a class="header-anchor" href="#viwer-source-2" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>`,3),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),y=e("td",{style:{"text-align":"center"}},[e("code",null,"percentage")],-1),k=e("td",{style:{"text-align":"center"}},"percentage.",-1),w={style:{"text-align":"center"}},P=e("strong",null,i("number"),-1),I={style:{"text-align":"center"}},F=e("td",{style:{"text-align":"center"}},[e("code",null,"textInside")],-1),S=e("td",{style:{"text-align":"center"}},[a("whether to place the percentage inside progress bar, only works when "),e("code",null,"type"),a(" is 'line'.")],-1),B={style:{"text-align":"center"}},L=e("strong",null,i("Boolean"),-1),C={style:{"text-align":"center"}},z=e("strong",null,i("True"),-1),T=e("h3",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),a(" Attributes")],-1),V=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),D=e("td",{style:{"text-align":"center"}},[e("code",null,"type")],-1),N={style:{"text-align":"center"}},W=e("code",null,"type",-1),E=e("strong",null,i("line/circle/dashboard"),-1),A={style:{"text-align":"center"}},M=e("strong",null,i("String"),-1),O={style:{"text-align":"center"}},U=e("strong",null,i("line"),-1),G=e("td",{style:{"text-align":"center"}},[e("code",null,"strokeWidth")],-1),K=e("td",{style:{"text-align":"center"}},"the width of progress bar",-1),Q={style:{"text-align":"center"}},Y=e("strong",null,i("number"),-1),j={style:{"text-align":"center"}},H=e("strong",null,i("6"),-1),J=e("td",{style:{"text-align":"center"}},[e("code",null,"status")],-1),R={style:{"text-align":"center"}},X=e("strong",null,i("success/exception/warning"),-1),Z={style:{"text-align":"center"}},$=e("strong",null,i("String"),-1),ee={style:{"text-align":"center"}},te=e("strong",null,i("────"),-1),ne=e("td",{style:{"text-align":"center"}},[e("code",null,"indeterminate")],-1),se=e("td",{style:{"text-align":"center"}},"set indeterminate progress",-1),ie={style:{"text-align":"center"}},ae=e("strong",null,i("Boolean"),-1),le={style:{"text-align":"center"}},de=e("strong",null,i("False"),-1),re=e("h3",{id:"example-for-developer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-for-developer","aria-hidden":"true"},"#"),a(" Example for Developer")],-1),oe={href:"https://stackblitz.com/edit/fields-progress?file=app.vue",target:"_blank",rel:"noopener noreferrer"},ce=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),ue=e("figcaption",null,"Open in StackBlitz",-1),ve=d(`<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> Directory</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FieldProgress                 <span class="token comment"># Field Progress specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function ge(he,me){const r=l("ProgressBasic"),o=l("ProgressInternalPercentage"),c=l("ProgressType"),n=l("el-tag"),u=l("ExternalLinkIcon");return g(),h("div",null,[e("span",null,[p,_,t(r),b,t(o),f,t(c),q,e("table",null,[x,e("tbody",null,[e("tr",null,[y,k,e("td",w,[t(n,{effect:"Light"},{default:s(()=>[P]),_:1})]),e("td",I,[t(n,{effect:"dark",round:""},{default:s(()=>[a(i("True"))]),_:1})])]),e("tr",null,[F,S,e("td",B,[t(n,{effect:"Light"},{default:s(()=>[L]),_:1})]),e("td",C,[t(n,{effect:"dark",round:""},{default:s(()=>[z]),_:1})])])])]),T,e("table",null,[V,e("tbody",null,[e("tr",null,[D,e("td",N,[a("the "),W,a(" of progress bar "),t(n,{effect:"Light"},{default:s(()=>[E]),_:1})]),e("td",A,[t(n,{effect:"Light"},{default:s(()=>[M]),_:1})]),e("td",O,[t(n,{effect:"dark",round:""},{default:s(()=>[U]),_:1})])]),e("tr",null,[G,K,e("td",Q,[t(n,{effect:"Light"},{default:s(()=>[Y]),_:1})]),e("td",j,[t(n,{effect:"dark",round:""},{default:s(()=>[H]),_:1})])]),e("tr",null,[J,e("td",R,[a("the current status of progress bar "),t(n,{effect:"Light"},{default:s(()=>[X]),_:1})]),e("td",Z,[t(n,{effect:"Light"},{default:s(()=>[$]),_:1})]),e("td",ee,[t(n,{effect:"dark",round:""},{default:s(()=>[te]),_:1})])]),e("tr",null,[ne,se,e("td",ie,[t(n,{effect:"Light"},{default:s(()=>[ae]),_:1})]),e("td",le,[t(n,{effect:"dark",round:""},{default:s(()=>[de]),_:1})])])])]),re,e("figure",null,[e("a",oe,[ce,t(u)]),ue]),ve])])}const _e=v(m,[["render",ge],["__file","FieldProgress.html.vue"]]);export{_e as default};
