export default function Footer() {
  return (
    <>
      <a href="#" class="back-to-top">
        <span class="material-symbols-outlined"> arrow_upward </span>
      </a>
      <div className="footer-container">
        <p className="footer-text">Made by S P J Clark</p>
        <div className="footer-links">
          <a
            href="https://github.com/IndieMasco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github-square" style={{ fontSize: "36px" }}></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sam-p-j-clark/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-linkedin-square"
              style={{ fontSize: "36px" }}
            ></i>
          </a>
        </div>
      </div>
    </>
  );
}
