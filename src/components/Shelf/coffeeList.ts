import expressoTradicional from '../../assets/expresso-tradicional.svg'
import expressoAmericano from '../../assets/expresso-americano.svg'
import expressoCremoso from '../../assets/expresso-cremoso.svg'
import expressoGelado from '../../assets/expresso-gelado.svg'
import cafeComLeite from '../../assets/cafe-com-leite.svg'
import latte from '../../assets/latte.svg'
import capuccino from '../../assets/capuccino.svg'
import macchiato from '../../assets/macchiato.svg'
import mocaccino from '../../assets/mocaccino.svg'
import chocolateQuente from '../../assets/chocolate-quente.svg'
import cubano from '../../assets/cubano.svg'
import havaino from '../../assets/havaiano.svg'
import arabe from '../../assets/arabe.svg'
import irlandes from '../../assets/irlandes.svg'


export const coffeelist = [
    {
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.90,
        image: expressoTradicional,
        flags: [
            {
                name: "tradicional",
                label: "Tradicional"
            }
        ],
        quantity: 0
    },
    {
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.90,
        image: expressoAmericano,
        flags: [
            {
                name: "tradicional",
                label: "Tradicional"
            }
        ],
        quantity: 0
    },
    {
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.90,
        image: expressoCremoso,
        flags: [
            {
                name: "tradicional",
                label: "Tradicional"
            }
        ],
        quantity: 0
    },
    {
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.90,
        image: expressoGelado,
        flags: [
            {
                name: "tradicional",
                label: "Tradicional"
            },
            {
                name: "gelado",
                label: "Gelado"
            }
        ],
        quantity: 0
    },



    {
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizadoos",
        price: 9.90,
        image: cafeComLeite,
        flags: [
            {
                name: "tradicional",
                label: "Tradicional"
            },
            {
                name: "com-leite",
                label: "Com leite"
            }
        ],
        quantity: 0
    },
    {
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 9.90,
        image: latte,
        flags: [
            {
                name: "tradicional",
                label: "Tradicional"
            },
            {
                name: "com-leite",
                label: "Com leite"
            }
        ],
        quantity: 0
    },
    {
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espumasa",
        price: 9.90,
        image: capuccino,
        flags: [
            {
                name: "tradicional",
                label: "Tradicional"
            },
            {
                name: "com-leite",
                label: "Com leite"
            }
        ],
        quantity: 0
    },
    {
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        price: 9.90,
        image: macchiato,
        flags: [
            {
                name: "tradicional",
                label: "Tradicional"
            },
            {
                name: "com-leite",
                label: "Com leite"
            }
        ],
        quantity: 0
    },



    {
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.90,
        image: mocaccino,
        flags: [
            {
                name: "tradicional",
                label: "Tradicional"
            },
            {
                name: "com-leite",
                label: "Com leite"
            }
        ],
        quantity: 0
    },
    {
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.90,
        image: chocolateQuente,
        flags: [
            {
                name: "especial",
                label: "Especial"
            },
            {
                name: "com-leite",
                label: "Com leite"
            }
        ],
        quantity: 0
    },
    {
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.90,
        image: cubano,
        flags: [
            {
                name: "especial",
                label: "Especial"
            },
            {
                name: "alcoolico",
                label: "alcoólico"
            },
            {
                name: "gelado",
                label: "Gelado"
            }
        ],
        quantity: 0
    },
    {
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de cocoa",
        price: 9.90,
        image: havaino,
        flags: [
            {
                name: "especial",
                label: "Especial"
            }
        ],
        quantity: 0
    },


    {
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.90,
        image: arabe,
        flags: [
            {
                name: "especial",
                label: "Especial"
            }
        ],
        quantity: 0
    },
    {
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.90,
        image: irlandes,
        flags: [
            {
                name: "especial",
                label: "Especial"
            },
            {
                name: "alcoolico",
                label: "alcoólico"
            }
        ],
        quantity: 0
    },
]