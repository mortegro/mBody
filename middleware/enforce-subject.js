export default function ({ params, redirect, route, query }) {
  this.$log.debug(`query: ${query}`)
  this.$log.debug(`route.name: ${route.name}`)
  if (!params.experiment && this) {
    redirect('/participants/new', {...params, next: route.name})
  }
}