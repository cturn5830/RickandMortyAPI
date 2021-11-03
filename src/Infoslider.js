//import './infoslider.css'
import React from 'react'

//document elements
const popup = document.getElementById("popup")


//js elements

let slideLocat = 0


//document js

//document render
function InfoSlider(){
    return(
 <div id="infoslider">
<button onClick = {()=> slideLocat -= 1}>{`<-`}</button>
<div id="wrapper">

<div id="weel">
<div className="NameCard" onClick = {()=>document.getElementById("popup").classList.remove("away")}>
<img src="images/id01.jpg" alt="Rick pic"/>
<h4 className="info">Name : <span id ="name">{slideLocat}</span></h4>
</div>


</div>
    
</div>
<div id="popup" className="away">
    <div id ="popupcard" className="InfoCard" >
        <div id="awaybutton" onClick = {()=>document.getElementById("popup").classList.add("away")}>X</div>

        <img src="images/id001.jpg" alt="person "/>
        <h4 className="info">Fact A : <span>Info A</span></h4>
        <h4 className="info">Fact B : <span>Info B</span></h4>
        <h4 className="info">Fact C : <span>Info C</span></h4>
        <h4 className="info">Fact D : <span>Info D</span></h4>
        <h4 className="info">Fact E : <span>Info E</span></h4>
    </div>
</div>
<button onClick={()=> slideLocat += 1}>{`->`}</button>
 </div>       
    )
}
//end of document render
export default InfoSlider