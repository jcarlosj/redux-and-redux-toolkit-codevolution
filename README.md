# Redux & Redux Toolkit
Se implementa los siguientes ejemplos para ejemplificar la implementación y funcionamiento en Redux y Redux Toolkit.
 - Tienda de pasteles y helados.
 - Actualización de propiedades anidadas del estado.
 - Obtener datos de una API a través procesos asíncronos.

## Tienda de pasteles y helados
Tomamos el primero de los ejemplos del mundo real, una tienda de pasteles y helados. Identificamos las diferentes partes involucradas y las actividades que realizan

|   Entidades   |   Actividades |
|:---|:---|
|   <ul><li>**Tienda** - Almacena pasteles en un estante</li><li>**Tenderos** - Detrás del mostrador</li><li>**Cliente** - En la entrada de la tienda</li></ul>| <ul><li>**Cliente** - Pide un pastel y/o un helado (usando un QR)</li><li>**Tendero 1**</li><ul><li>Empaca un pastel del mostrador</li><li>Entrega recibo (registro de la compra)</li></ul><li>**Tendero 2**</li><ul><li>Despacha un helado del congelador</li><li>Entrega recibo (registro de la compra)</li></ul></ul> |

### Identificar: actions, reducers y store
Dentro del escenario de la pasteleria en el mundo real identificar los donde se aplican los 3 conceptos fundamentales de redux: *actions*, *reducers*, *store*.

| Escenario de pastelería | Concepto en Redux | Propósito |
|:---|:---|:--- |
| **Tienda** | *store* | Mantiene el estado de su aplicación |
| **Pastel ordenado** | *action* | Describe lo que pasó |
| **Helado ordenado** | *action* | Describe lo que pasó |
| **Tendero 1** | *reducer* | Une la tienda y las acciones |
| **Tendero 2** | *reducer* | Une la tienda y las acciones |

### Aplicación: Tienda de pasteles y helados
Con el propósito de facilitar el aprendizaje de Redux la aplicación implementará Redux dentro de un entorno basado en Node, dentro del siguiente escenario.

#### Venta de pasteles
- Tortas almacenadas en el estante
- **Tendero 1** maneja la orden del cliente *CAKE_ORDERED*

#### Venta de helados
- Helados almacenados en el congelador
- **Tendero 2** maneja la orden del cliente *ICREAM_ORDERED*

#### Gestión de la tienda
El estado de la tienda ahora es el número de pasteles en el estante junto con el número de helados en el congelador.

- Los tenderos separados ayudan con la escalabilidad.
- Los comerciantes separados ayudan a reducir un problema cuando surge uno

### Variaciones al modelo inicial: 
#### Venta de pasteles
- Tortas almacenadas en el estante
- **Tendero 1** maneja la orden del cliente *CAKE_ORDERED* sin embargo de ahora en adelante todo pastel se servirá con una porción de helado. Al ordenar un pastel, también se hará automáticamente una orden de helado.

# Scripts disponibles
Los proyectos ejemplificados aqui se pueden desplegar usando los siguientes comandos
### `npm i`
Primero debe instalar las dependencias requeridas

## Redux, React-Redux
Los siguiente comandos lanzaran los ejemplos basados en Redux
### `npm start`
Para ejecutar la aplicación tienda de pasteles y helados (incluida la variación al modelo inicial)

### `npm run start:nested`
Para ejecutar ejemplo de estados anidados
 - Ejemplo tradicional de estados anidados retornando todo el objeto
 - Ejemplo usando el paquete immer que hace una copia mutable del estado para asignar los valores a las propiedades directamente

### `npm run start:async`
Para ejecutar ejemplo de estados anidados, que representan:
 - Actualización tradicional de estados anidados retornando todo el objeto
 - Actualización de estado usando el paquete immer que hace una copia mutable del estado para asignar los valores a las propiedades directamente.

## Redux Toolkit
Se hace uno de un único comando con el que se podrán ejecutar todos los ejemplos descritos anteriormente implementados con Redux Toolkit.

### `npm run rtk`
Cada ejemplo requiere que se habilite el envio (dispatch) de acciones de cada uno de ellos:

### Tienda de pateles y helados
En el archivo *./redux-toolkit/index.js* descomentar o comentar líneas.

Realizar las acciones de ordenar pasteles
 ``` 
    // store.dispatch( cakeActions.ordered() );
    // store.dispatch( cakeActions.ordered() );
    // store.dispatch( cakeActions.ordered() );
    // store.dispatch( cakeActions.restocked( 3 ) );
```
Realizar las acciones de ordenar helados
```
    // store.dispatch( icecreamActions.ordered() );
    // store.dispatch( icecreamActions.ordered( 2 ) );
    // store.dispatch( icecreamActions.restocked( 3 ) );
 ``` 
### Obtener datos de una API a través de procesos asíncronos
Este ejemplo hace uso de la API https://jsonplaceholder.typicode.com/

En el archivo ./redux-toolkit/index.js descomentar o comentar líneas.

Realizar acción para obtener un listado de usuarios de la API *jsonplaceholder*
```
store.dispatch( fetchUsers() );
```
Realizar acción para obtener un usuario por ID de la API *jsonplaceholder*
```
store.dispatch( fetchUserById( 1 ) );
```