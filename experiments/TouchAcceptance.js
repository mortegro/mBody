import Experiment from '~/lib/Experiment'

import InfoScreen from '@/components/elements/screens/InfoScreen'
import BodyFrontBack from '@/components/elements/screens/BodyFrontBack'
import Questionaire from '@/components/elements/screens/Questionaire'
import TouchReasons from '~/experiments/questionnaires/TouchReasons'

const bodyParts = [
  { id: "Mutter", text1: "deiner Mutter", text2: "..."}, 
  { id: "Freund", text1: "einem Freund"}, 
]
const bodyScreens = bodyParts.map( e => ([
  {
    type: BodyFrontBack,
    id: `touchaccept_${(e.id).toLowerCase()}`,
    data: {
      title: e.id,
      description: `Bitte markiere wo du es ${e.text1} erlaust dich zu berühren.`,
      btnText: "Weiter"
    }
  },
  {
    type: Questionaire,
    id: `touchreason_${(e.id).toLowerCase()}`,

    data: {
      title: `Gründe für die Berührung von ${e.text1}`,
      description: "....",
      schema: TouchReasons,
      model: { treatment: {} },
      options: {},
      btnText: "Weiter"
    }
  },

]))

export default class BodyPartsExperiment extends Experiment {
  id = "touchacceptance"
  title = "Akzeptanz von Berührungen"
  description = "Markieren von angegenben Körperregionen \n\n Kinderversion"
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