import React, { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
// import { useNavigate } from 'react-router-dom';
// import { roundedTop } from 'mdb-react-ui-kit/dist/css/mdb.module.css';
// import { Navigate } from 'react-router-dom';
// import styles from 'mdb-react-ui-kit/dist/css/mdb.min.module.css'

const Followers = ({ closeFollowers }) => {
  return (
    <div style={{
      position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
      background: "white", padding: 20, zIndex: 2, boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)"
    }}>
      <div style={{position: "absolute", top: 0, right: 0, padding: 0}}>
        <button style={{background: "none", border: "none", fontSize: 20, cursor: "pointer"}} onClick={closeFollowers}>
          &times;
        </button>
      </div>
      <ul style={{listStyleType: "none", padding: "0", paddingRight: "20px", paddingLeft: "20px"}}>
        <li>Me</li>
        <li>Myself</li>
        <li>&</li>
        <li>I</li>
      </ul>
    </div>
  );
};

const Following = ({ closeFollowing }) => {
  return (
    <div style={{
      position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
      background: "white", padding: 20, zIndex: 2, boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)"
    }}>
      <div style={{position: "absolute", top: 0, right: 0, padding: 0}}>
        <button style={{background: "none", border: "none", fontSize: 20, cursor: "pointer"}} onClick={closeFollowing}>
          &times;
        </button>
      </div>
      <ul style={{listStyleType: "none", padding: "0", paddingRight: "20px", paddingLeft: "20px"}}>
        <li>Me</li>
        <li>Myself</li>
        <li>&</li>
        <li>I</li>
      </ul>
    </div>
  );
};

const Background = ({ showFollow, closeFollow }) => {
  return (
    showFollow && (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 1
      }} onClick={closeFollow}>
      </div>
    )
  );
};

export default function Profile() {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  // let navigate = useNavigate();

  const handleShowFollowers = () => {
    setShowFollowers(true);
  }

  const handleCloseFollowers = () => {
    setShowFollowers(false);
  }

  const handleShowFollowing = () => {
    setShowFollowing(true);
  }

  const handleCloseFollowing = () => {
    setShowFollowing(false);
  }

  const handleLogout = () => {
    // localStorage.removeItem("isLoggedIn");
    // localStorage.removeItem("username");
    // navigate('/');

    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    // <div className={styles.hello}>
    <div className="gradient-custom-2" >
      <MDBContainer className='mdbcontainer'>
        {/* <MDBRow className="justify-content-center align-items-center h-100"> */}
        <MDBRow className='mdbrow'>
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="mdbcard" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="mdbcol" style={{ width: '150px' }}>
                  <MDBCardImage src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1024px-Patrick_Star.svg.png"
                    alt="Generic placeholder image" className="mdbcardimg" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{ height: '100px', overflow: 'visible' }}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div style={{ marginTop: '70px', marginLeft: '1rem' }}>
                  <MDBTypography tag="h5">Sriya Venepally <br></br>
                    <small>@sriyav</small>
                    <MDBCardText>Hyderabad, 19</MDBCardText></MDBTypography>
                </div>
              </div>
              <div className="sec2" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="sec3">
                  <div style={{ paddingRight: '1rem', paddingLeft: '1rem' }}>
                    <MDBCardText style={{ marginBottom: '.25rem' }}>4</MDBCardText>
                    <Background showFollow={showFollowers} closeFollow={handleCloseFollowers} />
                    <button className="flwbtn follow" onClick={handleShowFollowers}>Followers</button>
                    {
                      showFollowers && (
                        <Followers closeFollowers={handleCloseFollowers} />
                      )
                    }
                  </div>
                  <div style={{ paddingRight: '1rem', paddingLeft: '1rem' }}>
                    <MDBCardText style={{ marginBottom: '.25rem' }}>4</MDBCardText>
                    <Background showFollow={showFollowing} closeFollow={handleCloseFollowing} />
                    <button className="flwbtn follow" onClick={handleShowFollowing}>Following</button>
                    {
                      showFollowing && (
                        <Following closeFollowing={handleCloseFollowing} />
                      )
                    }
                  </div>
                </div>
              </div>
              <MDBCardBody className="mdbcardbody">
                <div style={{ marginBottom: '3rem' }}>
                  <p style={{ fontSize: '1.25rem', fontWeight: '400', marginBottom: '0.25rem' }}>About</p>
                  <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem' }}>
                    <MDBCardText style={{ fontStyle: 'italic', marginBottom: '.25rem' }}>Web Developer</MDBCardText>
                    <MDBCardText style={{ fontStyle: 'italic', marginBottom: '.25rem' }}>Lives in Hyderabad</MDBCardText>
                    <MDBCardText style={{ fontStyle: 'italic', marginBottom: '0' }}>Music Enthusiast</MDBCardText>
                  </div>
                </div>
                {/* <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow> */}
              </MDBCardBody>
              <MDBBtn color="link" onClick={handleLogout}>Log Out</MDBBtn>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    // </div>
  );
}