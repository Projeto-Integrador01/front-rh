const Home = () => {
  return (
    <div>
      <div className="p-6 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-centerbg-[rgb(0,105,92)] mb-4">
          Bem-vindo ao Sistema RH
        </h1>
        <img  src="/src/assets/home_foto2.png" alt="Foto de Home"width="500px"/>
        <p className="text-xl text-center text-gray-700">
          Gerencie seus funcionários com facilidade.
        </p>
      </div>
    </div>
  );
};

export default Home;
