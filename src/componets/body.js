export default function body(props){
  return(
    <div className="body">
        {props.isStart
        ?
        <div>
          <div id="body-question">{props.answelInfor.question}</div>
          <div className="body-user">
            {props.answelInfor.mode === "객관식" 
            ? 
            <div className="body-user-option">
              <button className="body-user-option-answel" id="body-user-option-answel1" onClick={() => props.selectOption(0)}>{props.options[0]}</button>
              <button className="body-user-option-answel" id="body-user-option-answel2" onClick={() => props.selectOption(1)}>{props.options[1]}</button>
              <button className="body-user-option-answel" id="body-user-option-answel3" onClick={() => props.selectOption(2)}>{props.options[2]}</button>
            </div>
            :
            <div className="body-user-write">
              <input type="text" id="body-user-write-input" onKeyDown={() => props.inputAnswel()} placeholder="정답을 입력하시면 Enter를 눌러주세요."></input>
            </div>
            }
          </div>

        </div>
        :
        <div id="body-title">위 메뉴에서 원하는 것을 골라 시작해주세요.</div>
      }
    </div>
  )
}