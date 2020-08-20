function _instanceOf(L, R) {
  let Rp = R.prototype;
  let Lp = L.__proto__;

  while(true) {
    if(Lp === null) return false;
    if(Lp === Rp) return true;
    Lp = Lp.__proto__;
  }
}