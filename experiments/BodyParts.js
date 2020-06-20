import Experiment from '~/lib/Experiment'

import InfoScreen from '@/components/elements/screens/InfoScreen'
import Questionaire from '@/components/elements/screens/Questionaire'
import BodyFrontBack from '@/components/elements/screens/BodyFrontBack'

const bodyParts = ["Kopf", "Hals", "Brust", "Rücken", "Arme", "Beine", "Po", "Hände", "Füße"]
const bodyScreens = bodyParts.map(e=> ({
  type: BodyFrontBack,
  id: `bodypart_${e.toLowerCase()}`,
  data: {
    title: e,
    description: `Bitte markiere das Körperteil ${e} auf der Körpervorder- und -rückseite. \n Drück auf den 'Weiter'-Knopf wenn du fertig bist`,
    btnText: "Weiter"
  }
}))

export default class BodyPartsExperiment extends Experiment {
  constructor ({meta}) {
    super()
    this.meta = meta
    console.log('meta: ', meta)
  }

  id = "bodyparts"
  title = "Körperteile"
  description = "Markieren von angegenben Körperregionen \n Kinderversion"
  screens = [
    {
      type: InfoScreen,
      id: "welcome",
      data: {
        title: "Einführung",
        description: "In diesem Experiment siehst du einen Körperumriss. \n\n Bitte zeichnen das angegebene Körperteil auf der Vorder- und Rückseite ein.",
        btnText: "Weiter"
      }
    },
    {
      set: 'random',
      elements: bodyScreens
    },
    {
      type: InfoScreen,
      id: "thanx",
      data: {
        title: "Danke!",
        description: "Vielen Dank für die Teilnahme am Experiment.",
        btnText: "Fertig"
      }
    },    
  ]
}