import React from 'react';
import Navbar from '@/Pages/Navbar';
import Cards from '@/Pages/Cards';

const Home = () => {
  return (
    <div>
      <Navbar content={["Makanan", "Minuman", "Pesanan"]} />
      <Cards />
    </div>
  );
};

export default Home;
