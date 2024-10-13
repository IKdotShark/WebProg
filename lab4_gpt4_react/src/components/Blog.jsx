import { squaresData } from "../mockData/blogData";

const { blogHeader, squares } = squaresData;

// Header component
export const BlogHeader = ({ header }) => (
  <h1 className="squares_header">{header}</h1>
);

// Single square component
export const Square = ({ imgSrc, date, content, linkText, isSquare1 }) => (
  <div className={isSquare1 ? "square1" : "square2_1"}>
    <img
      className={isSquare1 ? "square1_img" : "square2_1_img"}
      src={imgSrc}
      alt="Square image"
    />
    <div className={isSquare1 ? "large_content_wrapper" : "content_wrapper"}>
      <h5 className={isSquare1 ? "square1_date" : "date"}>{date}</h5>
      <p className={isSquare1 ? "square1_content" : "square2_1_content"}>
        {content}
      </p>
      <a href="#" className="read_full">
        {linkText}
      </a>
    </div>
  </div>
);

// Component to render squares in pairs
export const Squares = ({ squares }) => {
  const square1 = squares[0];

  return (
    <section className="squares">
      {/* First square (square1) */}
      <Square
        imgSrc={square1.imgSrc}
        date={square1.date}
        content={square1.content}
        linkText={square1.linkText}
        isSquare1={true}
      />

      {/* Render square pairs */}
      {squares.slice(1).reduce((acc, square, index) => {
    const groupIndex = Math.floor(index / 2); // Определяем, в какую группу попадет текущий элемент
    if (!acc[groupIndex]) {
        // Если группы еще не существует, создаем ее
        acc[groupIndex] = [];
    }
    // Добавляем элемент в соответствующую группу
    acc[groupIndex].push(
        <div key={index} className={`square${groupIndex + 2}_${(index % 2) + 1}`}>
            <Square
                imgSrc={square.imgSrc}
                date={square.date}
                content={square.content}
                linkText={square.linkText}
                isSquare1={false}
            />
        </div>
    );
    return acc;
}, []).map((group, groupIndex) => (
    <div key={groupIndex} className={`square${groupIndex + 2}`}>
        {group}
    </div>
      ))}
    </section>
  );
};

// Main Blog component
const Blog = () => {
  return (
    <>
      <BlogHeader header={blogHeader} />
      <Squares squares={squares} />
    </>
  );
};

export default Blog;