const { SpinboxModel } = require("./spinbox.model");
const { SpinboxView } = require("./spinbox.view");

(function(exports){
  // 1. 각각의 모듈에서 생성자 함수를 작성
  // ( 생성자 함수의 첫글자는 Upper case로 작성하는 것이 Convention이다. )
  function SpinboxController(){ 
    this.spinboxModel = new SpinboxModel();
    this.spinboxView = new SpinboxView();

    this.spinboxView.render(this.spinboxModel.getData());

    


  }
  // 2. exports 인자를 통해 window 객체에 추가한다
  exports.SpinboxController = SpinboxController;
})(this); // this는 window 객체를 가리킨다.

// 컨트롤러 역할이 모델과 뷰를 중개하는 역할이므로,
// 생성자 함수에 모델과 뷰를 생성하는 코드를 작성한다.
// 그리고 클라이언트로부터 이벤트를 받는 역할이므로 이벤트를 달아준다.