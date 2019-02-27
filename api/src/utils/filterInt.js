export default (value, done) => {
  if (/^(-|\+)?(\d+)$/.test(value)) {
    done(Number(value))
  }
  done(0)
}
