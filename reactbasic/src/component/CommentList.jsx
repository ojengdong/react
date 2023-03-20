import { useState } from "react";
import Comment from "./Comment";
import React from "react";

const comments = [
  {
    name: "여상현1",
    comment: "안녕하세요",
  },
  {
    name: "여상현 2",
    comment: "리액트는 재밌어요",
  },
  {
    name: "여상현 3",
    comment: "노잼",
  },
];

function CommentList() {
  const [commentList, setCommentList] = useState(comments);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const deleteComment = (index) => {
    const newCommentList = [...commentList];
    newCommentList.splice(index, 1);
    setCommentList(newCommentList);
  };

  const addCommnet = () => {
    // name, content value값이 없을 때 
    name === '' || content === '' ? alert('이름과 댓글을 입력하세요') : (
      (() => {
        const add = {name : name, comment : content}
        setCommentList([add, ...commentList]);
        // state변경 함수에 빈 문자열을 넣어서 input에 작성된 내용을 초기화
        setName("");
        setContent("");
      })()
    )
    
    
    // setName || setContent ? alert('이름과 댓글을 입력하세요') : setName("") || setContent("")
  }

  return (
    <div>
      {commentList.map((comment, i) => {
        return (
          <Comment
            name={comment.name}
            comment={comment.comment}
            key={i}
            onDelete={() => deleteComment(i)}
          />
        );
      })}
      {/* onChange 이벤트는 input 요소에서 값이 변경될 때 발생 
            그 때 발생한 이벤트를 매개변수 e
       */}
      이름 : <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      댓글 : <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
      {/* <h1>이름</h1>
      <input
        type="text"
        value={newCommentText}
        onChange={(e) => setNewCommentText(e.target.value)}
      />

      <h1>댓글</h1>
      <input
        type="text"
        value={newCommentName}
        onChange={(e) => setNewCommentName(e.target.value)}
      /> */}
      <button onClick={addCommnet}>
        
        <h3>글 추가</h3>
      </button>
          {/* () => {  */}
        {/* // //   setCommentList([
        // //     { name: newCommentText, comment: newCommentName },
        // //     ...commentList,
        // //   ]);
        // //   setNewCommentText("");
        // //   setNewCommentName("");
       
                // } */}
                
    
    
     
        
    </div>
  );
}

export default CommentList;