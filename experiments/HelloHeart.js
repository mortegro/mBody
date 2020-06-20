import Experiment from '~/lib/Experiment'
import InfoScreen from '~/components/elements/screens/InfoScreen'
import BodySingle from '~/components/elements/screens/BodySingle'

export default class SimpleAffect extends Experiment {
  id = "embody-prestudy"
  title = "Affect Representation A"
  description = "Körperliche Aktivierungs- und Deaktivierunsmuster im Rahmen des Emotionserlebens (Erwachsenenversion)"
  screens = [
    {
      type: InfoScreen,
      id: "welcome",
      data: {
        title: "Welcome",
        description: "This is a sample experiment. On the next screen you are presented with a body outline. Please mark the position of the heart by drawing on the bodys surface.",
        btnText: "Understood."
      }
    },
    {
      type: BodySingle,
      id: "welcome",
      data: {
        title: "Where is the heart?",
        description: "Please mark the position of the heart.",
        btnText: "Next"
      }
    },
    {
      type: InfoScreen,
      id: "thanx",
      data: {
        title: "Thank you!",
        description: "Thank you for your participation. The experiment is over",
        btnText: "Finish"
      }
    },    
  ]
}