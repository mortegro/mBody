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
    type: 'email',
    col: 6
  },
  dob: {
    type:'text', 
    ext:'date', 
    locale:'en',
    prependIcon: 'event', 
    label:'geburtsdatum',
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