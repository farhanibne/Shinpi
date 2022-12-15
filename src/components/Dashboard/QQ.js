import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  storage,
  firestore,
  serverTimestamp,
  human,
} from "../../config/firebase";

import Link from "next/link";
import from "@emailjs/browser";
import Modal from "react-modal";



Modal.setAppElement("#__next");

const customStyles = {
  content: {

    backgroundColor: "#F8FBFD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
  },
  
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};



function QQ({ user }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const form = useRef();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalnote, setModalnote] = useState(false);

  const [modelpop, setModelpop] = useState(false);

  const SubmitDetails = () => {
    if (!title || !body || !image || !tag) {
      return alert("Please fill all the fields");
    }
    var uploadTask = storage.ref().child(`image/${uuidv4()}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progress == "100") return alert("Article posted successfully 🎉")          
      },
      (error) => {
        alert("Error Uploading Image");
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          // setUrl(downloadURL)
          const yotch = downloadURL;

          firestore.collection("articles").add({
            title: title,
            description: body,
            createdAt: serverTimestamp(),
            link: yotch,
            tag: tag,
          });

          setTitle("");
          setBody("");
          setTag("");
        });
      }
    );
    var templateParams = {
      name: "James",
      notes: "Check this out!",
    };

    emailjs
      .send("gmail", "###########", templateParams, "############")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div ref={form} style={{height:'auto',background:'white'}}>
      <center>
        <h1 style={{ fontSize: "45px" }}>Create An Article</h1>
        <br />

        <input
          required
          style={{
            width: "300px",
            height: "40px",
            borderRadius: "5px 5px 0 0 ",
            margin: "15px",
            border: "none",
            padding: "5px",
            borderBottom: "1px solid black",
            background: "transparent",
          }}
          type="text"
          value={title}
          id="title"
          placeholder="Title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          required
          style={{
            width: "300px",
            height: "40px",
            borderRadius: "5px 5px 0 0 ",
            margin: "15px",
            border: "none",
            padding: "5px",
            borderBottom: "1px solid black",
            background: "transparent",
          }}
          type="text"
          value={body}
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <br />



         <div>
          <input
          required
          style={{
            width: "300px",
            height: "40px",
            borderRadius: "5px 5px 0 0 ",
            margin: "15px",
            border: "none",
            padding: "5px",
            borderBottom: "1px solid black",
            background: "transparent",
          }}
          type="text"
          value={tag}
          id="title"
          placeholder="Tags [ eg: for multiple, use spaces and '#' ]"
          name="title"
          autoComplete="off"
          onChange={(e) => setTag(e.target.value)}
        />
       
       
          </div>
        <div className="file-field input-field">
          <div className="btn  blue  ">
            <input
              style={{
                width: "300px",
                height: "40px",
                borderRadius: "5px 5px 0 0 ",
                margin: "15px",
                border: "none",
                padding: "5px",
                borderBottom: "1px solid black",
              }}
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />

          </div>
        
          <div className="file-path-wrapper"></div>
        </div>
        

        <button
          className="btn green"
          style={{
            marginLeft: "20px",
            padding: "15px",
            background: "#FF4D4D",
            borderRadius: "5px",
            border: "none",
            fontSize: "16px",
            color: "white",
          }}
          onClick={() => setModalnote(true)}
        >
          {" "}
          Back
        </button>

        <button
          className="btn blue"
          style={{
            marginLeft: "20px",
            padding: "15px",
            background: "#4da64d",
            borderRadius: "5px",
            border: "none",
            fontSize:'16px',
            color: "white",
          }}
          onClick={() => SubmitDetails()}
        >
          {" "}
          Post
        </button>

        <Modal
          isOpen={modalnote}
          onRequestClose={() => setModalnote(false)}
          shouldCloseOnOverlayClick={false}
          style={customStyles}
        >
        <center>
        <div>
            <h1>Are you sure you want to leave?</h1>
            
          </div>
          <div

            className="flex"

          >
            <button
              className="btn green"
              style={{
                padding: "15px",
                background: "#4da64d",
                fontSize: "18px",
                borderRadius: "5px",
                border: "none",
                color: "white",
                margin: "15px",
              }}
              onClick={() => setModalnote(false)}
            >
              {" "}
              Stay In{" "}
            </button>

            <Link href="/Dashboard">
              <button
                className="btn green"
                style={{
                  padding: "15px",
                  background: "#FF4D4D",
                  fontSize: "18px",
                  borderRadius: "5px",
                  border: "none",
                  color: "white",
                  margin: "15px",
                }}
              >
                {" "}
                Back
              </button>
            </Link>
          </div>
          <h4> ⚠️ Leaving will not save your articles you haven't posted</h4>
          </center>
        </Modal>

        <br />
        <br />
        <h1 style={{ fontSize: "15px" }}>
          ⚠️ Wait a few seconds to upload until message pops up.
        </h1>

        <style jsx>
          {`
            .rootdiv {
              margin: 30px auto;
              max-width: 600px;
              padding: 20px;
              text-align: center;
            }
          `}
        </style>
      </center>
    </div>
  );
}

export default QQ;
