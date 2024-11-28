import { Pizza } from "./pizza/pizza.component";

export const dummyPizzas: Pizza[] = [
    {
        id: 1,
        nome: 'Margherita',
        ingredienti: [
            'Pomodoro',
            'Mozzarella',
            'Basilico'
        ],
        prezzo: 6
    },
    {
        id: 2,
        nome: 'Diavola',
        ingredienti: [
            'Pomodoro',
            'Mozzarella',
            'Salamino piccante'
        ],
        prezzo: 7
    }
]