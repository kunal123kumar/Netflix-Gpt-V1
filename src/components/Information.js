import lang from "../utils/LangauageConstant.js";
import { useSelector } from "react-redux";
const Infomation = () => {
   const currentLanguage = useSelector((state) => state.config.lang);
  return (
    <div className="bg-black p-10">
      <h1>Questions? Call 000-800-919-1743 (Toll-Free)</h1>
      <div className="flex warp text-white">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-400 text-sm">
          <li className="hover:underline cursor-pointer">{lang[currentLanguage]?.FAQ || "FAQ"}</li>
          <li className="hover:underline cursor-pointer">{lang[currentLanguage]?.HelpCenter || "Help Center"}</li>
          <li className="hover:underline cursor-pointer">{lang[currentLanguage]?.Account || "Account"}</li>
          <li className="hover:underline cursor-pointer">{lang[currentLanguage]?.MediaCenter || "Media Center"}</li>
          <li className="hover:underline cursor-pointer">{lang[currentLanguage]?.Privacy || "Privacy"}</li>
          <li className="hover:underline cursor-pointer">
            {lang[currentLanguage]?.ContactUs || "Contact Us"}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Infomation;
