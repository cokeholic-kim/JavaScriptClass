import Component from "./Component.js"; //확장자 붙히기 필수

export default class Student extends Component{
    setup(){ //state초기값 설정
        this.state = {Student:["student1","student2","student3"]}
    }
    template(){
        const {Student} = this.state;
        return`
        <ul>
            ${Student.map((stu,index)=>`<li>${stu}<button class='delbtn' data-index='${index}'>삭제(찡긋)</button></li>`).join(" ")}
        </ul>
        <button id="add">추가</button>
        `
    }
    setEvent(){
        const {Student} = this.state;
        this.target.querySelector("#add").addEventListener('click',()=>{
            this.setState({Student:[...Student,`student${Student.length+1}`]}) //이벤트가 실행되면 setState메소드 실행
        })
        this.target.querySelectorAll("delbtn").forEach(del => {
            del.addEventListener('click',(e)=>{
                const {Student} = this.state;
                Student.filter((li,index)=>index !== e.target.value)
                this.setState(Student.filter((li,index)=>index !== e.target.value))
            })
        });
    }
}