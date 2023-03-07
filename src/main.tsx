import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Root from "./routes/Root"
import ErrorPage from "./routes/ErrorPage"

const router = createBrowserRouter([
	{ path: "/", element: <Root />, errorElement: <ErrorPage /> },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
