import { shuffle } from '~/lib/utils'

export default class Experiment {



  get screens() {
    const base = this._screens

    const expanded = base.flatMap(e=>{
      if (e.set && e.elements) {
        if (e.set == "simple") return e.elements
        if (e.set == "random") return shuffle(e.elements)
      } else {
        return e
      }
    })
    return expanded
  }

  set screens(s) {
    this._screens = s
  }

  onScreenSubmit(screenData) {
    this.submitted = [...this.submitted, screenData]
  }

}
