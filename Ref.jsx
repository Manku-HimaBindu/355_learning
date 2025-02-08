// // import React from 'react'

// // const Ref = () => {
// //     let demo=document.getElementById("demo")
// //     console.log(demo);
// //     demo.style.backgroundColor="green"
// //     demo.style.textAlign="center"
    
// //   return (
// //     <>
// //     <h1 id='demo'>HimaBindu</h1>
// //     </>

// //   )
// // }

// // export default Ref

// // import React, { useRef } from 'react'

// // const Ref = () => {
// //     let demo=useRef()
// //     console.log(demo.current);
// //     demo.current.style.backgroundColor="green"
// //     demo.current.style.textAlign="center"
    
// //   return (
// //    <>
// //    <h2 ref={demo}>This is Me</h2>
// //    </>
// //   )
// // }

// // export default Ref


// import React, { useRef, useState } from 'react'
// import video from '../useRef/253436_tiny.mp4'

// const Ref = () => {
//     let ref1=useRef()
//     console.log(ref1.current);
//     let[state,setastate]=useState(true)
//     let demo=()=>{
//         setastate(!state);
//         state===true? ref1.current.play():ref1.current.pause()
//     }
    
//   return (
//     <div>
//         <video ref={ref1} src={video} style={{height:"300px"}} onClick={demo}></video>
        
//     </div>
//   )
// }

// export default Ref

import React from 'react'

const Ref = () => {
  return (
    <div><form>
        name: <input type='text' name="name" id='name'></input><br/>
        </form></div>
  )
}

export default Ref