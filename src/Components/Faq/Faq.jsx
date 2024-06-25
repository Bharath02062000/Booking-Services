import React from 'react';
import './Faq.css';  

const Faq = () => {
  return (
    <div className="faq-container">
      <h1 className="termhead"> FAQ's</h1>
      <div className="faq-item">
        <h2 className="faq-question">1. What is Vehk?</h2>
        <p className="faq-answer">
          Vehk is the leading provider of innovative solutions in the automotive industry. We specialize in AI-driven
          predictive maintenance, hardware development, and app solutions for all your car and bike service needs.
        </p>
      </div>
      <div className="faq-item">
        <h2 className="faq-question">2. What services does Vehk offer?</h2>
        <p className="faq-answer">
          Vehk offers a range of unparalleled services tailored to meet the needs of our clients, including:
        </p>
        <ul className="faq-list">
          <li>Advanced AI-driven predictive maintenance solutions for vehicles</li>
          <li>Cutting-edge hardware development and implementation for automotive applications</li>
          <li>Customized software solutions for cars and bikes</li>
          <li>Comprehensive car and bike servicing, including regular maintenance, repairs, and diagnostics</li>
        </ul>
      </div>
      <div className="faq-item">
        <h2 className="faq-question">3. How can Vehk's solutions benefit my organization?</h2>
        <p className="faq-answer">
          Vehk's solutions are designed to revolutionize the automotive industry by optimizing performance,
          improving efficiency, and driving innovation. By leveraging advanced technologies such as AI, IoT, and
          predictive analytics, our solutions help organizations:
        </p>
        <ul className="faq-list">
          <li>Significantly reduce maintenance costs and downtime</li>
          <li>Enhance vehicle reliability and safety to the highest levels</li>
          <li>Improve operational efficiency and productivity</li>
          <li>Gain valuable insights into vehicle performance and health</li>
          <li>Ensure optimal performance and longevity for cars and bikes</li>
        </ul>
      </div>
      <div className="faq-item">
        <h2 className="faq-question">4. Is Vehk's technology compatible with existing automotive systems?</h2>
        <p className="faq-answer">
          Absolutely! Vehk's technology is designed to seamlessly integrate with existing automotive systems and
          infrastructure. Whether you're looking to retrofit existing vehicles with our solutions or incorporate them into
          new vehicle designs, our team of experts can customize our technology to meet your specific requirements.
        </p>
      </div>
      <div className="faq-item">
        <h2 className="faq-question">5. How does Vehk ensure data security and privacy?</h2>
        <p className="faq-answer">
          At Vehk, we take data security and privacy very seriously. We adhere to industry best practices and
          compliance standards to ensure that your data is protected at all times. Our solutions incorporate robust
          security measures, including encryption, access controls, and data anonymization, to safeguard sensitive
          information and ensure compliance with regulatory requirements.
        </p>
      </div>
      <div className="faq-item">
        <h2 className="faq-question">6. How can I get started with Vehk's solutions?</h2>
        <p className="faq-answer">
          Getting started with Vehk is simple! Schedule a consultation with our team today. We'll work closely with
          you to understand your needs, assess your current infrastructure, and develop a tailored solution that meets
          your objectives. From implementation to ongoing support and maintenance, we'll be there every step of the
          way to ensure your success.
        </p>
      </div>
      <div className="faq-item">
        <h2 className="faq-question">7. Does Vehk offer training and support services?</h2>
        <p className="faq-answer">
          Of course! Vehk offers comprehensive training and support services to ensure that you get the most out of
          our solutions. Our team of experts is available to provide training sessions, technical support, and
          troubleshooting assistance to help you maximize the value of our technology and achieve your business
          goals.
        </p>
      </div>
      <div className="faq-item">
        <h2 className="faq-question">8. How can I contact Vehk for more information?</h2>
        <p className="faq-answer">
          For more information about Vehk's solutions and services, or to schedule a consultation, reach out to us today
          at [insert contact information, such as phone number, email address, and website URL]. Our team is eager to
          hear from you and discuss how we can help drive success for your organization.
        </p>
      </div>
    </div>
  );
}

export default Faq;
