export default function Initializer () {
  this.$checkLogin(this.requireAuth || false).then(res => {});
}