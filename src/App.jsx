import { useEffect, useState } from 'react';
import Card from './components/card';

function App() {
  const [genshinData, setGenshinData] = useState([]);

  async function getGenshinData() {
    try {
      const response = await fetch(
        'https://genshin-db-api.vercel.app/api/characters?query=names&matchAliases=true&matchCategories=true&verboseCategories=true'
      );
      let actualData = await response.json();
      console.log(actualData);
      setGenshinData(actualData);
    } catch (error) {}
  }

  useEffect(() => {
    getGenshinData();
  }, []);

  return (
    <div className="relative flex">
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <nav className="bg-gray-900 border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#!" className="flex items-center">
              <span className="text-white text-lg">Genshin Resources</span>
            </a>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between">
              <div className="grid grid-cols-2 gap-2">
                <a href="#!" className="">
                  <span className="text-white text-lg">Genshin Resources</span>
                </a>
                <a href="#!" className="">
                  <span className="text-white text-lg">Genshin Resources</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="bg-gray-800 p-9">
          <div className="grid grid-cols-8 gap-5">
            {genshinData.map((e, key) => {
              return (
                <Card
                  key={key}
                  name={e.fullname}
                  imageUrl={e.images.icon}
                  weaponType={e.weapontype}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
