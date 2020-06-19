import InfoScreen from '@/components/elements/screens/InfoScreen'
import Questionaire from '@/components/elements/screens/Questionaire'
import BodyFrontBack from '@/components/elements/screens/BodyFrontBack'


const experiment = {
  id: "embody-prestudy",
  title: "Affect Representation A",
  description: "Körperliche Aktivierungs- und Deaktivierunsmuster im Rahmen des Emotionserlebens (Erwachsenenversion)",
  menu: true,
  frontpage: true,
  screens: [
    // {
    //   type: InfoScreen,
    //   id: "welcome",
    //   data: {
    //     title: "Einführung",
    //     body: "Dies ist ein Beispielexperiment",
    //     btnText: "Weiter"
    //   }
    // },
    {
      type: BodyFrontBack,
      id: "welcome",
      data: {
        title: "Einführung",
        description: "Dies ist ein Beispielexperiment",
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