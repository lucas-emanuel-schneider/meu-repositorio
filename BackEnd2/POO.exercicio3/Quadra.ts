import { IAgenda } from "./interfaces/IAgenda";
export default abstract class Quadra {
  protected abstract reservar<T>(reservationTime: Date): IAgenda<T>
}
