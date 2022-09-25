import React from "react";

import "./Form.css";

const Form = ({
  onConfirm,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  handleSubmit,
}) => {
  return (
    <div className="form__container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form__name">
          <label>CARDHOLDER NAME</label>
          <input
            name="name"
            type="text"
            maxLength="32"
            value={values.name}
            placeholder="e.g. Jane Appleseed"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? "form__error" : ""}
          />
          {errors.name && touched.name && (
            <p className="form__error-pgraph">{errors.name}</p>
          )}
        </div>
        <div className="form__number">
          <label>CARD NUMBER</label>
          <input
            name="number"
            type="text"
            maxLength="16"
            value={values.number}
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.number && touched.number ? "form__error" : ""}
          />
          {errors.number && touched.number && (
            <p className="form__error-pgraph">{errors.number}</p>
          )}
        </div>
        <div className="form__combined-section">
          <div className="form__expire">
            <label>EXP. DATE (MM/YY)</label>
            <div className="form__expire-input-container">
              <div>
                <input
                  name="month"
                  type="text"
                  maxLength="2"
                  value={values.month}
                  placeholder="MM"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.month && touched.month ? "form__error" : ""}
                />
                {errors.month && touched.month && (
                  <p className="form__error-pgraph">{errors.month}</p>
                )}
              </div>
              <div>
                <input
                  name="year"
                  type="text"
                  maxLength="2"
                  value={values.year}
                  placeholder="YY"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.year && touched.year ? "form__error" : ""}
                />
                {errors.year && touched.year && (
                  <p className="form__error-pgraph">{errors.year}</p>
                )}
              </div>
            </div>
          </div>
          <div className="form__security">
            <label>CVC</label>
            <input
              name="cvc"
              type="text"
              maxLength="3"
              value={values.cvc}
              placeholder="e.g. 123"
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.cvc && touched.cvc ? "form__error" : ""}
            />
            {errors.cvc && touched.cvc && (
              <p className="form__error-pgraph">{errors.cvc}</p>
            )}
          </div>
        </div>
        <button type="submit" className="form__button">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
