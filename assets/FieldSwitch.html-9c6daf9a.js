import{aK as b,S as g,U as p,V as e,ae as n,ac as s,a8 as i,ab as _,aS as d,D as a,ad as l}from"./framework-233955b8.js";const f={},x=d('<p>Switch is used for switching between two opposing states.</p><h3 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> <strong>Basic usage</strong></h3><p>Bind <code>v-model</code> to a <code>Boolean</code> typed variable. The <code>--el-switch-on-color</code> and <code>--el-switch-off-color</code> CSS variables decides the background color in two states.</p>',3),q=d(`<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;field-switch v-model=&quot;value1&quot; /&gt;
  &lt;field-switch
    v-model=&quot;value2&quot;
    class=&quot;ml-2&quot;
    style=&quot;--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949&quot;
  /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const value1 = ref(true)
const value2 = ref(true)
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="sizes" tabindex="-1"><a class="header-anchor" href="#sizes" aria-hidden="true">#</a> <strong>Sizes</strong></h3>`,3),w=d(`<h4 id="viwer-source-1" tabindex="-1"><a class="header-anchor" href="#viwer-source-1" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;field-switch
    v-model=&quot;value&quot;
    size=&quot;large&quot;
    active-text=&quot;Open&quot;
    inactive-text=&quot;Close&quot;
  /&gt;
  &lt;br /&gt;
  &lt;field-switch v-model=&quot;value&quot; active-text=&quot;Open&quot; inactive-text=&quot;Close&quot; /&gt;
  &lt;br /&gt;
  &lt;field-switch
    v-model=&quot;value&quot;
    size=&quot;small&quot;
    active-text=&quot;Open&quot;
    inactive-text=&quot;Close&quot;
  /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const value = ref(true)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="text-description" tabindex="-1"><a class="header-anchor" href="#text-description" aria-hidden="true">#</a> <strong>Text description</strong></h3><p>You can add <code>active-text</code> and <code>inactive-text</code> attribute to show texts. use <code>inline-prompt</code> attribute to control text is displayed inside dot.</p><p>You can add <code>active-text</code> and <code>inactive-text</code> attribute to show texts.</p>`,5),y=d(`<h4 id="viwer-source-2" tabindex="-1"><a class="header-anchor" href="#viwer-source-2" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;field-switch
    v-model=&quot;value1&quot;
    class=&quot;mb-2&quot;
    active-text=&quot;Pay by month&quot;
    inactive-text=&quot;Pay by year&quot;
  /&gt;
  &lt;br /&gt;
  &lt;field-switch
    v-model=&quot;value3&quot;
    class=&quot;mb-2&quot;
    style=&quot;--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949&quot;
    active-text=&quot;Pay by month&quot;
    inactive-text=&quot;Pay by year&quot;
  /&gt;
  &lt;br /&gt;
  &lt;field-switch
    v-model=&quot;value4&quot;
    class=&quot;ml-2&quot;
    inline-prompt
    style=&quot;--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949&quot;
    active-text=&quot;Y&quot;
    inactive-text=&quot;N&quot;
  /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="display-custom-icons" tabindex="-1"><a class="header-anchor" href="#display-custom-icons" aria-hidden="true">#</a> <strong>Display custom icons</strong></h3>`,3),k={class:"hint-container tip"},S=e("p",{class:"hint-container-title"},"Tips",-1),C=e("code",null,"active-icon",-1),L=e("code",null,"inactive-icon",-1),z={href:"https://element-plus.org/en-US/component/icon.html",target:"_blank",rel:"noopener noreferrer"},D=d(`<h4 id="viwer-source-3" tabindex="-1"><a class="header-anchor" href="#viwer-source-3" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-switch v-model=&quot;value1&quot; :active-icon=&quot;Check&quot; :inactive-icon=&quot;Close&quot; /&gt;
  &lt;br /&gt;
  &lt;field-switch
    v-model=&quot;value2&quot;
    class=&quot;mt-2&quot;
    style=&quot;margin-left: 24px&quot;
    inline-prompt
    :active-icon=&quot;Check&quot;
    :inactive-icon=&quot;Close&quot;
  /&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import { Check, Close } from &#39;@element-plus/icons-vue&#39;
const value1 = ref(true)
const value2 = ref(true)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled" aria-hidden="true">#</a> <strong>Disabled</strong></h3><p>Adding the <code>disabled</code> attribute disables Switch.</p>`,4),B=d(`<h4 id="viwer-source-4" tabindex="-1"><a class="header-anchor" href="#viwer-source-4" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;field-switch v-model=&quot;value1&quot; disabled /&gt;
  &lt;br /&gt;
  &lt;field-switch v-model=&quot;value1&quot; /&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import { Check, Close } from &#39;@element-plus/icons-vue&#39;
const value1 = ref(true)
const value2 = ref(true)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="loading" tabindex="-1"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> <strong>Loading</strong></h3><p>Setting the <code>loading</code> attribute to <code>true</code> indicates a <code>loading</code> state on the Switch.</p>`,4),V=d(`<h4 id="viwer-source-5" tabindex="-1"><a class="header-anchor" href="#viwer-source-5" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;field-switch v-model=&quot;value1&quot; loading /&gt;
  &lt;field-switch v-model=&quot;value2&quot; loading class=&quot;ml-2&quot; /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const value1 = ref(true)
const value2 = ref(false)
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> <strong>Props</strong></h3>`,3),T=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),N=e("td",{style:{"text-align":"center"}},[e("code",null,"value")],-1),F=e("td",{style:{"text-align":"center"}},[s("binding value, it should be equivalent to either "),e("code",null,"active-value"),s(" or "),e("code",null,"inactive-value"),s(", by default it's "),e("code",null,"boolean"),s(" type")],-1),P={style:{"text-align":"center"}},E=e("strong",null,l("boolean / string / number"),-1),O={style:{"text-align":"center"}},A=e("strong",null,l("True"),-1),I=e("h3",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),s(),e("strong",null,"Attributes")],-1),Y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),U=e("td",{style:{"text-align":"center"}},[e("code",null,"active-text")],-1),G=e("td",{style:{"text-align":"center"}},[s("text displayed when in "),e("code",null,"on"),s(" state")],-1),M={style:{"text-align":"center"}},K=e("strong",null,l("String"),-1),j={style:{"text-align":"center"}},H=e("strong",null,l("——————"),-1),J=e("td",{style:{"text-align":"center"}},[e("code",null,"inactive-text")],-1),Q=e("td",{style:{"text-align":"center"}},[s("text displayed when in "),e("code",null,"off"),s(" state")],-1),R={style:{"text-align":"center"}},W=e("strong",null,l("String"),-1),X={style:{"text-align":"center"}},Z=e("strong",null,l("——————"),-1),$=e("td",{style:{"text-align":"center"}},[e("code",null,"inline-prompt")],-1),ee=e("td",{style:{"text-align":"center"}},"whether icon or text is displayed inside dot, only the first character will be rendered for text",-1),ne={style:{"text-align":"center"}},te=e("strong",null,l("Boolean"),-1),ie={style:{"text-align":"center"}},se=e("strong",null,l("False"),-1),le=e("td",{style:{"text-align":"center"}},[e("code",null,"disabled")],-1),ae=e("td",{style:{"text-align":"center"}},[s("whether Switch is "),e("code",null,"disabled")],-1),de={style:{"text-align":"center"}},oe=e("strong",null,l("Boolean"),-1),ce={style:{"text-align":"center"}},re=e("strong",null,l("False"),-1),ue=e("td",{style:{"text-align":"center"}},[e("code",null,"loading")],-1),ve=e("td",{style:{"text-align":"center"}},[s("whether Switch is in "),e("code",null,"loading"),s(" state")],-1),me={style:{"text-align":"center"}},he=e("strong",null,l("Boolean"),-1),be={style:{"text-align":"center"}},ge=e("strong",null,l("False"),-1),pe=e("td",{style:{"text-align":"center"}},[e("code",null,"size")],-1),_e={style:{"text-align":"center"}},fe=e("strong",null,"large / default / small",-1),xe={style:{"text-align":"center"}},qe=e("strong",null,l("String"),-1),we={style:{"text-align":"center"}},ye=e("strong",null,l("Default"),-1),ke=e("h3",{id:"example-for-developer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-for-developer","aria-hidden":"true"},"#"),s(),e("strong",null,"Example for Developer")],-1),Se={href:"https://stackblitz.com/edit/fields-witch?file=app.vue",target:"_blank",rel:"noopener noreferrer"},Ce=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),Le=e("figcaption",null,"Open in StackBlitz",-1),ze=d(`<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> <strong>Directory</strong></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FieldSwitch                   <span class="token comment"># Field Switch specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function De(Be,Ve){const c=a("SwitchBasic"),r=a("SwitchSizes"),u=a("SwitchText"),o=a("ExternalLinkIcon"),v=a("SwitchIcon"),m=a("SwitchDisabled"),h=a("SwitchLoading"),t=a("el-tag");return g(),p("div",null,[e("span",null,[x,n(c),q,n(r),w,n(u),y,e("div",k,[S,e("p",null,[s("Use the "),C,s(" and "),L,s(" attribute to add icon. You can pass either string for the component name (registered in advance) or the component itself which is a SVG Vue component. Element Plus has provided a set of icon that you can find at "),e("a",z,[s("icon"),n(o)])])]),n(v),D,n(m),B,n(h),V,e("table",null,[T,e("tbody",null,[e("tr",null,[N,F,e("td",P,[n(t,{effect:"Light"},{default:i(()=>[E]),_:1})]),e("td",O,[n(t,{effect:"dark",round:""},{default:i(()=>[A]),_:1})])])])]),I,e("table",null,[Y,e("tbody",null,[e("tr",null,[U,G,e("td",M,[n(t,{effect:"Light"},{default:i(()=>[n(t,{effect:"Light"},{default:i(()=>[K]),_:1})]),_:1})]),e("td",j,[n(t,{effect:"dark",round:""},{default:i(()=>[H]),_:1})])]),e("tr",null,[J,Q,e("td",R,[n(t,{effect:"Light"},{default:i(()=>[n(t,{effect:"Light"},{default:i(()=>[W]),_:1})]),_:1})]),e("td",X,[n(t,{effect:"dark",round:""},{default:i(()=>[Z]),_:1})])]),e("tr",null,[$,ee,e("td",ne,[n(t,{effect:"Light"},{default:i(()=>[n(t,{effect:"Light"},{default:i(()=>[te]),_:1})]),_:1})]),e("td",ie,[n(t,{effect:"dark",round:""},{default:i(()=>[se]),_:1})])]),e("tr",null,[le,ae,e("td",de,[n(t,{effect:"Light"},{default:i(()=>[n(t,{effect:"Light"},{default:i(()=>[oe]),_:1})]),_:1})]),e("td",ce,[n(t,{effect:"dark",round:""},{default:i(()=>[re]),_:1})])]),e("tr",null,[ue,ve,e("td",me,[n(t,{effect:"Light"},{default:i(()=>[n(t,{effect:"Light"},{default:i(()=>[he]),_:1})]),_:1})]),e("td",be,[n(t,{effect:"dark",round:""},{default:i(()=>[ge]),_:1})])]),e("tr",null,[pe,e("td",_e,[s("size of Switch "),n(t,{effect:"Light"},{default:i(()=>[fe]),_:1})]),e("td",xe,[n(t,{effect:"Light"},{default:i(()=>[n(t,{effect:"Light"},{default:i(()=>[qe]),_:1})]),_:1})]),e("td",we,[n(t,{effect:"dark",round:""},{default:i(()=>[ye]),_:1})])])])]),_(` ### Slots

|   Name    | Description |
| :---------: | :-----------: |
| \`header\` | Customize Default Content Top |
| \`content\` | Customize Default Content |
| \`footer\` | Customize Default Content Bottom |
 `),ke,e("figure",null,[e("a",Se,[Ce,n(o)]),Le]),ze])])}const Ne=b(f,[["render",De],["__file","FieldSwitch.html.vue"]]);export{Ne as default};