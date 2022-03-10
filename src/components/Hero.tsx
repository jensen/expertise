interface IHeroProps {}

export default function Hero(props: IHeroProps) {
  return (
    <section className="px-6 pt-24 pb-10 bg-blue-100 bg-hero-texture">
      <div className="text-center flex flex-col space-y-4">
        <span className="text-blue-400 font-secondary text-6xl font-bold">
          Help from an expert,
          <br /> on demand.
        </span>
        <span className="text-slate-700 font-secondary text-2xl font-bold">
          Five minutes can save an hour.
          <br />
          An hour can save ten.
        </span>
      </div>
    </section>
  );
}
