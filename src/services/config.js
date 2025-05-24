// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAw-RjH3-Q6OwwVmpkDSKGVZ5rGP6piY8",
  authDomain: "final-75910-dandrade.firebaseapp.com",
  projectId: "final-75910-dandrade",
  storageBucket: "final-75910-dandrade.firebasestorage.app",
  messagingSenderId: "17658517134",
  appId: "1:17658517134:web:28f356c0e4ff10a8aedbdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)



///////////SUBIR DATOS AUTOMATICO
/*
const misProductos = [
    {nombre:"Great Tusk Ex",precio:500, img: "https://images.pokemontcg.io/sv1/123_hires.png", categoria: "singles", stock: 5, descripcion: "Carta EX tipo Lucha. Ataque 'Colmillo Ancestral': 120 daño + reduce 30 daño del próximo ataque. Expansión Escarlata y Violeta."},
    {nombre:"Tropius",precio:553, img: "https://images.pokemontcg.io/sv1/7.png", categoria: "singles", stock: 2, descripcion: "Habilidad 'Cosecha Dorada': roba carta extra cada turno. Ideal para mazos de energía rápida."},
    {nombre:"Murkrow",precio:1900, img: "https://images.pokemontcg.io/sv2/131_hires.png", categoria: "singles", stock:4, descripcion: "Holo rara. 'Picotazo Venenoso' puede envenenar. Clave en mazos de estado."},
    {nombre:"Hariyama",precio:5120, img: "https://images.pokemontcg.io/sv2/113_hires.png", categoria:"singles", stock:10, descripcion: "'Golpe Impacto': 80 daño + 40 extra si rival tiene condición. Full-art."},
    {nombre:"Garganacl",precio:2120, img: "https://images.pokemontcg.io/sv2/123_hires.png", categoria:"singles", stock:10, descripcion: "Habilidad 'Barrera de Sal': reduce 20 daño de todos los ataques. Defensa sólida."},
    {nombre:"Roaring Moon ex", precio: 7200, img: "https://images.pokemontcg.io/sv4/124_hires.png", categoria: "singles", stock: 3, descripcion: "Dragón/Oscuro. 'Ala de Luna': 220 daño. Ultra Rara de Paldea Evolved."},
    {nombre:"Steelix", precio: 1800, img: "https://images.pokemontcg.io/sv4/125_hires.png", categoria: "singles", stock: 8, descripcion: "180 HP. 'Cola Férrea': 120 daño. Resistente múltiple. Versión holo."},
    {nombre:"Jirachi", precio: 4500, img: "https://images.pokemontcg.io/sv4/126_hires.png", categoria: "singles", stock: 2, descripcion: "'Deseo Estelar': busca cualquier carta al entrar. Secret Rare coleccionable."},
    {nombre:"Ferroseed", precio: 900, img: "https://images.pokemontcg.io/sv4/127_hires.png", categoria: "singles", stock: 12, descripcion: "'Armadura Espinosa': 20 daño a atacantes. Defensa temprana efectiva."},
    {nombre:"Ferrothorn", precio: 1500, img: "https://images.pokemontcg.io/sv4/128_hires.png", categoria: "singles", stock: 5, descripcion: "'Látigo de Púas': 90 daño + cambia rival. Reverse holo Tempestad Plateada."},
    {nombre:"Chi-yu", precio: 6800, img: "https://images.pokemontcg.io/sv4/29_hires.png", categoria: "singles", stock: 1, descripcion: "'Combustión Maligna': 30x cada Energía Fuego. Full Art Ultra Rare."},
    {nombre:"Nymble", precio: 500, img: "https://images.pokemontcg.io/sv4/13_hires.png", categoria: "singles", stock: 20, descripcion: "'Salto Sorpresa': 20 daño + cambio gratis. Básico para estrategias swap."},
    {nombre:"Honedge", precio: 2200, img: "https://images.pokemontcg.io/sv4/131_hires.png", categoria: "singles", stock: 7, descripcion: "'Espada Voraz': cura 20 HP/turno. Holo con arte alternativo."},
    {nombre:"Lokix", precio: 1200, img: "https://images.pokemontcg.io/sv4/122_hires.png", categoria: "singles", stock: 4, descripcion: "'Patada Ciclón': 70 daño + retorno a mano. Estrategia reusable."},
    {nombre:"Remoraid", precio: 2500, img: "https://images.pokemontcg.io/sv4/33_hires.png", categoria: "singles", stock: 6, descripcion: "'Disparo Certero': ignora resistencias. Reverse holo by 5ban Graphics."},   
    {nombre:"Froslass Ex", precio: 2500, img: "https://images.pokemontcg.io/sv4/3_hires.png", categoria: "singles", stock: 6, descripcion: "'Viento Gélido': 100 daño + congelar. EX con arte exclusivo."},
    {nombre:"Journey Together", precio: 500, img: "https://www.pokebeach.com/news/2025/01/Pokemon_TCG_Scarlet_Violet%E2%80%94Journey_Together_Booster_Wrap_Iono_s_Bellibolt.png", categoria: "sellados", stock: 20, descripcion: "Booster de 10 Cartas"},
    {nombre:"Paradox Rift", precio: 2200, img: "https://i.imgur.com/KMAeDbx.png", categoria: "sellados", stock: 7, descripcion: "Booster de 10 Cartas"},
    {nombre:"Paldea Evolved", precio: 1200, img: "https://cdn.shoplightspeed.com/shops/622104/files/55468680/the-pokemon-company-international-pokemon-tcg-scar.jpg", categoria: "sellados", stock: 4, descripcion: "Booster de 10 Cartas"},
    {nombre:"Prismatic Evolutions", precio: 2500, img: "https://www.pokebeach.com/news/2024/11/Pokemon_TCG_Scarlet_Violet%E2%80%94Prismatic_Evolutions_Booster_Wrap_Espeon_and_Umbreon.png", categoria: "sellados", stock: 6, descripcion: "Booster de 10 Cartas"},        
]

import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async () => {
    const batch = writeBatch(db);
    const productosRef = collection(db, "productos")

    misProductos.forEach((producto)=>{
        const nuevoDoc = doc(productosRef);
        batch.set(nuevoDoc, producto)
    });


    try{
        await batch.commit()
        console.log("Productos subidos exitosamente")
    }catch (error){
        console.error("Error subiendo productos:", error)
    }
}

subirProductos();
*/