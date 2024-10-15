import { Route, Routes } from "react-router-dom";
import FluxoSaqueB5 from "./SAC/fluxos/b5/FluxoSaqueB5";
import FluxoB5Deposito from "./SAC/fluxos/b5/FluxoB5Deposito";
import FluxoB5Bonus from "./SAC/fluxos/b5/FluxoB5Bonus";
import FluxoJetDeposito from "./SAC/fluxos/jetbet/FluxoJetDeposito";
import FluxoJetSaque from "./SAC/fluxos/jetbet/FluxoJetSaque";
import FluxoJetBonus from "./SAC/fluxos/jetbet/FluxoJetBonus";
import FluxoPinDeposito from "./SAC/fluxos/pinbet/FluxoPinDeposito";
import FluxoPinSaque from "./SAC/fluxos/pinbet/FluxoPinSaque";
import FluxoPinBonus from "./SAC/fluxos/pinbet/FluxoPinBonus";
import Sidebar from "./components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      {/* Main Content com rotas internas */}
      <div className="flex-1 h-screen py-10 overflow-y-scroll bg-gray-300">
        <Routes>
          {/* Rota padrão (/) */}
          <Route
            path="/"
            element={
              <div className="text-3xl text-center text-gray-700">
                Sistema SAC - Tropicalize
              </div>
            }
          />
          <Route path="b5/depositos" element={<FluxoB5Deposito />} />
          <Route path="b5/saques" element={<FluxoSaqueB5 />} />
          <Route path="b5/bonus" element={<FluxoB5Bonus />} />
          <Route path="jet/depositos" element={<FluxoJetDeposito />} />
          <Route path="jet/saques" element={<FluxoJetSaque />} />
          <Route path="jet/bonus" element={<FluxoJetBonus />} />
          <Route path="pin/depositos" element={<FluxoPinDeposito />} />
          <Route path="pin/saques" element={<FluxoPinSaque />} />
          <Route path="pin/bonus" element={<FluxoPinBonus />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
