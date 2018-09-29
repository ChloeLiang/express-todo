import React from 'react';

class FormCategory extends React.Component {
  render() {
    const categories = this.props.categories.map(category => {
      if (category.toLowerCase() === this.props.selected) {
        return <option key={category} value={category} selected>{category}</option>;
      }
      return <option key={category} value={category}>{category}</option>;
    });

    return (
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select className="form-control" name="category" id="category">
          {categories}
        </select>
      </div>
    );
  }
}

export default FormCategory;