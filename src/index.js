import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// eslint-disable-next-line react/prefer-stateless-function
class Main extends React.Component {
  render() {
    function convert() {
      let con = 1;
      con = document.getElementById('rub').value;
      if (!Number.isNaN(Number.con) && con > 0) {
        document.getElementById('dol').value = `${con / 80}$`;
      } else {
        document.getElementById('dol').value = ' ';
      }
    }
    return (
      <div className="conv">
        <div className="conv-board">
          <div>
            <div className="status">Конвертер из рублей в доллары</div>
            <input id="rub" type="text" placeholder="Рубли" />
            <input id="dol" type="text" placeholder="Доллары" disabled />
          </div>
          <button className="convert" type="button" onClick={() => convert()}>Конвертировать</button>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root'),
);
