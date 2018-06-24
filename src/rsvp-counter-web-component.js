/* we need to include the component below to make sure to 
  to make web components work with Babel
*/
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";

//https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
class RsvpCounter extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    var template = document.getElementById("rsvp-counter-tmpl").content;
    // Element functionality written in here
    // Create a shadow root
    var shadow = this.attachShadow({ mode: "open" });
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");

    var info = document.createElement("p");
    info.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    var text = this.textContent; //this.getAttribute("text");
    console.log(text);
    info.textContent = text;

    var style = document.createElement("style");
    style.textContent = `
      .wrapper {
        border: 1px solid black;
      }`;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    //wrapper.appendChild(info);
    wrapper.appendChild(template.cloneNode(true));
  }
}

customElements.define("rsvp-counter", RsvpCounter);
