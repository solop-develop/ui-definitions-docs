import{aK as r,S as u,U as v,V as e,ac as i,ae as t,a8 as l,aS as a,D as d,ad as s}from"./framework-233955b8.js";const _={},h=e("p",null,[i("By default, the component accepts and emits a "),e("code",null,"Date"),i(" object.")],-1),g=e("p",null,"Check the list here of all available formats of Day.js.",-1),m=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"Note"),e("p",null,"Pay attention to capitalization")],-1),f=a(`<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> <strong>Viwer Source</strong></h4><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">vue</span>
<span class="token code-block language-vue">&lt;template&gt;
  &lt;div class=&quot;demo-date-picker&quot;&gt;
    &lt;div class=&quot;block&quot;&gt;
      &lt;span class=&quot;demonstration&quot;&gt;Emits Date object&lt;/span&gt;
      &lt;div class=&quot;demonstration&quot;&gt;Value: {{ value1 }}&lt;/div&gt;
      &lt;field-date-picker
        v-model=&quot;value1&quot;
        type=&quot;date&quot;
        placeholder=&quot;Pick a Date&quot;
        format=&quot;YYYY/MM/DD&quot;
      /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;block&quot;&gt;
      &lt;span class=&quot;demonstration&quot;&gt;Use value-format&lt;/span&gt;
      &lt;div class=&quot;demonstration&quot;&gt;Value：{{ value2 }}&lt;/div&gt;
      &lt;field-date-picker
        v-model=&quot;value2&quot;
        type=&quot;date&quot;
        placeholder=&quot;Pick a Date&quot;
        format=&quot;YYYY/MM/DD&quot;
        value-format=&quot;YYYY-MM-DD&quot;
      /&gt;
    &lt;/div&gt;
    &lt;div class=&quot;block&quot;&gt;
      &lt;span class=&quot;demonstration&quot;&gt;Timestamp&lt;/span&gt;
      &lt;div class=&quot;demonstration&quot;&gt;Value：{{ value3 }}&lt;/div&gt;
      &lt;field-date-picker
        v-model=&quot;value3&quot;
        type=&quot;date&quot;
        placeholder=&quot;Pick a Date&quot;
        format=&quot;YYYY/MM/DD&quot;
        value-format=&quot;x&quot;
      /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &#39;vue&#39;

const value1 = ref(&#39;&#39;)
const value2 = ref(&#39;&#39;)
const value3 = ref(&#39;&#39;)
&lt;/script&gt;
&lt;style scoped&gt;
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
&lt;/style&gt;
</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> <strong>Props</strong></h3>`,3),b=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Mandatory")])],-1),p=e("td",{style:{"text-align":"center"}},[e("code",null,"type")],-1),y=e("td",{style:{"text-align":"center"}},"type of the picker",-1),x={style:{"text-align":"center"}},k=e("strong",null,s("string"),-1),q={style:{"text-align":"center"}},D=e("strong",null,s("True"),-1),L=e("h3",{id:"attributes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),i(),e("strong",null,"Attributes")],-1),Y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Name"),e("th",{style:{"text-align":"center"}},"Description"),e("th",{style:{"text-align":"center"}},"Type"),e("th",{style:{"text-align":"center"}},"Default")])],-1),w=e("td",{style:{"text-align":"center"}},[e("code",null,"value")],-1),z=e("td",{style:{"text-align":"center"}},"binding value, if it is an array, the length should be 2",-1),M={style:{"text-align":"center"}},P=e("strong",null,s("Date / number / string / Array"),-1),S={style:{"text-align":"center"}},C=e("strong",null,s("——————"),-1),F=e("td",{style:{"text-align":"center"}},[e("code",null,"format")],-1),V=e("td",{style:{"text-align":"center"}},"format of the displayed value in the input box",-1),N={style:{"text-align":"center"}},B=e("strong",null,[e("strong",null,s("string"))],-1),T={style:{"text-align":"center"}},A=e("strong",null,s("YYYY-MM-DD"),-1),E=e("td",{style:{"text-align":"center"}},[e("code",null,"shortcuts")],-1),j=e("td",{style:{"text-align":"center"}},"an object array to set shortcut options",-1),U={style:{"text-align":"center"}},I={style:{"text-align":"center"}},O=e("strong",null,s("——————"),-1),G=e("td",{style:{"text-align":"center"}},[e("code",null,"placeholder")],-1),K=e("td",{style:{"text-align":"center"}},"placeholder in non-range mode",-1),H={style:{"text-align":"center"}},J=e("strong",null,s("string"),-1),Q={style:{"text-align":"center"}},R=e("strong",null,s("——————"),-1),W=e("td",{style:{"text-align":"center"}},[e("code",null,"startPlaceholder")],-1),X=e("td",{style:{"text-align":"center"}},"placeholder in non-range mode",-1),Z={style:{"text-align":"center"}},$=e("strong",null,s("string"),-1),ee={style:{"text-align":"center"}},te=e("strong",null,s("——————"),-1),ne=e("td",{style:{"text-align":"center"}},[e("code",null,"endPlaceholder")],-1),le=e("td",{style:{"text-align":"center"}},"placeholder in non-range mode",-1),se={style:{"text-align":"center"}},ie=e("strong",null,s("string"),-1),de={style:{"text-align":"center"}},ae=e("strong",null,s("——————"),-1),oe=e("td",{style:{"text-align":"center"}},[e("code",null,"disabled")],-1),ce=e("td",{style:{"text-align":"center"}},[i("whether Switch is "),e("code",null,"disabled")],-1),re={style:{"text-align":"center"}},ue={style:{"text-align":"center"}},ve=e("strong",null,s("False"),-1),_e=e("td",{style:{"text-align":"center"}},[e("code",null,"clearable")],-1),he=e("td",{style:{"text-align":"center"}},"whether to show clear button",-1),ge={style:{"text-align":"center"}},me=e("strong",null,s("boolean"),-1),fe={style:{"text-align":"center"}},be=e("strong",null,s("False"),-1),pe=e("td",{style:{"text-align":"center"}},[e("code",null,"size")],-1),ye={style:{"text-align":"center"}},xe=e("strong",null,s("large / default / small"),-1),ke={style:{"text-align":"center"}},qe=e("strong",null,[e("strong",null,s("string"))],-1),De={style:{"text-align":"center"}},Le=e("strong",null,s("default"),-1),Ye=a('<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>header</code></td><td style="text-align:center;">Customize Default Content Top</td></tr><tr><td style="text-align:center;"><code>footer</code></td><td style="text-align:center;">Customize Default Content Bottom</td></tr></tbody></table><h3 id="example-for-developer" tabindex="-1"><a class="header-anchor" href="#example-for-developer" aria-hidden="true">#</a> <strong>Example for Developer</strong></h3>',3),we={href:"https://stackblitz.com/edit/fields-date-picker?file=app.vue",target:"_blank",rel:"noopener noreferrer"},ze=e("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz",tabindex:"0",loading:"lazy"},null,-1),Me=e("figcaption",null,"Open in StackBlitz",-1),Pe=a(`<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> <strong>Directory</strong></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>
      └── Components                                <span class="token comment"># Global components</span>
              └── Atoms                             <span class="token comment"># Atom components</span>
                  └── FieldDatePicker               <span class="token comment"># Field DatePicker specific components.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function Se(Ce,Fe){const o=d("DateFormats"),n=d("el-tag"),c=d("ExternalLinkIcon");return u(),v("div",null,[e("span",null,[i(" Use `format` to control displayed text's `format` in the input box. Use `value-format` to control binding value's format. "),h,g,m,t(o),f,e("table",null,[b,e("tbody",null,[e("tr",null,[p,y,e("td",x,[t(n,{effect:"Light"},{default:l(()=>[k]),_:1})]),e("td",q,[t(n,{effect:"dark",round:""},{default:l(()=>[D]),_:1})])])])]),L,e("table",null,[Y,e("tbody",null,[e("tr",null,[w,z,e("td",M,[t(n,{effect:"Light"},{default:l(()=>[t(n,{effect:"Light"},{default:l(()=>[P]),_:1})]),_:1})]),e("td",S,[t(n,{effect:"dark",round:""},{default:l(()=>[C]),_:1})])]),e("tr",null,[F,V,e("td",N,[t(n,{effect:"Light"},{default:l(()=>[t(n,{effect:"Light"},{default:l(()=>[B]),_:1})]),_:1})]),e("td",T,[t(n,{effect:"dark",round:""},{default:l(()=>[A]),_:1})])]),e("tr",null,[E,j,e("td",U,[t(n,{effect:"Light"},{default:l(()=>[i(s("Array"))]),_:1})]),e("td",I,[t(n,{effect:"dark",round:""},{default:l(()=>[O]),_:1})])]),e("tr",null,[G,K,e("td",H,[t(n,{effect:"Light"},{default:l(()=>[t(n,{effect:"Light"},{default:l(()=>[J]),_:1})]),_:1})]),e("td",Q,[t(n,{effect:"dark",round:""},{default:l(()=>[R]),_:1})])]),e("tr",null,[W,X,e("td",Z,[t(n,{effect:"Light"},{default:l(()=>[t(n,{effect:"Light"},{default:l(()=>[$]),_:1})]),_:1})]),e("td",ee,[t(n,{effect:"dark",round:""},{default:l(()=>[te]),_:1})])]),e("tr",null,[ne,le,e("td",se,[t(n,{effect:"Light"},{default:l(()=>[t(n,{effect:"Light"},{default:l(()=>[ie]),_:1})]),_:1})]),e("td",de,[t(n,{effect:"dark",round:""},{default:l(()=>[ae]),_:1})])]),e("tr",null,[oe,ce,e("td",re,[t(n,{effect:"Light"},{default:l(()=>[t(n,{effect:"Light"},{default:l(()=>[i(s("boolean"))]),_:1})]),_:1})]),e("td",ue,[t(n,{effect:"dark",round:""},{default:l(()=>[ve]),_:1})])]),e("tr",null,[_e,he,e("td",ge,[t(n,{effect:"Light"},{default:l(()=>[t(n,{effect:"Light"},{default:l(()=>[me]),_:1})]),_:1})]),e("td",fe,[t(n,{effect:"dark",round:""},{default:l(()=>[be]),_:1})])]),e("tr",null,[pe,e("td",ye,[i("size of Switch "),t(n,{effect:"Light"},{default:l(()=>[xe]),_:1})]),e("td",ke,[t(n,{effect:"Light"},{default:l(()=>[t(n,{effect:"Light"},{default:l(()=>[qe]),_:1})]),_:1})]),e("td",De,[t(n,{effect:"dark",round:""},{default:l(()=>[Le]),_:1})])])])]),Ye,e("figure",null,[e("a",we,[ze,t(c)]),Me]),Pe])])}const Ne=r(_,[["render",Se],["__file","FieldDatePiker.html.vue"]]);export{Ne as default};
