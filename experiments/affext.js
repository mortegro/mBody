import Experiment from '~/lib/Experiment'

import ChooseParticipant from '@/components/elements/screens/ChooseParticipant'
import InfoScreen from '@/components/elements/screens/InfoScreen'
import Questionaire from '@/components/elements/screens/Questionaire'
import BodyFrontBack from '@/components/elements/screens/BodyFrontBack'
import BodySingle from '@/components/elements/screens/BodySingle'
import BodyActDeact from '@/components/elements/screens/BodyActDeact'

import BaseQuestionnaire from './questionnaires/BaseQuestionnaire'

export default class mBodyDemoExperiment extends Experiment {
  id = "mbody-demo"
  title = "mBody Demo"
  description = "A demonstration of the mBody screens"
  screens = [
    {
      type: ChooseParticipant,
      id: "participant",
      data: {
        btnText: "Anonym fortfahren"
      }
    },
    {
      type: InfoScreen,
      id: "welcome",
      data: {
        title: "Einführung",
        description: "In diesem Experiment untersuchen wir, wo du in deinem Körper unterschiedliche Gefühle wahrnimmst. Dir wird der Name eines Gefühls und der Umriss eines Körpers gezeigt. Denk sorgfältig darüber nach, was du in deinem Körper empfindest, wenn du das Gefühl liest. Deine Aufgabe besteht nun darin, die Körperregionen anzumalen, in denen du eine Veränderung spürst. Dabei kannst du im linken Körper markieren, welchen Regionen bei dem jeweiligen Gefühl stärker aktiviert werden und auf der rechten Seite, welche Regioonen an Aktivität abnhemen. Du kannst jede Region des Körpers anmalen, in der du das Gefühl wahrnimmst, von Kopf bis Fuß. Bist du mit dem Malen fertig, drücke auf „weiter“ und es erscheint das nächste Gefühl.",
        btnText: "Weiter"
      }
    },
    {
      type: Questionaire,
      id: "basic",
      data: {
        title: "Basisdaten",
        description: "Dieser Fragebogen erfasst Basisdaten.",
        schema: BaseQuestionnaire,
        model: { treatment: {} },
        options: {},
        btnText: "Weiter"
      }
    },
    {
     
      type: BodyActDeact,
      id: "actdeact",
      data: {
        title: "Einführung",
        description: "Man kann auf der Vorder- und Rückseite markieren.",
        btnText: "Weiter"
      }
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