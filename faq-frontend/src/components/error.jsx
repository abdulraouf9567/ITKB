import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center error-code">404</h1>
        <h4 className="my-4">
          Whoops! Looks like you've wandered off into the digital abyss. 🌀 The
          page you're seeking seems to have taken an unexpected vacation to the
          Bermuda Triangle of the internet. We've dispatched our team of
          cyberspace explorers to track it down. In the meantime, why not enjoy
          some virtual stargazing? Click your heels thrice and repeat after us:
          "There's no place like the homepage!" Or, use our trusty search bar to
          embark on a digital treasure hunt. Remember, even in the vast expanse
          of the internet, getting lost is just part of the adventure. 🚀 Happy
          exploring! 🌌
        </h4>

        <div className="home-cta ">
          <Link className="home-cta-link" to="/">Home</Link>
        </div>
      </div>
    </>
  );
}

export default Error;
