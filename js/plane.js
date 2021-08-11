/*비행기를 정의 해본다
비행기라는 사용자 정의 자료형을 선언!!
*/
class Plane{
    /*변수, 함수가 올 수 있다*/

    //객체의 초기화는 생성자 메서드가 담당한다
    //비행기가 어떤 특성을 가지고 태어날지 결정!!
    constructor(container, src, width, height, x, y){
        this.img = document.createElement("img");
        this.src = src;
        
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;


        this.img.src=src;
        this.img.style.width = width+"px";
        this.img.style.height = height+"px";
        this.img.style.positon = "absolute";
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";

        this.container.appendChild(this.img);
    }
}