import{aK as p,Q as h,S as _,U as e,ac as s,ae as n,a8 as l,aS as d,C as a,ad as i}from"./framework-e19f4168.js";const g={},f=e("p",null,"When there are plenty of options, use a drop-down menu to display and select desired ones.",-1),y={class:"hint-container tip"},x=e("p",{class:"hint-container-title"},"Tips",-1),q=e("code",null,"<client-only></client-only>",-1),k={href:"https://nuxt.com/v3",target:"_blank",rel:"noopener noreferrer"},S={href:"https://vitepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},O=e("h3",{id:"basic-usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),s(" Basic usage")],-1),w=e("p",null,[e("code",null,"v-model"),s(" is the "),e("code",null,"value"),s(" of "),e("code",null,"el-option"),s(" that is currently selected.")],-1),L=d(`<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FieldSelect :value=&quot;value&quot; :optionList=&quot;options&quot; size=&quot;small&quot; /&gt;
  &lt;FieldSelect :value=&quot;value&quot; :optionList=&quot;options&quot; /&gt;
  &lt;FieldSelect :value=&quot;value&quot; :optionList=&quot;options&quot; size=&quot;small&quot; /&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const value = ref(&#39;&#39;)

const options = [
  {
    value: &#39;Option1&#39;,
    label: &#39;Option1&#39;,
    disabled: false,
  },
  {
    value: &#39;Option2&#39;,
    label: &#39;Option2&#39;,
    disabled: false,
  },
  {
    value: &#39;Option3&#39;,
    label: &#39;Option3&#39;,
    disabled: false,
  },
  {
    value: &#39;Option4&#39;,
    label: &#39;Option4&#39;,
    disabled: false,
  },
  {
    value: &#39;Option5&#39;,
    label: &#39;Option5&#39;,
    disabled: false,
  },
]
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="disabled-option" tabindex="-1"><a class="header-anchor" href="#disabled-option" aria-hidden="true">#</a> Disabled Option</h3><p>Set the value of <code>disabled</code> in <code>el-option</code> to <code>true</code> to <code>disable</code> this option.</p>`,4),F=d(`<h4 id="viwer-source-1" tabindex="-1"><a class="header-anchor" href="#viwer-source-1" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FieldSelect :value=&quot;value&quot; :optionList=&quot;options&quot; size=&quot;small&quot; /&gt;
  &lt;FieldSelect :value=&quot;value&quot; :optionList=&quot;options&quot; /&gt;
  &lt;FieldSelect :value=&quot;value&quot; :optionList=&quot;options&quot; size=&quot;small&quot; /&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const value = ref(&#39;&#39;)

const options = [
  {
    value: &#39;Option1&#39;,
    label: &#39;Option1&#39;,
    disabled: false,
  },
  {
    value: &#39;Option2&#39;,
    label: &#39;Option2&#39;,
    disabled: false,
  },
  {
    value: &#39;Option3&#39;,
    label: &#39;Option3&#39;,
    disabled: false,
  },
  {
    value: &#39;Option4&#39;,
    label: &#39;Option4&#39;,
    disabled: false,
  },
  {
    value: &#39;Option5&#39;,
    label: &#39;Option5&#39;,
    disabled: false,
  },
]
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="disabled-select" tabindex="-1"><a class="header-anchor" href="#disabled-select" aria-hidden="true">#</a> Disabled Select</h3><p>Disable the whole component.</p><p>Set <code>disabled</code> of <code>el-select</code> to make it <code>disabled</code>.</p>`,5),T=d(`<h4 id="viwer-source-2" tabindex="-1"><a class="header-anchor" href="#viwer-source-2" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FieldSelect :value=&quot;value&quot; :optionList=&quot;options&quot; :disabled=&quot;true&quot; /&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const value = ref(&#39;&#39;)

const options = [
  {
    value: &#39;Option1&#39;,
    label: &#39;Option1&#39;,
    disabled: false,
  },
  {
    value: &#39;Option2&#39;,
    label: &#39;Option2&#39;,
    disabled: true,
  },
  {
    value: &#39;Option3&#39;,
    label: &#39;Option3&#39;,
    disabled: false,
  },
  {
    value: &#39;Option4&#39;,
    label: &#39;Option4&#39;,
    disabled: false,
  },
  {
    value: &#39;Option5&#39;,
    label: &#39;Option5&#39;,
    disabled: false,
  },
]
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="clearable-single-select" tabindex="-1"><a class="header-anchor" href="#clearable-single-select" aria-hidden="true">#</a> Clearable Single Select</h3><p>You can clear Select using a clear icon.</p><p>Set <code>clearable</code> attribute for <code>el-select</code> and a clear icon will appear. Note that <code>clearable</code> is only for single select.</p>`,5),B=d(`<details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token title important"><span class="token punctuation">####</span> Viwer Source</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FieldSelect :value=&quot;value&quot; :optionList=&quot;options&quot; :clearable=&quot;true&quot; /&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const value = ref(&#39;&#39;)

const options = [
  {
    value: &#39;Option1&#39;,
    label: &#39;Option1&#39;,
    disabled: false,
  },
  {
    value: &#39;Option2&#39;,
    label: &#39;Option2&#39;,
    disabled: true,
  },
  {
    value: &#39;Option3&#39;,
    label: &#39;Option3&#39;,
    disabled: false,
  },
  {
    value: &#39;Option4&#39;,
    label: &#39;Option4&#39;,
    disabled: false,
  },
  {
    value: &#39;Option5&#39;,
    label: &#39;Option5&#39;,
    disabled: false,
  },
]
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="basic-multiple-select" tabindex="-1"><a class="header-anchor" href="#basic-multiple-select" aria-hidden="true">#</a> Basic Multiple Select</h3><p>Multiple select uses tags to display selected options.</p><p>Set <code>multiple</code> attribute for <code>el-select</code> to enable multiple mode. In this case, the value of <code>v-model</code> will be an array of selected options. By default the selected options will be displayed as Tags. You can collapse them to a text by using <code>collapse-tags</code> attribute. You can check them when mouse hover collapse text by using <code>collapse-tags-tooltip</code> attribute.</p>`,4),C=d(`<h4 id="viwer-source-3" tabindex="-1"><a class="header-anchor" href="#viwer-source-3" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;p&gt;default&lt;/p&gt;
  &lt;FieldSelect :value=&quot;value1&quot; :optionList=&quot;options&quot; :multiple=&quot;true&quot; /&gt;
  &lt;p&gt;use collapse-tags&lt;/p&gt;
  &lt;FieldSelect :value=&quot;value2&quot; :optionList=&quot;options&quot; :multiple=&quot;true&quot; :collapseTags=&quot;true&quot; /&gt;
  &lt;p&gt;default&lt;/p&gt;
  &lt;FieldSelect :value=&quot;value3&quot; :optionList=&quot;options&quot; :multiple=&quot;true&quot; :collapseTags=&quot;true&quot; :collapseTagsTooltip=&quot;true&quot; /&gt;
  &lt;p&gt;default&lt;/p&gt;
  &lt;FieldSelect :value=&quot;value4&quot; :optionList=&quot;options&quot; :multiple=&quot;true&quot; :collapseTags=&quot;true&quot; :collapseTagsTooltip=&quot;true&quot; :multipleLimit=&quot;3&quot; /&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const value1 = ref([])
const value2 = ref([])
const value3 = ref([])
const value4 = ref([])

const options = [
  {
    value: &#39;Option1&#39;,
    label: &#39;Option1&#39;,
    disabled: false,
  },
  {
    value: &#39;Option2&#39;,
    label: &#39;Option2&#39;,
    disabled: true,
  },
  {
    value: &#39;Option3&#39;,
    label: &#39;Option3&#39;,
    disabled: false,
  },
  {
    value: &#39;Option4&#39;,
    label: &#39;Option4&#39;,
    disabled: false,
  },
  {
    value: &#39;Option5&#39;,
    label: &#39;Option5&#39;,
    disabled: false,
  },
]
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="option-filtering" tabindex="-1"><a class="header-anchor" href="#option-filtering" aria-hidden="true">#</a> Option filtering</h3><p>You can filter options for your desired ones.</p><p>Adding <code>filterable</code> to <code>el-select</code> enables filtering. By default, Select will find all the options whose <code>label</code> attribute contains the input value. If you prefer other filtering strategies, you can pass the <code>filter-method</code>. <code>filter-method</code> is a <code>Function</code> that gets called when the input value changes, and its parameter is the current input value.</p>`,5),D=d(`<h4 id="viwer-source-4" tabindex="-1"><a class="header-anchor" href="#viwer-source-4" aria-hidden="true">#</a> Viwer Source</h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;FieldSelect :value=&quot;value&quot; :optionList=&quot;options&quot; :filterable=&quot;true&quot; /&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const value = ref(&#39;&#39;)

const options = [
  {
    value: &#39;Option1&#39;,
    label: &#39;Option1&#39;,
    disabled: false,
  },
  {
    value: &#39;Option2&#39;,
    label: &#39;Option2&#39;,
    disabled: true,
  },
  {
    value: &#39;Option3&#39;,
    label: &#39;Option3&#39;,
    disabled: false,
  },
  {
    value: &#39;Option4&#39;,
    label: &#39;Option4&#39;,
    disabled: false,
  },
  {
    value: &#39;Option5&#39;,
    label: &#39;Option5&#39;,
    disabled: false,
  },
]
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>`,3),z=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),N=e("td",{style:{"text-align":"center"}},[e("code",null,"value")],-1),V=e("td",{style:{"text-align":"center"}},"binding value",-1),M={style:{"text-align":"center"}},A=e("strong",null,i("String"),-1),E={style:{"text-align":"center"}},I=e("strong",null,i("True"),-1),Y=e("td",{style:{"text-align":"center"}},[e("code",null,"optionList")],-1),G={style:{"text-align":"center"}},P=e("strong",null,i(" { label: title, value: value, disabled: false	rue } "),-1),W={style:{"text-align":"center"}},j=e("strong",null,i("array"),-1),K={style:{"text-align":"center"}},Q=e("strong",null,i("True"),-1),R=e("h3",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),s(" Attributes")],-1),U=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),H=e("td",{style:{"text-align":"center"}},[e("code",null,"multiple")],-1),J=e("td",{style:{"text-align":"center"}},[s("whether "),e("code",null,"multiple-select"),s(" is activated")],-1),X={style:{"text-align":"center"}},Z=e("strong",null,i("Boolean"),-1),$={style:{"text-align":"center"}},ee=e("strong",null,i("False"),-1),ne=e("td",{style:{"text-align":"center"}},[e("code",null,"collapseTags")],-1),te=e("td",{style:{"text-align":"center"}},"whether to collapse tags to a text when multiple selecting",-1),le={style:{"text-align":"center"}},ie=e("strong",null,i("Boolean"),-1),se={style:{"text-align":"center"}},ae=e("strong",null,i("False"),-1),de=e("td",{style:{"text-align":"center"}},[e("code",null,"collapseTagsTooltip")],-1),oe=e("td",{style:{"text-align":"center"}},[s("whether show all selected tags when mouse hover text of "),e("code",null,"collapse-tags"),s(". To use this, "),e("code",null,"collapse-tags"),s(" must be true")],-1),ce={style:{"text-align":"center"}},ue=e("strong",null,i("Boolean"),-1),re={style:{"text-align":"center"}},ve=e("strong",null,i("False"),-1),me=e("td",{style:{"text-align":"center"}},[e("code",null,"multipleLimit")],-1),be=e("td",{style:{"text-align":"center"}},[s("maximum number of options user can select when "),e("code",null,"multiple"),s(" is true. No "),e("code",null,"limit"),s(" when set to "),e("code",null,"0")],-1),pe={style:{"text-align":"center"}},he=e("strong",null,i("number"),-1),_e={style:{"text-align":"center"}},ge=e("strong",null,i("0"),-1),fe=e("td",{style:{"text-align":"center"}},[e("code",null,"disabled")],-1),ye=e("td",{style:{"text-align":"center"}},[s("whether Switch is "),e("code",null,"disabled")],-1),xe={style:{"text-align":"center"}},qe=e("strong",null,i("Boolean"),-1),ke={style:{"text-align":"center"}},Se=e("strong",null,i("False"),-1),Oe=e("td",{style:{"text-align":"center"}},[e("code",null,"clearable")],-1),we=e("td",{style:{"text-align":"center"}},"whether select can be cleared",-1),Le={style:{"text-align":"center"}},Fe=e("strong",null,i("Boolean"),-1),Te={style:{"text-align":"center"}},Be=e("strong",null,i("False"),-1),Ce=e("td",{style:{"text-align":"center"}},[e("code",null,"size")],-1),De={style:{"text-align":"center"}},ze=e("strong",null,"large / default / small",-1),Ne={style:{"text-align":"center"}},Ve=e("strong",null,i("String"),-1),Me={style:{"text-align":"center"}},Ae=e("strong",null,i("default"),-1),Ee=e("td",{style:{"text-align":"center"}},[e("code",null,"placeholder")],-1),Ie=e("td",{style:{"text-align":"center"}},"placeholder the Select",-1),Ye={style:{"text-align":"center"}},Ge=e("strong",null,i("String"),-1),Pe={style:{"text-align":"center"}},We=e("strong",null,i("Select"),-1),je=e("td",{style:{"text-align":"center"}},[e("code",null,"filterable")],-1),Ke=e("td",{style:{"text-align":"center"}},"whether Select is filterable",-1),Qe={style:{"text-align":"center"}},Re=e("strong",null,i("Boolean"),-1),Ue={style:{"text-align":"center"}},He=e("strong",null,i("False"),-1),Je=e("td",{style:{"text-align":"center"}},[e("code",null,"allowCreate")],-1),Xe=e("td",{style:{"text-align":"center"}},[s("whether creating new items is allowed. To use this, "),e("code",null,"filterable"),s(" must be "),e("code",null,"true")],-1),Ze={style:{"text-align":"center"}},$e=e("strong",null,i("Boolean"),-1),en={style:{"text-align":"center"}},nn=e("strong",null,i("False"),-1),tn=e("td",{style:{"text-align":"center"}},[e("code",null,"noDataText")],-1),ln=e("td",{style:{"text-align":"center"}},[s("displayed text when there is no options, you can also use slot "),e("code",null,"empty")],-1),sn={style:{"text-align":"center"}},an=e("strong",null,i("String"),-1),dn={style:{"text-align":"center"}},on=e("strong",null,i("No data"),-1),cn=d('<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>header</code></td><td style="text-align:center;">Customize Default Content Top</td></tr><tr><td style="text-align:center;"><code>footer</code></td><td style="text-align:center;">Customize Default Content Bottom</td></tr></tbody></table><h3 id="example-for-developer" tabindex="-1"><a class="header-anchor" href="#example-for-developer" aria-hidden="true">#</a> Example for Developer</h3>',3),un={href:"https://stackblitz.com/edit/fields-select?file=app.vue",target:"_blank",rel:"noopener noreferrer"},rn=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),vn=e("figcaption",null,"Open in StackBlitz",-1),mn=d(`<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> Directory</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FieldSelect                   <span class="token comment"># Field Select specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function bn(pn,hn){const o=a("ExternalLinkIcon"),c=a("SelectBase"),u=a("SelectDisableOption"),r=a("SelectDisable"),v=a("SelectClearable"),m=a("SelectMultipleSelect"),b=a("SelectFilter"),t=a("el-tag");return h(),_("div",null,[e("span",null,[f,e("div",y,[x,e("p",null,[s("This component requires the "),q,s(" wrap when used in SSR (eg: "),e("a",k,[s("Nuxt"),n(o)]),s(") and SSG (eg: "),e("a",S,[s("VitePress"),n(o)]),s(").")])]),O,w,n(c),L,n(u),F,n(r),T,n(v),B,n(m),C,n(b),D,e("table",null,[z,e("tbody",null,[e("tr",null,[N,V,e("td",M,[n(t,{effect:"Light"},{default:l(()=>[A]),_:1})]),e("td",E,[n(t,{effect:"dark",round:""},{default:l(()=>[I]),_:1})])]),e("tr",null,[Y,e("td",G,[s("List of Options that must be displayed in the Select. Within the array of options, the attributes to be received and required are: "),n(t,{effect:"Light"},{default:l(()=>[P]),_:1})]),e("td",W,[n(t,{effect:"Light"},{default:l(()=>[j]),_:1})]),e("td",K,[n(t,{effect:"dark",round:""},{default:l(()=>[Q]),_:1})])])])]),R,e("table",null,[U,e("tbody",null,[e("tr",null,[H,J,e("td",X,[n(t,{effect:"Light"},{default:l(()=>[n(t,{effect:"Light"},{default:l(()=>[Z]),_:1})]),_:1})]),e("td",$,[n(t,{effect:"dark",round:""},{default:l(()=>[ee]),_:1})])]),e("tr",null,[ne,te,e("td",le,[n(t,{effect:"Light"},{default:l(()=>[n(t,{effect:"Light"},{default:l(()=>[ie]),_:1})]),_:1})]),e("td",se,[n(t,{effect:"dark",round:""},{default:l(()=>[ae]),_:1})])]),e("tr",null,[de,oe,e("td",ce,[n(t,{effect:"Light"},{default:l(()=>[n(t,{effect:"Light"},{default:l(()=>[ue]),_:1})]),_:1})]),e("td",re,[n(t,{effect:"dark",round:""},{default:l(()=>[ve]),_:1})])]),e("tr",null,[me,be,e("td",pe,[n(t,{effect:"Light"},{default:l(()=>[n(t,{effect:"Light"},{default:l(()=>[he]),_:1})]),_:1})]),e("td",_e,[n(t,{effect:"dark",round:""},{default:l(()=>[ge]),_:1})])]),e("tr",null,[fe,ye,e("td",xe,[n(t,{effect:"Light"},{default:l(()=>[n(t,{effect:"Light"},{default:l(()=>[qe]),_:1})]),_:1})]),e("td",ke,[n(t,{effect:"dark",round:""},{default:l(()=>[Se]),_:1})])]),e("tr",null,[Oe,we,e("td",Le,[n(t,{effect:"Light"},{default:l(()=>[n(t,{effect:"Light"},{default:l(()=>[Fe]),_:1})]),_:1})]),e("td",Te,[n(t,{effect:"dark",round:""},{default:l(()=>[Be]),_:1})])]),e("tr",null,[Ce,e("td",De,[s("size of Switch "),n(t,{effect:"Light"},{default:l(()=>[ze]),_:1})]),e("td",Ne,[n(t,{effect:"Light"},{default:l(()=>[n(t,{effect:"Light"},{default:l(()=>[Ve]),_:1})]),_:1})]),e("td",Me,[n(t,{effect:"dark",round:""},{default:l(()=>[Ae]),_:1})])]),e("tr",null,[Ee,Ie,e("td",Ye,[n(t,{effect:"Light"},{default:l(()=>[n(t,{effect:"Light"},{default:l(()=>[Ge]),_:1})]),_:1})]),e("td",Pe,[n(t,{effect:"dark",round:""},{default:l(()=>[We]),_:1})])]),e("tr",null,[je,Ke,e("td",Qe,[n(t,{effect:"Light"},{default:l(()=>[n(t,{effect:"Light"},{default:l(()=>[Re]),_:1})]),_:1})]),e("td",Ue,[n(t,{effect:"dark",round:""},{default:l(()=>[He]),_:1})])]),e("tr",null,[Je,Xe,e("td",Ze,[n(t,{effect:"Light"},{default:l(()=>[n(t,{effect:"Light"},{default:l(()=>[$e]),_:1})]),_:1})]),e("td",en,[n(t,{effect:"dark",round:""},{default:l(()=>[nn]),_:1})])]),e("tr",null,[tn,ln,e("td",sn,[n(t,{effect:"Light"},{default:l(()=>[n(t,{effect:"Light"},{default:l(()=>[an]),_:1})]),_:1})]),e("td",dn,[n(t,{effect:"dark",round:""},{default:l(()=>[on]),_:1})])])])]),cn,e("figure",null,[e("a",un,[rn,n(o)]),vn]),mn])])}const gn=p(g,[["render",bn],["__file","FieldSelect.html.vue"]]);export{gn as default};
