import "./App.css";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import PageNotFound from "./Utility/PageNotFound";
import { Layout } from "./Layout";

import { VanDetail, Vans, vansLoader, VDloader } from "./Pages/Vans/Index";

import "./FakeServer";
import Error from "./Utility/Error";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="*" element={<PageNotFound />} />
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route
				path="vans"
				element={<Vans />}
				loader={vansLoader}
				errorElement={<Error />}
			/>
			<Route path="vans/:id" element={<VanDetail />} loader={VDloader} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
