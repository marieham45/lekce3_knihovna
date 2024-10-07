/*

Knihovna
V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.
Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.`

*/

const kniha1 = {
  nazev: "Harry Potter a vězeň z Azkabanu",
  autor: "J. K. Rowling",
  pocetStran: 485,
  hlavniPostava: {
    jmeno: "Harry Potter",
    vek: 13,
    zvire: "sova",
  },
  rokVydani: 2005,
  jazyk: "anglictina",
};

const kniha2 = {
  nazev: "Sto roků samoty",
  autor: "Gabriel Garcia Marquez",
  pocetStran: 525,
  hlavniPostava: {
    jmeno: "Jose",
    vek: 35,
    zvire: "osel",
  },
  rokVydani: 1998,
  jazyk: "spanelstina",
};
