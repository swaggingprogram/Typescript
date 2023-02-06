// js class
class Point {
  // 変数宣言　型宣言と共に
  x: number;
  y: number;

  // コンストラクタ メモリの確保
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // メソッド宣言 javaのようにpublicやprivateで権限制御もできる臭い
  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2);


// クラス継承 
class Point3D extends Point {
  z: number;
  constructor(x: number, y: number, z: number) {
      // super() 親クラスのコンストラクタを呼び出している
      super(x, y);
      this.z = z;
  }
  add(point: Point3D) {
      var point2D = super.add(point); //superを付けることでaddメソッドを上書きしている
      return new Point3D(point2D.x, point2D.y, this.z + point.z);
  }
}
// 子クラスを作る場合はコンストラクタでsuper()を呼ばないとエラーになるっぽいkk
