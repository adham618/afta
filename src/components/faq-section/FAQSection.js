import React from 'react';

import SectionHeader from '../section-header/SectionHeader';

const FAQSection = () => {
  return (
    <div className='faq-section tw-p-0'>
      <SectionHeader title='Frequently Asked Questions' />
      <div className='faq-block'>
        <div className='layout'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <div className='accordion' id='accordionExample'>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      What is the Africa Prosperity Dialogue, known to be Kwahu Summit?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>
                      It is an annual event where key decision makers in Africa, particularly in business and politics join hands in, shaping and moving the Africa Agenda for Action together, by expediting the implementation of the AfCFTA Agreement for a prosperous and a self-reliant continent.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      Where and when is the event likely to take place?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>
                      The event hosts all African leaders and industry players in Ghana from Thursday the 26 January to Saturday the 28 January 2023.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      Who can participate in the event?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>
                      •African Heads of State
•Heads of Regional Economic Communities within the AU
•Heads of Africa’s multinational corporations 
•Leading African entrepreneurs
•The AU Secretariat 
•The AfCFTA Secretariat 
•Leading thought leaders The CARICOM Secretariat
•Ministers of finance, trade, industry, and infrastructure  
•Young entrepreneurs in Africa and the African Diaspora 
•Heads of multinational corporations with a strong presence in Africa
•Heads of Trade Associations 
•Heads of development banks
•Heads of Africa-focused organizations
•Influential figures in the African Diaspora 
•Heads of State-owned Corporations
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingFour'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour'
                      aria-expanded='false'
                      aria-controls='collapseFour'
                    >
                      Which parts of the event will be private and who will be able to attend?
                    </button>
                  </h2>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingFour'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>
                      The event is strictly by invitation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingFive'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='false'
                      aria-controls='collapseFive'
                    >
                      Who are the event organizers?
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingFive'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>
                      The Africa Prosperity Network (APN) is the event organiser with the AfCFTA Secretariat, the Presidency of the Republic of Ghana and in partnership with the Ghana Investment Promotion Center, United Nations Development Program and United Nations Economic Commission for Africa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
