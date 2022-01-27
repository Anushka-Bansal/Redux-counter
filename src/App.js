import logo from './logo.svg';
import './App.css';
import {connect,useSelector,useDispatch} from 'react-redux'

function App(props) {
  const mycounter=useSelector((state)=>state.count);
  const postdata = useSelector((state)=>state.postdata);
  console.log(postdata);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Redux Counter </h2>
      {/* <p>{props.mycounter}</p> */}
      <p>{mycounter}</p>
      {/* <button onClick={()=>props.counter()}>+</button>
      <button onClick={()=>props.counter1()}>-</button>
      <button onClick={()=>props.reset()}>RESET</button> */}
      
      <button onClick={()=>dispatch({type:'INC',payload:2})}>+</button>
      <button onClick={()=>dispatch({type:'DEC',payload:1})}>-</button>
      <button onClick={()=>dispatch({type:'RESET'})}>RESET</button>

      {/* Middleware concept */}
      {postdata.length>0&&
      postdata.map(post=>
        <>
      <p>{post.title}</p>
      </>)
      }
    </div>
  );
}
// const mapStateToProps=(state)=>{
//   return{
//     mycounter:state.count
//   }
// }
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     counter:function(){
//       dispatch({type:'INC',payload:2})
//     },
//     counter1:function(){
//       dispatch({type:'DEC',payload:1})
//     },
//     reset:function(){
//       dispatch({type:'RESET'})
//     }
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default (App);
