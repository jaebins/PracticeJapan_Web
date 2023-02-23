import Menu from "./menu";

export default function neck(props){
    return(
        <div className="neck">
            <Menu type="Hiragana" createQuestion={props.createQuestion}></Menu>
            <Menu type="Katakana" createQuestion={props.createQuestion}></Menu>
        </div>
    )
}