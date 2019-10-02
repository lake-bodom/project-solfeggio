import FreeMode from "../components/freeMode/FreeMode";
import { connect } from "react-redux";

import {
	actionSetMode
} from "../store/actions/applicationActions";

import {
	actionUpdatePianoKeys
} from "../store/actions/pianoActions";

const mapStateToProps = () => ({})

const mapDispatchToProps = {
	actionSetMode,
	actionUpdatePianoKeys
};

export default connect(mapStateToProps, mapDispatchToProps)(FreeMode);
