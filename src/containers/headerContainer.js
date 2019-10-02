import Header from "../components/header/Header";
import { connect } from "react-redux";

const mapStateToProps = ({ application }) => ({
	mode: application.mode,
	stat: application.stat
});

export default connect(mapStateToProps)(Header);
