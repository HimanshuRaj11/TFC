import { NavLink } from "react-router-dom";
import "./About.css";
import { BsArrowBarRight } from "react-icons/bs";
const About = () => {
  return (
    <div className="About center column">
      <div className="container1 center">
        <h1 className="font2">ABOUT TFC</h1>
      </div>

      <div className="container2 center">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="about-details font2">
          <h3>About Out Resturent</h3>
          <h1>We Provide Good Food for Your family!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur nihil praesentium ducimus amet quo perspiciatis aliquid
            ex dolorum? Esse, exercitationem adipisci vitae vel quo quas
            suscipit mollitia animi tenetur ratione ducimus ut veritatis, libero
            atque debitis ea fugiat, ullam voluptatibus? Illum minus eaque
            corporis rem dolor aut maxime incidunt ex aliquid vel explicabo
            praesentium laboriosam sunt ducimus voluptatibus magni, minima
            tempore commodi tenetur totam earum voluptates nostrum! Minus
            explicabo natus quod minima necessitatibus atque, voluptas tempora
            omnis voluptate laborum quam ipsam vel ullam temporibus eius modi
            itaque aut exercitationem repellat facilis maxime asperiores aliquid
            impedit incidunt? Labore pariatur ullam illo, distinctio inventore
            est itaque deserunt culpa doloribus beatae aperiam adipisci officia.
          </p>
        </div>
      </div>

      <div className="container3 center">
      <NavLink className={`center`}> <span>Goto Menu</span>  <BsArrowBarRight className="arrow-icon" /> </NavLink>
      </div>
    </div>
  );
};

export default About;
