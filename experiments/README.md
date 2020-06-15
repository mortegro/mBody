# Experiment descriptions

This folder contains the experiment descriptions.

## Structure
Each experiment consists of one or many screens which will be displayed one after another.
```
```

## Screen definition
A screen is defined by:
* id: unique id, data will be saved under this screen id
* type: defines the component that will be used for the screen, you have to import them from '~/components/elements/'
* data: data object for the screen component, structure differs for the different elements, most contain title, description, and btnText

### InfoScreen
A simple screen showing some information
* title: Title
* description: text inormation to show
* btnText: optional, text for the next-button

### Questionnaire
A simple screen showing some information
* title: Title
* description: text inormation to show
* btnText: optional, text for the next-button

### BodySingle


### BodyFrontBack


### BodyActDeact


## Questionaires
The folder questionnaires contains different form schemas. See [vuetify-form-base](https://github.com/wotamann/vuetify-form-base) for more information