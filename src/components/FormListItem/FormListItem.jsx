import React from "react";

const FormListItem = (props) => {
  const { title, description, id } = props;

  const isCollapsed = id === "1" ? "not-collapsed" : "collapsed";
  const isShow = id === "1" ? "show" : "collapse";

  return (
    <div className="accordion-item bg-secondary bg-opacity-50 border border-1 border-dark">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isCollapsed} bg-secondary text-white`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapse-${id}`}
          aria-expanded="true"
          aria-controls={`panelsStayOpen-collapse-${id}`}
        >
          <h5>{title}</h5>
        </button>
      </h2>
      <div
        id={`panelsStayOpen-collapse-${id}`}
        className={`accordion-collapse text-start ${isShow}`}
        aria-labelledby="panelsStayOpen-headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{description}</div>
      </div>
    </div>
  );
};

export default FormListItem;
