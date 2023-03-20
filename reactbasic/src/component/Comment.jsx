import React from 'react';
import {useState} from 'react';
// import './Comment.css';
import img from '../component/ddd.jpg'

// const styles = {
//    display : 'flex',
//    margin : '8px',
//    padding : '8px',
//    border: '1px solid #ccc',
//    borderRadius : '16px'
// }

// const styles1 = {
//     width : '50px',
//     height : '50px',
//     borderRadius : '50%'
// }
// const styles2 = {
//     display : 'flex',
//     flexDirection : 'column',
//     justifyContent : 'center',
//     marginLeft : '8px'
// }

// const styles3 = {
//     fontSize : '18px',
//     fontWeight : 'bold'
// }

// const styles4 = {
//     fontSize : '14px'
// }

const styles = {
    wrapper : {
        display : 'flex',
        margin : '8px',
        padding : '8px',
        border : '1px solid #ccc',
        borderRadius : '16px'
    },

    image : {
        width : '50px',
        height : '50px',
        borderRadius : '50%'
    },

    contentContainer : {
        display : 'flex', 
        flexDirection : 'column',
        justifyContent : 'center',
        marginLeft : '8px'
    },

    nameText  :{
        fontSize : '18px',
        fontWeight : 'bold'
    }, 
    commenText : {
        fontSize : '14px'
    },
    

}

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
        <div className='wrapper' style={styles.wrapper}>
            <div className='img-box'>
                <img src={img} alt="" style={styles.image}/>
            </div>

            <div className='content-container' style={styles.contentContainer}>
                <span className='name-text' style={styles.nameText}>{props.name}</span>
                <span className='comment-text' style={styles.commenText}>{props.comment}</span>
                
            </div>
            <button onClick={props.onDelete}>X</button>
            {/* <button onClick={props.onCreate}>글추가</button> */}
            
        </div>
        
    )
    
}


export default Comment;