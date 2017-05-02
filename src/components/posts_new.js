import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
//import { Link } from 'react-router';

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
       console.log(values);
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
        </form>
      );
    }
//   static contextTypes = {
//     router: PropTypes.object
//   };
//
//   onSubmit(props) {
//     this.props.createPost(props)
//       .then(() => {
//         //blog post has been created. navigate the user to the index
//         //We navigate by calling this..context.router.push with the
//         //new path to navigate to.
//         this.context.router.push('/');
//       });
//   }
//
//   render() {
//     const { fields: { title, categories, content}, handleSubmit } = this.props;
// // it is the same as const handleSubmit = this.props.handleSubmit;
//     return (
//       <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//         <h3>Create A New Post</h3>
//         <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
//           <label>Title</label>
//           <input type="text" className="form-control" {...title} />
//           <div className="text-help">
//             {title.touched ? title.error : ''}
//           </div>
//         </div>
//
//         <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
//           <label>Categories</label>
//           <input type="text" className="form-control" {...categories}/>
//           <div className="text-help">
//             {categories.touched ? categories.error : ''}
//           </div>
//         </div>
//
//         <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
//           <label>Content</label>
//           <textarea className="form-control" {...content}/>
//           <div className="text-help">
//             {content.touched ? content.error : ''}
//           </div>
//         </div>
//
//         <button type="submit" className="btn btn-primary">Save</button>
//         <Link to="/" className="btn btn-danger">Cancel</Link>
//       </form>
//     );
//   }
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
     form: "PostsNewForm",
//     fields: ['title', 'categories', 'content'],
 }/*, null, { createPost }*/)(PostsNew);
