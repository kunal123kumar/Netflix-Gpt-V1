import LoginFrom from"./LoginFrom"
import Information from "./Information"

const Login = () => {
  return (
    <div className="relative">
      <div>
        <img
          className="bg-black/80"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.jpg"
          alt=" Background"
        />
      </div>
      <div className="absolute top-5 left-20">
      <img className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
    </div>
      <LoginFrom />
      <Information />
    </div>
  );
};

export default Login;
