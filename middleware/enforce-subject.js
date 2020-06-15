export default function ({ params, redirect, route }) {
  console.log(params)
  console.log(route.name)
  if (!params.subject) {
    redirect('/participants/create', {...params, next: route.name})
  }
}