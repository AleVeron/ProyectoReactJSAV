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
     "id" : 3  
    }
]
 
export const getProductos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}
