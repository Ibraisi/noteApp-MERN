import React, { FocusEventHandler } from 'react'
import { FC, FocusEvent } from 'react'
import INote from '../interfaces/note.interface'
import "./note.css"

type Props = {
    noteItem:INote,
    noteUpdated : (note:INote) =>void
}

const Note: FC<Props> = ({noteItem, noteUpdated}) => {
  const notTextUp = (event: FocusEvent<HTMLDivElement>)=>{
    console.log("textupdated")
    const newText = event.currentTarget.textContent
    if(newText == noteItem.text){
      return;
    }
    console.log("the updated text")
    console.log(newText)
    noteUpdated({
      ...noteItem,
        text: newText || " "
    })
  }  
  return (
    <div className="note">
        <div
             onBlur = {notTextUp}
             contentEditable={true}
             className="note__text"
             suppressContentEditableWarning = {true}
         >
            {noteItem?.text}
        </div>
        <div className="note__link">
            <a href={noteItem?.link}>{noteItem?.link}</a>
        </div>
    </div>
  )
}

export default Note