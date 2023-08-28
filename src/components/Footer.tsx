import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer grid grid-cols-2 md:grid-cols-3 p-10 bg-base-200 text-base-content">
      {/* block 1 */}
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      {/* block 2 */}
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>

      {/* block 3 */}
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>

      {/* block 4 */}
      <div>
        <span className="footer-title">Follow Us on</span>
        <div className="flex items-center justify-start gap-2">
          <button className="btn btn-sm p-1">
            <BsFacebook className="text-2xl hover:text-blue-600" />
          </button>
          <button className="btn btn-sm p-1">
            <BsTwitter className="text-2xl hover:text-blue-400" />
          </button>
          <button className="btn btn-sm p-1">
            <BsInstagram className="text-2xl hover:text-pink-600" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
