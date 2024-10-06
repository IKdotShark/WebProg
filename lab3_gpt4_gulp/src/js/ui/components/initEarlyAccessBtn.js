import { earlyAccessBtn } from "../../mockData/earlyAccessBtn.js";
import { earlyAccessBtnTemplate } from "../templates/earlyAccessBtnTemplate.js";

const initEarlyAccessBtn = (earlyAccess) => {
  earlyAccess.insertAdjacentHTML("beforeend", earlyAccessBtnTemplate(earlyAccessBtn));
};

export default initEarlyAccessBtn;
