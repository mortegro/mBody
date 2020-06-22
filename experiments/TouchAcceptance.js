import Experiment from '~/lib/Experiment'

import InfoScreen from '@/components/elements/screens/InfoScreen'
import BodyFrontBack from '@/components/elements/screens/BodyFrontBack'
import Questionaire from '@/components/elements/screens/Questionaire'
import TouchReasons from '~/experiments/questionnaires/TouchReasons'
import { schemaSlider } from '~/experiments/questionnaires/TouchReasons'

const bodyParts = [
  { id: "Mutter", text1: "deine Mutter", text2: "..."}, 
  { id: "Vater", text1: "dein Vater"}, 
  { id: "jüngere Schwester", text1: "deine jüngeren Schwester"},
  { id: "ältere Schwester", text1: "deine ältere Schwester"},
  { id: "jüngerer Bruder", text1: "dein jüngerer Bruder"},
  { id: "älterer Bruder", text1: "dein älterer Bruder"},
  { id: "Fester Freund/Freundin", text1: "dein fester Freund oder deine feste Freundin"},
  { id: "Freund", text1: "ein Freund"},
  { id: "Freundin", text1: "eine Freund"},  
  { id: "Mitschüler", text1: "ein Mitschüler"},  
  { id: "Mitschülerin", text1: "eine Mitschülerin"},    
  { id: "Lehrer", text1: "ein Lehrer"},  
  { id: "Lehrerin", text1: "eine Lehrerin"},   
  { id: "Fremder", text1: "ein Fremder"},   
  { id: "Fremde", text1: "eine Fremde"},    
]
const bodyScreens = bodyParts.map( e => ([
  {
    type: BodyFrontBack,
    id: `touchaccept_${(e.id).toLowerCase()}`,
    data: {
      title: e.id,
      description: `Bitte markiere, wo dich ${e.text1} berühren darf.`,
      btnText: "Weiter"
    }
  },
  {
    type: Questionaire,
    id: `touchreason_${(e.id).toLowerCase()}`,

    data: {
      title: `Gründe für die Berührungen`,
      description: `Gib bitte die Gründe an, warum dich ${e.text1} berührt.`,
      // schema: TouchReasons,
      schema: schemaSlider,
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
        description: "In diesem Experiment untersuchen wir, wo es für dich in Ordnung ist, berührt zu werden und wo nicht. Dir wird der Name einer Person und der Umriss eines Körpers gezeigt. Denk sorgfältig darüber nach, wo an deinem Körper dich diese Person berühren darf. Deine Aufgabe besteht nun darin, die Körperregionen anzumalen, in denen eine Berührung für dich in Ordnung ist und wo nicht. Du kannst jede Region des Körpers anmalen, von Kopf bis Fuß. Bist du mit dem Malen fertig, drücke auf „weiter“ und es erscheint eine Liste von möglichen Gründen, warum dich diese Person an den markierten Stellen berühren darf. Wähle bitte für jede Person die passenden Gründe aus.",
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