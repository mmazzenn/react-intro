import React, { useEffect, useState } from 'react';
import style from "./Contact.module.css"

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact';
  }, []);

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [labelPos, setLabelPos] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: ""
  });

  useEffect(() => {
    setLabelPos({
      userName: userName ? style.transformLabel : "",
      userAge: userAge ? style.transformLabel : "",
      userEmail: userEmail ? style.transformLabel : "",
      userPassword: userPassword ? style.transformLabel : ""
    });
  }, [userName, userAge, userEmail, userPassword]);

  return (
    <div className={`${style.contact} main`}>
      <div className="container">
        <h2 className='text-uppercase mb-3 fs-1 fw-bolder text-center'>Contact Section</h2>
        <div className={`star-shape ${style.contactStar} mb-4 mx-auto text-center`}>
          <span><i className='fa-solid fa-star'></i></span>
        </div>
        <form action="" className={`${style.formBox} p-3 mx-auto mt-5`}>
          <label htmlFor="userName" className={`position-relative ${labelPos.userName}`}>User Name:</label>
          <input value={userName} id="userName" type="text" placeholder="UserName" name="userName" className="form-control border-0 border-bottom py-3 position-relative" onChange={(e) => setUserName(e.target.value)} />
          <label htmlFor="userAge" className={`position-relative ${labelPos.userAge}`}>User Age:</label>
          <input value={userAge} id="userAge" type="number" placeholder="UserAge" name="userAge" className="form-control border-0 border-bottom py-3 position-relative" onChange={(e) => setUserAge(e.target.value)} />
          <label htmlFor="userEmail" className={`position-relative ${labelPos.userEmail}`}>User Email:</label>
          <input value={userEmail} id="userEmail" type="email" placeholder="UserEmail" name="userEmail" className="form-control border-0 border-bottom py-3 position-relative" onChange={(e) => setUserEmail(e.target.value)} />
          <label htmlFor="userPassword" className={`position-relative ${labelPos.userPassword}`}>User Password:</label>
          <input value={userPassword} id="userPassword" type="password" placeholder="UserPassword" name="userPassword" className="form-control border-0 border-bottom py-3 position-relative" onChange={(e) => setUserPassword(e.target.value)} />
          <button onClick={(e) => e.preventDefault()} className={`btn ${style.messageBtn} mt-5 py-2 text-white`}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
