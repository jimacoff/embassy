import { Link } from "react-router-dom";

export function HeaderNavigation() {
  return (
    <header>
      <div>
        <Link to="/">
          <h1 className="p-5 text-center font-rocksalt text-red-mistermenu ">
            MisterMenu
          </h1>
        </Link>
      </div>
      <div className="flex h-56 w-full justify-between bg-slate-400 px-40 py-4">
        <div className=" w-36 rounded-sm  border-[3px] border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200">
          <Link to="/recomendation">
            <img className="p-3" src="/assets/images/Rekomendasi.png" alt="" />

            <h1 className="text-sm font-semibold text-gray-600">
              RECOMMENDATION
            </h1>
          </Link>
        </div>
        <div className=" w-36 rounded-sm  border-[3px] border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200">
          <Link to="/chicken">
            <img className="p-3" src="/assets/images/AYAM.png" alt="" />
            <h1 className="text-sm font-semibold text-gray-600">CHICKEN</h1>
          </Link>
        </div>
        <div className=" w-36 rounded-sm  border-[3px] border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200">

          <Link to="/porridge">
            <img className="p-3" src="/assets/images/BUBUR.png" alt="" />
            <h1 className="text-sm font-semibold text-gray-600">PORRIDGE</h1>
          </Link>
        </div>
        <div className=" w-36 rounded-sm  border-[3px] border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200">
          <Link to="/seafood">

            <img className="p-3" src="/assets/images/SEAFOOD.png" alt="" />
            <h1 className="text-sm font-semibold text-gray-600">SEAFOOD</h1>
          </Link>
        </div>
        <div className=" w-36 rounded-sm  border-[3px] border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200">
          <Link to="/soup">
            <img className="p-3" src="/assets/images/SUP.png" alt="" />
            <h1 className="text-sm font-semibold text-gray-600">SOUP</h1>
          </Link>
        </div>
        <div className=" w-36 rounded-sm  border-[3px] border-gray-200 bg-white text-center shadow-2xl hover:border-red-200 hover:bg-red-200">
          <Link to="/drink">
            <img className="p-3" src="/assets/images/MINUMAN.png" alt="" />
            <h1 className="text-sm font-semibold text-gray-600">DRINK</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
