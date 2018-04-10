export default function ( context ) {
  if (!context.store.getters.isActivated) {
    return context.redirect('/sign-in')
  }
}
