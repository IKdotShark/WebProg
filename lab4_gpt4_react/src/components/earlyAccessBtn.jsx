import { earlyAccessBtn } from '../mockData/earlyAccessBtnData';

const EarlyAccess = ({ text }) => {
  return <div className="req_text">{text}</div>;
};

const EarlyAccessDescription = ({ text }) => {
  return <div className="req_text2">{text}</div>;
};

const Button = ({ title }) => {
  return (
    <a href="#">
      <button className="req_button" style={{ color: "white" }}>
        {title}
      </button>
    </a>
  );
};

const EarlyAccessButton = () => {
  const { earlyAccess, earlyAccessDescription, btn } = earlyAccessBtn;
  
  return (
    <div className="req_square">
      <div className="req_right">
        <EarlyAccess text={earlyAccess} />
        <EarlyAccessDescription text={earlyAccessDescription} />
      </div>
      <div className="req_left">
        {btn.map((buttonData, index) => (
          <Button key={index} {...buttonData} />
        ))}
      </div>
    </div>
  );
};

export default EarlyAccessButton;
