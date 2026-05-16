export interface MillionaireQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
  translation: string;
  explanation: string;
}

export const MILLIONAIRE_QUESTIONS: MillionaireQuestion[] = [
  {
    id: 1,
    question: "Yo ___ (desayunar) café con tostadas hoy.",
    options: ['he desayunado', 'has desayunado', 'ha desayunado', 'hemos desayunado'],
    answer: 'he desayunado',
    translation: 'Այսօր ես սուրճ և տոստ եմ նախաճաշել:',
    explanation: 'Yo -> he + participio (-ado).'
  },
  {
    id: 2,
    question: "¿Tú ___ (ver) a María esta mañana?",
    options: ['Has visto', 'Has vido', 'He visto', 'Han visto'],
    answer: 'Has visto',
    translation: 'Այս առավոտ տեսե՞լ ես Մարիային:',
    explanation: 'Ver -> visto (անկանոն):'
  },
  {
    id: 3,
    question: "Nosotros ___ (hacer) un viaje increíble.",
    options: ['hemos hecho', 'hemos hacido', 'han hecho', 'habéis hecho'],
    answer: 'hemos hecho',
    translation: 'Մենք հրաշալի ճամփորդություն ենք արել:',
    explanation: 'Hacer -> hecho (անկանոն):'
  },
  {
    id: 4,
    question: "Ellos ___ (escribir) un mensaje importante.",
    options: ['han escrito', 'han escribido', 'hemos escrito', 'ha escrito'],
    answer: 'han escrito',
    translation: 'Նրանք կարևոր հաղորդագրություն են գրել:',
    explanation: 'Escribir -> escrito (անկանոն):'
  },
  {
    id: 5,
    question: "Esta tarde ella ___ (ir) al cine.",
    options: ['ha ido', 'ha iido', 'he ido', 'has ido'],
    answer: 'ha ido',
    translation: 'Այսօր կեսօրից հետո նա կինո է գնացել:',
    explanation: 'Ir -> ido.'
  },
  {
    id: 6,
    question: "¿Vosotros ___ (abrir) la puerta?",
    options: ['habéis abierto', 'habéis abrido', 'han abierto', 'hemos abierto'],
    answer: 'habéis abierto',
    translation: 'Դուք բացե՞լ եք դուռը:',
    explanation: 'Abrir -> abierto (անկանոն):'
  },
  {
    id: 7,
    question: "Yo ___ (romper) el jarrón sin querer.",
    options: ['he roto', 'he rompido', 'has roto', 'ha roto'],
    answer: 'he roto',
    translation: 'Ես պատահաբար կոտրել եմ ծաղկամանը:',
    explanation: 'Romper -> roto (անկանոն):'
  },
  {
    id: 8,
    question: "Nosotros ___ (poner) las llaves aquí.",
    options: ['hemos puesto', 'hemos ponido', 'han puesto', 'he puesto'],
    answer: 'hemos puesto',
    translation: 'Մենք բանալիները այստեղ ենք դրել:',
    explanation: 'Poner -> puesto (անկանոն):'
  },
  {
    id: 9,
    question: "¿Alguien ___ (decir) algo nuevo?",
    options: ['ha dicho', 'ha decido', 'he dicho', 'han dicho'],
    answer: 'ha dicho',
    translation: 'Ինչ-որ մեկը մի նոր բան ասե՞լ է:',
    explanation: 'Decir -> dicho (անկանոն):'
  },
  {
    id: 10,
    question: "Mis padres ___ (volver) de sus vacaciones.",
    options: ['han vuelto', 'han volvido', 'hemos vuelto', 'ha vuelto'],
    answer: 'han vuelto',
    translation: 'Ծնողներս վերադարձել են արձակուրդից:',
    explanation: 'Volver -> vuelto (անկանոն):'
  },
  {
    id: 11,
    question: "Tú ___ (comprar) un regalo para Gayane.",
    options: ['has comprado', 'he comprado', 'ha comprado', 'han comprado'],
    answer: 'has comprado',
    translation: 'Դու նվեր ես գնել Գայանեի համար:',
    explanation: 'Tú -> has + participio.'
  },
  {
    id: 12,
    question: "El científico ___ (descubrir) la cura.",
    options: ['ha descubierto', 'ha descubrido', 'he descubierto', 'han descubierto'],
    answer: 'ha descubierto',
    translation: 'Գիտնականը հայտնաբերել է դեղամիջոցը:',
    explanation: 'Descubrir -> descubierto (անկանոն):'
  },
  {
    id: 13,
    question: "Nosotros ___ (leer) el libro entero.",
    options: ['hemos leído', 'hemos leido', 'han leído', 'he leído'],
    answer: 'hemos leído',
    translation: 'Մենք կարդացել ենք ամբողջ գիրքը:',
    explanation: 'Leer -> leído.'
  },
  {
    id: 14,
    question: "Yo ___ (ser) muy feliz hoy.",
    options: ['he sido', 'he seido', 'has sido', 'ha sido'],
    answer: 'he sido',
    translation: 'Այսօր ես շատ երջանիկ եմ եղել:',
    explanation: 'Ser -> sido.'
  },
  {
    id: 15,
    question: "Ustedes ___ (morir) de risa con el chiste.",
    options: ['han muerto', 'han morido', 'han muertoer', 'hemos muerto'],
    answer: 'han muerto',
    translation: 'Դուք ծիծաղից մեռել եք անեկդոտի պատճառով:',
    explanation: 'Morir -> muerto (անկանոն):'
  }
];

