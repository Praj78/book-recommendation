import "./styles.css";
import React,{useState} from "react"
const list={
  polymath:[
    {name: "Naval Ravikanth",subjects:"The Rational Optimist (4/5) ,Thinking Fast and Slow (4.5/5) "},
   {name:"Marc Andreessen",subjects:"The Hard Thing About Hard Things (5/5) ,Behave: The Biology of Humans at Our Best and Worst(4/5) "},
    {name:"Balaji Srinivasan",subjects:"The Great CEO Within (4/5) ,AI Superpowers (4.5/5) "}
  ],
  tech:[
    {name:"Tanay Pratap",subjects:"Eloquent JavaScript (4/5) ,You Don't Know JS (4.5) "},
    {name:"Vitalik Buterin",subjects:"Defi and Future of Finance (3.5/5) ,Blockchain simply Explained(4.5) "},
     {name: "Elon Musk",subjects:" Structures: Or Why Things Don’t Fall Down (4.5/5) ,Superintelligence: Paths, Dangers, Strategies (5/5) "}
    
  ],
  writing:[
    {name:"David Perell",subjects:"Nobody wants to read your  shit (4/5) ,Rework (5/5) "},
    {name:"Seth Godin",subjects:"Originals (4/5) ,The art of possiblity (4.5/5) "},
    {name:"Nassim Taleb",subjects:"The Mind Doesn't Work That Way (5/5) ,The Blank Swan: The End of Probability (4/5) "}
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
  <p style={{fontSize:"smaller"}}>{" "}Select the genres to see the book recommendations of great people{" "}</p>
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
