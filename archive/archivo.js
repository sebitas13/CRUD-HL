import Arma from "../classes/arma.js";
import Criatura from "../classes/criatura.js";
import ListaArmas from "../classes/listaArmas.js";
import ListaCriaturas from "../classes/listaCriaturas.js";


export let listaArmas = new ListaArmas();
export let listaCriaturas = new ListaCriaturas();


listaArmas.agregarArma(
  new Arma(
    "Crowbar",
    "25",
    "atack",
    "nothing",
    "Half life 1",
    "Basic weapon, useful on close distances",
    "../assets/images/armas/crowbar.webp"
  )
);
listaArmas.agregarArma(
  new Arma(
    "Pistol",
    "12",
    "fires slowly but more accurately",
    "fires faster but with less accuraccy",
    "Half life 1",
    "Default weapon. Try aim for the head with primary fire. It’s funcional underwater.",
    "../assets/images/armas/pistol.webp"
  )
);
listaArmas.agregarArma(
  new Arma(
    "Shotgun",
    "20",
    "fires one shot, useful on long distance",
    "fires two shots at once, deadly in close distance",
    "Half life 1",
    "Powerful weapon, especially in close distance.",
    "../assets/images/armas/shotgun.webp"
  )
);
listaArmas.agregarArma(
  new Arma(
    "Crossbow",
    "sniper 120, explosive dart 40",
    "slow flying exploding arrow",
    "zoom in",
    "Half life 1",
    "Sniper crossbow. Fires slow exploding arrows when unzoomed. When you zoom in you can use this gun as a regular sniper. Can be used underwater.",
    "../assets/images/armas/crossbow.jpg"
  )
);


listaArmas.agregarArma(
  new Arma(
    "Magnum",
    "40",
    "fire",
    "zoom in",
    "Half life 1",
    "It is better to fire unzoomed. It isn’t completely accurate even if you zoom in.",
    "../assets/images/armas/magnum.webp"
  )
);

listaArmas.agregarArma(
  new Arma(
    "Machinegun",
    "12",
    "normal fire",
    "throws grenade",
    "Half life 1",
    "If you pick up this weapon it isn’t fully loaded so it’s better to reaload immediatly.",
    "../assets/images/armas/mp5.webp"
  )
);

listaArmas.agregarArma(
  new Arma(
    "RPG",
    "120",
    "normal fire",
    "switch laser dot on or off",
    "Half life 1",
    "Fires guided rocket when laser is on, when is switched off rocket goes directly where you aimed. Can be used underwater.",
    "../assets/images/armas/rpg.jpg"
  )
);

listaArmas.agregarArma(
  new Arma(
    "Gauss / Tau cannon",
    "20 single shot, 200 full charged",
    "normal",
    "charges gauss for bigger damage and you can use it for flying.",
    "Half life 1",
    "Best weapon in game. You can shoot through walls with it. It will do area damage behind wall (this is called wallgauss). Can be used for flying, dodging or reaching higher places.",
    "../assets/images/armas/gauss.webp"
  )
);

listaArmas.agregarArma(
  new Arma(
    "Gluon / Egon",
    "25 per uranium ammo",
    "normal fire",
    "nothing",
    "Half life 1",
    "Very powerful weapon, but many players considers it as a noob gun. Forbidden on my server.",
    "../assets/images/armas/gluon.webp"
  )
);

listaArmas.agregarArma(
  new Arma(
    "Hornet gun / Bees",
    "10 per bee",
    "auto targeting bees",
    "faster, but bees fly only straight forward",
    "Half life 1",
    "Alien hornet gun. Regenerating ammo automaticly up to 12 bees. Works underwater too.",
    "../assets/images/armas/hornet.jpg"
  )
);

listaArmas.agregarArma(
  new Arma(
    "Tripmine",
    "100",
    "places mine",
    "nothing",
    "Half life 1",
    "Can be placed everywhere on solid material.",
    "../assets/images/armas/tripmine.jpeg"
  )
);


listaCriaturas.agregarCriatura(
  new Criatura(
    "Headcrab",
    "Xen",
    "Vida Salvaje / Parasitario",
    "10",
    "Dientes",
    "Los Headcrab, son seres vivos omnívoros y parasitos.",
    "../assets/images/criaturas/Heacrab_HL2_Model.webp"
  )
)

listaCriaturas.agregarCriatura(
  new Criatura(
    "Gonarch",
    "Xen",
    "Headcrab reina",
    "10",
    "Líquido tóxico Blanco, Patas delanteras, Generar Bebés Headcrab",
    "El Gonarch es la fase final del ciclo de vida de un Headcrab.",
    "../assets/images/criaturas/Gonarch.webp"
  )
)


export const imagenesArmas = [
  "../assets/images/armas/crossbow.jpg",
  "../assets/images/armas/crowbar.webp",
  "../assets/images/armas/gauss.webp",
  "../assets/images/armas/gluon.webp",
  "../assets/images/armas/snark.webp",
  "../assets/images/armas/grenade.jpeg",
  "../assets/images/armas/hornet.jpg",
  "../assets/images/armas/magnum.webp",
  "../assets/images/armas/mp5.webp",
  "../assets/images/armas/pistol.webp",
  "../assets/images/armas/shotgun.webp",
  "../assets/images/armas/tripmine.jpeg",
   
]


export const imagenesCriaturas = [
  

  "../assets/images/criaturas/Alien_Grunt_HD_2.webp",
  "../assets/images/criaturas/Gargantua.webp",
  "../assets/images/criaturas/Gonarch.webp",
  "../assets/images/criaturas/Heacrab_HL2_Model.webp",
  "../assets/images/criaturas/Nihilanth.webp",
  "../assets/images/criaturas/Race_X.webp",
  "../assets/images/criaturas/Vortigaunt_HL_Alyx.webp",

]
