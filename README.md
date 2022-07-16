# Redux
Se implementa un ejemplo del mundo real para ejemplificar la implementación y funcionamiento de Redux.

## Tienda de pasteles
Identificamos las diferentes partes involucradas y las actividades que realizan

|   Entidades   |   Actividades |
|:---|:---|
|   <ul><li>**Tienda** - Almacena pasteles en un estante</li><li>**Tendero** - Detrás del mostrador</li><li>**Cliente** - En la entrada de la tienda</li></ul>| <ul><li>**Cliente** - Pide un pastel (usando un QR)</li><li>**Tendero**</li><ul><li>Empaca un pastel del mostrador</li><li>Entrega recibo (registro de la compra)</li></ul></ul> |

### Identificar: actions, reducers y store
Dentro del escenario de la pasteleria en el mundo real identificar los donde se aplican los 3 conceptos fundamentales de redux: *actions*, *reducers*, *store*.

| Escenario de pastelería | Concepto en Redux | Propósito |
|:---|:---|:--- |
| **Tienda** | *store* | Mantiene el estado de su aplicación |
| **Pastel ordenado** | *action* | Describe lo que pasó |
| **Tendero** | *reducer* | Une la tienda y las acciones |

### Aplicacion: Tienda de pasteles
Con el propósito de facilitar el aprendizaje de Redux la aplicación implementará Redux dentro de un entorno basado en Node, donde podremos identificar:
1. Creación de una acción para ordenar pasteles (CAKE_ORDERED).
2. Creación del reducer quien gestionará la accion para modificar el store.
3. Creación del store donde se mantendrá el estado global de la aplicación.

### Scripts disponibles
En el directorio del proyecto, puede ejecutar:

### `npm i`
Para instalar las dependencias requeridas

### `npm start`
Para ejecutar la aplicación