import {questions} from "./Data"

const mydata =()=>{
    var datas= questions;
    var indexs = 0;
    var final = datas[indexs]
console.log(final)

function nextValue (){
    indexs++;
}
    return(
        <div>
            <button onClick={nextValue}>Click me</button>
            </div>

    )
}
export default mydata