import{aK as _,S as m,U as g,V as e,ac as i,ae as t,a8 as l,ab as b,aS as d,D as o,ad as s}from"./framework-233955b8.js";const p={},f=e("strong",null,"Option:",-1),x=e("h2",{id:"clear-action",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clear-action","aria-hidden":"true"},"#"),i(),e("strong",null,"Clear Action")],-1),y=e("p",null,"This Action is used to delete or clear the content of the panel",-1),q=d(`<h3 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> <strong>Viwer Source</strong></h3><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-input v-model=&quot;input&quot; placeholder=&quot;Please input&quot; /&gt;
  &lt;molecula-ActionPanel
    :showClear=&quot;true&quot;
    :showClose=&quot;false&quot;
    :showCheck=&quot;false&quot;
    :actionClear=&quot;handleClear&quot;
  /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;
const input = ref(&#39;&#39;)
const handleClear = () =&gt; {
  input.value = &#39;&#39;
}
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="close-action" tabindex="-1"><a class="header-anchor" href="#close-action" aria-hidden="true">#</a> <strong>Close Action</strong></h2><p>This action is used to Close.</p>`,4),C=d(`<h3 id="viwer-source-1" tabindex="-1"><a class="header-anchor" href="#viwer-source-1" aria-hidden="true">#</a> <strong>Viwer Source</strong></h3><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;el-popover
    :visible=&quot;visible&quot;
    trigger=&quot;click&quot;
    placement=&quot;top&quot;
    :width=&quot;460&quot;
  &gt;
    &lt;el-input v-model=&quot;input&quot; placeholder=&quot;Please input&quot; /&gt;
    &lt;molecula-ActionPanel
      :showClear=&quot;true&quot;
      :showClose=&quot;true&quot;
      :showCheck=&quot;false&quot;
      :actionClear=&quot;handleClear&quot;
      :actionClose=&quot;handleClose&quot;
    /&gt;
    &lt;el-button #reference @click=&quot;visible = true&quot;&gt;Click to activate&lt;/el-button&gt;
  &lt;/el-popover&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;
const input = ref(&#39;&#39;)
const visible = ref(false)
const handleClear = () =&gt; {
  input.value = &#39;&#39;
}
const handleClose = () =&gt; {
  visible.value = false
}
&lt;/script&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="check-action" tabindex="-1"><a class="header-anchor" href="#check-action" aria-hidden="true">#</a> <strong>Check Action</strong></h2><p>This action is used to Close.</p>`,4),k=d(`<h3 id="viwer-source-2" tabindex="-1"><a class="header-anchor" href="#viwer-source-2" aria-hidden="true">#</a> <strong>Viwer Source</strong></h3><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span>
<span class="token code-block">&lt;template&gt;
  &lt;el-popover
    :visible=&quot;visible&quot;
    trigger=&quot;click&quot;
    placement=&quot;top&quot;
    :width=&quot;460&quot;
  &gt;
    &lt;el-input v-model=&quot;input&quot; placeholder=&quot;Please input&quot; /&gt;
    &lt;molecula-ActionPanel
      :showClear=&quot;true&quot;
      :showClose=&quot;true&quot;
      :showCheck=&quot;true&quot;
      :actionClear=&quot;handleClear&quot;
      :actionClose=&quot;handleClose&quot;
      :actionCheck=&quot;handleDone&quot;
    &gt;
    &lt;/molecula-ActionPanel&gt;
    &lt;el-button #reference @click=&quot;visible = true&quot;&gt;
      !hello! {{ world }}
    &lt;/el-button&gt;
  &lt;/el-popover&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;
const input = ref(&#39;&#39;)
const world = ref(&#39;&#39;)
const visible = ref(false)
const handleClear = () =&gt; {
  input.value = &#39;&#39;
}
const handleClose = () =&gt; {
  visible.value = false
}
const handleDone = () =&gt; {
  handleClose()
  world.value = input.value
}
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="slots-action" tabindex="-1"><a class="header-anchor" href="#slots-action" aria-hidden="true">#</a> <strong>Slots Action</strong></h2><p>Add Custom Content to the Left or Right of the Action Panel Button.</p>`,4),w=d(`<h3 id="viwer-source-3" tabindex="-1"><a class="header-anchor" href="#viwer-source-3" aria-hidden="true">#</a> <strong>Viwer Source</strong></h3><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span>
<span class="token code-block">&lt;template&gt;
  &lt;el-popover
    :visible=&quot;visible&quot;
    trigger=&quot;click&quot;
    placement=&quot;top&quot;
    :width=&quot;460&quot;
  &gt;
    &lt;el-input v-model=&quot;input&quot; placeholder=&quot;Please input&quot; /&gt; {{ world }}
    &lt;molecula-ActionPanel
      :showClear=&quot;true&quot;
      :showClose=&quot;true&quot;
      :showCheck=&quot;true&quot;
      :actionClear=&quot;handleClear&quot;
      :actionClose=&quot;handleClose&quot;
      :actionCheck=&quot;handleDone&quot;
    &gt;
      &lt;template v-slot:slotsLeft&gt;
        &lt;el-button type=&quot;success&quot; :icon=&quot;Refresh&quot; @click=&quot;handleRefresh&quot; /&gt;
      &lt;/template&gt;
    &lt;/molecula-ActionPanel&gt;
    &lt;el-button #reference @click=&quot;visible = true&quot;&gt;
      !hello! {{ world }}
    &lt;/el-button&gt;
  &lt;/el-popover&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
import {
  Refresh
} from &#39;@element-plus/icons-vue&#39;
import { ref } from &#39;vue&#39;
const input = ref(&#39;&#39;)
const world = ref(&#39;&#39;)
const visible = ref(false)
const handleClear = () =&gt; {
  input.value = &#39;&#39;
}
const handleClose = () =&gt; {
  visible.value = false
}
const handleDone = () =&gt; {
  handleClose()
  world.value = input.value
}
const handleRefresh = () =&gt; {
  world.value = input.value
}
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> <em>Props</em></h2>`,3),A=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),P=e("td",{style:{"text-align":"center"}},[e("code",null,"showClear")],-1),B=e("td",{style:{"text-align":"center"}},"This property allows to display the Clear button.",-1),L={style:{"text-align":"center"}},S=e("strong",null,s("Boolean"),-1),T={style:{"text-align":"center"}},D=e("strong",null,s("True"),-1),F=e("td",{style:{"text-align":"center"}},[e("code",null,"showClose")],-1),M=e("td",{style:{"text-align":"center"}},"This property allows to display the Close button.",-1),R={style:{"text-align":"center"}},V=e("strong",null,s("Boolean"),-1),N={style:{"text-align":"center"}},z=e("strong",null,s("True"),-1),E=e("td",{style:{"text-align":"center"}},[e("code",null,"showCheck")],-1),I=e("td",{style:{"text-align":"center"}},"This property allows to display the Check button.",-1),O={style:{"text-align":"center"}},G=e("strong",null,s("Boolean"),-1),K={style:{"text-align":"center"}},U=e("strong",null,s("True"),-1),j=e("td",{style:{"text-align":"center"}},[e("code",null,"actionClear")],-1),H=e("td",{style:{"text-align":"center"}},"Method or Function that is triggered when clicking on the Clear Button.",-1),J={style:{"text-align":"center"}},Q=e("strong",null,s("Function"),-1),W={style:{"text-align":"center"}},X=e("strong",null,s("True"),-1),Y=e("td",{style:{"text-align":"center"}},[e("code",null,"actionClose")],-1),Z=e("td",{style:{"text-align":"center"}},"Method or Function that is triggered when clicking on the Close Button.",-1),$={style:{"text-align":"center"}},ee=e("strong",null,s("Function"),-1),te={style:{"text-align":"center"}},ne=e("strong",null,s("True"),-1),le=e("td",{style:{"text-align":"center"}},[e("code",null,"actionCheck")],-1),se=e("td",{style:{"text-align":"center"}},"Method or Function that is triggered when clicking on the Check Button.",-1),ie={style:{"text-align":"center"}},oe=e("strong",null,s("Function"),-1),de={style:{"text-align":"center"}},ae=e("strong",null,s("True"),-1),ce=e("h2",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),i(),e("strong",null,"Attributes")],-1),re=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),ue=e("td",{style:{"text-align":"center"}},[e("code",null,"disabledClear")],-1),ve=e("td",{style:{"text-align":"center"}},"Disable the Button Clear",-1),he={style:{"text-align":"center"}},_e=e("strong",null,s("Boolean"),-1),me={style:{"text-align":"center"}},ge=e("strong",null,s("False"),-1),be=e("td",{style:{"text-align":"center"}},[e("code",null,"disabledClose")],-1),pe=e("td",{style:{"text-align":"center"}},"Disable the Button Close",-1),fe={style:{"text-align":"center"}},xe=e("strong",null,s("Boolean"),-1),ye={style:{"text-align":"center"}},qe=e("strong",null,s("False"),-1),Ce=e("td",{style:{"text-align":"center"}},[e("code",null,"disabledCheck")],-1),ke=e("td",{style:{"text-align":"center"}},"Disable the Button Check",-1),we={style:{"text-align":"center"}},Ae=e("strong",null,s("Boolean"),-1),Pe={style:{"text-align":"center"}},Be=e("strong",null,s("False"),-1),Le=e("td",{style:{"text-align":"center"}},[e("code",null,"textAling")],-1),Se=e("td",{style:{"text-align":"center"}},"Position where the buttons are displayed",-1),Te={style:{"text-align":"center"}},De=e("strong",null,s("String"),-1),Fe={style:{"text-align":"center"}},Me=e("strong",null,s("Right"),-1),Re=e("td",{style:{"text-align":"center"}},[e("code",null,"slotsLeft")],-1),Ve=e("td",{style:{"text-align":"center"}},"Add Custom Content to the Left of the Button Panel",-1),Ne={style:{"text-align":"center"}},ze=e("strong",null,s("String"),-1),Ee={style:{"text-align":"center"}},Ie=e("strong",null,s("────────────"),-1),Oe=e("td",{style:{"text-align":"center"}},[e("code",null,"slotsRight")],-1),Ge=e("td",{style:{"text-align":"center"}},"Add Custom Content to the Right of the Button Panel",-1),Ke={style:{"text-align":"center"}},Ue=e("strong",null,s("String"),-1),je={style:{"text-align":"center"}},He=e("strong",null,s("────────────"),-1),Je=e("td",{style:{"text-align":"center"}},[e("code",null,"slotsAlingLeft")],-1),Qe=e("td",{style:{"text-align":"center"}},"Position of the Custom Content to the Left of the Button Panel",-1),We={style:{"text-align":"center"}},Xe=e("strong",null,s("String"),-1),Ye={style:{"text-align":"center"}},Ze=e("strong",null,s("────────────"),-1),$e=e("td",{style:{"text-align":"center"}},[e("code",null,"slotsAlingRight")],-1),et=e("td",{style:{"text-align":"center"}},"Position of the Custom Content to the Right of the Button Panel",-1),tt={style:{"text-align":"center"}},nt=e("strong",null,s("String"),-1),lt={style:{"text-align":"center"}},st=e("strong",null,s("────────────"),-1),it=e("h2",{id:"events",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#"),i(),e("strong",null,"Events")],-1),ot=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type")])],-1),dt=e("td",{style:{"text-align":"center"}},[e("code",null,"actionClear")],-1),at=e("td",{style:{"text-align":"center"}},"Method or Function that is triggered when clicking on the Clear Button.",-1),ct={style:{"text-align":"center"}},rt=e("strong",null,s("Function"),-1),ut=e("td",{style:{"text-align":"center"}},[e("code",null,"actionClose")],-1),vt=e("td",{style:{"text-align":"center"}},"Method or Function that is triggered when clicking on the Close Button.",-1),ht={style:{"text-align":"center"}},_t=e("strong",null,s("Function"),-1),mt=e("td",{style:{"text-align":"center"}},[e("code",null,"actionCheck")],-1),gt=e("td",{style:{"text-align":"center"}},"Method or Function that is triggered when clicking on the Check Button.",-1),bt={style:{"text-align":"center"}},pt=e("strong",null,s("Function"),-1),ft=e("h2",{id:"example-for-developer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-for-developer","aria-hidden":"true"},"#"),i(),e("strong",null,"Example for Developer")],-1),xt={href:"https://stackblitz.com/edit/molecule-action-panel?file=app.vue",target:"_blank",rel:"noopener noreferrer"},yt=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),qt=e("figcaption",null,"Open in StackBlitz",-1),Ct=d(`<h2 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> <strong>Directory</strong></h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>└─ src                                            <span class="token comment"># Main source code.</span>
    └── Components                                <span class="token comment"># Global components</span>
            └── Atoms                             <span class="token comment"># Atom components</span>
            └── Moleculas                         <span class="token comment"># Moleculas components</span>
                └── ActionPanel                   <span class="token comment"># Molecule Action Panel specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function kt(wt,At){const a=o("el-divider"),n=o("el-tag"),c=o("ActionPanelClear"),r=o("ActionPanelClose"),u=o("ActionPanelCheck"),v=o("ActionPanelSlots"),h=o("ExternalLinkIcon");return m(),g("div",null,[e("span",null,[e("p",null,[i("It is a panel with 3 general actions. "),f,i(),t(n,{effect:"dark",round:""},{default:l(()=>[e("strong",null,[t(a,{direction:"vertical"}),i(" Close "),t(a,{direction:"vertical"}),i(" Check "),t(a,{direction:"vertical"}),i(" Cleared.")])]),_:1})]),b(` <Badge text="Closed" color="green" />
<Badge text="Cleared" color="green" />
<Badge text="Check" color="green" /> `),x,y,t(c),q,t(r),C,t(u),k,t(v),w,e("table",null,[A,e("tbody",null,[e("tr",null,[P,B,e("td",L,[t(n,{effect:"Light"},{default:l(()=>[S]),_:1})]),e("td",T,[t(n,{effect:"dark",round:""},{default:l(()=>[D]),_:1})])]),e("tr",null,[F,M,e("td",R,[t(n,{effect:"Light"},{default:l(()=>[V]),_:1})]),e("td",N,[t(n,{effect:"dark",round:""},{default:l(()=>[z]),_:1})])]),e("tr",null,[E,I,e("td",O,[t(n,{effect:"Light"},{default:l(()=>[G]),_:1})]),e("td",K,[t(n,{effect:"dark",round:""},{default:l(()=>[U]),_:1})])]),e("tr",null,[j,H,e("td",J,[t(n,{effect:"Light"},{default:l(()=>[Q]),_:1})]),e("td",W,[t(n,{effect:"dark",round:""},{default:l(()=>[X]),_:1})])]),e("tr",null,[Y,Z,e("td",$,[t(n,{effect:"Light"},{default:l(()=>[ee]),_:1})]),e("td",te,[t(n,{effect:"dark",round:""},{default:l(()=>[ne]),_:1})])]),e("tr",null,[le,se,e("td",ie,[t(n,{effect:"Light"},{default:l(()=>[oe]),_:1})]),e("td",de,[t(n,{effect:"dark",round:""},{default:l(()=>[ae]),_:1})])])])]),ce,e("table",null,[re,e("tbody",null,[e("tr",null,[ue,ve,e("td",he,[t(n,{effect:"Light"},{default:l(()=>[_e]),_:1})]),e("td",me,[t(n,{effect:"dark",round:""},{default:l(()=>[ge]),_:1})])]),e("tr",null,[be,pe,e("td",fe,[t(n,{effect:"Light"},{default:l(()=>[xe]),_:1})]),e("td",ye,[t(n,{effect:"dark",round:""},{default:l(()=>[qe]),_:1})])]),e("tr",null,[Ce,ke,e("td",we,[t(n,{effect:"Light"},{default:l(()=>[Ae]),_:1})]),e("td",Pe,[t(n,{effect:"dark",round:""},{default:l(()=>[Be]),_:1})])]),e("tr",null,[Le,Se,e("td",Te,[t(n,{effect:"Light"},{default:l(()=>[De]),_:1})]),e("td",Fe,[t(n,{effect:"dark",round:""},{default:l(()=>[Me]),_:1})])]),e("tr",null,[Re,Ve,e("td",Ne,[t(n,{effect:"Light"},{default:l(()=>[ze]),_:1})]),e("td",Ee,[t(n,{effect:"dark",round:""},{default:l(()=>[Ie]),_:1})])]),e("tr",null,[Oe,Ge,e("td",Ke,[t(n,{effect:"Light"},{default:l(()=>[Ue]),_:1})]),e("td",je,[t(n,{effect:"dark",round:""},{default:l(()=>[He]),_:1})])]),e("tr",null,[Je,Qe,e("td",We,[t(n,{effect:"Light"},{default:l(()=>[Xe]),_:1})]),e("td",Ye,[t(n,{effect:"dark",round:""},{default:l(()=>[Ze]),_:1})])]),e("tr",null,[$e,et,e("td",tt,[t(n,{effect:"Light"},{default:l(()=>[nt]),_:1})]),e("td",lt,[t(n,{effect:"dark",round:""},{default:l(()=>[st]),_:1})])])])]),it,e("table",null,[ot,e("tbody",null,[e("tr",null,[dt,at,e("td",ct,[t(n,{effect:"Light"},{default:l(()=>[rt]),_:1})])]),e("tr",null,[ut,vt,e("td",ht,[t(n,{effect:"Light"},{default:l(()=>[_t]),_:1})])]),e("tr",null,[mt,gt,e("td",bt,[t(n,{effect:"Light"},{default:l(()=>[pt]),_:1})])])])]),ft,e("figure",null,[e("a",xt,[yt,t(h)]),qt]),Ct])])}const Bt=_(p,[["render",kt],["__file","ActionPanel.html.vue"]]);export{Bt as default};
