import ClearSettings from "../components/clearSettings/ClearSettings";
import { connect } from "react-redux";

import { actionApplicationSetInitialState, actionSetModalWindowFlag, actionSetDataClearingFlag } from "../store/actions/applicationActions";

const setInitialState = actionApplicationSetInitialState;

const mapStateToProps = ({ application }) => ({
  modalWindowFlag: application.modalWindowFlag,
  dataIsClearing: application.dataIsClearing
});

const mapDispatchToProps = {
  setInitialState,
  actionSetModalWindowFlag,
  actionSetDataClearingFlag
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearSettings);
