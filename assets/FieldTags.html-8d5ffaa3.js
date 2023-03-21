import{aK as m,Q as g,S as b,U as e,ae as n,a8 as s,ac as l,aS as d,C as a,ad as i}from"./framework-e19f4168.js";const p={},h=e("p",null,"Used for marking and selection.",-1),_=e("h3",{id:"basic-usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),l(" Basic Usage")],-1),f=e("p",null,[l("Use the "),e("code",null,"type"),l(" attribute to define Tag's type. In addition, the "),e("code",null,"color"),l(" attribute can be used to set the background color of the Tag.")],-1),q=d(`<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FielTags :value=&quot;&#39;Tags 1&#39;&quot; /&gt;
  &lt;FielTags :value=&quot;&#39;Tags 2&#39;&quot; type=&quot;success&quot; /&gt;
  &lt;FielTags :value=&quot;&#39;Tags 3&#39;&quot; type=&quot;info&quot; /&gt;
  &lt;FielTags :value=&quot;&#39;Tags 4&#39;&quot; type=&quot;warning&quot; /&gt;
  &lt;FielTags :value=&quot;&#39;Tags 5&#39;&quot; type=&quot;danger&quot; /&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="sizes" tabindex="-1"><a class="header-anchor" href="#sizes" aria-hidden="true">#</a> Sizes</h3><p>Besides default <code>size</code>, Tag component provides three additional sizes for you to choose among different scenarios.</p><p>Use attribute <code>size</code> to set additional sizes with <code>large</code>, <code>default</code> or <code>small</code>.</p>`,5),y=d(`<h4 id="viwer-source-1" tabindex="-1"><a class="header-anchor" href="#viwer-source-1" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FielTags :value=&quot;&#39;Default&#39;&quot; /&gt;
  &lt;FielTags :value=&quot;&#39;large&#39;&quot; size=&quot;large&quot;/&gt;
  &lt;FielTags :value=&quot;&#39;small&#39;&quot; size=&quot;small&quot; /&gt;
&lt;/template&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> Theme</h3><p>Tag provide three different themes: <code>dark</code>、<code>light</code> and <code>plain</code></p><p>Using <code>effect</code> to change, default is <code>light</code></p>`,5),x=d(`<h4 id="viwer-source-2" tabindex="-1"><a class="header-anchor" href="#viwer-source-2" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FielTags
    v-for=&quot;item in items&quot;
    :key=&quot;item.label&quot;
    :type=&quot;item.type&quot;
    class=&quot;mx-1&quot;
    effect=&quot;dark&quot;
    :value=&quot;item.label&quot;
  /&gt;
  &lt;FielTags
    v-for=&quot;item in items&quot;
    :key=&quot;item.label&quot;
    :type=&quot;item.type&quot;
    class=&quot;mx-1&quot;
    effect=&quot;light&quot;
    :value=&quot;item.label&quot;
  /&gt;
  &lt;FielTags
    v-for=&quot;item in items&quot;
    :key=&quot;item.label&quot;
    :type=&quot;item.type&quot;
    class=&quot;mx-1&quot;
    effect=&quot;plain&quot;
    :value=&quot;item.label&quot;
  /&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

import type { TagProps } from &#39;element-plus&#39;

type Item = { type: TagProps[&#39;type&#39;]; label: string }

const items = ref&lt;Array&lt;Item&gt;&gt;([
  { type: &#39;&#39;, label: &#39;Tag 1&#39; },
  { type: &#39;success&#39;, label: &#39;Tag 2&#39; },
  { type: &#39;info&#39;, label: &#39;Tag 3&#39; },
  { type: &#39;danger&#39;, label: &#39;Tag 4&#39; },
  { type: &#39;warning&#39;, label: &#39;Tag 5&#39; },
])
&lt;/script&gt;

&lt;style&gt;
.el-tag {
  margin: 5px;
}
&lt;/style&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="rounded" tabindex="-1"><a class="header-anchor" href="#rounded" aria-hidden="true">#</a> Rounded</h3><p>Tag can also be rounded like button.</p>`,4),k=d(`<h4 id="viwer-source-3" tabindex="-1"><a class="header-anchor" href="#viwer-source-3" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div class=&quot;flex flex-wrap gap-2 my-2&quot;&gt;
    &lt;el-tag
      v-for=&quot;item in items&quot;
      :key=&quot;item.label&quot;
      :type=&quot;item.type&quot;
      class=&quot;mx-1&quot;
      effect=&quot;dark&quot;
      round
      :value=&quot;item.label&quot;
    /&gt;
  &lt;/div&gt;
  &lt;div class=&quot;flex flex-wrap gap-2&quot;&gt;
    &lt;el-tag
      v-for=&quot;item in items&quot;
      :key=&quot;item.label&quot;
      :type=&quot;item.type&quot;
      class=&quot;mx-1&quot;
      effect=&quot;light&quot;
      round
      :value=&quot;item.label&quot;
    /&gt;
  &lt;/div&gt;
  &lt;div class=&quot;flex flex-wrap gap-2 my-2&quot;&gt;
    &lt;el-tag
      v-for=&quot;item in items&quot;
      :key=&quot;item.label&quot;
      :type=&quot;item.type&quot;
      class=&quot;mx-1&quot;
      effect=&quot;plain&quot;
      round
      :value=&quot;item.label&quot;
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

import type { TagProps } from &#39;element-plus&#39;

type Item = { type: TagProps[&#39;type&#39;]; label: string }

const items = ref&lt;Array&lt;Item&gt;&gt;([
  { type: &#39;&#39;, label: &#39;Tag 1&#39; },
  { type: &#39;success&#39;, label: &#39;Tag 2&#39; },
  { type: &#39;info&#39;, label: &#39;Tag 3&#39; },
  { type: &#39;danger&#39;, label: &#39;Tag 4&#39; },
  { type: &#39;warning&#39;, label: &#39;Tag 5&#39; },
])
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>`,3),T=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),w=e("td",{style:{"text-align":"center"}},[e("code",null,"value")],-1),z=e("td",{style:{"text-align":"center"}},"Binding Value.",-1),S={style:{"text-align":"center"}},F=e("strong",null,i("String"),-1),B={style:{"text-align":"center"}},L=e("strong",null,i("True"),-1),V=e("h3",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),l(" Attributes")],-1),C=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),D=e("td",{style:{"text-align":"center"}},[e("code",null,"type")],-1),I=e("td",{style:{"text-align":"center"}},"component type",-1),N={style:{"text-align":"center"}},U=e("strong",null,i("String"),-1),A={style:{"text-align":"center"}},P=e("strong",null,i("—————"),-1),E=e("td",{style:{"text-align":"center"}},[e("code",null,"effect")],-1),R={style:{"text-align":"center"}},M=e("strong",null,i("dark / light / plain"),-1),O={style:{"text-align":"center"}},G=e("strong",null,i("String"),-1),K={style:{"text-align":"center"}},Q=e("strong",null,i("light"),-1),j=e("td",{style:{"text-align":"center"}},[e("code",null,"round")],-1),H=e("td",{style:{"text-align":"center"}},"hether Tag is rounded",-1),J={style:{"text-align":"center"}},W=e("strong",null,i("Boolean"),-1),X={style:{"text-align":"center"}},Y=e("strong",null,i("False"),-1),Z=e("td",{style:{"text-align":"center"}},[e("code",null,"size")],-1),$={style:{"text-align":"center"}},ee=e("strong",null,"large / default / small",-1),ne={style:{"text-align":"center"}},te=e("strong",null,i("String"),-1),se={style:{"text-align":"center"}},ie=e("strong",null,i("default"),-1),le=e("h3",{id:"example-for-developer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-for-developer","aria-hidden":"true"},"#"),l(" Example for Developer")],-1),ae={href:"https://stackblitz.com/edit/fields-tags?file=app.vue",target:"_blank",rel:"noopener noreferrer"},de=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),oe=e("figcaption",null,"Open in StackBlitz",-1),ce=d(`<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> Directory</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FielTags                      <span class="token comment"># Field Tags specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function re(ue,ve){const o=a("TagsBasic"),c=a("TagsSizes"),r=a("TagsTheme"),u=a("TagsRounded"),t=a("el-tag"),v=a("ExternalLinkIcon");return g(),b("div",null,[e("span",null,[h,_,f,n(o),q,n(c),y,n(r),x,n(u),k,e("table",null,[T,e("tbody",null,[e("tr",null,[w,z,e("td",S,[n(t,{effect:"Light"},{default:s(()=>[F]),_:1})]),e("td",B,[n(t,{effect:"dark",round:""},{default:s(()=>[L]),_:1})])])])]),V,e("table",null,[C,e("tbody",null,[e("tr",null,[D,I,e("td",N,[n(t,{effect:"Light"},{default:s(()=>[U]),_:1})]),e("td",A,[n(t,{effect:"dark",round:""},{default:s(()=>[P]),_:1})])]),e("tr",null,[E,e("td",R,[l("component theme "),n(t,{effect:"Light"},{default:s(()=>[M]),_:1})]),e("td",O,[n(t,{effect:"Light"},{default:s(()=>[G]),_:1})]),e("td",K,[n(t,{effect:"dark",round:""},{default:s(()=>[Q]),_:1})])]),e("tr",null,[j,H,e("td",J,[n(t,{effect:"Light"},{default:s(()=>[W]),_:1})]),e("td",X,[n(t,{effect:"dark",round:""},{default:s(()=>[Y]),_:1})])]),e("tr",null,[Z,e("td",$,[l("size of Switch "),n(t,{effect:"Light"},{default:s(()=>[ee]),_:1})]),e("td",ne,[n(t,{effect:"Light"},{default:s(()=>[n(t,{effect:"Light"},{default:s(()=>[te]),_:1})]),_:1})]),e("td",se,[n(t,{effect:"dark",round:""},{default:s(()=>[ie]),_:1})])])])]),le,e("figure",null,[e("a",ae,[de,n(v)]),oe]),ce])])}const ge=m(p,[["render",re],["__file","FieldTags.html.vue"]]);export{ge as default};
