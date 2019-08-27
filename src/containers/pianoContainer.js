import Piano from "../components/piano/Piano";
import { connect } from "react-redux";

const mapStateToProps = ({ piano }) => ({
  arrOfNotes: piano.arrOfNotes
});

export default connect(mapStateToProps)(Piano);
