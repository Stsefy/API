export default function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        We are a modern web application showcasing React Router and API
        integration.
      </p>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To provide a seamless experience for managing and viewing contacts.
        </p>
      </section>
      <section className="technology">
        <h2>Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>REST API</li>
          <li>SCSS</li>
        </ul>
      </section>
    </div>
  );
}
