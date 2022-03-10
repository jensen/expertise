const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface IPlanProps {
  name: string;
  byline: string;
  price: number;
  onChoose: () => void;
}

const Plan = (props: IPlanProps) => {
  return (
    <div className="w-64 px-4 py-8 rounded-md border border-slate-200 flex flex-col justify-between ">
      <div className="space-y-2">
        <h3 className="font-secondary text-3xl font-bold">{props.name}</h3>
        <p className="text-slate-500">{props.byline}</p>
      </div>
      <div className="space-y-4 flex flex-col items-center justify-center">
        <p className="mt-12 font-bold text-2xl">
          {formatter.format(props.price).split(".")[0]}/m
        </p>
        <button
          onClick={props.onChoose}
          className="border-2 rounded-lg border-slate-800 px-4 py-2 uppercase font-bold hover:border-green-400 hover:bg-green-400 hover:text-white"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

interface IPricingProps {
  showWaitlist: () => void;
}

export default function Pricing(props: IPricingProps) {
  return (
    <section className="px-2 py-8 flex flex-col items-center justify-center space-y-4 text-slate-800">
      <h2 className="my-2 px-8 font-bold text-2xl">
        Choose the plan that is right for you.
      </h2>
      <div className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Plan
          name="Junior"
          byline="For developers who are just starting out."
          price={1299}
          onChoose={props.showWaitlist}
        />
        <Plan
          name="Intermediate"
          byline="For developers who have some experience but want dig deeper."
          price={2499}
          onChoose={props.showWaitlist}
        />
        <Plan
          name="Senior"
          byline="For developers who are want to master software development."
          price={2999}
          onChoose={props.showWaitlist}
        />
      </div>
    </section>
  );
}
