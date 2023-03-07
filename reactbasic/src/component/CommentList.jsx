import React from "react";
import Comment from './Comment';
import { useState } from "react";


const comments = [
    {
        name : "여상현1",
        comment : "안녕하세요. 여상현입니다."
    },
    {
        name : "여상현2",
        comment : "리액트 너무 재밌다"
    }, 
    {
        name : "여상현3",
        comment : "리액트 너무 재미없다"
    }
]

function CommentList() {
    return (
        <div>
            {
                comments.map((comment, i)=>{
                    return(
                        <Comment name={comment.name} comment={comment.comment} key={i}/>
                    )
                })
            }

        </div>
    )
    function OnClick(index) {
    let [comments, setcomments] = useState(["comments"]);
    let copy = [...Comment]
    return(
        
        <div>
        {
            comments.map((i,a)=>{ 
                copy = copy.splice();
                return(
                    <comment />
                )
            })
            
        }
        
        </div>
    )
}
}
    

export default CommentList;