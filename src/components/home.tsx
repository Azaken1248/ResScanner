import '../styles/home.css';
import newyork from '../assets/newyork.png';
import london from '../assets/london.png';
import washington from '../assets/washington.png';
import library from '../assets/library.png';
import basketball from '../assets/basketball.png';
import cafe from '../assets/cafeteria.png';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';

function home() {
  return (
    <>
      <section className="header">
        <div className="text-box">
          <h1>Random Name University</h1>
          <p>
            Lorem ipsum dolor sit amet.... <br />
            Lorem.!!
          </p>
          <a href="#/" className="hero-btn">
            Visit us to know more
          </a>
        </div>
      </section>
      <section className="course">
        <h1>Courses we offer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, saepe.
        </p>

        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              nobis veritatis aliquam distinctio dolores harum! Laudantium quo
              eaque repellendus magni, expedita nihil harum corrupti culpa
              tempore autem nisi praesentium sequi.
            </p>
            <p>
              Sunt illum deserunt animi quia tenetur sed sint veniam rem quam
              minima. Pariatur sed nulla iure rem ea consequuntur possimus ex
              corporis ut neque esse, dolorum veritatis, eos earum expedita.
            </p>
          </div>
          <div className="course-col">
            <h3>Degree</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus earum, nam perferendis unde suscipit ut in ipsa id
              accusantium ducimus esse aperiam molestiae. Quidem deserunt
              eligendi iure quisquam nulla placeat?
            </p>
            <p>
              Ullam incidunt exercitationem aliquid ea. Aspernatur ducimus ad
              laudantium quam ea accusamus magnam quaerat, impedit voluptates
              error deleniti eius eos illo earum dicta porro ipsam tenetur quis
              est ipsa voluptate?
            </p>
          </div>
          <div className="course-col">
            <h3>Post Graduate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              commodi magnam omnis error tenetur. Voluptate dolores beatae
              perferendis consectetur reprehenderit eum expedita, eius labore
              rerum velit. Doloribus, nemo. Voluptatum, praesentium!
            </p>
            <p>
              Unde error minima culpa repudiandae quibusdam odio sit dignissimos
              blanditiis labore, obcaecati nisi non odit itaque? Maiores
              recusandae distinctio, ullam cum tenetur mollitia nesciunt impedit
              perspiciatis? Nisi pariatur voluptatibus ducimus!
            </p>
          </div>
        </div>
      </section>
      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eaque!
        </p>

        <div className="row">
          <div className="campus-col">
            <img src={london} />
            <div className="layer">
              <h3>LONDON</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src={newyork} />
            <div className="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src={washington} />
            <div className="layer">
              <h3>WASHINGTON</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
          delectus!
        </p>

        <div className="row">
          <div className="facilities-col">
            <img src={library} alt="library" />
            <h3>World className Library</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              explicabo reprehenderit quod nam nemo rerum tempore alias
              doloremque quia expedita!
            </p>
          </div>
          <div className="facilities-col">
            <img src={basketball} alt="basketball court" />
            <h3>Great basketball court</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              explicabo reprehenderit quod nam nemo rerum tempore alias
              doloremque quia expedita!
            </p>
          </div>
          <div className="facilities-col">
            <img src={cafe} alt="cafeteria" />
            <h3>Best in class library</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              explicabo reprehenderit quod nam nemo rerum tempore alias
              doloremque quia expedita!
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h1>From our students</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
          delectus!
        </p>

        <div className="row">
          <div className="testimonial-col">
            <img src={user1} alt="user pfp" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                earum dolores illum sed, quibusdam aliquam iste ad dolorum
                eligendi nulla facilis unde ipsum voluptate molestias eaque ab
                corrupti incidunt eum exercitationem dolore corporis minima
                recusandae error numquam. At atque quae in necessitatibus
                molestiae. Unde dolorem doloremque sunt eligendi omnis eos
                tempore soluta tenetur ipsa sapiente excepturi perspiciatis
                assumenda porro quasi, inventore, blanditiis velit nesciunt ut?
                Architecto corrupti magni dolores dolorum aliquam perferendis
                quam quia error assumenda ea distinctio vitae ipsam eos
                voluptatibus inventore cumque repudiandae perspiciatis,
                necessitatibus placeat quas. Harum error accusamus nesciunt
                cumque, laborum autem temporibus vel quae quod?
              </p>
              <h3>Girl Name</h3>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
          <div className="testimonial-col">
            <img src={user2} alt="user pfp" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                earum dolores illum sed, quibusdam aliquam iste ad dolorum
                eligendi nulla facilis unde ipsum voluptate molestias eaque ab
                corrupti incidunt eum exercitationem dolore corporis minima
                recusandae error numquam. At atque quae in necessitatibus
                molestiae. Unde dolorem doloremque sunt eligendi omnis eos
                tempore soluta tenetur ipsa sapiente excepturi perspiciatis
                assumenda porro quasi, inventore, blanditiis velit nesciunt ut?
                Architecto corrupti magni dolores dolorum aliquam perferendis
                quam quia error assumenda ea distinctio vitae ipsam eos
                voluptatibus inventore cumque repudiandae perspiciatis,
                necessitatibus placeat quas. Harum error accusamus nesciunt
                cumque, laborum autem temporibus vel quae quod?
              </p>
              <h3>Guy Name</h3>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <h1>Enroll for our various online courses from your home</h1>
        <a href="" className="hero-btn">
          CONTACT US
        </a>
      </section>
      <section className="footer">
        <h4>About Us</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem alias
          perspiciatis accusantium a dignissimos, harum enim molestias ad culpa
          quo.
        </p>
        <div className="icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-solid fa-at"></i>
        </div>
        <p>
          Made with <i className="fa-solid fa-heart"></i> by Adi
        </p>
      </section>
    </>
  );
}

export default home;
