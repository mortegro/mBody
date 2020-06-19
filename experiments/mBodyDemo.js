import InfoScreen from '@/components/elements/screens/InfoScreen'
import Questionaire from '@/components/elements/screens/Questionaire'
import BodyFrontBack from '@/components/elements/screens/BodyFrontBack'
import BodySingle from '@/components/elements/screens/BodySingle'
import BodyActDeact from '@/components/elements/screens/BodyActDeact'
import ChooseParticipant from '@/components/elements/screens/ChooseParticipant'

import BaseQuestionnaire from './questionnaires/BaseQuestionnaire'

const experiment = {
  id: "embody-prestudy",
  title: "Affect Representation A",
  description: "Körperliche Aktivierungs- und Deaktivierunsmuster im Rahmen des Emotionserlebens (Erwachsenenversion)",
  menu: true,
  frontpage: true,
  screens: [
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
        description: "Dies ist ein Beispielexperiment",
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
      type: BodySingle,
      id: "oneside",
      data: {
        title: "Einführung",
        description: "Man kann auf einer Seite markieren.",
        btnText: "Weiter"
      }
    },
    {
      type: BodyFrontBack,
      id: "twoside",
      data: {
        title: "Einführung",
        description: "Man kann auf der Vorder- und Rückseite markieren.",
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
      type: BodySingle,
      id: "eraser",
      data: {
        title: "Einführung",
        description: "Man kann auf einer Seite markieren. Man kann auch einen Radiergummi aktivieren",
        useEraser: true,
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

export default experiment