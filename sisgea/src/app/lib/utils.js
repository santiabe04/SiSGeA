export const privateRoutes = [
    {
        route:'/private',
        label:'Inicio',
        subroutes:[]
    },
    {
        route:'/private/events',
        label:'Eventos',
        subroutes:[]
    },
    {
        route:'/private/finance',
        label:'Finanzas',
        subroutes:[
            {
                route:'/private/finance/newmovement',
                label:'Cargar Movimiento',
                description:"Permite cargar nuevos movimientos"
            },
            {
                route:'/private/finance/movements',
                label:'Movimientos',
                description:"Permite ver el historial de movimientos"
            },
            {
                route:'/private/finance/wallets',
                label:'Billeteras',
                description:"Permite administrar las billeteras"
            },
            {
                route:'/private/finance/objectives',
                label:'Objetivos',
                description:"Permite administrar los objetivos financieros"
            }
        ]
    },
    {
        route:'/private/users',
        label:'Users',
        subroutes:[]
    },
]