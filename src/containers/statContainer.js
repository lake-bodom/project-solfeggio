import Statistics from "../components/header/stat/Stat";
import { connect } from "react-redux";

const mapStateToProps = ({ statistics }) => ({
  stat: statistics
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
