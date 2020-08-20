Function.prototype._bind = function(src) {
  return () => {
    this.apply(src);
  }
}