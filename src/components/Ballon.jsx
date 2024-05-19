import "assets/base.css";

export const Ballon = ({ children, keyword, text, title, button }) => {
  return (
    <div className="ballon_wrap bg-gray-100 py-4 px-32 cursor-pointer hover:bg-gray-200">
      <div className="w-36 shadow-md shadow-gray-400">{children}</div>
      {/* <div className="keyword_wrap">
          <span># {keyword}</span>
        </div>
        <div className="title_wrap">{title}</div>
        <div className="ballon">{text}</div>
        <div className="btn_wrap">{button}</div> */}
    </div>
  );
};
