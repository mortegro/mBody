import InfoScreen from '@/components/elements/InfoScreen'
import Questionaire from '@/components/elements/Questionaire'
import BodyCanvas from '@/components/elements/embody/BodyCanvas'
import BaseQuestionnaire from '~/experiments/questionnaires/BaseQuestionnaire'
import StudyExpQuestionnaire from '~/experiments/questionnaires/StudyExpQuestionnaire'


const experiment = {
  id: "embody-prestudy",
  title: "Prestudy for embody experiment",
  screens: [
    {
      type: InfoScreen,
      id: "welcome",
      data: {
        title: "Einführung",
        body: "Dies ist ein Beispielexperiment in welchen Daten aus zwei Fragebögen gesammelt werden. \n\n\
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
        body: "Vielen Dank für die Teilnahme am Experiment.",
        btnText: "Fertig"
      }
    },    
  ]
}

export default experiment