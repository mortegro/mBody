import Experiment from '~/lib/Experiment'

import InfoScreen from '@/components/elements/screens/InfoScreen'
import Questionaire from '@/components/elements/screens/Questionaire'
import BaseQuestionnaire from '~/experiments/questionnaires/BaseQuestionnaire'
import StudyExpQuestionnaire from '~/experiments/questionnaires/StudyExpQuestionnaire'

export default class SimpleQuestionnaire extends Experiment {
  id = "embody-prestudy"
  title = "emBody Interview"
  description = "Beispielfragebogen"
  storehook(res) {
    alert(' TO DB: '+JSON.stringify(res))
  }
  screens = [
    {
      type: InfoScreen,
      id: "welcome",
      data: {
        title: "Einführung",
        description: "Dies ist ein Beispielexperiment in welchen Daten aus zwei Fragebögen gesammelt werden. \n\n\
          Bitte Fülle beide Fragebögen aus.",
        btnText: "Weiter"
      }
    },
    {
      type: Questionaire,
      id: "proband",
      data: {
        title: "Basisdaten ",
        description: "Dieser Fragebogen erfasst Basisdaten.",
        schema: BaseQuestionnaire,
        model: { treatment: {} },
        options: {},
        btnText: "Weiter"
      }
    },
    {
      type: Questionaire,
      id: "studyexpirience",
      data: {
        title: "Studienerfahrungen",
        description: "Dieser Fragebogen erfasst ob du schon einmal an Studien teilgenommen hast.",
        schema: StudyExpQuestionnaire,
        model: { treatment: {} },
        options: {},
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