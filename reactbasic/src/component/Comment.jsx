import React from 'react';
import {useState} from 'react';
import './Comment.css';
import img from '../component/ddd.jpg'

// const Comment = (props) => {
//     return(
//         <div className='Comment'>
//         <div className='list'>
//             <img src={img} alt="" />
//             <h2>상현1</h2>
//             <p>집에가고싶다</p>
//         </div>
//         <div className='list'>
//         <img src={img} alt="" />
//           <h2>상현2</h2> 
//           <p>리액트 재밌다!</p>
//         </div>
//         <div className='list'>
//         <img src={img} alt="" />
//           <h2>상현3</h2>
//           <p>리액트 리액트 리액트</p>
//         </div>
//         </div>
//     )
// }

function Comment(props) {
    return (
        <div className='wrapper'>
            <div className='img-box'>
                <img src={img} alt="" />
            </div>

            <div className='content-container'>
                <span className='name-text'>{props.name}</span>
                <span className='comment-text'>{props.comment}</span>
            </div>
        </div>
    )
}
export default Comment