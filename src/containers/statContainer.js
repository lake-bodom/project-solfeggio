import Statistics from "../components/header/stat/Stat";
import { connect } from "react-redux";

const mapStateToProps = ({ statistics }) => ({
  stat: statistics
});

export default connect(mapStateToProps)(Statistics);
