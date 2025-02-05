
import './Home.css';
const scrollToMiddle = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: window.innerHeight /1.3,
      behavior: 'smooth',
    });
  };
  import { useEffect } from "react";
  import { useLocation } from "react-router-dom";
  
  function Home() {
      const { pathname } = useLocation();
  
      useEffect(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
      }, [pathname]);
  
      return (
        <div>
            <section className="section-2">
                <img
                    src="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796188d45e60c0226977f35_HERO%20Bckground%20image.png"
                    loading="lazy"
                    sizes="(max-width: 1940px) 100vw, 1940px"
                    srcSet="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796188d45e60c0226977f35_HERO%20Bckground%20image-p-500.png 500w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796188d45e60c0226977f35_HERO%20Bckground%20image-p-800.png 800w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796188d45e60c0226977f35_HERO%20Bckground%20image-p-1080.png 1080w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796188d45e60c0226977f35_HERO%20Bckground%20image-p-1600.png 1600w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796188d45e60c0226977f35_HERO%20Bckground%20image.png 1940w"
                    alt=""
                    className="image-3"
                />
            </section>
            <div className="navbar">
                <div className="navbar-no-shadow-container-2 w-nav">
                    <div className="container-regular-2">
                        <div className="navbar-wrapper-3">
                        <a href="#" className="navbar-brand-2 w-nav-brand">
    <img
        src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1725003949/logo_rhifri.png"
        loading="lazy"
        alt=""
        style={{ width: "60px", height: "auto" }}
    />
</a>

                            <nav role="navigation" className="nav-menu-wrapper-2 w-nav-menu">
                                <ul role="list" className="nav-menu w-list-unstyled">
                                    <li><a href="/" className="nav-link-4">Home</a></li>
                                    <li><a href="enhancer" className="nav-link-4">Note Enhancer</a></li>
                                    <li className="list-item"><a href="/quiz" className="nav-link-4">Quizz</a></li>
                                    <li><a href="task" className="nav-link-4">Task</a></li>
                                    <li><a href="/grammer" className="nav-link-4">Grammar</a></li>
                                    <li className="mobile-margin-top-12">
                                        <div className="nav-button-wrapper">
                                            <a href="#" className="button-primary-5 w-button">Register</a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <div className="menu-button-3 w-nav-button">
                                <div className="icon w-icon-nav-menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section">
      <div className="container-5">
        <div className="hero-wrapper-4">
          <div className="hero-split-4">
            <h1 className="heading">
              Transform<br />Your Learning Experience
            </h1>
            <p className="my-p heo-p left-align">
              Ordinary lessons become extraordinary adventures<br />with our tools tailored for diverse learning styles.
            </p>
            <button
              className="button-primary-5 w-button"
              onClick={scrollToMiddle}
            >
              Get Started
            </button>
          </div>
          <div className="hero-split-4">
            <img
              src="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/67956582ddde9f4bb080c358_freepik__the-style-is-candid-image-photography-with-natural__24185.jpeg"
              loading="lazy"
              alt=""
              className="image-2"
              srcSet="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/67956582ddde9f4bb080c358_freepik__the-style-is-candid-image-photography-with-natural__24185-p-500.jpeg 500w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/67956582ddde9f4bb080c358_freepik__the-style-is-candid-image-photography-with-natural__24185-p-800.jpeg 800w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/67956582ddde9f4bb080c358_freepik__the-style-is-candid-image-photography-with-natural__24185.jpeg 896w"
              width="auto"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 484.4375px, (max-width: 991px) 624.4375px, 432.375px"
            />
          </div>
        </div>
      </div>
    </section>

            <section className="team-slider">
                <div className="container-5">
                    <h2 className="centered-heading-4">Features That Make a Difference</h2>
                    <p className="my-p">Explore powerful tools designed to simplify your learning experience and help you achieve more.</p>
                    <div data-delay="4000" data-animation="slide" className="team-slider-wrapper w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="12" data-duration="500" data-infinite="true">
                        <div className="w-slider-mask">
                            <div className="team-slide-wrapper w-slide">
                                <div className="team-block"onClick={() => window.location.href = "/enhancer"}>
                                    <img
                                        src="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/679563f7bdcc31551d0bd1dc_freepik__the-style-is-candid-image-photography-with-natural__24184.jpeg"
                                        loading="lazy"
                                        sizes="(max-width: 479px) 77vw, (max-width: 991px) 39vw, (max-width: 1439px) 26vw, 262px"
                                        srcSet="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/679563f7bdcc31551d0bd1dc_freepik__the-style-is-candid-image-photography-with-natural__24184-p-500.jpeg 500w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/679563f7bdcc31551d0bd1dc_freepik__the-style-is-candid-image-photography-with-natural__24184-p-800.jpeg 800w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/679563f7bdcc31551d0bd1dc_freepik__the-style-is-candid-image-photography-with-natural__24184.jpeg 896w"
                                        alt=""
                                        className="team-member-image-two"
                                    />
<div className="team-block-info">
                            <h3 className="team-member-name-two">Note Management</h3>
                            <p className="team-member-text">Keep your notes accessible and well-organized at all times.</p>
                            <a href="#" className="text-link-arrow-2 w-inline-block">
                                <div className="text-block-7">Manage Your Notes</div>
                                <div className="arrow-embed-2 w-embed">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669 V10.6774H12.9425L10.1776 13.4522L11.72 15Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="team-slide-wrapper w-slide">
                    <div className="team-block" onClick={() => window.location.href = "/task"}>
                        <img
                            src="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/679563f74180d0994a01ae4e_freepik__the-style-is-candid-image-photography-with-natural__24183.jpeg"
                            loading="lazy"
                            sizes="(max-width: 479px) 77vw, (max-width: 991px) 39vw, (max-width: 1439px) 26vw, 262px"
                            srcSet="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/679563f74180d0994a01ae4e_freepik__the-style-is-candid-image-photography-with-natural__24183-p-500.jpeg 500w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/679563f74180d0994a01ae4e_freepik__the-style-is-candid-image-photography-with-natural__24183-p-800.jpeg 800w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/679563f74180d0994a01ae4e_freepik__the-style-is-candid-image-photography-with-natural__24183.jpeg 896w"
                            alt=""
                            className="team-member-image-two"
                        />
                        <div className="team-block-info">
                            <h3 className="team-member-name-two">Task Creation</h3>
                            <p className="team-member-text">Organize your tasks effortlessly with our intuitive tools.</p>
                            <a href="#" className="text-link-arrow-2 w-inline-block">
                                <div className="text-block-6">Start Creating Tasks</div>
                                <div className="arrow-embed-2 w-embed">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669V10.6774H12.9425L10.1776 13.4522L11.72 15Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="team-slide-wrapper w-slide">
                    <div className="team-block" onClick={() => window.location.href = "/quiz"}>
                        <img
                            src="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/679563f7890c398e497517c1_freepik__the-style-is-candid-image-photography-with-natural__24182.jpeg"
                            loading="lazy"
                            sizes="(max-width: 479px) 77vw, (max-width: 991px) 39vw, (max-width: 1439px) 26vw, 262px"
                            srcSet="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/679563f7890c398e497517c1_freepik__the-style-is-candid-image-photography-with-natural__24182-p-500.jpeg 500w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/679563f7890c398e497517c1_freepik__the-style-is-candid-image-photography-with-natural__24182-p-800.jpeg 800w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/679563f7890c398e497517c1_freepik__the-style-is-candid-image-photography-with-natural__24182.jpeg 896w"
                            alt=""
                            className="team-member-image-two"
                        />
                        <div className="team-block-info">
                            <h3 className="team-member-name-two">Question Solving</h3>
                            <p className="team-member-text">Get instant solutions to your queries with ease.</p>
                            <a href="#" className="text-link-arrow-2 w-inline-block">
                                <div className="text-block-5">Solve Questions Now</div>
                                <div className="arrow-embed-2 w-embed">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669V10.6774H12.9425L10.1776 13.4522L11.72 15Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                            <div className="team-slide-wrapper w-slide">
                                <div className="team-block">
                                    <img
                                        src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124af1aa12aadf_placeholder%201.svg"
                                        loading="lazy"
                                        alt=""
                                        className="team-member-image-two"
                                    />
                                    <div className="team-block-info">
                                        <h3 className="team-member-name-two">Full Name</h3>
                                        <p className="team-member-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <a href="#" className="text-link-arrow-2 w-inline-block">
                                            <div>How we can help you</div>
                                            <div className="arrow-embed-2 w-embed">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669V10.6774H12.9425L10.1776 13.4522L11.72 15Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-slide-wrapper w-slide">
                                <div className="team-block">
                                    <img
                                        src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124af1aa12aadf_placeholder%201.svg"
                                        loading="lazy"
                                        alt=""
                                        className="team-member-image-two"
                                    />
                                    <div className="team-block-info">
                                        <h3 className="team-member-name-two">Full Name</h3>
                                        <p className="team-member-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <a href="#" className="text-link-arrow-2 w-inline-block">
                                            <div>How we can help you</div>
                                            <div className="arrow-embed-2 w-embed">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669V10.6774H12.9425L10.1776 13.4522L11.72 15Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-slide-wrapper w-slide">
                                <div className="team-block">
                                    <img
                                        src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124af1aa12aadf_placeholder%201.svg"
                                        loading="lazy"
                                        alt=""
                                        className="team-member-image-two"
                                    />
                                    <div className="team-block-info">
                                        <h3 className="team-member-name-two">Full Name</h3>
                                        <p className="team-member-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <a href="#" className="text-link-arrow-2 w-inline-block">
                                            <div>How we can help you</div>
                                            <div className="arrow-embed-2 w-embed">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669V10.6774H12.9425L10.1776 13.4522L11.72 15Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-slider-arrow w-slider-arrow-left">
                            <div className="w-icon-slider-left"></div>
                        </div>
                        <div className="team-slider-arrow w-slider-arrow-right">
                            <div className="w-icon-slider-right"></div>
                        </div>
                        <div className="team-slider-nav w-slider-nav w-slider-nav-invert w-round"></div>
                    </div>
                </div>
            </section>
            <section className="features-list">
                <div className="container-5">
                    <div className="features-wrapper-two">
                        <div className="features-left">
                            <h3 className="heading">Why Choose BrightWays?</h3>
                            <p className="features-paragraph">We aim to inspire, motivate, and adapt to each student’s unique journey, fostering a supportive and enriching experience.<br /></p>
                            <div className="text-block-2">Brightways is designed to make learning simpler, engaging, and accessible for all.</div>
                            <a href="#" className="text-link-arrow-2 w-inline-block">
                                <div className="text-block-3">Learn more</div>
                                <div className="arrow-embed-2 w-embed">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.13 8.5L6.87296 4.24291L5.87067 5.24379L9.129 8.5L5.87067 11.7555L6.87225 12.7571L11.13 8.5Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <ul role="list" className="features-right w-list-unstyled">
                            <li className="features-block-two">
                                <img
                                    src="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796ae2c61a5085fe5474341_freepik__the-style-is-candid-image-photography-with-natural__97828.jpg"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 89vw, 150px"
                                    srcSet="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796ae2c61a5085fe5474341_freepik__the-style-is-candid-image-photography-with-natural__97828-p-500.jpg 500w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796ae2c61a5085fe5474341_freepik__the-style-is-candid-image-photography-with-natural__97828-p-800.jpg 800w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796ae2c61a5085fe5474341_freepik__the-style-is-candid-image-photography-with-natural__97828.jpg 896w"
                                    alt=""
                                    className="features-image"
                                />
                                <p className="paragraph"><strong className="bold-text">Personalized Learning<br />‍</strong>Adaptive content tailored to every learning style.</p>
                            </li>
                            <li className="features-block-two">
                                <img
                                    src="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796a81467341802194e1b40_freepik__the-style-is-candid-image-photography-with-natural__97825.jpg"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 90vw, 150px"
                                    srcSet="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796a81467341802194e1b40_freepik__the-style-is-candid-image-photography-with-natural__97825-p-500.jpg 500w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796a81467341802194e1b40_freepik__the-style-is-candid-image-photography-with-natural__97825-p-800.jpg 800w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796a81467341802194e1b40_freepik__the-style-is-candid-image-photography-with-natural__97825.jpg 896w"
                                    alt=""
                                    className="features-image"
                                />
                                <p className="paragraph-2"><strong className="bold-text-2 ">Motivational Rewards</strong> Instant rewards encourage active participation.</p>
                            </li>
                            <li className="features-block-two">
                                <img
                                    src="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796a80f06642054bf598262_freepik__the-style-is-candid-image-photography-with-natural__97826.jpg"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 86vw, 150px"
                                    srcSet="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796a80f06642054bf598262_freepik__the-style-is-candid-image-photography-with-natural__97826-p-500.jpg 500w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796a80f06642054bf598262_freepik__the-style-is-candid-image-photography-with-natural__97826-p-800.jpg 800w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796a80f06642054bf598262_freepik__the-style-is-candid-image-photography-with-natural__97826.jpg 896w"
                                    alt=""
                                    className="features-image"
                                />
                                <p className="paragraph-3"><strong className="bold-text-3">Inclusive Accessibility<br />‍</strong>Multilingual support and voice assistance ensure learning is for everyone.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="hero-subscribe-left-2">
                <div className="container-5">
                    <div className="hero-wrapper-4">
                        <div className="hero-split-4">
                            <h1 className="heading-2">Ready to Start Your Journey?</h1>
                            <p className="my-p registory-class left-align">Sign up for a free trial and explore how <br />Brightways can transform your study experience.</p>
                            <div className="hero-form-2 w-form">
                                <form id="wf-form-Hero-Form" name="wf-form-Hero-Form" data-name="Hero Form" method="get" className="hero-form-container-2" data-wf-page-id="67892ad20b79c099e7f3f25f" data-wf-element-id="212a046d-4080-5315-1f11-b272b3ade853" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
                                    <input
                                        className="hero-form-input-2 shadow w-input"
                                        maxLength="256"
                                        name="Hero-Email"
                                        data-name="Hero Email"
                                        aria-label="Enter your email"
                                        placeholder="Enter your email"
                                        type="email"
                                        id="Hero-Email"
                                        required
                                    />
                                    <input type="submit" data-wait="Please wait..." className="button-primary-6 w-button" value="Join Now" />
                                </form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                            <a href="#" className="text-link-arrow-2 w-inline-block">
                                <div className="text-block-4">or Sign-up with Google</div>
                                <div className="arrow-embed-2 w-embed">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.13 8.5L6.87296 4.24291L5.87067 5.24379L9.129 8.5L5.87067 11.7555L6.87225 12.7571L11.13 8.5Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div className="hero-split-4">
                            <img
                                src="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796a81758e0430e7624f88e_freepik__the-style-is-candid-image-photography-with-natural__97824.jpg"
                                loading ="lazy"
                                sizes="(max-width: 767px) 131.328125px, (max-width: 991px) 42vw, (max-width: 1439px) 43vw, 432.375px"
                                srcSet="https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796a81758e0430e7624f88e_freepik__the-style-is-candid-image-photography-with-natural__97824-p-500.jpg 500w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796a81758e0430e7624f88e_freepik__the-style-is-candid-image-photography-with-natural__97824-p-800.jpg 800w, https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796a81758e0430e7624f88e_freepik__the-style-is-candid-image-photography-with-natural__97824.jpg 896w"
                                alt=""
                                className="shadow-two-4"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-subscribe-2">
                <div className="container-5">
                    <div className="footer-wrapper-three-2">
                        <div className="footer-block-three-2">
                            <a href="#" className="footer-link-three-2">About us</a>
                            <a href="#" className="footer-link-three-2">Features</a>
                        </div>
                        <div className="footer-social-block-three-2">
                            <a href="#" className="footer-social-link-three-2 w-inline-block">
                                <img
                                    src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a705912aaeb_facebook%20big%20filled.svg"
                                    loading="lazy"
                                    alt=""
                                />
                            </a>
                            <a href="#" className="footer-social-link-three-2 w-inline-block">
                                <img
                                    src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124ab37a12aaf0_twitter%20big.svg"
                                    loading="lazy"
                                    alt=""
                                />
                            </a>
                            <a href="#" className="footer-social-link-three-2 w-inline-block">
                                <img
                                    src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a61f512aaed_instagram%20big.svg"
                                    loading="lazy"
                                    alt=""
                                />
                            </a>
                            <a href="#" className="footer-social-link-three-2 w-inline-block">
                                <img
                                    src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a717f12aaea_youtube%20small.svg"
                                    loading="lazy"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="footer-divider-two-2"></div>
                    <div className="footer-bottom-2">
                        <div className="footer-copyright-2">© 2025 BrightWays. All rights reserved</div>
                        <div className="footer-legal-block-2">
                            <a href="#" className="footer-legal-link-2">Terms Of Use</a>
                            <a href="#" className="footer-legal-link-2">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
