# Future Gamers
*Bienvenidos a mi proyecto de React Js, creado por Alejo Veron.*

El proyecto se arranca con la aplicacion React Create App, utilizando la libreria de React Js.

La app se trata de un E-commerce el cual en su pagina principal cuenta con una barra de navegacion, en la cual se podran filtrar los productos por categoria. En su cuerpo principal la pagina muestra los articulos y mediante un boton se podra ver su detalle y posteriormente seleccionar la cantidad que deseemos comprar para enviarla al carro de compras, en el cual se podra finalizar el proceso de compra.

## Comenzar

Lo primero que se debe realizar es clonar el repositorio de git de la siguiente manera:

***git clone https://github.com/AleVeron/ProyectoReactJSAV.git***

Siguiente a la clonacion se deben agregar las dependencias utilizando:

***npm i***

Las dependencias a utilizar son las siguientes:
* React
* React-dom
* React-router-dom
* Firebase
* Sweetalert
* Web-vitals
* Bootstrap
* React-scripts

## Firebase

Para agregar nuestra lista de productos, tendra que crear un nuevo proyecto en Firebase. Inicie sesion en el mismo y cree la aplicacion. En la descripcion general del proyecto seleccione "Web" y luego siguiendo los pasos configurela segun su gusto. 

## Base de datos Firestore

Una vez configurado Firebase, se debe crear una base de datos en Firestore. Seleccione "modo de produccion" y seleccione la region mas acorde, una vez finalizado activelo. 
Mediante esta base de datos (db) debera crear 2 nuevas colecciones una llamada *categorias* y otra de *items*. Ambas colecciones se recomienda que generen sus id automaticamente.

La coleccion de categorias tendra que tener 2 campos:
* description
* id

La coleccion de items tendra 6 campos:
* categoria
* img (se recomienda utilizar links publicos)
* info 
* nombre
* precio
* stock

## Ejecución de la aplicacion

Para comenzar con la aplicacion se debe ejecutar el siguiente comando: 

**_npm start_**

Se abrira en el navegador en modo desarrollo http://localhost:3000
De esta manera podra utilizar esta app, modificarla y ver o corregir errores mediante la consola del navegador.

## Componentes

Como principales componentes podremos encontrar el NavBar, ItemDetail, ItemListContainer, Cart. 

* NavBar : Con el NavBar se puede recorrer las 3 distintas categorias que existen segun su tipo de producto.

* Item List Container : Cuerpo de la app, en la cual encontramos el listado de productos. Este envuelve tanto al ItemDetail como al buttonCount

* ItemDetail : podremos acceder a el presionando al boton ver detalles, dentro de este componente tendremos informacion adicional de cada producto y un contador que agrega o quita segun el stock que se encuentre disponible. 

* buttonCount : Su funcion es sumar y restar la cantidad de productos que deseemos y con su otro boton podremos agregar esa cantidad al carro de compras.

* Cart : el carro de compras, en caso de estar vacio nos avisara con una imagen peculiar. Se veran en el los items agregados al mismo y se podra quitarlos, limpiar el carro por completo y ademas finalizar la compra realizando una orden que sera guardada en la base de datos que poseemos en firestore.