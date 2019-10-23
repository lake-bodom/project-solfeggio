import ClearSettings from "../components/clearSettings/ClearSettings";
import { connect } from "react-redux";

import { actionApplicationSetInitialState } from "../store/actions/applicationActions";

const setInitialState = actionApplicationSetInitialState;

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setInitialState
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearSettings);
