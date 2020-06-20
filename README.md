# mBody

mBody is a reimplementation of the [embody tool](https://version.aalto.fi/gitlab/eglerean/embody) coded by  Enrico Glerean, Lauri Nummenmaa, Juulia Suvilehto. 

It is implemented as a pwa-webapp to work on tablets, even offline. 

### Data Storage

Local data is scored in the browsers memory using [Pouch-DB](https://pouchdb.com/) which can be synced with a [couchdb instance](https://couchdb.apache.org/) hosted locally or hosted in the internet or downloaded as json-data.



## Getting Started

To get started you can run a development webserver locally on your machine. To do so you need node.js > v0.10.

### Installing

To get a local development server running you have to clone the reposity and install the dependencies:

```
git clone 
cd mBody
npm install
```

to run the development server with live-reload:

```
npm run dev
```

If everything works, you schould have a webserver running on [http://localhost:3000]
More information can be found in the documentaion of the used [nuxt-framework](https://nuxtjs.org): 


## Deployment

### Nuxt deployments
You can run deploy the tool like every [nuxt](https://nuxtjs.org) app by running a development server (npm run dev), a nodejs-server (npm run start) or build the webapp (npm run build) host it using a webserver.

You can define 


```
Give the example
```

### Docker deployment
You also can deploy the webapp in a docker container using docker-compose

## Configuration
You can configure the server using environment variables. You can either set them in your shell, directly in the file nuxt.config.js or in your docker-compose file. The following environment variables are supported:
* BASE_URL: base url and port under which the app is hosted
* BACKEND: Url for the couchdb backend you want to sync with
* PUBKEY: Public key used for encryption, see more in '~/plugins/sample_encryption'

## Usage

## Writing experiments
### Experiment descriptions

The folder 'experiments' contains the experiment descriptions. Each file exports a class which extends 

#### Example
```
import Experiment from '~/lib/Experiment'
import InfoScreen from '~/components/elements/screens/InfoScreen'
import SingleBody from '~/components/elements/screens/SingleBody'

export default class SimpleAffect extends Experiment {
  id: "embody-prestudy",
  title: "Affect Representation A",
  description: "Körperliche Aktivierungs- und Deaktivierunsmuster im Rahmen des Emotionserlebens (Erwachsenenversion)",
  screens: [
    {
      type: InfoScreen,
      id: "welcome",
      data: {
        title: "Welcome",
        body: "This is a sample experiment. On the next screen you are presented with a body outline. Please mark the position of the heart by drawing on the bodys surface.",
        btnText: "Understood."
      }
    },
    {
      type: SingleBody,
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
```

#### Structure
Each experiment consists of one or many screens which will be displayed one after another. Forst you have to make some basic definitions:
* id: unique id for that experiment
* title: Short experiment title
* description: longer description
* screens: Array of screen definitions

### Screen definition

A screen is a single page in an experiment. After finishing a screen the data is saved to the database.


A screen is defined by:
* id: unique id, data will be saved under this screen id
* type: defines the component that will be used for the screen, you have to import them from '~/components/elements/'
* data: data object for the screen component, structure differs for the different elements, most contain title, description, and btnText

#### Special case: screen sets
Instead of a screen definition you can encapsulate some definitions in a set for special use-cases

```
screens: [
  ...,
  {
    set: 'random' | 'simple',
    elements: {
      ... screen definitions
    }
  },
  ...
]
```

### Implemented Screens

#### InfoScreen
A simple screen showing some information
* title: Title
* description: text inormation to show
* btnText: optional, text for the next-button

#### Questionnaire
A simple screen showing some information
* title: Title
* description: text inormation to show
* schema: form schema
* options: options for vuetify-form-base
* btnText: optional, text for the next-button

##### Questionaires
The folder '~/experiments/questionnaires' contains different form schemas to be used with this screen type. See [vuetify-form-base](https://github.com/wotamann/vuetify-form-base) for more information.

#### BodySingle
A single unmarked body outline you can draw on.
* title: Title
* description: text inormation to show
* (btnText): optional, text for the next-button

#### BodyFrontBack
Two body outlines indicating a front and a back side you can draw on.
* title: Title
* description: text inormation to show
* (btnText): optional, text for the next-button

#### BodyActDeact
Two body outlines indicating a front and a back side you can draw on.
* title: Title
* description: text inormation to show
* (btnText): optional, text for the next-button

## Contributing
If you want to contribute, just let me know via a pull-request.

## Authors

* **Matthias Bolz**
* This webapp is highly inspired by the work of Enrico Glerean, Lauri Nummenmaa and Juulia Suvilehto. [embody tool](https://version.aalto.fi/gitlab/eglerean/embody)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
Thanks to the great work:
* [embody tool](https://version.aalto.fi/gitlab/eglerean/embody)
* [NUXT](https://nuxtjs.org/), based on the great [Vue-Framework](https://vuejs.org/)
* [vuetify](https://vuetifyjs.com/) Vue Component Framework
* [vuetify-form-base](https://github.com/wotamann/vuetify-form-base)
