import * as React from "react"

interface Car {
	name: string
	colors: [string, string]
	prize: number
}

type Props = {
	name: string
	id: string
	image: any
	text: string
	prize: number
	color: string
}

const Product = ({ name, id, image, text, prize, color }: Props) => {
	const mclaren: Car = {
		name: "Mclaren P1",
		colors: ["blue", "red"],
		prize: 1000,
	}

	return (
		<section>
			<h2>{name}</h2>
			<img src={image} alt={name} />
			<p>{text}</p>
			<p>R${prize}</p>
			<p>{color}</p>
			<button
				type="button"
				onClick={() => localStorage.setItem(id, JSON.stringify(mclaren))}
			>
				+
			</button>
		</section>
	)
}

export default Product
