import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { Form, useTransition } from "remix";

interface IContactFormProps {}

const ContactForm = (props: IContactFormProps) => {
  return (
    <Form method="post" action="/contact" className="space-y-4">
      <label htmlFor="emailInput" className="block space-y-2">
        <span className="font-light">Email</span>
        <br />
        <input
          id="emailInput"
          name="email"
          type="email"
          className="w-full px-4 py-2 bg-gray-200 rounded-md focus:bg-white"
        />
      </label>
      <label htmlFor="reasonInputs" className="block space-y-2">
        <span className="font-light">What would you like help with?</span>
        <br />
        <textarea
          id="reasonInput"
          name="reason"
          rows={5}
          className="w-full px-4 py-2 bg-gray-200 rounded-md resize-none focus:bg-white"
        ></textarea>
      </label>
      <button className="w-full px-4 py-2 bg-green-500 text-white rounded-full">
        Submit
      </button>
    </Form>
  );
};

interface IDialogProps {
  close: () => void;
}

const Dialog = (props: PropsWithChildren<IDialogProps>) => {
  return (
    <section className="fixed z-10 w-screen h-screen" onClick={props.close}>
      <div className="w-full h-full bg-slate-900 bg-opacity-50 flex justify-center items-center">
        <article
          className="w-5/6 sm:w-1/2 p-8 sm:p-16 rounded-xl shadow-md bg-gray-100 space-y-4"
          onClick={(event) => event.stopPropagation()}
        >
          {props.children}
        </article>
      </div>
    </section>
  );
};

interface IWaitlistProps {
  showing: boolean;
  close: () => void;
}

export default function Waitlist(props: IWaitlistProps) {
  const [complete, setComplete] = useState(false);
  const transition = useTransition();

  useEffect(() => {
    document.body.style.position = props.showing ? "fixed" : "static";
  }, [props.showing]);

  useEffect(() => {
    if (
      transition.state === "loading" &&
      transition.type === "actionRedirect"
    ) {
      setComplete(true);
    }
  }, [transition.state, transition.type]);

  const submitting = transition.state === "submitting";

  if (props.showing) {
    if (complete) {
      return (
        <Dialog close={props.close}>
          <h2 className="text-3xl font-bold text-slate-700 text-center">
            {complete ? "Thank You" : "Sending"}
          </h2>
          <button
            onClick={props.close}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            Close
          </button>
        </Dialog>
      );
    }

    return (
      <Dialog close={props.close}>
        {submitting ? (
          <h2 className="text-3xl font-bold text-slate-700 text-center">
            Sending
          </h2>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-slate-700 text-center">
              Interested in signing up?
            </h2>
            <ContactForm />
          </>
        )}
      </Dialog>
    );
  }

  return null;
}
