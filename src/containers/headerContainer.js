import Header from "../components/header/Header";
import { connect } from "react-redux";

const mapStateToProps = ({ statistics }) => ({
  statistics
});

export default connect(mapStateToProps)(Header);
