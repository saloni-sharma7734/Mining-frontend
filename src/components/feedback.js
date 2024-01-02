import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const FaqPage = () => {
  const faqData = [
    {
      question: 'What services does your mining consultancy provide?',
      answer: 'We offer a range of services including mining planning, environmental clearance, sustainable practices guidance, pollution clearance, and assistance with obtaining new leases.',
    },
    {
      question: 'How can I contact your consultancy for more information?',
      answer: 'You can contact us through the "Contact Us" page on our website. Fill out the form with your details, and our team will get in touch with you promptly.',
    },
    {
      question: 'What is the process for obtaining environmental clearance?',
      answer: 'The process for obtaining environmental clearance involves a thorough assessment of the environmental impact of your mining project. Our team will guide you through the necessary steps and documentation required for clearance.',
    },
    {
      question: 'Do you provide consulting services for small-scale mining operations?',
      answer: 'Yes, our consultancy caters to both large-scale and small-scale mining operations. We tailor our services to meet the unique needs and challenges of each client.',
    },
    {
      question: 'How can I learn more about your mining plans?',
      answer: 'You can explore detailed information about our mining plans on the "Services" page of our website. If you have specific questions, feel free to reach out to our team.',
    },
  ];

  const handleToggleAll = (expand) => {
    const accordionItems = document.querySelectorAll('.accordion-collapse');
    accordionItems.forEach((item) => {
      const isExpanded = item.classList.contains('show');
      if (expand && !isExpanded) {
        item.classList.add('show');
      } else if (!expand && isExpanded) {
        item.classList.remove('show');
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={() => handleToggleAll(true)}>
            Expand All
          </button>
          <button className="btn btn-secondary mx-2" onClick={() => handleToggleAll(false)}>
            Collapse All
          </button>
        </div>
        <div className="accordion" id="faqAccordion">
          {faqData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`faqHeading${index}`}>
                <button
                  className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faqCollapse${index}`}
                  aria-expanded={index === 0}
                  aria-controls={`faqCollapse${index}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`faqCollapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`faqHeading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FaqPage;
