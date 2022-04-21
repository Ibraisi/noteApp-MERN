import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import dummyNotes from './dummyNotes';
import Note from './components/note';
import INote from './interfaces/note.interface';
import { json } from 'stream/consumers';

function App() {
  const [notesList, setNotesList] = useState<Array<INote>>([])
    useEffect(()=>{
      const listFromLocalStorgeString = localStorage.getItem("My-notes")
      if(listFromLocalStorgeString){
        const listFromLocalStorge = JSON.parse(listFromLocalStorgeString)
        setNotesList(listFromLocalStorge)
      }else{
      setNotesList(dummyNotes)
      }
    },[])
    useEffect(()=>{
      console.log("Saving updated List")
      const noteListString = JSON.stringify(notesList)
      localStorage.setItem("My-notes",noteListString)
    },[notesList])
  // const getNotes =  async()=>{
  //   try{
  //     const rs = await axios.get('http://localhost:3000/notes ')
  //     setNotesList(rs.data.notes)
  //     console.log(notesList)
  //   }catch(err){
  //     console.error(err)
  //   }
  // }
  console.log("rRendering")
  console.log(notesList)


  const updatedNotList = (Updatednote : INote)=>{
    console.log("this is updated note")
    console.log(Updatednote)
    const updatedList = notesList.map((note:INote)=>{
      if(Updatednote._id == note._id){
        return Updatednote
      }
      return note
    })
    setNotesList(updatedList)
    console.log("this is updated list")
    console.log(updatedList)
  }
  
  return (
    <div className="App">
        <div className="note-list">
            {
              notesList.map((noteItem, index)=>{
               return  <Note noteItem={noteItem} noteUpdated = {updatedNotList} key={index}/>
              })
            }
        </div>
    </div>
  );
}

export default App;
