import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const TabajaraFC = new Clube();
const quadraFutebol = new QuadraFutebol();
TabajaraFC.adicionarQuadra(quadraFutebol);
const dataDeReserva = new Date('2023-01-15');
const reservarQuadraFutebol = TabajaraFC.buscarQuadra<QuadraFutebol>(0).reservar(dataDeReserva);
console.log(reservarQuadraFutebol);