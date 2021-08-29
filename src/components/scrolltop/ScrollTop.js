import React, {useEffect} from "react";
import "./scrolltop.scss";

export default function ScrollTop() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, [document.body.scrollTop || document.documentElement.scrollTop]);

  const scrollFunction = () => {
    let mybutton = document.getElementById("myBtnScroll")
    if(mybutton) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }

  const topFunction = () => {
    console.log("run scroll top")
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button onClick={() => topFunction()} id="myBtnScroll" title="Go to top">
      <i style={{color: '#3A82F6', fontSize: '50px'}} class="fa fa-angle-up"></i>
    </button>
  );
}
