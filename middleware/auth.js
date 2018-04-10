export default function ( context ) {
  if (!context.store.getters.email) {
    return context.redirect('/sign-in')
  }
}
