
const producto =[
    
    {"nombre" : "Notebook",
     "precio" : "120000",
     "img" : "https://www.corner.com.uy/imgs/productos/productos31_4306.jpg",
     "id" : 3,
     "info" : "Procesador: Intel core i3, Gráficos: Intel HD, Memoria Ram: DDR4 4GB SODIMM. Almcenamiento: SATA de 1000 GB, 5400 rpm, Sin Unidad óptica.Conectividad Inalámbrica: 802.11b/g/n." 
    }
]


//Devuelve 1 solo item

export const getUno = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(producto)
        }, 2000)
    })
}