/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ContactSection = () => {
  return (
    <div className='contact-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            <div className='help-contact'>
              <div className='form-item'>
                <label>Your first and name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-item'>
                <label>Your email</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-item'>
                <label>Your message</label>
                <textarea type='textarea' className='form-control'></textarea>
              </div>
              <div className='form-item form-checkbox'>
                <input
                  className='tw-mr-2.5 tw-h-4 tw-w-4 tw-cursor-pointer tw-rounded-[2px] !tw-border-2 tw-border-solid !tw-border-[#00A139] tw-text-[#00A139] tw-ring-offset-0 focus:tw-shadow-none focus:tw-ring-0 focus:tw-ring-offset-0'
                  type='checkbox'
                  id='agree'
                />
                <label htmlFor='agree'>I agree with terms and conditions</label>
              </div>
              <div className='form-item'>
                <input className='form-submit' type='submit' value='Submit' />
              </div>
            </div>
          </div>
          <div className='col-md-6 offset-md-1'>
            <div className='contact-detail'>
              <h3>Contact us</h3>
              <ul>
                <li>
                  <span>
                    <img src='/images/icons/email.png' alt='icon' />
                  </span>
                  <span>info@kwahusummit.com</span>
                </li>
                <li>
                  <span>
                    <img src='/images/icons/phone.png' alt='icon' />
                  </span>
                  <span>+233 302 737 879</span>
                </li>
                <li>
                  <span>
                    <img src='/images/icons/location.svg' alt='icon' />
                  </span>
                  <span>#5, 4th Dade Walk, Labone - Accra, Ghana</span>
                </li>
              </ul>
              <p>
                The weather in Ghana at this time of the year will be sunny, hot
                and humid with the occasional thunderstorm or morning shower and
                temperatures around 31oF/24oC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
