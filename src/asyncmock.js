const misProductos = [
    {id:"1",nombre:"Great Tusk Ex",precio:500, img: "https://images.pokemontcg.io/sv1/123_hires.png", categoria: "singles", stock: 5},
    {id:"2",nombre:"Tropious",precio:553, img: "https://images.pokemontcg.io/sv1/7.png", categoria: "singles", stock: 2},
    {id: "3",nombre:"Murkrow",precio:1900, img: "https://images.pokemontcg.io/sv2/131_hires.png", categoria: "singles", stock:4},
    {id: "4",nombre:"Hariyama",precio:5120, img: "https://images.pokemontcg.io/sv2/113_hires.png", categoria:"singles", stock:10},
    {id: "5",nombre:"Garganacl",precio:2120, img: "https://images.pokemontcg.io/sv2/123_hires.png", categoria:"singles", stock:10},
    {id:"6", nombre:"Iron Valiant ex", precio: 7200, img: "https://images.pokemontcg.io/sv4/124_hires.png", categoria: "singles", stock: 3},
    {id:"7", nombre:"Pawmot", precio: 1800, img: "https://images.pokemontcg.io/sv4/125_hires.png", categoria: "singles", stock: 8},
    {id:"8", nombre:"Bombirdier ex", precio: 4500, img: "https://images.pokemontcg.io/sv4/126_hires.png", categoria: "singles", stock: 2},
    {id:"9", nombre:"Flamigo", precio: 900, img: "https://images.pokemontcg.io/sv4/127_hires.png", categoria: "singles", stock: 12},
    {id:"10", nombre:"Cetitan", precio: 1500, img: "https://images.pokemontcg.io/sv4/128_hires.png", categoria: "singles", stock: 5},
    {id:"11", nombre:"Tinkaton ex", precio: 6800, img: "https://images.pokemontcg.io/sv4/29_hires.png", categoria: "singles", stock: 1},
    {id:"12", nombre:"Wiglett", precio: 500, img: "https://images.pokemontcg.io/sv4/13_hires.png", categoria: "singles", stock: 20},
    {id:"13", nombre:"Farigiraf", precio: 2200, img: "https://images.pokemontcg.io/sv4/131_hires.png", categoria: "singles", stock: 7},
    {id:"14", nombre:"Dondozo", precio: 1200, img: "https://images.pokemontcg.io/sv4/122_hires.png", categoria: "singles", stock: 4},
    {id:"15", nombre:"Tatsugiri", precio: 2500, img: "https://images.pokemontcg.io/sv4/33_hires.png", categoria: "singles", stock: 6},   
    {id:"16", nombre:"Tatsugiri", precio: 2500, img: "https://images.pokemontcg.io/sv4/3_hires.png", categoria: "singles", stock: 6},
    {id:"17", nombre:"Booster JourneyTogether", precio: 500, img: "https://www.pokebeach.com/news/2025/01/Pokemon_TCG_Scarlet_Violet%E2%80%94Journey_Together_Booster_Wrap_Iono_s_Bellibolt.png", categoria: "sellados", stock: 20},
    {id:"18", nombre:"Booster ParadoxRift", precio: 2200, img: "https://i.imgur.com/KMAeDbx.png", categoria: "sellados", stock: 7},
    {id:"19", nombre:"Booster PaldeaEvolved", precio: 1200, img: "https://cdn.shoplightspeed.com/shops/622104/files/55468680/the-pokemon-company-international-pokemon-tcg-scar.jpg", categoria: "sellados", stock: 4},
    {id:"20", nombre:"Booster PrismaticEvolutions", precio: 2500, img: "https://www.pokebeach.com/news/2024/11/Pokemon_TCG_Scarlet_Violet%E2%80%94Prismatic_Evolutions_Booster_Wrap_Espeon_and_Umbreon.png", categoria: "sellados", stock: 6},        
]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },100)
    })
}

export const getUnProducto = (id) =>{
    return new Promise(resolve => {
        setInterval(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        },100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.categoria === idCategoria)
            resolve(productosCategoria)
        },100)
    })
}