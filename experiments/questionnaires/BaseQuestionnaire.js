export const schema = {
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
  age: { 
    label: 'Alter',
    hint: 'Alter in Jahren',
    type: 'number',
    col: 4
  },
  height: { 
    label: 'Größe',
    hint: 'Größe in m',
    type: 'number',
    col: 4
  },
  weight: { 
    label: 'Gewicht',
    hint: 'Gewicht in Kg',
    type: 'number',
    col: 4
  },
  treatment: {
    label: 'Bei welchen der folgenden Ärzten/Therapeuten bist oder warst du in Behandlung?',
    type: 'group',
    schema: {
      paediatrician: {
        type: 'checkbox',
        label: 'Kinderarzt',
        col: 6,
      },
      neuro: {
        type: 'checkbox',
        label: 'Neurologe / Neuropädiater',
        col: 6
      },
      psychiatrist: {
        label: 'Psychiater / Kinder- und Jugendpsychiater',
        type: 'checkbox',
        col: 6
      },
      therapist: {
        type: 'checkbox',
        label: 'Psychotherapeut',
        col: 6
      },
    }
  }
}

export default schema