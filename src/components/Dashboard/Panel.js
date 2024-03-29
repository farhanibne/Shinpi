import React, { useState, useEffect } from "react";
import { firestore } from "../../config/firebase";
import { Box, Container, Image, Heading } from "theme-ui";
import { jsx, Flex } from "theme-ui";
import loading from "./loading.gif";

function Panel({ arti }) {
  const [article, setArticle] = useState([]);
  const [search, setSearch] = useState("");
  const [playing, setPlaying] = useState(false);
  const [pause, setPause] = useState(false);
  const [rate, setRate] = useState(false);
  const [word, setWord] = useState(false);



  useEffect(() => {
    firestore
      .collection("articles")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setArticle(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  if (article.length > 0) {
    if (article === null) {
      return (
        <Box as="section" id="banner" sx={styles.banner}>
          <Container sx={styles.container}>
            <h1 style={{ fontSize: "35px" }}>Loading</h1>
          </Container>
        </Box>
      );
    } else {
      return (

        <>
          <Box as="section" id="banner" sx={styles.banner}>
            <Container sx={styles.container}>
              <input
                type="search"
                placeholder="Search"
                style={{
                  height: "24px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  padding: "16px",
                  borderRadius: "8px 8px 0 0 ",
                  width: "90.333333%",
                  outline: "none",
                  border: "none",
                  borderBottom: "3px solid #d9d9d9 ",
                }}
                onChange={(e) => setSearch(e.target.value)}
              />
              {article
                .filter((arti) => {
                  if (search === "") {
                    return arti;
                  } else if (
                    arti.title.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return arti;
                  } else if (
                    arti.description
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return arti;
                  }
                  else if(
                    arti.tag.toLowerCase().includes(search.toLowerCase())
                  )
                  {
                    return arti;
                  }
                })
                .map((arti, pos) => (
                  <div key={pos}>
                  <center>
                    <div >
                      <div className="card">
                        <div
                          className="font-semibold "
                          style={{ height: "auto", width: "98%" }}
                        >
                          <img
                            src={arti.link}
                            alt="image"
                            style={{
                              height: "auto",
                              width: "60%",
                              borderRadius: "5px",
                              border: "none",
                            }}
                          />
                        </div>
                        <div>
                          <p className="title">{arti.title}</p>
                          {arti.createdAt === null ? (
                            " "
                          ) : (
                            <p>
                              {" "}
                              Uploaded ⏱️{" "}
                              {arti.createdAt.toDate().toDateString()}
                            </p>
                          )}
                          <p style={{color:'blue'}}>{arti.tag}</p>
                        </div>

                        <div className="font-semibold ">
                          <details>
                            <summary className="summary">Read More</summary>
                            {playing ? (
                              <div>

                             
                              <button
                                onClick={() => {
                                  setPlaying(false);
                                  window.speechSynthesis.cancel();
                                }}
                                style={{
                                  backgroundColor: "#f2f2f2",
                                  color: "#000",
                                  border: "none",
                                  padding: "10px 20px",
                                  textAlign: "center",
                                  textDecoration: "none",
                                  display: "inline-block",
                                  fontSize: "18px",
                                  margin: "4px 2px",
                                  cursor: "pointer",
                                  borderRadius: "8px",
                                  outline: "none",
                                  boxShadow: "0 3px  #d9d9d9",
                                  width: "45%",
                                  marginTop: "10px",
                                  marginBottom: "10px",
                                  marginLeft: "10px",
                                  marginRight: "0px",
                                  height: "auto",
                                  fontWeight: "bold",
                                  fontFamily: "sans-serif",

                                }}
                              >
                                Cancel ⛔︎{" "}
                              </button>
                            {pause ? (
                              <button
                                onClick={() => {
                                  setPause(false);
                                  window.speechSynthesis.resume();
                                  
                                }}
                                style={{
                                  backgroundColor: "#f2f2f2",
                                  color: "#000",
                                  border: "none",
                                  padding: "10px 20px",
                                  textAlign: "center",
                                  textDecoration: "none",
                                  display: "inline-block",
                                  fontSize: "18px",
                                  margin: "4px 2px",
                                  cursor: "pointer",
                                  borderRadius: "8px",
                                  outline: "none",
                                  boxShadow: "0 3px  #d9d9d9",
                                  width: "45%",
                                  marginTop: "10px",
                                  marginBottom: "10px",
                                  marginLeft: "10px",
                                  marginRight: "0px",
                                  height: "auto",
                                  fontWeight: "bold",
                                  fontFamily: "sans-serif",

                                }}
                              >
                                Resume ▶️{" "}
                              </button>
                            
                            ):(
                          
                              <button
                                onClick={() => {
                                  setPause(true);
                                  window.speechSynthesis.pause();
                                }}
                                style={{
                                  backgroundColor: "#f2f2f2",
                                  color: "#000",
                                  border: "none",
                                  padding: "10px 20px",
                                  textAlign: "center",
                                  textDecoration: "none",
                                  display: "inline-block",
                                  fontSize: "16px",
                                  margin: "4px 2px",
                                  cursor: "pointer",
                                  borderRadius: "8px",
                                  outline: "none",
                                  boxShadow: "0 3px  #d9d9d9",
                                  width: "45%",
                                  marginTop: "10px",
                                  marginBottom: "10px",
                                  marginLeft: "10px",
                                  marginRight: "0px",
                                  height: "auto",
                                  fontWeight: "bold",
                                  fontFamily: "sans-serif",
                                  fontSize: "20px",
                                }}
                              >
                                Pause ⏸️{" "}
                              </button>
                            )}
                            <br/>
                            {/* make a choice to control the speed of the audio with the slider */}
                           
                             
                              </div>
                            ) : (
                              <div 
                              style={{
                                  display:'flex',
                                  marginTop:'15px',
                                  backgroundColor: "#f2f2f2",
                                  color: "#000",
                                  border: "none",

                                  textAlign: "center",
                                  textDecoration: "none",
                                  cursor: "pointer",
                                  borderRadius: "8px",
                                  width: "100%",
                                  height: "auto",
                                  fontWeight: "bold",
                                  fontFamily: "sans-serif",
                                  fontSize: "20px",
                                  boxShadow: "0 3px  #d9d9d9",
                                  paddingTop: "15px",
                                  paddingBottom: "15px",
                                }}>

                                <div style={{
                                   width: "50%"
                                }}>
                                    <input
                             type="range"
                              min="0.5"
                              max="2"
                              step="0.1"
                              defaultValue="1"
                              id="rate"
                              style={{
                                width:'85%'
                              }}
                              // change the speed of the audio as per the slider

                            />
                                </div>
                            <hr style={{
                              border: "1px solid black"
                            }}/>
                              <button
                                onClick={() => {

                                  const rate = document.getElementById("rate");
                                 
                                  const speech = new SpeechSynthesisUtterance();
                                  speech.text = `${arti.description}`;
                                  speech.volume = 1;
                                  speech.rate = rate.value;
                                  speech.pitch = 1;
                                  window.speechSynthesis.speak(speech);
                                  setPlaying(true);


                                  speech.onend = () => {
                                    setPlaying(false);
                                  }
 

                                }}
                                style={{
                                  backgroundColor: "#f2f2f2",
                                  color: "#000",
                                  textAlign: "center",
                                  textDecoration: "none",
                                  display: "inline-block",
                                  fontSize: "16px",
                                  margin: "2 px",
                                  cursor: "pointer",
                                  outline: "none",
                                  width: "50%",
                                  border:'1px transparent',
                                  height: "auto",
                                  fontWeight: "bold",
                                  fontFamily: "sans-serif",
                                  fontSize: "20px",
                                }}
                              >
                                Hear 📢
                              </button>
                              <br/>
                             
                            </div>
                            )}                              
                              <p className="sum">{arti.description}</p>
                         
                           
                           

                          
                          </details>
                        </div>
                      </div>
                    </div>
                  </center>
                  </div>
                ))}
            </Container>
          </Box>

          <style jsx>
            {`
              .card {
                max-width: 500px;
                margin: 22px auto;
                border-radius: 5px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
                padding: 20px;
              }
              img {
                width: 100%;
                height: auto;
              }
              .title {
                font-size: 35px;
                font-weight: bold;
                margin: 10px 0;
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
              .summary {
                -webkit-user-select: none;
                -ms-user-select: none;
                user-select: none;
              }
            `}
          </style>
        </>
      );
    }
  } else if (article.length === null) {
    return (
      <Box as="section" id="banner" sx={styles.banner}>
        <Container sx={styles.container}>
          <h1 style={{ fontSize: "35px" }}>Loading</h1>
        </Container>
      </Box>
    );
  } else {
    return (
      <Box as="section" id="banner" sx={styles.banner}>
        <Container sx={styles.container}>
          <div style={{ height: "100vh", background: "#F8FBFD" }}>
            <center>
              <img
                src={loading}
                alt="loading"
                style={{ height: "auto", width: "50%" }}
              />
            </center>
          </div>
        </Container>
      </Box>
    );
  }
}

const styles = {
  banner: {
    overflow: "hidden",
    backgroundColor: "#F9FBFD",
    textAlign: "center",
    pt: ["110px", null, null, null, "130px"],
    h2: {
      fontSize: ["28px", null, null, "32px", "38px", "48px", "64px"],
      lineHeight: 1.25,
      color: "#02073E",
      fontWeight: 700,
      width: "100%",
      maxWidth: ["100%", null, null, "55%", "500px", "640px", "851px"],
      mx: "auto",
      mt: "30px",
      mb: ["40px", null, null, "65px"],
    },
  },

  logo: {
    display: "block",
    width: "7%",
    borderRadius: "50%",
    mx: "auto",
    boxShadow: "0px 15px 35px rgba(65, 104, 139, 0.12)",
  },
  bannerImage: {
    display: "block",
    mx: "auto",
    position: "relative",
    maxWidth: ["100%", null, null, "80%", null, "100%"],
  },
  container: {
    position: "relative",
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, null, null, "block"],
    },
  },
  main: {
    padding: "25px",
    borderRadius: "5px",
    height: "auto",
    width: "80vw",
    border: "3px solid #d9d9d9",
    "@media screen and (max-width: 960px)": {
      border: "3px solid #d9d9d9",
    },
  },
};

export default Panel;
