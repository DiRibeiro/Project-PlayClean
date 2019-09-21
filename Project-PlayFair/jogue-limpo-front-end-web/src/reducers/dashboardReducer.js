const INITIAL_STATE = {
    bookmark: {
        month: '',
        totalReports: null,
        closedReports: null,
        openReports: null
    },
    lineChart: {
        /* All months in the year */
        data: []
    },
    doughnutChart: {
        labels: ['Osório', 'Aguapés', 'Albatroz', 'Arroio das Pedras', 'Arroio Grande', 'Atlântida Sul - Dezembro/Março',
        'Atlântida Sul - Março/Dezembro','Baixada','Barranceira','Borússia','Bosque Albatroz','Caconde','Caiu do Céu',
        'Campos de Dentro','Caravágio','Cascata','Centro','Costa Verde','Distrito Industrial','Estrada da Perua',
        'Estrada do Mar','Estrada do Posto Buffon','Estrada Romildo Bolzan','Farroupilha','Figueira Grande','Glória',
        'Goiabeira I e II','Ilha','Interlagos','Invernada','Jardim da Lagoa','Lagoa do Horácio','Laranjeiras',
        'Livramento','Loteamento Serramar','Mariápolis','Marmeleiro','Medianeira','Morro das Antenas','Palmital',
        'Panorâmico','Parque da Lagoa','Parque de Rodeios','Parque do Sol','Parque Eólico','Parque Real','Passinhos',
        'Penitenciária Modulada','Pitangas','Pontal dos Dihel','Pór-do-sol','Porto Lacustre','Rincão','RS-030',
        'RST-101','Santa Luzia','Santa Rita','Sertão','Sindicato Rural','Sulbrasileiro','Tombadouro','Trilhos',
        'Várzea do Padre','Vila Brasília','Vila da Serra','Vila dos Pescadores do Passo da Lagoa','Vila Emboabas',
        'Vila Petrobrás','Vila Popular'],
        data: []
    }, 
    map: {
        list: [{
            anchor: {
                lat: '',
                long: ''
            }
        }]
    }
}

export default (state = INITIAL_STATE, action) => {
        switch(action.type) {
        case 'DASHBOARD_FETCHED': {
            return action.payload
        }
        default:
            return state
    }
}