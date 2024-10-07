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
    if (squares.length === 0) return '';
  
    // Первая карточка (square1)
    const square1Template = createSquareTemplate(squares[0], true);
  
    // Генерация остальных карточек через цикл
    let otherSquaresTemplate = '';
    for (let i = 1; i < squares.length; i += 2) {
      otherSquaresTemplate += `
        <div class="square${i + 1}">
          <div class="square${i + 1}_1">
            ${createSquareTemplate(squares[i])}
          </div>
          <div class="square${i + 1}_2">
            ${createSquareTemplate(squares[i + 1] ? squares[i + 1] : '')}
          </div>
        </div>
      `;
    }
  
    return `
      <section class="squares">
        ${square1Template}
        ${otherSquaresTemplate}
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
  
