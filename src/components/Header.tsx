interface IHeaderProps {
  showWaitlist: () => void;
}

export default function Header(props: IHeaderProps) {
  return (
    <header className="py-4 px-8 sm:px-12 flex justify-between items-center bg-blue-100 text-blue-400">
      <section className="text-2xl">
        <a href="/">
          <span className="font-bold">expert</span>
          <span className="font-light">ise</span>
        </a>
      </section>
      <section className="flex items-center">
        <button
          className="px-4 py-2 hover:bg-white hover:rounded-full"
          onClick={props.showWaitlist}
        >
          Contact
        </button>
      </section>
    </header>
  );
}
