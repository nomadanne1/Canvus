(function(exports){
  // 1. 각각의 모듈에서 생성자 함수를 작성
  // ( 생성자 함수의 첫글자는 Upper case로 작성하는 것이 Convention이다. )
  function SpinboxController(){ 

  }
  // 2. exports 인자를 통해 window 객체에 추가한다
  exports.SpinboxController = SpinboxController;
})(this); // this는 window 객체를 가리킨다.