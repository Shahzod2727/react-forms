import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // Name

  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    isValid: enteredNameIsValid,
    InputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  // Email
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    isValid: enteredEmailIsValid,
    InputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  // Email

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      {/* Name */}
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          type="text"
          id="name"
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      {/* Email */}

      <div className={emailInputClasses}>
        <label htmlFor="name">Your E-Mail</label>
        <input
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type="email"
          id="email"
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
