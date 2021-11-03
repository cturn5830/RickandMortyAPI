import Title from "./rick-and-morty-logo.jpg"
import "./titlebar.css"

function TitleBar(){
    return(
<div id="TitleBar">
    <img src={Title} alt="Rick and Morty Title" width ="50"/>
    <h1>Rick and Morty thingy 9000x</h1>
</div>
    )
}
export default TitleBar