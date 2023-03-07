<spam id="epale" ref="alo">

  <!-- # Component -->

  # Átomos

  ## Botón

  **El componente del botón base. Este componente funcional de Vue3, Nuxt3 y Element-Plus.**

### Tipo de Botón

**Botones comúnmente usados**

<iframe
  src="https://codesandbox.io/embed/docs-component-atom-button-all-type-7x5mmj?file=/src/App.vue?view=preview&hidenavigation=1&9"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:auto;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Botón deshabilitado

**El atributo disabled determina su un botón esta deshabilitado.**

<iframe
    src="https://codesandbox.io/embed/docs-component-atom-button-disable-gis8ni?file=/src/App.vue?view=preview&hidenavigation=1&9"
    style="width:100%; height:250px; border:0; border-radius: 4px; overflow:hidden;"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>

  ### Botón de descarga

**Cuando se hace clic en un botón para descargar datos, el botón muestra un estado de descarga.** <br>
*Ajuste el atributo loading a true para mostrar el estado de descarga*

<iframe
    src="https://codesandbox.io/embed/docs-component-atom-button-loading-slkiy6?file=/src/App.vue?view=preview&hidenavigation=1&9"
    style="width:100%; height:250px; border:0; border-radius: 4px; overflow:hidden;"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>

  #### Codesandbox

  <iframe
    src="https://codesandbox.io/embed/docs-component-atom-button-dcr72v?from-embed=&file=/src/App.vue?view=preview&hidenavigation=1&9"
    style="width:100%; height:850px; border:0; border-radius: 4px; overflow:auto;"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>

  #### **Atributos**

  |   Nombre    | Descriptión | Valor por Defecto |   Tipo de Valor   | Valores aceptados |
  | :---------: | :-----------: | :-----------------: | :-----------: | :---------------: |
  |    text  | Contenido a mostrar dentro del Botón  |  -  | String |  Texto |
  |    type  | El Botón tiene diferente tipos [ Primary, Success, Info, Warning, Danger ]    | - | String | primary / success / warning / danger / info / text |
  |  disabled | El atributo disabled determina su un botón esta deshabilitado | False | Boolean | — |
  |  plain | determinar si es o no un botón plano | False | Boolean | — |
  |  loading | Ajuste el atributo loading a true para mostrar el estado de descarga | False | Boolean | — |

  #### **Estructura**

  ```bash
      └─ src                           # Código fuente principal
          └── components               # Componentes globales
                  └─ Atoms             # Componentes Átomos
                      └── buttom       # Componentes específicos del Botón
  ```
</spam>

<style>
:root {
  --content-width: 1050px !important;
}
</style>