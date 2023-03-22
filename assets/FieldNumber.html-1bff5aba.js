import{aK as g,S as _,U as b,V as e,ae as t,a8 as s,ac as d,aS as l,D as a,ad as i}from"./framework-233955b8.js";const f={},y=l('<p>Input numerical values with a customizable range.</p><h3 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h3><p>Bind a variable to <code>v-model</code> in <code>&lt;el-input-number&gt;</code> element and you are set.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>When inputting invalid string to the input box, input value will emit <code>NaN</code> to the upper layer as result of error</p></div>',4),x=l(`<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FieldNumber :num=&quot;num&quot; :min=&quot;1&quot; :max=&quot;10&quot; /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const num = ref(1)
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled" aria-hidden="true">#</a> Disabled</h3><p>The <code>disabled</code> attribute accepts a <code>boolean</code>, and if the value is <code>true</code>, the component is disabled. If you just need to control the value within a range, you can add min attribute to set the minimum value and <code>max</code> to set the maximum value. By default, the minimum value is <code>0</code>.</p>`,4),q=l(`<h4 id="viwer-source-1" tabindex="-1"><a class="header-anchor" href="#viwer-source-1" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FieldNumber :num=&quot;num&quot; :min=&quot;1&quot; :max=&quot;10&quot; :disabled=&quot;true&quot; /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const num = ref(1)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps</h3><p>Allows you to define incremental steps.</p><p>Add <code>step</code> attribute to set the step.</p>`,5),k=l(`<h4 id="viwer-source-2" tabindex="-1"><a class="header-anchor" href="#viwer-source-2" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FieldNumber :num=&quot;num&quot; :min=&quot;1&quot; :max=&quot;10&quot; :step=&quot;2&quot; /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const num = ref(1)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="step-strictly" tabindex="-1"><a class="header-anchor" href="#step-strictly" aria-hidden="true">#</a> Step strictly</h3><p>The <code>step-strictly</code> attribute accepts a <code>boolean</code>. if this attribute is <code>true</code>, input value can only be multiple of step.</p>`,4),w=l(`<h4 id="viwer-source-3" tabindex="-1"><a class="header-anchor" href="#viwer-source-3" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FieldNumber :num=&quot;num&quot; :min=&quot;1&quot; :max=&quot;10&quot; :step=&quot;2&quot; :stepStrictly=&quot;true&quot; /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const num = ref(1)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="precision" tabindex="-1"><a class="header-anchor" href="#precision" aria-hidden="true">#</a> Precision</h3><p>Add <code>precision</code> attribute to set the precision of input value.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The value of <code>precision</code> must be a non negative integer and should not be less than the decimal places of <code>step</code>.</p></div>`,5),N=l(`<h4 id="viwer-source-4" tabindex="-1"><a class="header-anchor" href="#viwer-source-4" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FieldNumber :num=&quot;num&quot; :precision=&quot;2&quot; :step=&quot;0.1&quot; :max=&quot;10&quot; /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const num = ref(1)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="controls-position" tabindex="-1"><a class="header-anchor" href="#controls-position" aria-hidden="true">#</a> Controls Position</h3><p>Set <code>controls-position</code> to decide the position of control buttons.</p>`,4),S=l(`<h4 id="viwer-source-5" tabindex="-1"><a class="header-anchor" href="#viwer-source-5" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FieldNumber :num=&quot;num&quot; :precision=&quot;2&quot; :step=&quot;0.1&quot; :max=&quot;10&quot; :controlsPosition=&quot;&#39;right&#39;&quot; /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const num = ref(1)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="value-type" tabindex="-1"><a class="header-anchor" href="#value-type" aria-hidden="true">#</a> Value Type</h3><br><br>`,5),L=l(`<h4 id="viwer-source-6" tabindex="-1"><a class="header-anchor" href="#viwer-source-6" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;p&gt; {{ &#39;Value Type&#39; }} &lt;el-tag effect=&quot;Light&quot;&gt;  {{ &#39;ID / INTEGER &#39; }} &lt;/el-tag&gt; &lt;/p&gt;
  &lt;FieldNumber
    :num=&quot;num&quot;
    :controls=&quot;true&quot;
  /&gt;
  &lt;p&gt; {{ &#39;Value Type&#39; }} &lt;el-tag effect=&quot;Light&quot;&gt;  {{ &#39;NUMBER / QUANTITY &#39; }} &lt;/el-tag&gt; &lt;/p&gt;
  &lt;FieldNumber
    :num=&quot;num2&quot;
    :valueType=&quot;&#39;QUANTITY&#39;&quot;
    :controls=&quot;true&quot;
    :precision=&quot;2&quot;
  /&gt;
  &lt;p&gt; {{ &#39;Value Type&#39; }} &lt;el-tag effect=&quot;Light&quot;&gt;  {{ &#39;AMOUNT / COSTS_PLUS_PRICES &#39; }} &lt;/el-tag&gt; &lt;/p&gt;
  &lt;FieldNumber
    :num=&quot;num3&quot;
    :valueType=&quot;&#39;COSTS_PLUS_PRICES&#39;&quot;
    :controls=&quot;true&quot;
    :controlsPosition=&quot;&#39;right&#39;&quot;
    :slotsCurrency=&quot;&#39;$&#39;&quot;
  /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const num = ref(1)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>`,3),T=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),C=e("td",{style:{"text-align":"center"}},[e("code",null,"num")],-1),V=e("td",{style:{"text-align":"center"}},"binding value",-1),F={style:{"text-align":"center"}},I=e("strong",null,i("number"),-1),P={style:{"text-align":"center"}},D=e("strong",null,i("true"),-1),B=e("td",{style:{"text-align":"center"}},[e("code",null,"valueType")],-1),E={style:{"text-align":"center"}},z=e("strong",null,i("ID / INTEGER / NUMBER / QUANTITY / AMOUNT / COSTS_PLUS_PRICES"),-1),A={style:{"text-align":"center"}},U=e("strong",null,i("string"),-1),O={style:{"text-align":"center"}},R=e("strong",null,i("False"),-1),M=e("h3",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),d(" Attributes")],-1),G=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),Q=e("td",{style:{"text-align":"center"}},[e("code",null,"min")],-1),Y=e("td",{style:{"text-align":"center"}},"the minimum allowed value",-1),$={style:{"text-align":"center"}},j=e("strong",null,i("number"),-1),K={style:{"text-align":"center"}},W=e("strong",null,i("-Infinity"),-1),H=e("td",{style:{"text-align":"center"}},[e("code",null,"max")],-1),J=e("td",{style:{"text-align":"center"}},"the maximum allowed value",-1),X={style:{"text-align":"center"}},Z=e("strong",null,i("number"),-1),ee={style:{"text-align":"center"}},te=e("strong",null,i("Infinity"),-1),ne=e("td",{style:{"text-align":"center"}},[e("code",null,"step")],-1),se=e("td",{style:{"text-align":"center"}},"incremental step",-1),ie={style:{"text-align":"center"}},le=e("strong",null,i("number"),-1),ae={style:{"text-align":"center"}},de=e("strong",null,i("1"),-1),oe=e("td",{style:{"text-align":"center"}},[e("code",null,"stepStrictly")],-1),ce=e("td",{style:{"text-align":"center"}},"whether input value can only be multiple of step",-1),re={style:{"text-align":"center"}},ue=e("strong",null,i("boolean"),-1),me={style:{"text-align":"center"}},ve=e("strong",null,i("False"),-1),he=e("td",{style:{"text-align":"center"}},[e("code",null,"precision")],-1),pe=e("td",{style:{"text-align":"center"}},"precision of input value",-1),ge={style:{"text-align":"center"}},_e=e("strong",null,i("number"),-1),be={style:{"text-align":"center"}},fe=e("strong",null,i("0"),-1),ye=e("td",{style:{"text-align":"center"}},[e("code",null,"controls")],-1),xe=e("td",{style:{"text-align":"center"}},"whether to enable the control buttons",-1),qe={style:{"text-align":"center"}},ke=e("strong",null,i("boolean"),-1),we={style:{"text-align":"center"}},Ne=e("strong",null,i("False"),-1),Se=e("td",{style:{"text-align":"center"}},[e("code",null,"controlsPosition")],-1),Le=e("td",{style:{"text-align":"center"}},"position of the control buttons",-1),Te={style:{"text-align":"center"}},Ce=e("strong",null,i("strign"),-1),Ve={style:{"text-align":"center"}},Fe=e("strong",null,i("right"),-1),Ie=e("td",{style:{"text-align":"center"}},[e("code",null,"disabled")],-1),Pe=e("td",{style:{"text-align":"center"}},[d("whether Switch is "),e("code",null,"disabled")],-1),De={style:{"text-align":"center"}},Be=e("strong",null,i("boolean"),-1),Ee={style:{"text-align":"center"}},ze=e("strong",null,i("true"),-1),Ae=e("td",{style:{"text-align":"center"}},[e("code",null,"size")],-1),Ue={style:{"text-align":"center"}},Oe={style:{"text-align":"center"}},Re=e("strong",null,i("string"),-1),Me={style:{"text-align":"center"}},Ge=e("td",{style:{"text-align":"center"}},[e("code",null,"placeholder")],-1),Qe=e("td",{style:{"text-align":"center"}},"placeholder the Select",-1),Ye={style:{"text-align":"center"}},$e=e("strong",null,i("string"),-1),je={style:{"text-align":"center"}},Ke=e("strong",null,i("Select"),-1),We=e("td",{style:{"text-align":"center"}},[e("code",null,"slotsCurrency")],-1),He=e("td",{style:{"text-align":"center"}},"The format or symbol of the currency to display",-1),Je={style:{"text-align":"center"}},Xe=e("strong",null,i("string"),-1),Ze={style:{"text-align":"center"}},et=e("strong",null,i("$"),-1),tt=l('<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>header</code></td><td style="text-align:center;">Customize Default Content Top</td></tr><tr><td style="text-align:center;"><code>footer</code></td><td style="text-align:center;">Customize Default Content Bottom</td></tr></tbody></table><h3 id="example-for-developer" tabindex="-1"><a class="header-anchor" href="#example-for-developer" aria-hidden="true">#</a> Example for Developer</h3>',3),nt={href:"https://stackblitz.com/edit/fields-number?file=app.vue",target:"_blank",rel:"noopener noreferrer"},st=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),it=e("figcaption",null,"Open in StackBlitz",-1),lt=l(`<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> Directory</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FieldNumber                   <span class="token comment"># Field Number specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function at(dt,ot){const o=a("NumberBsic"),c=a("NumberDisabled"),r=a("NumberSteps"),u=a("NumberStepsStrictly"),m=a("NumberPrecision"),v=a("NumberControlsPosition"),h=a("NumberValueType"),n=a("el-tag"),p=a("ExternalLinkIcon");return _(),b("div",null,[e("span",null,[y,t(o),x,t(c),q,t(r),k,t(u),w,t(m),N,t(v),S,t(h),L,e("table",null,[T,e("tbody",null,[e("tr",null,[C,V,e("td",F,[t(n,{effect:"Light"},{default:s(()=>[I]),_:1})]),e("td",P,[t(n,{effect:"dark",round:""},{default:s(()=>[D]),_:1})])]),e("tr",null,[B,e("td",E,[d("Type value "),t(n,{effect:"Light"},{default:s(()=>[z]),_:1})]),e("td",A,[t(n,{effect:"Light"},{default:s(()=>[U]),_:1})]),e("td",O,[t(n,{effect:"dark",round:""},{default:s(()=>[R]),_:1})])])])]),M,e("table",null,[G,e("tbody",null,[e("tr",null,[Q,Y,e("td",$,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[j]),_:1})]),_:1})]),e("td",K,[t(n,{effect:"dark",round:""},{default:s(()=>[W]),_:1})])]),e("tr",null,[H,J,e("td",X,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[Z]),_:1})]),_:1})]),e("td",ee,[t(n,{effect:"dark",round:""},{default:s(()=>[te]),_:1})])]),e("tr",null,[ne,se,e("td",ie,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[le]),_:1})]),_:1})]),e("td",ae,[t(n,{effect:"dark",round:""},{default:s(()=>[de]),_:1})])]),e("tr",null,[oe,ce,e("td",re,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[ue]),_:1})]),_:1})]),e("td",me,[t(n,{effect:"dark",round:""},{default:s(()=>[ve]),_:1})])]),e("tr",null,[he,pe,e("td",ge,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[_e]),_:1})]),_:1})]),e("td",be,[t(n,{effect:"dark",round:""},{default:s(()=>[fe]),_:1})])]),e("tr",null,[ye,xe,e("td",qe,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[ke]),_:1})]),_:1})]),e("td",we,[t(n,{effect:"dark",round:""},{default:s(()=>[Ne]),_:1})])]),e("tr",null,[Se,Le,e("td",Te,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[Ce]),_:1})]),_:1})]),e("td",Ve,[t(n,{effect:"dark",round:""},{default:s(()=>[Fe]),_:1})])]),e("tr",null,[Ie,Pe,e("td",De,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[Be]),_:1})]),_:1})]),e("td",Ee,[t(n,{effect:"dark",round:""},{default:s(()=>[ze]),_:1})])]),e("tr",null,[Ae,e("td",Ue,[d("size of Switch "),t(n,{effect:"Light"},{default:s(()=>[d(" large / default / small ")]),_:1})]),e("td",Oe,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[Re]),_:1})]),_:1})]),e("td",Me,[t(n,{effect:"dark",round:""},{default:s(()=>[d(i("default"))]),_:1})])]),e("tr",null,[Ge,Qe,e("td",Ye,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[$e]),_:1})]),_:1})]),e("td",je,[t(n,{effect:"dark",round:""},{default:s(()=>[Ke]),_:1})])]),e("tr",null,[We,He,e("td",Je,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[Xe]),_:1})]),_:1})]),e("td",Ze,[t(n,{effect:"dark",round:""},{default:s(()=>[et]),_:1})])])])]),tt,e("figure",null,[e("a",nt,[st,t(p)]),it]),lt])])}const rt=g(f,[["render",at],["__file","FieldNumber.html.vue"]]);export{rt as default};
