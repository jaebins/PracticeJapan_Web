export default function foot(){
    return(
        <div className="foot">
            <button id="foot-wordsMap" onClick={() => window.open("/dictionary", "사전", "width=531, height=560")}>Dictionary</button>
        </div>
    )
}