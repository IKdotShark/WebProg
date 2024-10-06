export const createHeaderTemplate = (header) => {
    return `
      <h1 class="squares_header">
        ${header}
      </h1>
    `;
  };
  
  export const createSquareTemplate = ({ imgSrc, date, content, linkText }, isSquare1 = false) => {
    return `
      <div class="${isSquare1 ? 'square1' : 'square2_1'}">
        <img class="${isSquare1 ? 'square1_img' : 'square2_1_img'}" src="${imgSrc}" alt="Square image">
        <div class="${isSquare1 ? 'large_content_wrapper' : 'content_wrapper'}">
          <h5 class="${isSquare1 ? 'square1_date' : 'date'}">${date}</h5>
          <p class="${isSquare1 ? 'square1_content' : 'square2_1_content'}">${content}</p>
          <a href="#" class="read_full">${linkText}</a>
        </div>
      </div>
    `;
  };
  
  export const createSquaresTemplate = (squares) => {
    // Первую карточку (square1)
    const square1Template = createSquareTemplate(squares[0], true);
  
    // Остальные карточки (square2 и square3)
    const square2Template = `
      <div class="square2">
        <div class="square2_1">
          ${createSquareTemplate(squares[1])}
        </div>
        <div class="square2_2">
          ${createSquareTemplate(squares[2])}
        </div>
      </div>
    `;
  
    const square3Template = `
      <div class="square3">
        <div class="square3_1">
          ${createSquareTemplate(squares[3])}
        </div>
        <div class="square3_2">
          ${createSquareTemplate(squares[4])}
        </div>
      </div>
    `;
  
    return `
      <section class="squares">
        ${square1Template}
        ${square2Template}
        ${square3Template}
      </section>
    `;
  };
  
  export const blogTemplate = (header, squares) => {
    const headerTemplate = createHeaderTemplate(header);
    const squaresTemplate = createSquaresTemplate(squares);
  
    return `
      ${headerTemplate}
      ${squaresTemplate}
    `;
  };
  