(function(exports){
  function SpinboxModel(value){
    value = value || 100;
    this.data = value;
  }
  exports.SpinboxModel = SpinboxModel;
})(this);

// 데이터를 다루는 Model에는 value 값을 저장하고 있게 한다.
// 그리고 그 value 값을 wondow에 data라는 객체로 추가해준다.