import './infoslider.css'
import React, {useState, useEffect} from 'react'

export default function NewApi() {
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState()
    useEffect(() => {
        fetch(`https://api.sampleapis.com/rickandmorty/characters`).then(res => res.json()).then(data => {
            setItems(data)
            setLoading(false)
            setCount(1)
        })
    },[])
    function addCount(){
        setCount(count + 1)
    }
    function subCount(){
        setCount(count - 1)
    }
    const counter = count -1
    function InfoSlider(){
        return(
     <div id="infoslider">
    <button onClick = {subCount}>{`<-`}</button>
    <div id="wrapper">
    
    <div id="weel">
    <div className="NameCard" onClick = {()=>document.getElementById("popup").classList.remove("away")}>
    <img src={items[counter].image} alt={items[counter].name}/>
    <h4 className="info">Name : <span id ="name">{items[count - 1].name}</span></h4>
    </div>
    
    
    </div>
        
    </div>
    <div id="popup" className="away">
        <div id ="popupcard" className="InfoCard" >
            <div id="awaybutton" onClick = {()=>document.getElementById("popup").classList.add("away")}>X</div>
    
            <img src={items[counter].image} alt={items[counter].name}/>
            <h4 className="info">Status : <span>{items[counter].status}</span></h4>
            <h4 className="info">Species : <span>{items[counter].species}</span></h4>
            <h4 className="info">Gender : <span>{items[counter].gender}</span></h4>
            <h4 className="info">Origin : <span>{items[counter].origin}</span></h4>
            
        </div>
    </div>
    <button onClick={addCount}>{`->`}</button>
     </div>       
        )
    }

    return (
        <div>
            {loading && <div>Loading....</div>}
            {!loading && items && count && <div>{InfoSlider()}</div>}
            
        </div>
    )
}



