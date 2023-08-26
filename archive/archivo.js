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
    "../images/armas/crowbar.png"
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
    "../images/armas/pistol.png"
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
    "../images/armas/shotgun.png"
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
    "../images/armas/crossbow.png"
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
    "../images/armas/magnum.png"
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
    "../images/armas/mp5.png"
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
    "../images/armas/rpg.png"
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
    "../images/armas/gauss.png"
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
    "../images/armas/gluon.png"
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
    "../images/armas/hornet.png"
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
    "../images/armas/tripmine.png"
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
    "../images/criaturas/Heacrab_HL2_Model.webp"
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
    "../images/criaturas/Gonarch.webp"
  )
)


export const imagenesArmas = [
  "../images/armas/crossbow.png",
  "../images/armas/crowbar.png",
  "../images/armas/gauss.png",
  "../images/armas/gluon.png",
  "../images/armas/snark.png",
  "../images/armas/grenade.png",
  "../images/armas/hornet.png",
  "../images/armas/magnum.png",
  "../images/armas/mp5.png",
  "../images/armas/pistol.png",
  "../images/armas/shotgun.png",
  "../images/armas/tripmine.png",

]


export const imagenesCriaturas = [
  

  "../images/criaturas/Alien_Grunt_HD_2.webp",
  "../images/criaturas/Gargantua.webp",
  "../images/criaturas/Gonarch.webp",
  "../images/criaturas/Heacrab_HL2_Model.webp",
  "../images/criaturas/Nihilanth.webp",
  "../images/criaturas/Race_X.webp",
  "../images/criaturas/Vortigaunt_HL_Alyx.webp",
]
