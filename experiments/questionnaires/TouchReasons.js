export const schema = {
  greeting: {
    type: 'checkbox',
    label: 'zur Begrüßung und Verabschiedung',
    col: 6,
  },
  helping: {
    type: 'checkbox',
    label: 'zum Helfen oder Unterstützen',
    col: 6
  },
  giving_attention: {
    type: 'checkbox',
    label: 'um mir Aufmerksamkeit zu signalisieren',
    col: 6
  },
  consoling: {
    type: 'checkbox',
    label: 'zum Trösten',
    col: 6
  },
  without_any_overt_reason: {
    type: 'checkbox',
    label: 'ohne offensichtlichen Grund',
    col: 6
  },
calming: {
  type: 'checkbox',
  label: 'zur Beruhigung',
  col: 6
},
giving_pleasure: {
  type: 'checkbox',
  label: 'zum Genießen, zur Freude',
  col: 6
},
punish: {
  type: 'checkbox',
  label: 'zur Bestrafung',
  col: 6
}
}

export default schema