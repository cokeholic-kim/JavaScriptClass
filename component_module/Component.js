export default class Component{
    target;
    state;
    constructor(target){
        this.target = target;
        this.setup();
        this.render();
    }
    setup(){}
    setEvent(){}
    template(){
        return ``
    }
    render(){
        this.target.innerHTML=this.template();
        this.setEvent();
    }
    setState(newState){
        this.state = {...this.state,...newState}
        this.render(); //state값이 바뀌면 렌더링
    }


}