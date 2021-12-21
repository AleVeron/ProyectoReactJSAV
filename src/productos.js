// const productos =[
//     {"categoria" : "monitor",
//      "nombre" : "Monitor Viewsonic",
//      "precio" : "25000",
//      "img" : "https://www.corner.com.uy/imgs/productos/productos31_4285.jpg",
//      "id" : 1,
//      "info": "Tipo: Monitor LCD TN 24” W,Tamaño de pantalla: 521.28mm  x 293.22mm, Resolución: Full HD 1920 x 1080. Ángulos de visión: 170 grados / 160 grados (Typ)",
//      "stock": 13
//     },
//     {"categoria" : "gabinete",
//      "nombre" : "Gabinete Thermaltek",
//      "precio" : "15000",
//      "img" : "https://www.pccompu.com.uy/imgs/productos/productos31_26577.jpg",
//      "id" : 2,
//      "info": "Especificaciones Físicas: Formato: Mid-Tower. Compatibilidad: Motherboard: 6.7” x 6.7” (Mini ITX), 9.6” x 9.6” (Micro ATX), 12” x 9.6” (ATX)",
//      "stock": 5 
//     },
//     {"categoria" : "notebook",
//     "nombre" : "Notebook Lenovo",
//     "precio" : "120000",
//     "img" : "https://www.corner.com.uy/imgs/productos/productos31_4306.jpg",
//     "id" : 3,
//     "info" : "Procesador: Intel core i3, Gráficos: Intel HD, Memoria Ram: DDR4 4GB SODIMM. Almcenamiento: SATA de 1000 GB, 5400 rpm, Sin Unidad óptica.Conectividad Inalámbrica: 802.11b/g/n.",
//     "stock": 7
//    }
// ]
 
// //Obtengo todos los productos
// export const getProductos = (categoria) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//          categoria ? resolve(productos.filter(producto => producto.categoria === categoria)) : resolve(productos)
//         }, 1000)
//     })
// }

// //Obtengo el 3 producto del array
// export const getItem = () => {    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(productos[2])
//         }, 1000)        
//     })
// }

// //Obtener producto por ID
// export const getProductoById = (id) => {  
//     return new Promise((resolve, reject) => {
//         const producto = productos.find(prod => parseInt(prod.id) === parseInt(id))
//         setTimeout(() => resolve(producto), 1000)
//     })
// }

const categorias=[
    {id:"monitor", description:"Monitores"},
    {id:"gabinete", description:"Gabinetes"},
    {id:"notebook", description:"Notebooks"}
]



//Obtener producto por categoria 

export const getCategorias = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categorias)
        }, 3000)        
    })
}