import temporaryImage from "../images/temporary-business-card-image.jpg";
import About from "./card-about";
import CardFooter from "./card-footer";
const Card = () => {
  const handleClick = (e) =>{
    e.preventDefault()
    window.location.href = 'mailto:pexart74@gmail.com'
  }
  const linkedinClick = (e) =>{
    e.preventDefault()
    window.location.href = 'https://www.linkedin.com/in/pelumi-adeayo-09a1a5315/'
  }
  return (
    <div className="card-wrapper card mt-2 mb-2">
      <img src={temporaryImage} class="card-img-top" alt="..."></img>
      <div className="card-body p-3">
        <div className="info-dpt text-center mt-3 mb-2">
          <h5 class="card-title">Pelumi Adeayo</h5>
          <p className="card-text dev">Frontend Developer
            <a className="gitLink d-block" href="https://github.com/pexArt-web">PexArt/github.com</a>
          </p>
         
        </div>
        <div className="card-btn text-center d-grid gap-2 mb-3">
          <button className="btn btn-light  rounded-75 text-dark" onClick={handleClick}>
            <span>
              <i class="bi bi-envelope-fill"></i>
            </span>{" "}
            Email
          </button>
          <button className="btn btn-info rounded-75" onClick={linkedinClick}>
            <span>
              <i class="bi bi-linkedin"></i>
            </span>{" "}
            Linkedin
          </button>
        </div>

        <About />
      </div>
      <CardFooter />
    </div>
  );
};

export default Card;
