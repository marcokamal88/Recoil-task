import FacebookLogin from "react-facebook-login";
export default function FacebookButton() {
  const componentClicked = (data) => {
    console.log(`data is : ${data}`);
  };
  const responseFacebook = (res) => {
    console.log(res);
  };
  return (
    <FacebookLogin
      appId="1088597931155576"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
    />
  );
}
