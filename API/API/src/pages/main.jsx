import PropTypes from "prop-types";
export default function Main({ name }) {
  return (
    <div className="main-page">
      <h1>Main page</h1>
      <p>name: {name}</p>
    </div>
  );
}

Main.propTypes = {
  name: PropTypes.string.isRequired,
};
