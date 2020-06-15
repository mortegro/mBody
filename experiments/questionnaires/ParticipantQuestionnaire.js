export const schema = {
  firstname: { 
    label: 'Vorname',
    type: 'text',
    col: 6
  },
  lastname: { 
    label: 'Nachname',
    type: 'text',
    col: 6
  },  
  email: { 
    label: 'eMail-Adresse',
    type: 'text',
    col: 6
  },
  dob: {
    label: 'Geburtsdatum',
    type: 'text',
    ext: 'date',
    locale: 'de',
    col: 6
  },
  gender: { 
    label: 'Geschlecht',
    type: 'radio',
    options: [ 'weiblich', 'männlich', 'divers'],
    col: 6
  },
  handyness: { 
    label: 'Händigkeit',
    hint: 'Rechts- oder Linkshänder',
    type: 'radio',
    options: [ 'rechts', 'links'],
    col: 6
  },

}

export default schema