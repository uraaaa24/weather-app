import { useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

  useEffect(() => {
		// APIをfetchする(呼び出す)
		fetch("http://localhost:8080/api/weather", { method: "GET" })
			// レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
			// APIから渡されるレスポンスデータ(data)をコンソールに表示する
			.then((data) => {
				console.log(data);
			});
	}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
