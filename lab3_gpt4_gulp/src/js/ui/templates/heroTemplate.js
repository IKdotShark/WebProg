export const createHeaderTemplate = (header) => {
  return `
    <h1 class="left__header">
      ${header}
    </h1>
  `;
};

export const createDescriptionTemplate = (description) => {
  return `
    <p class="left__description">
      ${description}
    </p>
  `;
};

export const createInputTemplate = ({ type, title }) => {
  switch (type) {
    case "input":
      return `
        <input type="text" value="" placeholder="${title}" />
      `;

    case "button":
      return `
          <button class="cta_buttons__signin btn primary-btn">
            ${title}
          </button>
      `;

    default:
      return ``;
  }
};

export const createInputsTemplate = (ctaButtons) => {
  const ctaButtonsTemplate = ctaButtons
    .map((ctaButton) => createInputTemplate(ctaButton))
    .join("");

  const template = `
    <div class="left__cta_buttons">
        ${ctaButtonsTemplate}
    </div>
  `;

  return template;
};

export const createIllustrationTemplate = ({ src, alt }) => {
  return `
    <img src="${src}" alt="${alt}" />
  `;
};

export const heroTemplate = ({
  heroCtaButtons,
  illustration,
  header,
  description,
}) => {
  const headerTemplate = createHeaderTemplate(header);
  const descriptionTemplate = createDescriptionTemplate(description);
  const buttonsTemplate = createInputsTemplate(heroCtaButtons);
  const illustrationTemplate = createIllustrationTemplate(illustration);

  const resultTemplate = `
    <div class="hero_section__left">
        ${headerTemplate}
        ${descriptionTemplate}
        ${buttonsTemplate}       
    </div>
    <div class="hero_section__right">
        ${illustrationTemplate}
    </div>
    `;

  return resultTemplate;
};

      // <section class="section hero_section">
      //   <div class="hero_section__left">
      //     <h1 class="left__header">
      //       Построим Что&#8209;нибудь Невероятное с GPT&#8209;4 OpenAI
      //     </h1>
      //     <p class="left__description">
      //       Однако кровать для помощи в путешествии неприятна. Не мысли все
      //       осуществляют благословение. Снисхождение ко всему, радость,
      //       изменение бурной привязанности. Вечеринку мы лет на заказ разрешили.
      //     </p>
      //     <div class="left__cta_buttons">
      //       <input type="text" value="" placeholder="Введите Email" />
      //       <button class="cta_buttons__signin btn primary-btn">Начать</button>
      //     </div>
      //     <div class="left__social_approve" style="display: inline-block;">
      //       <img src="./assets/img/Group 81.png">
      //       <span id="people_last_24h">1,600 человек запросило доступ за последние  24 часа</span>
      //     </div>
      //   </div>
      //   <div class="hero_section__right">
      //     <img src="./assets/img/Illustration.svg" alt="gpt3" />
      //   </div>
      // </section>
