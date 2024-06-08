import React from 'react'
import Navbar from '../Pages/Navbar'
import Cards from '../Pages/Cards'

const Admin = () => {
  return (
		<section className="relative">
			<Navbar content={["Makanan", "Minuman"]} />
			<Cards />
		</section>
	);
}

export default Admin