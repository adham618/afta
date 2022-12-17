/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="layout">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-top tw-flex-col-reverse !tw-items-start lg:!tw-flex-row lg:tw-items-end">
              <div className="footer-newsletter tw-w-full">
                <h3>Stay connected</h3>
                <div className="newsletter-box">
                  <span>Your email</span>
                  <div className="d-flex tw-flex-col sm:tw-flex-row">
                    <input
                      className="form-control !tw-w-full sm:!tw-w-[320px]"
                      type="text"
                      placeholder="example@site.com"
                    />
                    <button className="btn btn-submit btn-secondary tw-mt-5 !tw-w-full sm:tw-mt-0 sm:!tw-w-[152px]">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="footer-logo">
                <img src="/images/footer-logo.svg" alt="footer logo" />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="footer-center">
              <div className="row">
                <div className="col-12 col-md-9">
                  <div className="footer-links w-full !tw-grid tw-flex-none tw-auto-rows-auto tw-grid-cols-2 lg:tw-grid-cols-5">
                    <div className="m-0 footer-link-item">
                      <h3 className="lg:tw-hidden">About</h3>
                      <h3 className="tw-hidden lg:tw-block">&nbsp;</h3>
                      <ul>
                        <li>
                          <Link href="/the-host">The Host</Link>
                        </li>
                        <li>
                          <Link href="/media-partners">Partners</Link>
                        </li>
                        <li>
                          <Link href="/about-summit">The Summit</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="m-0 footer-link-item">
                      <h3>Who is attending</h3>
                      <ul>
                        <li>
                          <Link href="/captains-of-industry">
                            Captains of Industry
                          </Link>
                        </li>
                        <li>
                          <Link href="/invited-heads-of-state">
                            Heads of State
                          </Link>
                        </li>
                        <li>
                          <Link href="/invited-personalities">
                            Notable Personalities
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="m-0 footer-link-item">
                      <h3>Resourses</h3>
                      <ul>
                        <li>
                          <Link href="/news">News</Link>
                        </li>
                        <li>
                          <Link href="/the-afcfta">The AfCFTA</Link>
                        </li>
                        <li>
                          <Link href="/agenda">The AU Agenda 2063</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="m-0 footer-link-item">
                      <h3>Event guide</h3>
                      <ul>
                        <li>
                          <Link href="/peduase">Peduase</Link>
                        </li>
                        <li>
                          <Link href="/aburi">Aburi</Link>
                        </li>
                        <li>
                          <Link href="/protocols">Protocols</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="m-0 footer-link-item no-title">
                      <ul>
                        <li>
                          <Link href="/help">Contact us</Link>
                        </li>
                        <li>
                          <Link href="/">Privacy policy</Link>
                        </li>
                        <li>
                          <Link href="/">Terms and conditions</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="footer-copy">
                    <ul>
                      <li>
                        <Link href="/">
                          <img
                            src="/images/socials/instagram-green.png"
                            alt="instagram"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <img
                            src="/images/socials/facebook-green.png"
                            alt="facebook"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <img
                            src="/images/socials/twitter-green.png"
                            alt="twitter"
                          />
                        </Link>
                      </li>
                    </ul>
                    <p>
                      Copyright &copy; {new Date().getFullYear()}. All Rights
                      Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="footer-bottom !tw-mt-0 md:!tw-mt-[35px]">
              <p className="tw-text-left md:tw-text-center">
                Developed by <Link href="http://pegesinc.com/">Peges Inc</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
