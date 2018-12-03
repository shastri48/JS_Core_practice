class some{
  constructor(a,b){
    this.a = a;
    this.b = b;
    sumNum = 0;
  }
  static sum(){
    return this.sumNum = a+b;
  }
  sumMore(){
    this.sum();
    return sumNum+10;
  }
}
var newObj = new some(5,2);