import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import App from './App'
const Ap = () => (
  <div>
    <header>
      <h1>Welcome to Our  Class Website...</h1>
    </header>
    <nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="https://lbrce.ac.in/academics/syllabus/R20/R20_AI&DS_Syllabus.pdf">Course syllabus</a></li>
        <li><a href="https://lbrce.ac.in/academics/aycalendars/Academic_Calendars_2023-24.pdf">Academic Calendar</a></li>
        <li><a href="https://lbrce.ac.in/admission_pages/feepayment.php">Fee payment info</a></li>
        <li><a href="#theory-courses">Theory Courses</a></li>
        <li><a href="#lab-courses">Lab Courses</a></li>
        <li><a href="#circular-info">Circular Info</a></li>

      </ul>
    </nav>
    <main>
      <section>
        <h2>Explore our  class Website!!! </h2>
        <div className="marquee">
        <div className="marquee-item">
        <span role="img" aria-label="emoji">&#128129;</span>
          <p>Where complete info related to classwork and updates are available here....</p>
        <p>Where complete info related to classwork and updates are available here....</p></div>
       </div>
      </section>
      <section id="theory-courses">
        <h2>Theory Courses</h2>
        <div className="section-content">
          <img src="https://www.shutterstock.com/image-photo/elearning-education-internet-lessons-online-260nw-2158034833.jpg" alt="Theory Courses" />
          <div>
            <h3>Theory Courses</h3>
            <p>
              Our theory courses are designed to provide a solid foundation in various subjects. 
              Each course is crafted to enhance your knowledge and prepare you for advanced studies.
            </p>
          </div>
        </div>
      </section>
      <section id="lab-courses">
        <h2>Lab Courses</h2>
        <div className="section-content">
          <div>
            <h3>Lab courses</h3>
            <p>
              Our lab courses offer practical experience in a controlled environment. 
              Students will engage in experiments and projects that complement their theoretical knowledge.
            </p>
          </div>
          <img src="https://www.shutterstock.com/image-photo/computer-lab-260nw-5697154.jpg" alt="Lab Courses" />
        </div>
      </section>
      <section id="circular-info">
        <h2>Circular announcements</h2>
        <div className="section-content">
          <img src="data:image/jpeg;base64,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" alt="Circular Info" />
          <div>
            <h3>Stay Updated with Circulars</h3>
            <p>
              Keep up to date with the latest announcements, guidelines, and updates through our circular information section. 
              Stay informed about important dates, events, and changes.
            </p>
          </div>
        </div>
      </section>
      <section>

        <h2>Reach us</h2>
        <form>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message"></textarea>
          <label for="rollNumber">Roll number</label>
          <input type="number" id="quantity" name="quantity" min="64" max="Do"></input>
        
          <input type="submit" value="Submit" />
        </form>
      </section>
  
    </main>
    
    <footer>
      <p>&copy; 2024 Fashion Store</p>
    </footer>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ap/>
  </React.StrictMode>
);
