import { useState } from "react";
import star from "./images/icon-star.svg";
import thanks from "./images/illustration-thank-you.svg";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [items, setItems] = useState(null);

  const Button = ({ number }) => {
    return (
      <button
        onClick={() => setItems(number)}
        className="bg-dark-blue rounded-full text-light-grey h-10 w-10 focus:bg-light-grey focus:text-medium-grey transition-all duration-500 hover:bg-orange hover:text-white "
      >
        {number}{" "}
      </button>
    );
  };

  const Button2 = ({ text }) => {
    return (
      <button
        onClick={() => setIsSubmitted(!isSubmitted)}
        className="bg-orange rounded-full font-bold text-white px-28 py-3 uppercase tracking-widest hover:bg-white hover:text-orange transition-all duration-500 "
      >
        {text}
      </button>
    );
  };

  return (
    <>
      <main>
        {!isSubmitted ? (
          <article className="linear rounded-2xl  p-5">
            <img className="linear p-2 rounded-full" src={star} />
            <h1 className="text-white text-2xl font-bold mt-6 mb-4">
              How did we do?
            </h1>
            <p className="text-light-grey mb-10 leading-7">
              Please let us know how we did with your support <br /> request.
              All feedback is appreciated to help us <br /> improve our
              offering!
            </p>
            <ul className="grid grid-cols-5 gap-2">
              <li>
                <Button number={1} />
              </li>
              <li>
                <Button number={2} />
              </li>
              <li>
                <Button number={3} />
              </li>
              <li>
                <Button number={4} />
              </li>
              <li>
                <Button number={5} />
              </li>
            </ul>
            <div className="grid place-items-center mt-8">
              <Button2 text="Submit" />
            </div>
          </article>
        ) : (
          <article className="linear p-5 rounded-2xl  text-center grid place-items-center">
            <img className="w-2/4" src={thanks} />
            <h3 className="bg-dark-blue py-1 px-3 rounded-full text-orange mt-8">
              You selected {items} of 5
            </h3>
            <h1 className="text-white text-3xl my-6">Thank you!</h1>
            <p className="text-light-grey mb-10 leading-7">
              We appreciate you taking the time to give a rating. <br /> If you
              ever need more support, don’t hesitate to <br /> get in touch!
            </p>
            <Button2 text="Rate Again" />
          </article>
        )}
      </main>
    </>
  );
}

export default App;
