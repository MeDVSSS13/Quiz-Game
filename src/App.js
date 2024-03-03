import "./App.css";
import { CategoryList } from "./components/categoryList/CategoryList";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<button>Start</button>
				<button>Pause</button>
				<button>Stop</button>
			</div>
			<CategoryList />
		</div>
	);
}

export default App;
