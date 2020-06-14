import InfoScreen from '@/components/elements/InfoScreen'
import Questionaire from '@/components/elements/Questionaire'
import OneBody from '@/components/elements/OneBody'


const experiment = {
  id: "embody-prestudy",
  title: "Prestudy for embody experiment",
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
      type: OneBody,
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
        body: "Vielen Dank für die Teilnahme am Experiment.",
        btnText: "Fertig"
      }
    },    
  ]
}

export default experiment