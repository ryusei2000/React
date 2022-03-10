import React from "react";

export default class Cookies extends React.Component {
  render() {
    if (sessionStorage.getItem("cookies")) {
      return(
        <div>
        </div>
      )
    } else {
      return(
        <div>
          <section id="cookie-policy" aria-labelledby="cookie-policy-heading">
            <div className="cookie">
                <h2 id="cookie-policy-heading" className="visuallyhidden">Cookie Policy</h2>
                <p className="cookie__copy">We use cookies to understand how you use our site and to improve your experience, including personalizing content and to store your content preferences. If you would prefer, you may set your browser to refuse cookies or alert you when cookies are being sent; however, it is possible that some parts of our sites will not function properly if you do so. By continuing to use our sites, you accept our use of cookies and revised
                    Privacy Policy.
                </p>
                <button className="cookie__btn--accept" type="button" id="cookie-policy-btn" onClick={(removeCookies)}>
                  I&nbsp;Accept
                </button>
            </div>
          </section>
        </div>
      )
    }
  }
}

function removeCookies() {
  document.getElementById("cookie-policy").classList.add("gone");
  sessionStorage.setItem("my_value", 'Maintain');
  sessionStorage.setItem("cookies", true);
}
