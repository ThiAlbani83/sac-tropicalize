import { Route, Routes } from "react-router-dom";
import FluxoSaqueB5 from "./sac/fluxos/b5/FluxoSaqueB5";
import FluxoB5Deposito from "./sac/fluxos/b5/FluxoB5Deposito";
import FluxoB5Bonus from "./sac/fluxos/b5/FluxoB5Bonus";
import FluxoJetDeposito from "./sac/fluxos/jetbet/FluxoJetDeposito";
import FluxoJetSaque from "./sac/fluxos/jetbet/FluxoJetSaque";
import FluxoJetBonus from "./sac/fluxos/jetbet/FluxoJetBonus";
import FluxoPinDeposito from "./sac/fluxos/pinbet/FluxoPinDeposito";
import FluxoPinSaque from "./sac/fluxos/pinbet/FluxoPinSaque";
import FluxoPinBonus from "./sac/fluxos/pinbet/FluxoPinBonus";
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
