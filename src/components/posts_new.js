import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPost } from '../actions/index';

 class PostsNew extends Component {
   renderField(field) {
     const { meta : {touched, error} } = field;
     const className = `form-group ${touched && error ? 'has-danger' : ''}`
     return (
        <div className={className}>
         <label>{field.label}</label>
         <input
           className="form-control"
           type="text"
           {...field.input} />
         <div className="text-help">
           {field.meta.touched ? field.meta.error : ""}
         </div>
       </div>
     )
   }

   onSubmit(values) {
     this.props.createPost(values, () => {
       this.props.history.push("/");
     });
   }


    render() {
      const { handleSubmit } = this.props;

      return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="title"
            label="Title of post"
            component={this.renderField}
          />
          <Field
            name="categories"
            label="Categories"
            component={this.renderField}
          />
          <Field
            name="content"
            label="Post Content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Save</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      );
    }
  }

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.categories) {
    errors.categories = 'Enter categories';
  }

  if (!values.content) {
    errors.content = 'Enter a content';
  }

  return errors;
}


 export default reduxForm({
     validate,
     form: "PostsNewForm"
 })(
   connect(null, { createPost })(PostsNew)
 );
