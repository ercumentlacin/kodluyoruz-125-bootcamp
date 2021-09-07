import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../store";
import { createForm } from "../../store/slices/formsSlice";

const initialState = {
  title: "",
  description: ""
};

const Form = () => {
  const [formTexts, setFormTexts] = useState(initialState);
  const formRef = useRef(null);
  const dispatch = useAppDispatch();

  const onFormChange = ({ target }) => {
    setFormTexts((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const formOnSubmit = (e) => {
    e.preventDefault();

    if (!formTexts.title.length || !formTexts.description.length) {
      formRef.current.classList.add("was-validated");
      return false;
    }

    dispatch(createForm(formTexts));
    setFormTexts(initialState);
  };

  return (
    <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 pt-5">
      <h1> Destek Formu </h1>
      <p>
        Bahsedilmesini istediğiniz yada eksikliği hissettiğiniz konuları buradan
        belirtebilirsiniz.
      </p>

      <form
        ref={formRef}
        className="needs-validation"
        onSubmit={formOnSubmit}
        noValidate
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Konu
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Konuyu giriniz"
            name="title"
            value={formTexts.title}
            onChange={onFormChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Konu Açıklaması
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            value={formTexts.description}
            onChange={onFormChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
