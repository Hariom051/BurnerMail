import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./footer";
// import FileSaver from "file-saver";
import gif from "./check1.gif";

const Mail = () => {
  const [randomemail, setrandomemail] = useState("");
  const [refresh, setrefresh] = useState(0);
  // const [getMessages, setgetMessages] = useState([]);
  const [getMessage, setgetMessage] = useState({});
  // const [check, setcheck] = useState(true);
  const [sahi, setsahi] = useState(false);
  const [domain, setdomain] = useState();
  const [username, setusername] = useState();

  useEffect(() => {
    const button = document.getElementById("emailrefresh1");
    button.innerHTML = "Refreshed &nbsp;";
    button.style.backgroundColor = "#099c11c4";
    button.style.color = "white";
    button.style.borderColor = "green";

    const image = document.createElement("img");
    image.setAttribute("id", "email2");
    image.src = gif;
    image.style.height = "20px";
    image.style.width = "20px";
    image.style.borderRadius = "10px";
    button.appendChild(image);
    setTimeout(() => {
      button.innerHTML = "Refresh&nbsp;";
      button.style.removeProperty("background-color");
      button.style.removeProperty("color");
      button.style.removeProperty("border-color");
      const image = document.createElement("img");
      image.src =
        "https://img.icons8.com/material-outlined/24/null/available-updates.png";
      image.style.height = "25px";
      image.style.width = "25px";
      image.setAttribute("alt", " ");
      button.appendChild(image);
    }, 2000);

    const fn = () => {
      const endpointsforrandomemail =
        "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1";
      axios
        .get(endpointsforrandomemail)
        .then((res) => {
          setrandomemail(res.data[0]);
        })
        .catch((err) => {
          // console.log(err);
        });
    };

    fn();
  }, [refresh]);

  const copy = () => {
    navigator.clipboard.writeText(randomemail).then(
      function () {
        // console.log("Async: Copying to clipboard was successful!");

        // notifysuccess("Copied");
        const button = document.getElementById("copybutton");
        button.innerHTML = "Copied &nbsp;";
        button.style.backgroundColor = "#099c11c4";
        button.style.color = "white";
        const image = document.createElement("img");
        image.setAttribute("id", "gif");
        image.src = gif;
        image.style.height = "20px";
        image.style.width = "20px";
        image.style.borderRadius = "10px";
        button.appendChild(image);
        setTimeout(() => {
          button.innerHTML = "Copy";
          button.style.removeProperty("background-color");
          button.style.removeProperty("color");
          const image = document.createElement("img");
          image.src = "https://img.icons8.com/windows/32/null/clone-figure.png";
          image.style.height = "25px";
          image.style.width = "25px";
          image.setAttribute("alt", " ");
          button.appendChild(image);
        }, 2000);
      },
      function (err) {
        // console.error("Async: Could not copy text: ", err);
      }
    );
  };
  // const notifysuccess = (print) => {
  //   toast.success(print, {
  //     position: "top-center",
  //     autoClose: 1000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: false,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "colored",
  //   });
  // };
  const refreshed = () => {
    setrefresh(refresh + 1);
    // console.log("sgdgd",refresh);
  };
  const getmsgrefreshed = () => {
    const button = document.getElementById("emailrefresh");
    button.innerHTML = "Refreshed &nbsp;";
    button.style.backgroundColor = "#099c11c4";
    button.style.color = "white";
    button.style.borderColor = "green";

    const image = document.createElement("img");
    image.setAttribute("id", "email1");
    image.src = gif;
    image.style.height = "20px";
    image.style.width = "20px";
    image.style.borderRadius = "10px";
    button.appendChild(image);
    setTimeout(() => {
      button.innerHTML = "Refresh&nbsp;";
      button.style.removeProperty("background-color");
      button.style.removeProperty("color");
      button.style.removeProperty("border-color");
      const image = document.createElement("img");
      image.src =
        "https://img.icons8.com/material-outlined/24/null/available-updates.png";
      image.style.height = "25px";
      image.style.width = "25px";
      image.setAttribute("alt", " ");
      button.appendChild(image);
    }, 2000);
    let domain = randomemail.slice(randomemail.indexOf("@") + 1);
    let username = randomemail.slice(0, randomemail.indexOf("@"));
    setusername(username);
    setdomain(domain);
    axios
      .get(
        `https://www.1secmail.com/api/v1/?action=getMessages&login=${username}&domain=${domain}`
      )
      .then((res) => {
        if (JSON.stringify(res.data) === "[]") {
          // console.log(res.data)
          setsahi(false);

          // setgetMessage({});
        } else {
          // setgetMessages(res.data);
          axios
            .get(
              `https://www.1secmail.com/api/v1/?action=readMessage&login=${username}&domain=${domain}&id=${res.data[0].id}`
            )
            .then((res) => {
              setgetMessage(res.data);
              setsahi(true);
            })
            .catch((err) => {
              // console.log("get single msg error", err);
            });
        }
      })
      .catch((err) => {
        console.log("get all msg error", err);
      });
  };
  return (
    <>
      <h1 className="bg-dark text-white text-center">
        <img
          src="https://img.icons8.com/fluency/48/null/composing-mail.png"
          alt=""
        />{" "}
        Burner Mail
      </h1>

      <div
        className="p-3 mb-5 "
        style={{
          overflow: "auto",
          backgroundColor: "#cff4fc",
          borderLeft: "10px solid rgb(28 201 235",
          marginLeft: "15px",
          marginRight: "15px",
        }}
      >
        <p
          className="text-center"
          style={{
            fontFamily: "roboto",
            fontSize: "22px",
            fontWeight: "600",
            borderRadius: "1px",
            borderStyle: "dashed",
            borderColor: "blue",
            overflow: "auto",
          }}
        >
          <img
            style={{ height: "28px", width: "28px" }}
            src="https://img.icons8.com/fluency/48/null/composing-mail.png"
            alt=""
          />{" "}
          {randomemail}
        </p>{" "}
        <button id="copybutton" className="btn btn-outline-info" onClick={copy}>
          {" "}
          Copy
          <img
            style={{ height: "25px", width: "25px" }}
            id="copy"
            src="https://img.icons8.com/windows/32/null/clone-figure.png"
            alt=" "
          />
        </button>
        <button
          id="emailrefresh1"
          style={{ float: "right" }}
          className="btn btn-outline-danger"
          onClick={refreshed}
        >
          Refresh{" "}
          <img
            src="https://img.icons8.com/material-outlined/24/null/available-updates.png"
            alt=""
          />
        </button>
      </div>
      {/* inbox started */}
      <div
        className="p-3"
        style={{
          overflow: "auto",
          backgroundColor: "#cff4fc",
          borderLeft: "10px solid rgb(28 201 235",
          marginLeft: "15px",
          marginRight: "15px",
          height: "71vh",
          position: "relative",
          top: "-42px",
        }}
      >
        <span style={{ fontFamily: "fantasy", fontSize: "20px" }}>
          <img
            style={{ height: "50px", width: "50px" }}
            src="https://img.icons8.com/clouds/100/null/mailbox-plane.png"
            alt=""
          />{" "}
          &nbsp; Inbox
        </span>

        <button
          id="emailrefresh"
          style={{ float: "right" }}
          className="btn btn-outline-danger"
          onClick={getmsgrefreshed}
        >
          Refresh{" "}
          <img
            id="emailimage"
            src="https://img.icons8.com/material-outlined/24/null/available-updates.png"
            alt=""
          />
        </button>
        <hr />
        <ToastContainer></ToastContainer>
        {sahi ? (
          <div>
            <div className="row">
              <div>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "roboto",
                  }}
                >
                  Time:
                </span>{" "}
                {getMessage?.date}
              </div>
              <div>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "roboto",
                  }}
                >
                  From:
                </span>{" "}
                {getMessage?.from}
              </div>
              <div>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "roboto",
                  }}
                >
                  Subject:
                </span>{" "}
                {getMessage?.subject}
              </div>
              <div class="container">
                <div class="row">
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      fontFamily: "roboto",
                    }}
                    class="col-2"
                  >
                    Body:
                  </div>
                  <div
                    style={{
                      fontSize: "17px",

                      fontFamily: "roboto",
                    }}
                    className="col-10"
                  >
                    {getMessage?.textBody}
                  </div>
                </div>
              </div>
              <div className="col-4">
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "roboto",
                  }}
                >
                  Attachments:
                </span>
              </div>
              <div className="col-8">
                {" "}
                {getMessage?.attachments?.map((e, index) => {
                  return (
                    <div key={index}>
                      {e.filename}&nbsp;
                      <img
                        style={{ height: "22px", width: "22px" }}
                        onClick={() => {
                          // DownloadAttachment(getMessage.id, e.filename);
                          alert("This feature is in progress!!!");
                        }}
                        src="https://img.icons8.com/dotty/80/null/downloading-updates.png"
                        alt=""
                      />{" "}
                      {(e.size / 10 ** 6).toFixed(4)}MB
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "500",
                borderLeft: "10px solid rgb(240 141 5)",
                backgroundColor: "rgb(255 221 174)",
                padding: "10px 20px",
              }}
            >
              {" "}
              Click on Inbox refresh button after 5 to 10 seconds 
            </div>
            <br />
            <div
              style={{
                fontSize: "15px",
                fontWeight: "500",
                borderLeft: "10px solid rgb(240 141 5)",
                backgroundColor: "rgb(255 221 174)",
                padding: "10px 20px",
              }}
            >
              * Temp mail services provide temporary email addresses that can be
              used for a short period of time and then discarded. This helps to
              avoid spam and unwanted emails.
              <br />* Temp mail services provide a higher level of privacy and
              security by keeping personal information and email addresses
              anonymous
            </div>
          </>
        )}
      </div>

      <Footer></Footer>
    </>
  );
};

export default Mail;
