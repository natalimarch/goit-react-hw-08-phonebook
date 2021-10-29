import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={5000}
    />
  );
};

export default Spinner;
