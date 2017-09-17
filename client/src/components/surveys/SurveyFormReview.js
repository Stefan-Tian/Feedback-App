import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import formFields from "./formFields";
import * as actions from "../../actions";

// the history object allow me to navigate to react routes
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <div>Please confirm your entries</div>
      {reviewFields}
      <button
        className="yellow darken-1 btn waves-effect waves-light"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green lighten-1 btn right waves-effect waves-light"
      >
        Confirm
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
} // map it for me to use in SurveyFormReview component

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
