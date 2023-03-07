import * as React from "react"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
	const error: any = useRouteError()
	console.log(error)

	return (
		<section>
			<h1>Deu ruim!</h1>
			<p>Lamentamos, ocorreu o seguinte erro:</p>
			<p>{error.statusText || error.message}</p>
		</section>
	)
}

export default ErrorPage
