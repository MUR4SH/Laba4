import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        dol: null
    };
  }
  convert(){
    if(!isNaN(document.getElementById('rub').value) && document.getElementById('rub').value>0){
      this.setState({dol: document.getElementById('rub').value/80+"$"})
    }else{
      alert("Ошибка ввода! Повторите ввод числа.")
      this.setState({dol: ""})
    }
  }
  render() {
    return (
      <div className="conv">
        <div className="conv-board">
          <div>
            <div className="status">Конвертер из рублей в доллары</div>
              <input id='rub' type="text" placeholder="Рубли"/>
              <input id="dol" type="text" placeholder="Доллары" disabled value={this.state.dol}/>          
            </div>
            <button className="convert" onClick={()=> this.convert()}>Конвертировать</button>  
          </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
