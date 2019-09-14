import Menu from "../components/menu/Menu";
import { connect } from "react-redux";

import { actionMenuAction } from "../store/actions/applicationActions";

const mapStateToProps = ({ application }) => ({
  menuIsOpen: application.menuIsOpen
});

const mapDispatchToProps = {
  actionMenuAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
