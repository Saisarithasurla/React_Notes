
import { useState, useEffect } from "react";

function App() {
  const [name, setname] = useState("");
  const [pokedetails, setpokedetails] = useState(null);
  const [error, seterror] = useState("");

  useEffect(() => {
    async function fetchdata() {
      if (name.length === 0) {
        setpokedetails(null);
        seterror("");
        return;
      }

      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
         

        if (!res.ok) {
          throw new Error("Pokemon not found");
        }

        const data = await res.json();
        setpokedetails(data);
        seterror("");
      } catch (err) {
        seterror(err.message);
        setpokedetails(null);
      }
    }

    fetchdata();
  }, [name]);

  return (
    <>
      <header className="bg-neutral-500 h-34 p-14 text-white flex justify-between font-bold">
        <h1 className="text-5xl -m-6 text-amber-950">
          Pokemon <span className="text-lime-500">Search</span>
        </h1>

        <input
          className="px-3 py-2 border-2 h-14  border-yellow-500 outline-0 text-black text-xl rounded-full placeholder-white"
          type="text"
          placeholder="Enter pokemon name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </header>

      <main className="h-screen flex justify-center items-center">
        {error && <p className="text-red-500">{error}</p>}

        {pokedetails && (
          <div className="text-center flex items-center">
            <img className=" h-76 w-76"
              src={pokedetails.sprites.front_default}
              alt={pokedetails.name}
            />
            <div className="ml-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold">{pokedetails.name}</h2>
            <p className="text-gray-700 mt-2 text-2xl">Height: {pokedetails.height}</p>
            <p className="text-gray-700 text-2xl">Weight: {pokedetails.weight}</p>
            </div>
          </div>
        )}


        
      </main>

      <footer className="bg-gray-500 text-2xl text-center p-3 text-white">
        This site belongs to Saritha ©2026 made with 💞
      </footer>
    </>
  );
}

export default App;
