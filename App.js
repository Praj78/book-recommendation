import "./styles.css";
import React,{useState} from "react"
const list={
  polymath:[
    {name: "Naval Ravikanth",subjects:"Skin In The Game,Thinking Fast and Slow"},
    {name:"Balaji Srinivasan",subjects:"The Great CEO Within,AI Superpowers"}
  ],
  tech:[
    {name:"Tanay Pratap",subjects:"Eloquent JavaScript,You Don't Know JS"},
    {name:"Crypto",subjects:"A History of Money,The Basics of Bitcoins and Blockchains"}
  ],
  writing:[
    {name:"David Perell",subjects:"nobody wants to read your  shit,rework"},
    {name:"Seth Godin",subjects:"Originals,the art of possiblity"}
  ]
}

export default function App() {
const [name,functionname]=useState("polymath");
function toshow(grat){
  functionname(grat);
}


 return (
   <div className="App">
   <h1> 📚 book recommendation</h1>
  <p style={{fontSize:"smaller"}}>{" "}select the genres to see the book recomdation of great people{" "}</p>
   <div>{
     Object.keys(list).map((grat)=>(
       <button
       onClick={()=>toshow(grat)}
       style={{padding:"0.5rem 1rem",margin:"0.5rem 1rem",border:"1px solid black",borderRadius:"3rem",
      background:"#E5E7EB" }}
       >{grat}</button>
     ))
   }</div>
   <hr />
   <div style={{textAlign:"left"}}>
   <ul style={{paddingInlineStart:"0.5rem"}} >
   {list[name].map((book)=>(
     <li 
     key={book.name}
     style={{padding:"0.5rem 1rem",margin:"0.5rem 1rem",border:"3px solid #D1D5DB",
     borderRadius:"0.5rem",listStyle:"none",width:"70%"}}>
     <div style={{fontSize:"larger"}}>{book.name}</div>
     <div style={{fontSize:"smaller"}}>{book.subjects}</div></li>
   ))}
   </ul>
   </div>

    </div>
  );
}
