import React, { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { getForms } from "../../store/slices/formsSlice";
import FormListItem from "../FormListItem";

const FormList = () => {
  const dispatch = useAppDispatch();
  const forms = useAppSelector((state) => state.forms);
  const { data, loading, error, local } = forms;

  useEffect(() => {
    dispatch(getForms());
  }, [dispatch, local]);

  function renderFormListItems() {
    if (loading)
      return (
        <Fragment>
          <p className="placeholder-glow">
            <span
              style={{ height: "3rem" }}
              className="placeholder col-12"
            ></span>
          </p>

          <p className="placeholder-wave">
            <span
              style={{ height: "2rem" }}
              className="placeholder col-12"
            ></span>
          </p>
        </Fragment>
      );

    if (error) return "Formlar yüklenirken bir hatayla karşılaşıldı...";

    if (!data.length) return "Henüz doldurulmuş bir form bulunmamaktadır.";

    return data.map((form) => <FormListItem key={form.id} {...form} />);
  }

  return (
    <div className="col-sm-8 offset-sm-2 mt-5">
      <div className="accordion text-center" id="accordionExample">
        {renderFormListItems()}
      </div>
    </div>
  );
};

export default FormList;
