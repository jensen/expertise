const features = [
  "Full Stack Development",
  "Focused Debugging",
  "Application Optimization",
  "Automated Regression Testing",
  "User Interface/User Experience",
  "Application Architecture",
  "Software Design Principles",
  "Project Planning & Execution",
  "Technical Roadmapping",
];

interface IListProps {
  list: string[];
}

const List = (props: IListProps) => {
  return (
    <ul className="px-8 py-4 w-full sm:w-fit border-2 border-white rounded-md">
      {props.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

interface IFeaturesProps {}

export default function Features(props: IFeaturesProps) {
  const middle = Math.ceil(features.length / 2);
  const first = features.slice(0, middle);
  const second = features.slice(middle);

  return (
    <section className="px-8 py-8 bg-slate-700 text-white">
      <div className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-8">
        <List list={first} />
        <List list={second} />
      </div>
    </section>
  );
}
