import { exceedAllExpData } from "../../mockData/woman.js";
import { exceedAllExpTemplate } from "../templates/womanTemplate.js";

const initWoman = (woman) => {
    woman.insertAdjacentHTML("beforeend", exceedAllExpTemplate(exceedAllExpData));
};

export default initWoman;