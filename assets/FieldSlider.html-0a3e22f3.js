import{aK as v,S as m,U as _,V as e,ae as t,a8 as s,ac as l,aS as d,D as a,ad as i}from"./framework-233955b8.js";const g={},p=e("p",null,"Drag the slider within a fixed range.",-1),b=e("h3",{id:"basic-usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),l(" Basic usage")],-1),f=e("p",null,"The current value is displayed when the slider is being dragged.",-1),x=e("p",null,"Customize the initial value of the slider by setting the binding value.",-1),y=d(`<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-card class=&quot;box-card&quot;&gt;
    &lt;FieldSlider
      v-model=&quot;0&quot;
    /&gt;
    &lt;FieldSlider
      v-model=&quot;0&quot;
      :show-tooltip=&quot;false&quot;
    /&gt;
    &lt;FieldSlider
      v-model=&quot;0&quot;
      :disabled=&quot;true&quot;
    /&gt;
  &lt;/el-card&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="step" tabindex="-1"><a class="header-anchor" href="#step" aria-hidden="true">#</a> Step</h3><p>Set <code>step</code> size with the <code>step</code> attribute. You can display breakpoints by setting the <code>show-stops</code> attribute</p>`,4),k=d(`<h4 id="viwer-source-1" tabindex="-1"><a class="header-anchor" href="#viwer-source-1" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-card class=&quot;box-card&quot;&gt;
    &lt;FieldSlider
      v-model=&quot;0&quot;
      :step=&quot;10&quot;
    /&gt;
    &lt;FieldSlider
      v-model=&quot;0&quot;
      :step=&quot;10&quot;
      :show-stops=&quot;true&quot;
    /&gt;
  &lt;/el-card&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> Range</h3><p>Selecting a range of values is supported.</p><p>Setting the <code>range</code> attribute activates range mode, where the binding value is an array made up of two boundary values.</p>`,5),q=d(`<h4 id="viwer-source-2" tabindex="-1"><a class="header-anchor" href="#viwer-source-2" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-card class=&quot;box-card&quot;&gt;
    &lt;FieldSlider
      v-model=&quot;0&quot;
      :show-stops=&quot;true&quot;
      :range=&quot;true&quot;
      :max=&quot;10&quot;
    /&gt;
  &lt;/el-card&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="vertical-mode" tabindex="-1"><a class="header-anchor" href="#vertical-mode" aria-hidden="true">#</a> Vertical Mode</h3><p>Setting the vertical <code>attribute</code> to <code>true</code> enables vertical mode. In vertical mode, the <code>height</code> attribute is required.</p>`,4),S=d(`<h4 id="viwer-source-3" tabindex="-1"><a class="header-anchor" href="#viwer-source-3" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-card class=&quot;box-card&quot;&gt;
    &lt;FieldSlider
      v-model=&quot;0&quot;
      :vertical=&quot;true&quot;
    /&gt;
  &lt;/el-card&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>`,3),w=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),F=e("td",{style:{"text-align":"center"}},[e("code",null,"percentage")],-1),B=e("td",{style:{"text-align":"center"}},"percentage.",-1),V={style:{"text-align":"center"}},L=e("strong",null,i("Number"),-1),D={style:{"text-align":"center"}},z=e("strong",null,i("True"),-1),C=e("td",{style:{"text-align":"center"}},[e("code",null,"textInside")],-1),N=e("td",{style:{"text-align":"center"}},[l("whether to place the percentage inside progress bar, only works when "),e("code",null,"type"),l(" is 'line'.")],-1),T={style:{"text-align":"center"}},E=e("strong",null,i("Boolean"),-1),I={style:{"text-align":"center"}},A=e("strong",null,i("True"),-1),M=e("h3",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),l(" Attributes")],-1),R=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),O=e("td",{style:{"text-align":"center"}},[e("code",null,"type")],-1),G={style:{"text-align":"center"}},K=e("code",null,"type",-1),P=e("strong",null,i("line/circle/dashboard"),-1),U={style:{"text-align":"center"}},W=e("strong",null,i("String"),-1),Y={style:{"text-align":"center"}},j=e("strong",null,i("line"),-1),H=e("td",{style:{"text-align":"center"}},[e("code",null,"strokeWidth")],-1),J=e("td",{style:{"text-align":"center"}},"the width of progress bar",-1),Q={style:{"text-align":"center"}},X=e("strong",null,i("Number"),-1),Z={style:{"text-align":"center"}},$=e("strong",null,i("6"),-1),ee=e("td",{style:{"text-align":"center"}},[e("code",null,"status")],-1),te={style:{"text-align":"center"}},ne=e("strong",null,i("success/exception/warning"),-1),se={style:{"text-align":"center"}},ie=e("strong",null,i("String"),-1),le={style:{"text-align":"center"}},ae=e("strong",null,i("────"),-1),de=e("td",{style:{"text-align":"center"}},[e("code",null,"indeterminate")],-1),oe=e("td",{style:{"text-align":"center"}},"set indeterminate progress",-1),re={style:{"text-align":"center"}},ce=e("strong",null,i("Boolean"),-1),ue={style:{"text-align":"center"}},he=e("strong",null,i("False"),-1),ve=e("td",{style:{"text-align":"center"}},[e("code",null,"disabled")],-1),me=e("td",{style:{"text-align":"center"}},"Disable the Button",-1),_e={style:{"text-align":"center"}},ge=e("strong",null,i("Boolean"),-1),pe={style:{"text-align":"center"}},be=e("strong",null,i("False"),-1),fe=e("h3",{id:"example-for-developer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-for-developer","aria-hidden":"true"},"#"),l(" Example for Developer")],-1),xe={href:"https://stackblitz.com/edit/fields-silder?file=app.vue",target:"_blank",rel:"noopener noreferrer"},ye=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),ke=e("figcaption",null,"Open in StackBlitz",-1),qe=d(`<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> Directory</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FieldSilder                 <span class="token comment"># Field silder specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function Se(we,Fe){const o=a("SliderBasic"),r=a("SliderStep"),c=a("SliderRange"),u=a("SliderVertical"),n=a("el-tag"),h=a("ExternalLinkIcon");return m(),_("div",null,[e("span",null,[p,b,f,x,t(o),y,t(r),k,t(c),q,t(u),S,e("table",null,[w,e("tbody",null,[e("tr",null,[F,B,e("td",V,[t(n,{effect:"Light"},{default:s(()=>[L]),_:1})]),e("td",D,[t(n,{effect:"dark",round:""},{default:s(()=>[z]),_:1})])]),e("tr",null,[C,N,e("td",T,[t(n,{effect:"Light"},{default:s(()=>[E]),_:1})]),e("td",I,[t(n,{effect:"dark",round:""},{default:s(()=>[A]),_:1})])])])]),M,e("table",null,[R,e("tbody",null,[e("tr",null,[O,e("td",G,[l("the "),K,l(" of progress bar "),t(n,{effect:"Light"},{default:s(()=>[P]),_:1})]),e("td",U,[t(n,{effect:"Light"},{default:s(()=>[W]),_:1})]),e("td",Y,[t(n,{effect:"dark",round:""},{default:s(()=>[j]),_:1})])]),e("tr",null,[H,J,e("td",Q,[t(n,{effect:"Light"},{default:s(()=>[X]),_:1})]),e("td",Z,[t(n,{effect:"dark",round:""},{default:s(()=>[$]),_:1})])]),e("tr",null,[ee,e("td",te,[l("the current status of progress bar "),t(n,{effect:"Light"},{default:s(()=>[ne]),_:1})]),e("td",se,[t(n,{effect:"Light"},{default:s(()=>[ie]),_:1})]),e("td",le,[t(n,{effect:"dark",round:""},{default:s(()=>[ae]),_:1})])]),e("tr",null,[de,oe,e("td",re,[t(n,{effect:"Light"},{default:s(()=>[ce]),_:1})]),e("td",ue,[t(n,{effect:"dark",round:""},{default:s(()=>[he]),_:1})])]),e("tr",null,[ve,me,e("td",_e,[t(n,{effect:"Light"},{default:s(()=>[ge]),_:1})]),e("td",pe,[t(n,{effect:"dark",round:""},{default:s(()=>[be]),_:1})])])])]),fe,e("figure",null,[e("a",xe,[ye,t(h)]),ke]),qe])])}const Ve=v(g,[["render",Se],["__file","FieldSlider.html.vue"]]);export{Ve as default};
