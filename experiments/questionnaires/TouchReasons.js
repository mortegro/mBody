const template = {
  type: 'checkbox',
  col: 6,
}

const template2 = {
  type: 'slider',
  col: 6,
  min: 0,
  max: 10,
  persistentHint: true,
  tickLabels: ['nie','','','','','','','','','', 'häufig'],
  value: [0, 1, 2, 3,4,5,6,7,8,9],
  ticks: "always",
}

const base = {
  greeting: { label: "zur Begrüßung und Verabschiedung", },
  helping: { label: 'zum Helfen oder Unterstützen', },
  giving_attention: { label: 'um mir Aufmerksamkeit zu signalisieren', },
  consoling: { label: 'zum Trösten', },
  without_any_overt_reason: { label: 'ohne offensichtlichen Grund', },
  calming: { label: 'zur Beruhigung', },
  giving_pleasure: { label: 'zum Genießen, zur Freude', },
  punish: { label: 'zur Bestrafung', }
}

// Object.keys(base).map(function(key, index) {
//   base[key] = {
//     ...base[key],
//     ...template
//   };
// });

export const schema = Object.assign({}, ...Object.keys(base).map(k => ({[k]: { ...base[k], ...template }})));
export const schemaSlider = Object.assign({}, ...Object.keys(base).map(k => ({[k]: { hint: base[k].label, ...template2 }})));

export default schema