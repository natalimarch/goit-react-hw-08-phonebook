import React, { useRef } from "react";
import { generate } from "shortid";
import { useState } from "react";
import styles from "./Form.module.css";
import FormData from "../Phonebook/formData";
import { useSelector, useDispatch } from "react-redux";
import { addToPhonebook } from "../../redux/contacts/operations";
import { getContacts } from "../../redux/contacts/selectors";

const Form = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputIdRef = useRef(generate());
  const numberInputIdRef = useRef(generate());

  const addToContact = () => {
    const isAvailableName = contacts.find((contact) => contact.name === name);
    const isAvailableNumber = contacts.find(
      (contact) => contact.number === number
    );
    if (isAvailableName) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (isAvailableNumber) {
      alert(`${number} is already in contacts`);
      return;
    }
    const action = addToPhonebook({ name, number });
    dispatch(action);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToContact();
    // onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <div className={styles.FormContainer}>
        <div className={styles.Name}>
          <label className={styles.Label} htmlFor={nameInputIdRef.current}>
            Name
            <input
              {...FormData.name}
              className={styles.Input}
              required
              value={name}
              onChange={changeName}
              id={nameInputIdRef.current}
            />
          </label>
        </div>
        <div className={styles.Tel}>
          <label className={styles.Label} htmlFor={numberInputIdRef.current}>
            Number
            <input
              {...FormData.number}
              className={styles.Input}
              required
              value={number}
              onChange={changeNumber}
              id={numberInputIdRef.current}
            />
          </label>
        </div>
        <button type="submit" className={styles.NameBtn}>
          Add contact
        </button>
      </div>
    </form>
  );
};

export default Form;
// class Form extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   nameInputId = generate();
//   numberInputId = generate();

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: "",
//       number: "",
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     const { handleSubmit, handleChange } = this;
//     return (
//       <form className={styles.Form} onSubmit={handleSubmit}>
//         <div className={styles.FormContainer}>
//           <div className={styles.Name}>
//             <label className={styles.Label} htmlFor={this.nameInputId}>
//               Name
//               <input
//                 {...FormData.name}
//                 className={styles.Input}
//                 required
//                 value={name}
//                 onChange={handleChange}
//                 id={this.nameInputId}
//               />
//             </label>
//           </div>
//           <div className={styles.Tel}>
//             <label className={styles.Label} htmlFor={this.numberInputId}>
//               Number
//               <input
//                 {...FormData.number}
//                 className={styles.Input}
//                 required
//                 value={number}
//                 onChange={handleChange}
//                 id={this.numberInputId}
//               />
//             </label>
//           </div>
//           <button type="submit" className={styles.NameBtn}>
//             Add contact
//           </button>
//         </div>
//       </form>
//     );
//   }
// }
