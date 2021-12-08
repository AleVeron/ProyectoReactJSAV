const productos =[
    {"nombre" : "Monitor",
     "precio" : "25000",
     "img" : "https://www.corner.com.uy/imgs/productos/productos31_4285.jpg",
     "id" : 1
    },
    {"nombre" : "Gabinete",
     "precio" : "15000",
     "img" : "https://www.pccompu.com.uy/imgs/productos/productos31_26577.jpg",
     "id" : 2   
    },
    {"nombre" : "Notebook",
    "precio" : "120000",
    "img" : "https://www.corner.com.uy/imgs/productos/productos31_4306.jpg",
    "id" : 3,
    "info" : "Procesador: Intel core i3, Gráficos: Intel HD, Memoria Ram: DDR4 4GB SODIMM. Almcenamiento: SATA de 1000 GB, 5400 rpm, Sin Unidad óptica.Conectividad Inalámbrica: 802.11b/g/n." 
   }
]
 
export const getProductos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}


export const getItem = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos[2])
        }, 1000)        
    })
}