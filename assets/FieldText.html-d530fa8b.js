import{aK as b,S as _,U as f,V as e,ac as a,ae as t,a8 as s,aS as d,D as l,ad as i}from"./framework-233955b8.js";const x={},y=e("h3",{id:"basic",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic","aria-hidden":"true"},"#"),a(),e("strong",null,"Basic")],-1),q=e("p",null,"Basic usage",-1),w=d(`<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">  &lt;template&gt;
    &lt;field-input v-model=&quot;input&quot; placeholder=&quot;Please input&quot; /&gt;
  &lt;/template&gt;

  &lt;script lang=&quot;ts&quot; setup&gt;
  import { ref } from &#39;vue&#39;
  const input = ref(&#39;&#39;)
  &lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled" aria-hidden="true">#</a> <strong>Disabled</strong></h3><p>Disable the Input with the <code>disabled</code> attribute.</p>`,4),k=d(`<h4 id="viwer-source-1" tabindex="-1"><a class="header-anchor" href="#viwer-source-1" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">  &lt;template&gt;
    &lt;field-input v-model=&quot;input&quot; disabled placeholder=&quot;Please input&quot; /&gt;
  &lt;/template&gt;

  &lt;script lang=&quot;ts&quot; setup&gt;
  import { ref } from &#39;vue&#39;
  const input = ref(&#39;&#39;)
  &lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="clearable" tabindex="-1"><a class="header-anchor" href="#clearable" aria-hidden="true">#</a> <strong>Clearable</strong></h3><p>Make the Input <code>clearable</code> with the <code>clearable</code> attribute.</p>`,4),L=d(`<h4 id="viwer-source-2" tabindex="-1"><a class="header-anchor" href="#viwer-source-2" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;field-input v-model=&quot;input&quot; placeholder=&quot;Please input&quot; clearable /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;
const input = ref(&#39;&#39;)
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="password-box" tabindex="-1"><a class="header-anchor" href="#password-box" aria-hidden="true">#</a> <strong>Password box</strong></h3><p>Make a <code>toggle-able</code> password Input with the show-password attribute.</p>`,4),z=d(`<h4 id="viwer-source-3" tabindex="-1"><a class="header-anchor" href="#viwer-source-3" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;field-input
    v-model=&quot;input&quot;
    type=&quot;password&quot;
    placeholder=&quot;Please input password&quot;
    show-password
  /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;
const input = ref(&#39;&#39;)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="textarea" tabindex="-1"><a class="header-anchor" href="#textarea" aria-hidden="true">#</a> <strong>Textarea</strong></h3><p>Resizable for entering multiple lines of text information. Add attribute <code>type=&quot;textarea&quot;</code> to change <code>input</code> into native <code>textarea</code>.</p><p>Control the height by setting the <code>rows</code> prop.</p>`,5),T=d(`<h4 id="viwer-source-4" tabindex="-1"><a class="header-anchor" href="#viwer-source-4" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;field-input
    v-model=&quot;textarea&quot;
    :rows=&quot;2&quot;
    type=&quot;textarea&quot;
    placeholder=&quot;Please input&quot;
  /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;
const input = ref(&#39;&#39;)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="autosize-textarea" tabindex="-1"><a class="header-anchor" href="#autosize-textarea" aria-hidden="true">#</a> <strong>Autosize Textarea</strong></h3><p>Setting the <code>autosize</code> prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to <code>autosize</code> to specify the minimum and maximum number of lines the textarea can automatically adjust.</p>`,4),S=d(`<h4 id="viwer-source-5" tabindex="-1"><a class="header-anchor" href="#viwer-source-5" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;field-input
    v-model=&quot;textarea1&quot;
    autosize
    type=&quot;textarea&quot;
    placeholder=&quot;Please input&quot;
  /&gt;
  &lt;div style=&quot;margin: 20px 0&quot; /&gt;
  &lt;field-input
    v-model=&quot;textarea2&quot;
    :autosize=&quot;{ minRows: 2, maxRows: 4 }&quot;
    type=&quot;textarea&quot;
    placeholder=&quot;Please input&quot;
  /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;
const textarea1 = ref(&#39;&#39;)
const textarea2 = ref(&#39;&#39;)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="sizes" tabindex="-1"><a class="header-anchor" href="#sizes" aria-hidden="true">#</a> <strong>Sizes</strong></h3><p>Add <code>size</code> attribute to change the size of Input. In addition to the default size, there are two other options: <code>large</code>, <code>small</code>.</p>`,4),C=d(`<h4 id="viwer-source-6" tabindex="-1"><a class="header-anchor" href="#viwer-source-6" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-card class=&quot;box-card&quot;&gt;
    &lt;div class=&quot;demo-input-size&quot;&gt;
      &lt;field-input
        v-model=&quot;input1&quot;
        class=&quot;w-50 m-2&quot;
        size=&quot;large&quot;
        placeholder=&quot;Please Input&quot;
      /&gt;
      &lt;field-input v-model=&quot;input2&quot; class=&quot;w-50 m-2&quot; placeholder=&quot;Please Input&quot; /&gt;
      &lt;field-input
        v-model=&quot;input3&quot;
        class=&quot;w-50 m-2&quot;
        size=&quot;small&quot;
        placeholder=&quot;Please Input&quot;
      /&gt;
    &lt;/div&gt;
  &lt;/el-card&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;
import { Search } from &#39;@element-plus/icons-vue&#39;
const input1 = ref(&#39;&#39;)
const input2 = ref(&#39;&#39;)
const input3 = ref(&#39;&#39;)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="limit-length" tabindex="-1"><a class="header-anchor" href="#limit-length" aria-hidden="true">#</a> <strong>Limit length</strong></h3><p><code>maxlength</code> and <code>minlength</code> attributes of input, they declare a limit on the number of characters a user can input. The &quot;number of characters&quot; is measured using JavaScript string length.Setting the <code>maxlength</code> prop for a text or textarea type of Input can limit the length of input value, allows you to show word count by setting <code>show-word-limit</code> to <code>true</code> at the same time.</p>`,4),I=d(`<h4 id="viwer-source-7" tabindex="-1"><a class="header-anchor" href="#viwer-source-7" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-card class=&quot;box-card&quot;&gt;
    &lt;div class=&quot;demo-input-size&quot;&gt;
      &lt;field-input
        v-model=&quot;text&quot;
        maxlength=&quot;10&quot;
        placeholder=&quot;Please input&quot;
        show-word-limit
        type=&quot;text&quot;
      /&gt;
      &lt;div style=&quot;margin: 20px 0&quot; &gt;
      &lt;field-input
        v-model=&quot;textarea&quot;
        maxlength=&quot;30&quot;
        placeholder=&quot;Please input&quot;
        show-word-limit
        type=&quot;textarea&quot;
      /&gt;
    &lt;/div&gt;
  &lt;/el-card&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;
const text = ref(&#39;&#39;)
const textarea = ref(&#39;&#39;)
&lt;/script&gt;</span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> <strong>Props</strong></h3>`,3),P=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),B=e("td",{style:{"text-align":"center"}},[e("code",null,"type")],-1),D=e("td",{style:{"text-align":"center"}},"type of input",-1),V={style:{"text-align":"center"}},N=e("strong",null,i("String"),-1),F={style:{"text-align":"center"}},A=e("strong",null,i("True"),-1),j=e("h3",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),a(),e("strong",null,"Attributes")],-1),R=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),E=e("td",{style:{"text-align":"center"}},[e("code",null,"text")],-1),M=e("td",{style:{"text-align":"center"}},"binding value",-1),O={style:{"text-align":"center"}},G=e("strong",null,i("String"),-1),J=e("strong",null,i("Number"),-1),K=e("td",{style:{"text-align":"center"}},"—",-1),U=e("td",{style:{"text-align":"center"}},[e("code",null,"maxlength")],-1),H=e("td",{style:{"text-align":"center"}},"the max length",-1),Q={style:{"text-align":"center"}},W=e("strong",null,i("String"),-1),X=e("strong",null,i("Number"),-1),Y=e("td",{style:{"text-align":"center"}},"—",-1),Z=e("td",{style:{"text-align":"center"}},[e("code",null,"minlength")],-1),$=e("td",{style:{"text-align":"center"}},[a("same as "),e("code",null,"minlength"),a(" in native input")],-1),ee={style:{"text-align":"center"}},te=e("strong",null,i("Number"),-1),ne=e("td",{style:{"text-align":"center"}},"—",-1),se=e("td",{style:{"text-align":"center"}},[e("code",null,"show-word-limit")],-1),ie=e("td",{style:{"text-align":"center"}},"whether show word count, only works when type is 'text' or 'textarea'",-1),ae={style:{"text-align":"center"}},le=e("strong",null,i("Boolean"),-1),de={style:{"text-align":"center"}},oe=e("strong",null,i("False"),-1),re=e("td",{style:{"text-align":"center"}},[e("code",null,"placeholder")],-1),ce=e("td",{style:{"text-align":"center"}},"placeholder of Input",-1),ue={style:{"text-align":"center"}},ve=e("strong",null,i("String"),-1),me=e("td",{style:{"text-align":"center"}},"—",-1),he=e("td",{style:{"text-align":"center"}},[e("code",null,"clearable")],-1),pe=e("td",{style:{"text-align":"center"}},[a("whether to show clear button, only works when "),e("code",null,"type"),a(" is not 'textare")],-1),ge={style:{"text-align":"center"}},be=e("strong",null,i("Boolean"),-1),_e={style:{"text-align":"center"}},fe=e("strong",null,i("False"),-1),xe=e("td",{style:{"text-align":"center"}},[e("code",null,"show-password")],-1),ye=e("td",{style:{"text-align":"center"}},"whether to show toggleable password input",-1),qe={style:{"text-align":"center"}},we=e("strong",null,i("Boolean"),-1),ke={style:{"text-align":"center"}},Le=e("strong",null,i("False"),-1),ze=e("td",{style:{"text-align":"center"}},[e("code",null,"disabled")],-1),Te=e("td",{style:{"text-align":"center"}},"whether Input is disabled",-1),Se={style:{"text-align":"center"}},Ce=e("strong",null,i("Boolean"),-1),Ie={style:{"text-align":"center"}},Pe=e("strong",null,i("False"),-1),Be=e("td",{style:{"text-align":"center"}},[e("code",null,"size")],-1),De={style:{"text-align":"center"}},Ve=e("code",null,"type",-1),Ne=e("code",null,"textarea",-1),Fe=e("strong",null,i("large"),-1),Ae=e("strong",null,i("default"),-1),je=e("strong",null,i("small"),-1),Re={style:{"text-align":"center"}},Ee=e("strong",null,i("String"),-1),Me=e("td",{style:{"text-align":"center"}},"—",-1),Oe=e("td",{style:{"text-align":"center"}},[e("code",null,"rows")],-1),Ge=e("td",{style:{"text-align":"center"}},[a("number of rows of "),e("code",null,"textarea"),a(", only works when "),e("code",null,"type"),a(" is "),e("code",null,"textarea")],-1),Je={style:{"text-align":"center"}},Ke=e("strong",null,i("Number"),-1),Ue={style:{"text-align":"center"}},He=e("strong",null,i("2"),-1),Qe=e("td",{style:{"text-align":"center"}},[e("code",null,"autosize")],-1),We=e("td",{style:{"text-align":"center"}},[a("whether textarea has an adaptive height, only works when "),e("code",null,"type"),a(" is "),e("code",null,"textarea"),a(". Can accept an object, e.g."),e("code",null,"{ minRows: 2, maxRows: 6 }")],-1),Xe={style:{"text-align":"center"}},Ye=e("strong",null,i("Boolean / Object"),-1),Ze={style:{"text-align":"center"}},$e=e("strong",null,i("False"),-1),et=d('<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> <strong>Slots</strong></h3><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>header</code></td><td style="text-align:center;">Customize Default Content Top</td></tr><tr><td style="text-align:center;"><code>content</code></td><td style="text-align:center;">Customize Default Content</td></tr><tr><td style="text-align:center;"><code>footer</code></td><td style="text-align:center;">Customize Default Content Bottom</td></tr></tbody></table><h3 id="example-for-developer" tabindex="-1"><a class="header-anchor" href="#example-for-developer" aria-hidden="true">#</a> <strong>Example for Developer</strong></h3>',3),tt={href:"https://stackblitz.com/edit/field-text?file=app.vue",target:"_blank",rel:"noopener noreferrer"},nt=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),st=e("figcaption",null,"Open in StackBlitz",-1),it=d(`<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> <strong>Directory</strong></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FieldText                     <span class="token comment"># Field Text specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function at(lt,dt){const c=l("TextBasic"),u=l("TextDisable"),v=l("TextClearable"),m=l("TextPassword"),o=l("TextTextarea"),h=l("TextSizes"),p=l("TextLimitLength"),n=l("el-tag"),r=l("el-divider"),g=l("ExternalLinkIcon");return _(),f("div",null,[e("span",null,[a(" Input data using mouse or keyboard.. "),y,q,t(c),w,t(u),k,t(v),L,t(m),z,t(o),T,t(o),S,t(h),C,t(p),I,e("table",null,[P,e("tbody",null,[e("tr",null,[B,D,e("td",V,[t(n,{effect:"Light"},{default:s(()=>[N]),_:1})]),e("td",F,[t(n,{effect:"dark",round:""},{default:s(()=>[A]),_:1})])])])]),j,e("table",null,[R,e("tbody",null,[e("tr",null,[E,M,e("td",O,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[G]),_:1}),a(" / "),t(n,{effect:"Light"},{default:s(()=>[J]),_:1})]),_:1})]),K]),e("tr",null,[U,H,e("td",Q,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[W]),_:1}),a(" / "),t(n,{effect:"Light"},{default:s(()=>[X]),_:1})]),_:1})]),Y]),e("tr",null,[Z,$,e("td",ee,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[te]),_:1})]),_:1})]),ne]),e("tr",null,[se,ie,e("td",ae,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[le]),_:1})]),_:1})]),e("td",de,[t(n,{effect:"dark",round:""},{default:s(()=>[oe]),_:1})])]),e("tr",null,[re,ce,e("td",ue,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[ve]),_:1})]),_:1})]),me]),e("tr",null,[he,pe,e("td",ge,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[be]),_:1})]),_:1})]),e("td",_e,[t(n,{effect:"dark",round:""},{default:s(()=>[fe]),_:1})])]),e("tr",null,[xe,ye,e("td",qe,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[we]),_:1})]),_:1})]),e("td",ke,[t(n,{effect:"dark",round:""},{default:s(()=>[Le]),_:1})])]),e("tr",null,[ze,Te,e("td",Se,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[Ce]),_:1})]),_:1})]),e("td",Ie,[t(n,{effect:"dark",round:""},{default:s(()=>[Pe]),_:1})])]),e("tr",null,[Be,e("td",De,[a("size of Input, works when "),Ve,a(" is not "),Ne,a(),t(n,{effect:"Light"},{default:s(()=>[Fe,a(),t(r,{direction:"vertical"}),a(),Ae,a(),t(r,{direction:"vertical"}),a(),je]),_:1})]),e("td",Re,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[Ee]),_:1})]),_:1})]),Me]),e("tr",null,[Oe,Ge,e("td",Je,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[Ke]),_:1})]),_:1})]),e("td",Ue,[t(n,{effect:"dark",round:""},{default:s(()=>[He]),_:1})])]),e("tr",null,[Qe,We,e("td",Xe,[t(n,{effect:"Light"},{default:s(()=>[t(n,{effect:"Light"},{default:s(()=>[Ye]),_:1})]),_:1})]),e("td",Ze,[t(n,{effect:"dark",round:""},{default:s(()=>[$e]),_:1})])])])]),et,e("figure",null,[e("a",tt,[nt,t(g)]),st]),it])])}const rt=b(x,[["render",at],["__file","FieldText.html.vue"]]);export{rt as default};
