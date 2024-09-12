const PTag = ({ style, text }: { style: string; text: string }) => {
  return <p className={style}>{text}</p>;
};

export default PTag;
