import RouteActive from "../routes/RouteActive";
import RenderRoutes from "../routes/routes";
import "./App.css";

function App() {
    return (
        <RouteActive>
            <div className="App">{<RenderRoutes />}</div>
        </RouteActive>
    );
}

export default App;
