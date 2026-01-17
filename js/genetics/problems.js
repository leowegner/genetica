const PROBLEMS = [
    {
        id: 1,
        type: 'theory',
        statement: 'Define: gen, alelo, genotipo y fenotipo.',
        questions: [
            {
                id: 'def',
                text: 'Escribe las definiciones (Autoevaluación)',
                type: 'textarea',
                placeholder: 'Gen: ...\nAlelo: ...\nGenotipo: ...\nFenotipo: ...'
            }
        ]
    },
    {
        id: 2,
        type: 'practical',
        viewType: 'pedigree',
        gridSize: 2,
        statement: 'Una vaca de pelo rojo, cuyos padres son de pelo negro, se cruza con un toro de pelo negro cuyos padres tienen pelo negro uno de ellos y pelo rojo el otro.',
        steps: {
            gene: ['Color del pelo', 'Color pelo', 'Color pelaje', 'Pelaje'],
            alleles: {
                dom: ['Negro', 'Pelo negro', 'N'],
                rec: ['Rojo', 'Pelo rojo', 'n']
            },
            genotypes: ['nn', 'Nn'], // Vaca (nn), Toro (Nn)
            phenotypes: ['Pelo rojo', 'Pelo negro']
        },
        pedigreeSolution: {
            'g1-m1': { gt: 'Nn', ph: 'Pelo negro' },
            'g1-f1': { gt: 'Nn', ph: 'Pelo negro' },
            'g1-m2': { gt: 'Nn', ph: 'Pelo negro' },
            'g1-f2': { gt: 'nn', ph: 'Pelo rojo' },
            'p1': { gt: 'Nn', ph: 'Pelo negro' },
            'p2': { gt: 'nn', ph: 'Pelo rojo' }
        },
        questions: [
            {
                id: 'a',
                text: 'a.- ¿Cuál es el genotipo de los animales que se cruzan?',
                answer: ['nn x Nn', 'Nn x nn', 'nn, Nn', 'Nn, nn']
            },
            {
                id: 'b',
                text: 'b.- ¿Cuál es el fenotipo de la descendencia?',
                answer: ['50% Negro, 50% Rojo', '1/2 Negro, 1/2 Rojo', 'Negro y Rojo', 'Pelo negro y pelo rojo']
            }
        ]
    },
    {
        id: 3,
        type: 'practical',
        gridSize: 2,
        statement: 'Un cruce entre un conejillo de pelo erizado y uno de pelo liso ha dado 7 crías de pelo erizado y 1 de pelo liso. En otro caso, el cruce de un conejillo de indias de pelo erizado y otro de pelo liso no ha dado más que descendientes de pelo erizado.',
        steps: {
            gene: ['Tipo de pelo', 'Textura del pelo', 'Forma del pelo', 'Pelo'],
            alleles: {
                dom: ['Erizado', 'Pelo erizado'],
                rec: ['Liso', 'Pelo liso']
            },
            genotypes: ['Ee', 'ee', 'EE'],
            phenotypes: ['Pelo erizado', 'Pelo liso']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- ¿Cuál es el carácter dominante y cual el recesivo?',
                answer: ['Dominante: Erizado, Recesivo: Liso', 'Erizado dominante', 'Liso recesivo']
            },
            {
                id: 'b',
                text: 'b.- ¿Cuál es el genotipo de los padres en ambos casos? (Caso 1: 7 erizados 1 liso; Caso 2: todos erizados)',
                answer: ['Caso 1: Ee x ee, Caso 2: EE x ee', '1: Ee x ee, 2: EE x ee']
            }
        ]
    },
    {
        id: 4,
        type: 'practical',
        viewType: 'pedigree',
        gridSize: 2,
        statement: 'El color azul de los ojos en el hombre se debe a un gen recesivo con respecto a su alelo para el color pardo. Los padres de un varón, de ojos azules tienen ambos los ojos pardos.',
        steps: {
            gene: ['Color de ojos', 'Color ojos'],
            alleles: {
                dom: ['Pardo', 'Ojos pardos', 'Marron'],
                rec: ['Azul', 'Ojos azules']
            },
            genotypes: ['Pp'], // Both parents must be heterozygous to have blue-eyed child
            phenotypes: ['Ojos pardos']
        },
        pedigreeSolution: {
            'p1': { gt: 'Pp', ph: 'Ojos pardos' },
            'p2': { gt: 'Pp', ph: 'Ojos pardos' },
            'h1': { gt: 'pp', ph: 'Ojos azules' }
        },
        questions: [
            {
                id: 'a',
                text: '¿Cuáles son sus genotipos (de los padres)?',
                answer: ['Pp x Pp', 'Pp y Pp', 'Heterocigotos']
            }
        ]
    },
    {
        id: 5,
        type: 'practical',
        gridSize: 2,
        statement: 'En el hombre, el albinismo (falta de pigmentación) es el resultado de dos alelos recesivos aa, y la pigmentación, carácter normal, viene determinado por el alelo dominante A. Si dos progenitores con pigmentación normal tienen un hijo albino:',
        steps: {
            gene: ['Pigmentación', 'Albinismo', 'Color de piel'],
            alleles: {
                dom: ['Normal', 'Pigmentación normal', 'A'],
                rec: ['Albino', 'Albinismo', 'a']
            },
            genotypes: ['Aa'],
            phenotypes: ['Normal']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- ¿Cuáles son sus genotipos posibles (de los padres)?',
                answer: ['Aa x Aa', 'Aa y Aa', 'Heterocigotos']
            },
            {
                id: 'b',
                text: 'b.- ¿Cuál es la probabilidad de que en su descendencia tengan un hijo albino?',
                answer: ['25%', '1/4', '0.25']
            }
        ]
    },
    {
        id: 6,
        type: 'practical',
        gridSize: 4,
        statement: 'Un hombre de cabello rizado y con dificultad para ver a distancia (miopía) se casa con una mujer también de pelo rizado y de visión normal. Tuvieron dos hijos: uno de pelo rizado y miope y otro de pelo liso y visión normal. Sabiendo que los rasgos pelo rizado y miopía son dominantes.',
        steps: {
            gene: ['Forma del pelo y Visión', 'Pelo y Visión'],
            alleles: {
                dom: ['Rizado, Miope', 'R, M'],
                rec: ['Liso, Normal', 'r, m']
            },
            genotypes: ['RrMm', 'Rrmm'], // Father: R_M_, Mother: R_mm. Child liso(rr) normal(mm) -> Parents must carry r. Father must carry m (to have normal child? Wait. Child 2 is rr mm. So Father RrMm, Mother Rrmm)
            phenotypes: ['Rizado Miope', 'Rizado Normal']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- ¿Cuál sería el genotipo de los progenitores?',
                answer: ['Padre: RrMm, Madre: Rrmm', 'RrMm x Rrmm']
            },
            {
                id: 'b',
                text: 'b.- ¿Cuál sería el genotipo de los hijos?',
                answer: ['Hijo 1 (Rizado Miope): RrMm o RRMm, Hijo 2 (Liso Normal): rrmm', 'RrMm, rrmm']
            },
            {
                id: 'c',
                text: 'c.- Si esta pareja tuviera un tercer hijo, ¿podría éste ser de pelo rizado y visión normal?',
                answer: ['Sí', 'Si']
            }
        ]
    },
    {
        id: 7,
        type: 'practical',
        gridSize: 4,
        statement: 'Un hombre y una mujer, ambos de ojos pardos y cabello oscuro, tienen dos hijos. Los hijos son, uno de ojos pardos y pelo rojo, y otro de ojos azules y pelo oscuro. Sabiendo que ambos caracteres (color del pelo y color de los ojos) se transmiten en autosomas.',
        steps: {
            gene: ['Color ojos y pelo'],
            alleles: {
                dom: ['Pardo, Oscuro'],
                rec: ['Azul, Rojo']
            },
            genotypes: ['PpOo'], // P=Pardo, p=Azul; O=Oscuro, o=Rojo.  Parents P_O_. Child ppO_ (Azul Oscuro) & P_oo (Pardo Rojo). -> Parents must be PpOo x PpOo to produce pp and oo.
            phenotypes: ['Ojos pardos Pelo oscuro']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- Elige un código válido de caracteres para expresar los alelos indicados.',
                answer: ['A:Pardo, a:Azul, B:Oscuro, b:Rojo', 'P:Pardo p:Azul O:Oscuro o:Rojo']
            },
            {
                id: 'b',
                text: 'b.- ¿Cuál sería el genotipo de los progenitores?',
                answer: ['PpOo x PpOo', 'Heterocigotos dobles']
            },
            {
                id: 'c',
                text: 'c.- ¿Cuál sería el genotipo de los hijos? (Hijo 1: Pardo Rojo, Hijo 2: Azul Oscuro)',
                answer: ['1: Ppoo o PPoo, 2: ppOo o ppOO']
            },
            {
                id: 'd',
                text: 'd.- Probabilidad de hijo (niño o niña) de pelo rojo y ojos azules (ppoo).',
                answer: ['1/16', '6.25%', '0.0625']
            }
        ]
    },
    {
        id: 8,
        type: 'practical',
        gridSize: 4,
        statement: 'En la calabaza, el color amarillo del fruto es un carácter dominante, mientras que el color blanco es un carácter recesivo. Por otra parte, la forma esférica del fruto es un carácter recesivo, mientras que la forma alargada es un carácter dominante. Al cruzar una planta que da frutos alargados y amarillos con otra que da frutos alargados y blancos, se obtienen entre la descendencia algunas plantas con frutos blancos y esféricos.',
        steps: {
            gene: ['Color y Forma de fruto'],
            alleles: {
                dom: ['Amarillo, Alargada'],
                rec: ['Blanco, Esférica']
            },
            genotypes: ['AaEe', 'aaEe'], // A=Amarillo, a=Blanco. E=Alargada, e=Esférica.
            // P1: Alargado Amarillo (A_E_). P2: Alargado Blanco (aaE_).
            // Offspring: Blanco Esférico (aaee).
            // So P1 must be AaEe. P2 must be aaEe.
            phenotypes: ['Alargado Amarillo', 'Alargado Blanco']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- Di cuál es el genotipo de los progenitores.',
                answer: ['AaEe x aaEe']
            },
            {
                id: 'b',
                text: 'b.- Cruce F1 (Blanco Esférico aaee) x Progenitor (Blanco Alargado aaEe). ¿Fenotipos descendencia?',
                answer: ['50% Blanco Alargado, 50% Blanco Esférico', '1/2 Blanco Alargado, 1/2 Blanco Esférico']
            }
        ]
    },
    {
        id: 9,
        type: 'practical',
        gridSize: 4,
        statement: 'En los ratones, un alelo dominante determina el color negro del pelo y un alelo recesivo determina el pelo blanco. Por otro lado, un alelo dominante determina la cola larga mientras que otro recesivo determina la cola corta. Se cruza un ratón dihíbrido (heterocigoto) con el pelo negro y cola larga con una hembra de pelo blanco y cola corta.',
        steps: {
            gene: ['Color pelo y Longitud cola'],
            alleles: {
                dom: ['Negro, Larga'],
                rec: ['Blanco, Corta']
            },
            genotypes: ['NnLl', 'nnll'], // Dihibrido: NnLl. Hembra blanco corta: nnll. (Test cross)
            phenotypes: ['Negro Larga', 'Blanco Corta']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- ¿Cuáles son los genotipos y fenotipos en F1? ¿Proporción?',
                answer: ['25% NnLl (Negro Larga), 25% Nnll (Negro Corta), 25% nnLl (Blanco Larga), 25% nnll (Blanco Corta)', '1:1:1:1']
            },
            {
                id: 'b',
                text: 'b.- Cruce descendiente macho cola larga pelo blanco (nnLl) con progenitora (nnll). ¿Genotipos y fenotipos?',
                answer: ['50% nnLl (Blanco Larga), 50% nnll (Blanco Corta)', '1/2 Blanco Larga, 1/2 Blanco Corta']
            }
        ]
    },
    {
        id: 10,
        type: 'practical',
        gridSize: 4,
        statement: 'El color rojo de la pulpa del tomate depende del alelo dominante A, mientras que el alelo recesivo a determina el color amarillo. El tamaño normal de la planta se debe a un alelo dominante E, mientras que el tamaño enano es determinado por el alelo recesivo e. Cruce: planta pulpa roja tamaño normal x amarilla tamaño normal -> 4 fenotipos: rojas normales, amarillas normales, rojas enanas, amarillas enanas.',
        steps: {
            gene: ['Color pulpa y Tamaño planta'],
            alleles: {
                dom: ['Rojo, Normal', 'A, E'],
                rec: ['Amarillo, Enano', 'a, e']
            },
            genotypes: ['AaEe', 'aaEe'],
            // P1: Roja Normal (A_E_). P2: Amarilla Normal (aaE_).
            // Offspring includes: Roja Enana (A_ee) and Amarilla Enana (aaee).
            // So P1 must be AaEe. P2 must be aaEe.
            phenotypes: ['Roja Normal', 'Amarilla Normal']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- Indica cuáles son los genotipos de las plantas que se cruzan.',
                answer: ['AaEe x aaEe']
            },
            {
                id: 'b',
                text: 'b.- Cruce Amarilla Normal (aaEE) x Roja Enana (AAee). (Ambas homocigóticas). ¿Fenotipos?',
                answer: ['100% AaEe (Rojas Normales)']
            }
        ]
    },
    {
        id: 11,
        type: 'practical',
        gridSize: 4,
        statement: 'La aniridia (ceguera) es dominante (A). La jaqueca es dominante (J). Hombre con aniridia (madre no ciega) x Mujer con jaqueca (padre no la sufría).',
        steps: {
            gene: ['Aniridia y Jaqueca'],
            alleles: {
                dom: ['Aniridia, Jaqueca', 'A, J'],
                rec: ['Normal, No jaqueca', 'a, j']
            },
            genotypes: ['Aa', 'Jj'],
            // Hombre Aniridia: A_. Madre aa -> Hombre Aa. (Assumed normal for Jaqueca? "Hombre con aniridia... se caso con mujer con jaqueca". Usually implies only that trait unless stated. Let's assume Aa jj x aa Jj ?
            // Text doesn't mention man's Jaqueca status or woman's Aniridia status.
            // Problem asks "Que proporcion sufriran AMBOS males".
            // Assume man is Aa jj and woman is aa Jj.
            // Cross: Aajj x aaJj.
            // Gametes Man: Aj, aj. Gametes Woman: aJ, aj.
            // F1: AaJj (Ambos), Aajj (Aniridia), aaJj (Jaqueca), aajj (Sano).
            // All 1/4.
            phenotypes: ['Aniridia', 'Jaqueca']
        },
        questions: [
            {
                id: 'a',
                text: '¿Qué proporción de sus hijos sufrirán ambos males?',
                answer: ['25%', '1/4', '0.25']
            }
        ]
    },
    {
        id: 12,
        type: 'practical',
        gridSize: 2,
        statement: 'Perro pelaje negro, blanco o manchado. Blanco x Negra -> Todos manchados. Manchado x Manchado -> 1 Negro : 2 Manchados : 1 Blanco.',
        steps: {
            gene: ['Color pelaje'],
            alleles: {
                dom: ['Codominancia', 'Intermedia'],
                rec: ['']
            },
            genotypes: ['NN', 'BB', 'NB'], // N=Negro, B=Blanco, NB=Manchado
            phenotypes: ['Negro', 'Blanco', 'Manchado']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- Explica la herencia.',
                answer: ['Codominancia', 'Herencia intermedia']
            },
            {
                id: 'b',
                text: 'b.- Genotipo padres y descendencia comienzo (Blanco x Negra -> Manchados).',
                answer: ['Padres: BB x NN, Descendencia: NB (100%)', 'BB x NN -> NB']
            }
        ]
    },
    {
        id: 13,
        type: 'practical',
        gridSize: 2,
        statement: 'Miriabilis jalapa: Rojo y Blanco no dominan. Híbridas = Rosado. Cruce: Rosada x Blanca y Rosada x Roja.',
        steps: {
            gene: ['Color flor'],
            alleles: {
                dom: ['Rojo', 'R'],
                rec: ['Blanco', 'r'] // Note: usually denoted as codominant but text says "no dominan". Rr = Rosa.
            },
            genotypes: ['Rr', 'rr', 'RR'],
            phenotypes: ['Rosado', 'Blanco', 'Rojo']
        },
        questions: [
            {
                id: 'a',
                text: 'Genotipos y fenotipos Rosada (Rr) x Blanca (rr).',
                answer: ['50% Rr (Rosada), 50% rr (Blanca)', '1/2 Rosada, 1/2 Blanca']
            },
            {
                id: 'b',
                text: 'Genotipos y fenotipos Rosada (Rr) x Roja (RR).',
                answer: ['50% RR (Roja), 50% Rr (Rosada)', '1/2 Roja, 1/2 Rosada']
            }
        ]
    },
    {
        id: 14,
        type: 'practical',
        viewType: 'pedigree',
        gridSize: 2,
        statement: 'Grupos sanguíneos ABO. IA y IB codominantes, i recesivo. Abuelo materno AB, otros abuelos O. Hombre (nieto) probabilidad de ser A, B, AB o O.',
        steps: {
            gene: ['Grupo sanguíneo'],
            alleles: {
                dom: ['IA', 'IB'],
                rec: ['i']
            },
            genotypes: ['IAi', 'IBi', 'ii', 'IAIB'],
            phenotypes: ['A', 'B', 'AB', 'O']
        },
        questions: [
            {
                id: 'a',
                text: '¿Cuál es la probabilidad de que este hombre sea A, B, AB ó O?',
                answer: ['A: 25%, B: 25%, AB: 0%, O: 50%']
                // Wait, let's trace. 
                // Man's Maternal Grandfather: AB. Maternal Grandmother: O (ii).
                // Man's Mother: IAi or IBi (50% each).
                // Man's Paternal Grandparents: O (ii) and O (ii). -> Father: ii (100%).
                // Man is son of Father (ii) x Mother (50% IAi, 50% IBi).
                // If Mother IAi: Offspring 50% IAi (A), 50% ii (O).
                // If Mother IBi: Offspring 50% IBi (B), 50% ii (O).
                // Total Prob: 
                // A: 0.5 * 0.5 = 0.25 (25%)
                // B: 0.5 * 0.5 = 0.25 (25%)
                // O: 0.5*0.5 + 0.5*0.5 = 0.5 (50%)
                // AB: 0%.
            }
        ]
    },
    {
        id: 15,
        type: 'practical',
        gridSize: 2,
        statement: 'Hombre grupo B, Mujer grupo A, Hijo grupo O.',
        steps: {
            gene: ['Grupo sanguíneo'],
            alleles: {
                dom: ['IA', 'IB'],
                rec: ['i']
            },
            genotypes: ['IBi', 'IAi'],
            phenotypes: ['B', 'A']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- ¿Es este hombre el padre del niño?',
                answer: ['Sí, puede serlo', 'Si', 'Posible']
            },
            {
                id: 'b',
                text: 'b.- Si lo fuera, ¿cuáles serían los genotipos de los progenitores?',
                answer: ['Padre: IBi, Madre: IAi', 'BO x AO']
            },
            {
                id: 'c',
                text: 'c.- ¿Qué genotipo tendría que tener para no ser el padre del niño?',
                answer: ['IBIB', 'BB']
            },
            {
                id: 'd',
                text: 'd.- Si el hombre pertenece al grupo AB ¿Puede ser padre de un niño de grupo O?',
                answer: ['No']
            }
        ]
    },
    {
        id: 16,
        type: 'practical',
        gridSize: 2,
        statement: 'Hombre O, Mujer A. Primer hijo O.',
        steps: {
            gene: ['Grupo sanguíneo'],
            alleles: {
                dom: ['A'],
                rec: ['O']
            },
            genotypes: ['ii', 'IAi'],
            phenotypes: ['O', 'A']
        },
        questions: [
            {
                id: 'a',
                text: '¿Qué otros hijos podrán tener?',
                answer: ['Grupo A (IAi)', 'Tipo A']
            }
        ]
    },
    {
        id: 17,
        type: 'practical',
        gridSize: 2,
        statement: 'Hemofilia (recesiva ligada al sexo h). Hombre padre hemofílico (pero él no lo es) x Mujer normal sin antecedentes.',
        steps: {
            gene: ['Hemofilia (Ligado X)'],
            alleles: {
                dom: ['Normal', 'H'],
                rec: ['Hemofílico', 'h']
            },
            genotypes: ['XHY', 'XHXH'],
            // Man: Father was XhY. But man "no lo es". So Man is XHY. He gets Y from father, XH from mother (assumed normal).
            // Woman: Normal, no antecedents. XHXH.
            // Cross: XHY x XHXH.
            // Offspring: XHXH, XHY. All normal.
            phenotypes: ['Normal']
        },
        questions: [
            {
                id: 'a',
                text: '¿Qué probabilidad existe de que tengan un hijo hemofílico?',
                answer: ['0%', 'Ninguna']
            }
        ]
    },
    {
        id: 18,
        type: 'practical',
        viewType: 'pedigree',
        gridSize: 2,
        statement: 'Daltonismo (recesivo ligado X, d). Mujer normal (padre daltónico) x Hombre daltónico.',
        steps: {
            gene: ['Daltonismo'],
            alleles: {
                dom: ['Normal', 'D'],
                rec: ['Daltónico', 'd']
            },
            genotypes: ['XDXd', 'XdY'], // Woman: Father XdY -> She got Xd. She is normal -> XDXd. Man Daltónico -> XdY.
            phenotypes: ['Normal portadora', 'Daltónico']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- ¿Genotipos posibles para la madre del hombre?',
                answer: ['XDXd o XdXd', 'Portadora o Daltónica'] // Man is XdY. He got Xd from mother. Mother could look normal (carrier) or be colorblind.
            },
            {
                id: 'b',
                text: 'b.- ¿Qué porcentaje de hijas daltónicas puede esperarse?',
                answer: ['50%', '1/2'] // Cross XDXd x XdY. Daughters: XDXd (Normal), XdXd (Dalt).
            },
            {
                id: 'c',
                text: 'c.- ¿Qué porcentajes de hijos, sin tener en cuenta el sexo, se espera que sean normales?',
                answer: ['50%'] // XDXd, XdXd, XDY, XdY. Normal: XDXd, XDY. (2/4).
            }
        ]
    },
    {
        id: 19,
        type: 'practical',
        viewType: 'pedigree',
        gridSize: 2,
        statement: 'Daltonismo. Juan daltónico (padres normales) x María normal. Hijo Jaime daltónico.',
        steps: {
            gene: ['Daltonismo'],
            alleles: {
                dom: ['Normal'],
                rec: ['Daltónico']
            },
            genotypes: ['XdY', 'XDXd'],
            // Juan: XdY. Parents normal: Father XDY, Mother XDXd (must be carrier).
            // Maria: Normal.
            // Jaime (Son): XdY. Gets Y from Juan, Xd from Maria. So Maria is XDXd.
            phenotypes: ['Daltónico', 'Normal carrier']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- Explicar genotipos Juan, María, Jaime y padres de Juan.',
                answer: ['Juan: XdY, María: XDXd, Jaime: XdY, Padre Juan: XDY, Madre Juan: XDXd']
            },
            {
                id: 'b',
                text: 'b.- ¿Qué otra descendencia podría tener Juan y María?',
                answer: ['Hija Normal (XDXd), Hija Daltónica (XdXd), Hijo Normal (XDY)', 'Hijas normal/daltónica, Hijo normal']
                // Cross XdY (Juan) x XDXd (Maria).
                // Offspring: XDXd (Daug. Carrier), XdXd (Daug. Dalt), XDY (Son Normal), XdY (Son Dalt - Jaime).
            }
        ]
    },
    {
        id: 20,
        type: 'practical',
        viewType: 'pedigree',
        gridSize: 2,
        statement: 'Hemofilia (recesivo a en X). Varón no hemofílico x Mujer normal (padre hemofílico).',
        steps: {
            gene: ['Hemofilia'],
            alleles: {
                dom: ['Normal', 'A'],
                rec: ['Hemofilia', 'a']
            },
            genotypes: ['XAY', 'XAXa'], // Man: XAY. Woman: Father XaY -> She is XAXa.
            phenotypes: ['Normal', 'Normal portadora']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- ¿Qué porcentaje de gametos (de la mujer se asume) tendrán el alelo "a"?',
                answer: ['50%', '1/2']
            },
            {
                id: 'b',
                text: 'b.- ¿Cuántos hijos varones serán hemofílicos?',
                answer: ['50%', '1/2'] // Sons get XA or Xa. 50% chance.
            },
            {
                id: 'c',
                text: 'c.- ¿Cuántas hijas serán portadoras del alelo "a"?',
                answer: ['50%', '1/2'] // Daughters: XAXA, XAXa. 50% carrier.
            }
        ]
    },
    {
        id: 21,
        type: 'practical',
        viewType: 'pedigree',
        gridSize: 2,
        statement: 'Hemofilia (recesivo h). Hombre hemofílico x Mujer normal (padre hemofílico).',
        steps: {
            gene: ['Hemofilia'],
            alleles: {
                dom: ['Normal'],
                rec: ['Hemofilia']
            },
            genotypes: ['XhY', 'XHXh'], // Man XhY. Woman XHXh.
            phenotypes: ['Hemofílico', 'Normal portadora']
        },
        questions: [
            {
                id: 'a',
                text: 'a.- ¿Qué porcentaje de gametos producidos por esta pareja tendrá el alelo “h”?',
                answer: ['50%', '2/4', '1/2']
                // Man gametes: Xh, Y. (50% h).
                // Woman gametes: XH, Xh. (50% h).
                // Total pool: Xh, Y, XH, Xh. 2 out of 4 chromosomes carry h? Or average?
                // Usually asks for specific parent. "Gametos producidos por esta pareja" implies sum? 
                // Man produces 50% h-bearing sperm (of X-sperm? No, Y doesn't have it).
                // Let's assume 50% of X-chromosomes involved?
                // Actually: Man: 1/2 Xh, 1/2 Y. Woman: 1/2 XH, 1/2 Xh.
                // Total gametes: Xh, Y, XH, Xh. -> 2/4 contain h? No, Y is neutral.
                // Interpretation: prob of picking a random gamete from the pool. 
                // Let's provide "50%" as a safe bet for "proportion of h alleles in X chromosomes" or typical answer.
                // Better answer: "El 50% de los gametos de la mujer y el 50% de los espermatozoides X del hombre".
                // Simplest interpretation for quiz: 50% of relevant gametes.
            },
            {
                id: 'b',
                text: 'b.- ¿Cuál es la probabilidad de tener un hijo varón hemofílico?',
                answer: ['50%', '1/2'] // Son gets Y from dad, XH or Xh from mom. 50% chance of Xh.
            },
            {
                id: 'c',
                text: 'c.- ¿Cuál es la probabilidad de tener una hija portadora del alelo “h”?',
                answer: ['50%', '1/2'] // Daughter gets Xh from dad. Gets XH or Xh from mom. 
                // XHXh (Carrier), XhXh (Hemophiliac).
                // So 50% carrier.
            }
        ]
    }
];
