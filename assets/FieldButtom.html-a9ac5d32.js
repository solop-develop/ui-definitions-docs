import{aK as b,S as h,U as f,V as t,ac as s,ae as e,a8 as l,ab as r,aS as d,D as o,ad as n}from"./framework-233955b8.js";const _={},y=d('<h3 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> <strong>Basic usage</strong></h3><p>Use <code>type</code>, <code>plain</code>, <code>round</code> and <code>circle</code> to define Button&#39;s style.</p>',2),q=d(`<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">  &lt;template&gt;
    &lt;el-row class=&quot;mb-4&quot;&gt;
      &lt;field-button&gt;Default&lt;/field-button&gt;
      &lt;field-button type=&quot;primary&quot;&gt;Primary&lt;/field-button&gt;
      &lt;field-button type=&quot;success&quot;&gt;Success&lt;/field-button&gt;
      &lt;field-button type=&quot;info&quot;&gt;Info&lt;/field-button&gt;
      &lt;field-button type=&quot;warning&quot;&gt;Warning&lt;/field-button&gt;
      &lt;field-button type=&quot;danger&quot;&gt;Danger&lt;/field-button&gt;
    &lt;/el-row&gt;

    &lt;el-row class=&quot;mb-4&quot;&gt;
      &lt;field-button plain&gt;Plain&lt;/field-button&gt;
      &lt;field-button type=&quot;primary&quot; plain&gt;Primary&lt;/field-button&gt;
      &lt;field-button type=&quot;success&quot; plain&gt;Success&lt;/field-button&gt;
      &lt;field-button type=&quot;info&quot; plain&gt;Info&lt;/field-button&gt;
      &lt;field-button type=&quot;warning&quot; plain&gt;Warning&lt;/field-button&gt;
      &lt;field-button type=&quot;danger&quot; plain&gt;Danger&lt;/field-button&gt;
    &lt;/el-row&gt;

    &lt;el-row class=&quot;mb-4&quot;&gt;
      &lt;field-button round&gt;Round&lt;/field-button&gt;
      &lt;field-button type=&quot;primary&quot; round&gt;Primary&lt;/field-button&gt;
      &lt;field-button type=&quot;success&quot; round&gt;Success&lt;/field-button&gt;
      &lt;field-button type=&quot;info&quot; round&gt;Info&lt;/field-button&gt;
      &lt;field-button type=&quot;warning&quot; round&gt;Warning&lt;/field-button&gt;
      &lt;field-button type=&quot;danger&quot; round&gt;Danger&lt;/field-button&gt;
    &lt;/el-row&gt;

    &lt;el-row&gt;
      &lt;field-button :icon=&quot;Search&quot; circle /&gt;
      &lt;field-button type=&quot;primary&quot; :icon=&quot;Edit&quot; circle /&gt;
      &lt;field-button type=&quot;success&quot; :icon=&quot;Check&quot; circle /&gt;
      &lt;field-button type=&quot;info&quot; :icon=&quot;Message&quot; circle /&gt;
      &lt;field-button type=&quot;warning&quot; :icon=&quot;Star&quot; circle /&gt;
      &lt;field-button type=&quot;danger&quot; :icon=&quot;Delete&quot; circle /&gt;
    &lt;/el-row&gt;
  &lt;/template&gt;

  &lt;script lang=&quot;ts&quot; setup&gt;
  import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
  } from &#39;@element-plus/icons-vue&#39;
  &lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="disabled-button" tabindex="-1"><a class="header-anchor" href="#disabled-button" aria-hidden="true">#</a> <strong>Disabled Button</strong></h3><p>The <code>disabled</code> attribute determines if the button is disabled.</p><p>Use <code>disabled</code> attribute to determine Whether a button is disabled. It accepts a Boolean value.</p>`,5),x=d(`<h4 id="viwer-source-1" tabindex="-1"><a class="header-anchor" href="#viwer-source-1" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">  &lt;template&gt;
    &lt;el-row class=&quot;mb-4&quot;&gt;
      &lt;field-button disabled&gt;Default&lt;/field-button&gt;
      &lt;field-button type=&quot;primary&quot; disabled&gt;Primary&lt;/field-button&gt;
      &lt;field-button type=&quot;success&quot; disabled&gt;Success&lt;/field-button&gt;
      &lt;field-button type=&quot;info&quot; disabled&gt;Info&lt;/field-button&gt;
      &lt;field-button type=&quot;warning&quot; disabled&gt;Warning&lt;/field-button&gt;
      &lt;field-button type=&quot;danger&quot; disabled&gt;Danger&lt;/field-button&gt;
    &lt;/el-row&gt;

    &lt;el-row&gt;
      &lt;field-button plain disabled&gt;Plain&lt;/field-button&gt;
      &lt;field-button type=&quot;primary&quot; plain disabled&gt;Primary&lt;/field-button&gt;
      &lt;field-button type=&quot;success&quot; plain disabled&gt;Success&lt;/field-button&gt;
      &lt;field-button type=&quot;info&quot; plain disabled&gt;Info&lt;/field-button&gt;
      &lt;field-button type=&quot;warning&quot; plain disabled&gt;Warning&lt;/field-button&gt;
      &lt;field-button type=&quot;danger&quot; plain disabled&gt;Danger&lt;/field-button&gt;
    &lt;/el-row&gt;
  &lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="loading-button" tabindex="-1"><a class="header-anchor" href="#loading-button" aria-hidden="true">#</a> <strong>Loading Button</strong></h3><p>Click the button to load data, then the button displays a loading state.</p><p>Set <code>loading</code> attribute to <code>true</code> to display loading state.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>You can use the <code>loading</code> slot or <code>loadingIcon</code> to customize your loading component</p><p>ps: <code>loading</code> slot has higher priority than <code>loadingIcon</code></p></div><br>`,7),k=d(`<h4 id="viwer-source-2" tabindex="-1"><a class="header-anchor" href="#viwer-source-2" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">  &lt;template&gt;
    &lt;el-row class=&quot;mb-4&quot;&gt;
      &lt;field-button type=&quot;primary&quot; loading&gt;Loading&lt;/field-button&gt;
      &lt;field-button type=&quot;primary&quot; :loading-icon=&quot;Eleme&quot; loading&gt;Loading&lt;/field-button&gt;
    &lt;/el-row&gt;
  &lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="sizes" tabindex="-1"><a class="header-anchor" href="#sizes" aria-hidden="true">#</a> <strong>Sizes</strong></h3><p>Besides default size, Button component provides three additional sizes for you to choose among different scenarios.</p><p>Use attribute <code>size</code> to set additional sizes with <code>large</code>, <code>small</code>.</p>`,5),w=d(`<h4 id="viwer-source-3" tabindex="-1"><a class="header-anchor" href="#viwer-source-3" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">  &lt;template&gt;
    &lt;el-row&gt;
      &lt;field-button size=&quot;large&quot;&gt;Large&lt;/field-button&gt;
      &lt;field-button&gt;Default&lt;/field-button&gt;
      &lt;field-button size=&quot;small&quot;&gt;Small&lt;/field-button&gt;
      &lt;field-button size=&quot;large&quot; :icon=&quot;Search&quot;&gt;Search&lt;/field-button&gt;
      &lt;field-button :icon=&quot;Search&quot;&gt;Search&lt;/field-button&gt;
      &lt;field-button size=&quot;small&quot; :icon=&quot;Search&quot;&gt;Search&lt;/field-button&gt;
    &lt;/el-row&gt;
  &lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="basic-example" tabindex="-1"><a class="header-anchor" href="#basic-example" aria-hidden="true">#</a> <strong>Basic Example</strong></h3><p>Basic example with all the button attributes</p><br>`,5),B=t("h3",{id:"props",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#props","aria-hidden":"true"},"#"),s(),t("strong",null,"Props")],-1),S=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"Name"),t("th",{style:{"text-align":"center"}},"Description"),t("th",{style:{"text-align":"center"}},"Type"),t("th",{style:{"text-align":"center"}},"Mandatory")])],-1),C=t("td",{style:{"text-align":"center"}},[t("code",null,"text")],-1),D=t("td",{style:{"text-align":"center"}},"Binding Value",-1),z={style:{"text-align":"center"}},L=t("strong",null,n("String / Array / Object / Boolean"),-1),P={style:{"text-align":"center"}},V=t("strong",null,n("True"),-1),j=t("h3",{id:"attributes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),s(),t("strong",null,"Attributes")],-1),E=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"Name"),t("th",{style:{"text-align":"center"}},"Description"),t("th",{style:{"text-align":"center"}},"Type"),t("th",{style:{"text-align":"center"}},"Default")])],-1),I=t("td",{style:{"text-align":"center"}},[t("code",null,"size")],-1),W={style:{"text-align":"center"}},F=t("strong",null,n("large"),-1),N=t("strong",null,n("default"),-1),T=t("strong",null,n("small"),-1),A={style:{"text-align":"center"}},O=t("strong",null,n("String"),-1),M=t("td",{style:{"text-align":"center"}},"——————",-1),U=t("td",{style:{"text-align":"center"}},[t("code",null,"type")],-1),H={style:{"text-align":"center"}},R=t("strong",null,n("Primary"),-1),G=t("strong",null,n("Success"),-1),K=t("strong",null,n("Info"),-1),Y=t("strong",null,n("Warning"),-1),J=t("strong",null,n("Danger"),-1),Q={style:{"text-align":"center"}},X=t("strong",null,n("String"),-1),Z=t("td",{style:{"text-align":"center"}},"——————",-1),$=t("td",{style:{"text-align":"center"}},[t("code",null,"disabled")],-1),tt=t("td",{style:{"text-align":"center"}},"Disable the Button",-1),et={style:{"text-align":"center"}},nt=t("strong",null,n("Boolean"),-1),it={style:{"text-align":"center"}},lt=t("strong",null,n("False"),-1),st=t("td",{style:{"text-align":"center"}},[t("code",null,"plain")],-1),ot=t("td",{style:{"text-align":"center"}},"Determine Whether it's a Plain Button",-1),dt={style:{"text-align":"center"}},at=t("strong",null,n("Boolean"),-1),rt={style:{"text-align":"center"}},ut=t("strong",null,n("False"),-1),ct=t("td",{style:{"text-align":"center"}},[t("code",null,"round")],-1),gt=t("td",{style:{"text-align":"center"}},"Determine Whether it's a Round Button",-1),mt={style:{"text-align":"center"}},vt=t("strong",null,n("Boolean"),-1),pt={style:{"text-align":"center"}},bt=t("strong",null,n("False"),-1),ht=t("td",{style:{"text-align":"center"}},[t("code",null,"circle")],-1),ft=t("td",{style:{"text-align":"center"}},"Determine Whether it's a Circle Button",-1),_t={style:{"text-align":"center"}},yt=t("strong",null,n("Boolean"),-1),qt={style:{"text-align":"center"}},xt=t("strong",null,n("False"),-1),kt=t("td",{style:{"text-align":"center"}},[t("code",null,"loading")],-1),wt=t("td",{style:{"text-align":"center"}},"Determine Whether it's Loading",-1),Bt={style:{"text-align":"center"}},St=t("strong",null,n("Boolean"),-1),Ct={style:{"text-align":"center"}},Dt=t("strong",null,n("False"),-1),zt=d('<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> <strong>Slots</strong></h3><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>header</code></td><td style="text-align:center;">Customize Default Content Top</td></tr><tr><td style="text-align:center;"><code>content</code></td><td style="text-align:center;">Customize Default Content</td></tr><tr><td style="text-align:center;"><code>footer</code></td><td style="text-align:center;">Customize Default Content Bottom</td></tr></tbody></table><h3 id="example-for-developer" tabindex="-1"><a class="header-anchor" href="#example-for-developer" aria-hidden="true">#</a> <strong>Example for Developer</strong></h3>',3),Lt={href:"https://stackblitz.com/edit/field-button?file=app.vue",target:"_blank",rel:"noopener noreferrer"},Pt=t("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),Vt=t("figcaption",null,"Open in StackBlitz",-1),jt=d(`<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> <strong>Directory</strong></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FieldButtom                   <span class="token comment"># Field Button specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function Et(It,Wt){const u=o("Button"),c=o("ButtonDisabled"),g=o("loadingButton"),m=o("ButtonSize"),v=o("ButtonExample"),i=o("el-tag"),a=o("el-divider"),p=o("ExternalLinkIcon");return h(),f("div",null,[t("span",null,[s(" Commonly used button. "),y,e(u),q,e(c),x,e(g),k,e(m),w,e(v),B,t("table",null,[S,t("tbody",null,[t("tr",null,[C,D,t("td",z,[e(i,{effect:"Light"},{default:l(()=>[L,s("** ")]),_:1})]),t("td",P,[e(i,{effect:"dark",round:""},{default:l(()=>[V]),_:1})])])])]),j,t("table",null,[E,t("tbody",null,[t("tr",null,[I,t("td",W,[s("Button Size "),e(i,{effect:"plain"},{default:l(()=>[F,s(),e(a,{direction:"vertical"}),s(),N,s(),e(a,{direction:"vertical"}),s(),T]),_:1})]),t("td",A,[e(i,{effect:"plain"},{default:l(()=>[O]),_:1})]),M]),t("tr",null,[U,t("td",H,[s("Button type "),e(i,{effect:"Light"},{default:l(()=>[e(i,{effect:"dark"},{default:l(()=>[R]),_:1}),s(),e(a,{direction:"vertical"}),s(),e(i,{effect:"dark",type:"success"},{default:l(()=>[G]),_:1}),s(),e(a,{direction:"vertical"}),s(),e(i,{effect:"dark",type:"info"},{default:l(()=>[K]),_:1}),s(),e(a,{direction:"vertical"}),s(),e(i,{effect:"dark",type:"warning"},{default:l(()=>[Y]),_:1}),s(),e(a,{direction:"vertical"}),s(),e(i,{effect:"dark",type:"danger"},{default:l(()=>[J]),_:1})]),_:1})]),t("td",Q,[e(i,{effect:"Light"},{default:l(()=>[X]),_:1})]),Z]),t("tr",null,[$,tt,t("td",et,[e(i,{effect:"Light"},{default:l(()=>[nt]),_:1})]),t("td",it,[e(i,{effect:"dark",round:""},{default:l(()=>[lt]),_:1})])]),t("tr",null,[st,ot,t("td",dt,[e(i,{effect:"Light"},{default:l(()=>[at]),_:1})]),t("td",rt,[e(i,{effect:"dark",round:""},{default:l(()=>[ut]),_:1})])]),t("tr",null,[ct,gt,t("td",mt,[e(i,{effect:"Light"},{default:l(()=>[vt]),_:1})]),t("td",pt,[e(i,{effect:"dark",round:""},{default:l(()=>[bt]),_:1})])]),t("tr",null,[ht,ft,t("td",_t,[e(i,{effect:"Light"},{default:l(()=>[yt]),_:1})]),t("td",qt,[e(i,{effect:"dark",round:""},{default:l(()=>[xt]),_:1})])]),t("tr",null,[kt,wt,t("td",Bt,[e(i,{effect:"Light"},{default:l(()=>[St]),_:1})]),t("td",Ct,[e(i,{effect:"dark",round:""},{default:l(()=>[Dt]),_:1})])])])]),zt,t("figure",null,[t("a",Lt,[Pt,e(p)]),Vt]),jt,r(" ### Example "),r(` ::: vue-playground Vue Playground with customized settings and import

@file App.vue

\`\`\`vue
<script setup>
import { ref } from "vue";
import Comp from "./Comp.vue";

const msg = ref("Hello Playground!");
<\/script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <Comp />
</template>
\`\`\`

@file Comp.vue

\`\`\`vue
<script setup>
import { useBattery } from "@vueuse/core";
import { ref } from "vue";

const { charging, level } = useBattery();
<\/script>

<template>
  <h1>Battery status</h1>
  <p>Charging: {{ charging }}</p>
  <p>Level: {{ level * 100 }}%</p>
</template>
\`\`\`

@import

\`\`\`json
{
  "imports": {
    "@vueuse/core": "https://unpkg.com/@vueuse/core/index.mjs",
    "@vueuse/shared": "https://unpkg.com/@vueuse/shared/index.mjs",
    "vue-demi": "https://unpkg.com/vue-demi/lib/index.mjs"
  }
}
\`\`\`

@setting

\`\`\`json
{
  "showCompileOutput": true
}
\`\`\`

:::

:::: details Code

\`\`\`\`md
::: vue-playground Vue Playground with customized settings and import

@file App.vue

\`\`\`vue
<script setup>
import { ref } from "vue";
import Comp from "./Comp.vue";

const msg = ref("Hello Playground!");
<\/script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <Comp />
</template>
\`\`\`

@file Comp.vue

\`\`\`vue
<script setup>
import { useBattery } from "@vueuse/core";
import { ref } from "vue";

const { charging, level } = useBattery();
<\/script>

<template>
  <h1>Battery status</h1>
  <p>Charging: {{ charging }}</p>
  <p>Level: {{ level * 100 }}%</p>
</template>
\`\`\`

@import

\`\`\`json
{
  "imports": {
    "@vueuse/core": "https://unpkg.com/@vueuse/core/index.mjs",
    "@vueuse/shared": "https://unpkg.com/@vueuse/shared/index.mjs",
    "vue-demi": "https://unpkg.com/vue-demi/lib/index.mjs"
  }
}
\`\`\`

@setting

\`\`\`json
{
  "showCompileOutput": true
}
\`\`\`

:::
\`\`\`\`

:::: `)])])}const Nt=b(_,[["render",Et],["__file","FieldButtom.html.vue"]]);export{Nt as default};
