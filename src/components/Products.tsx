import * as React from "react"
import Product from "./Product"

const Products = () => {
	return (
		<section>
			<h1>Produtos</h1>
			<Product
				name={"Ferrari"}
				id={"1"}
				text={"Carro rápido"}
				prize={12000}
				color={"red"}
				image={"image"}
			/>
			<Product
				name={"Mercedes AMG-One"}
				id={"2"}
				text={"Carro moderno da divisão AMG"}
				prize={150000}
				color={"red"}
				image={"image2"}
			/>
		</section>
	)
}

export default Products
