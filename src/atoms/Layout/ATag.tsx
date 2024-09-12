const ATag = ({ style, text, label, href }: { style: string; text: string, label:string, href?:string }) => {
    return <a href={href} aria-label={label} className={style}>{text}</a>;
  };
  
  export default ATag;
  