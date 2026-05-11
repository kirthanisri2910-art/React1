function Home() {
  return (
    <div className="p-6 text-center">   
      <h2 className="text-3xl font-bold mb-3">Welcome to Flower Shop 🌷</h2>
      <p>Fresh flowers delivered with love 💖</p>
      <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
        Flowers bring happiness, love, and freshness into our lives. At Bloom
        Flower Shop, we offer beautiful, fresh flowers for every occasion —
        birthdays, weddings, anniversaries, and special moments. Choose your
        favorite flowers and spread smiles today 🌷💖
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UtdhRDubziacY2Sq3oiGnRz6vtj0rRTd6A&s"
        alt="Beautiful flower arrangement"
        className="mx-auto rounded-xl shadow-lg w-80 h-60 object-cover"
      />
    </div>
  );
}

export default Home;