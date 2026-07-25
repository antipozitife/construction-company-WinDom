import house1 from "../../img/1floor.jpg";
import house2 from "../../img/1floor(1).jpg";
import house3 from "../../img/1floor(2).jpg";
import house4 from "../../img/1floor(3).jpg";
import house5 from "../../img/1floor(4).svg";
import house6 from "../../img/1floor(5).jpg";
import house7 from "../../img/2floor.jpg";
import house8 from "../../img/2floor(1).jpg";
import house9 from "../../img/2floor(2).jpg";
import house10 from "../../img/2floor(3).jpg";
import house11 from "../../img/2floor(4).jpg";
import house12 from "../../img/2floor(5).jpg";
import house13 from "../../img/townhouse.jpg";
import house14 from "../../img/townhouse(1).jpg";
import house15 from "../../img/townhouse(2).jpg";
import house16 from "../../img/townhouse(3).jpg";
import house17 from "../../img/townhouse(4).jpg";
import house18 from "../../img/townhouse(5).jpg";

export type House = {
  id: number;
  image: string;
  location: string;
};

export const houses: House[] = [
  { id: 1, location: "Усады Village", image: house1 },
  { id: 7, location: "Изумрудный Village", image: house2 },
  { id: 3, location: "IQ CLUB", image: house3 },
  { id: 11, location: "IQ CLUB", image: house4 },
  { id: 4, location: "Усады Village", image: house5 },
  { id: 13, location: "Изумрудный Village", image: house6 },
  { id: 10, location: "Усады Village", image: house7 },
  { id: 14, location: "Изумрудный Village", image: house8 },
  { id: 2, location: "IQ CLUB", image: house9 },
  { id: 9, location: "IQ CLUB", image: house10 },
  { id: 16, location: "Усады Village", image: house11 },
  { id: 6, location: "Изумрудный Village", image: house12 },
  { id: 12, location: "Изумрудный Village", image: house13 },
  { id: 18, location: "Изумрудный Village", image: house14 },
  { id: 15, location: "IQ CLUB", image: house15 },
  { id: 5, location: "IQ CLUB", image: house16 },
  { id: 8, location: "Усады Village", image: house17 },
  { id: 17, location: "Усады Village", image: house18 },
];
