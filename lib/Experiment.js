import { shuffle } from '~/lib/utils'

export default class Experiment {
  
  _submitted = []

  get screens() {
    return this._screens
  }
  
  set screens(s) {
    const expanded = s.flatMap(e=>{
      if (e.set && e.elements) {
        if (e.set == "simple") return e.elements
        if (e.set == "random") return shuffle(e.elements)
      } else {
        return e
      }
    })
    this._screens = expanded
  }

  screenSubmitted(screenData) {
    // also store result internally
    this._submitted = [...this._submitted, screenData]
    if (this.onSubmit && typeof this.onSubmit == 'function') {
      this.onSubmit(screenData)
    }
  }

}
