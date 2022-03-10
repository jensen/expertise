interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <footer className="h-full px-4 pt-4 pb-8 bg-footer-texture flex justify-center items-end">
      <span className="text-white">
        made by <a href="https://github.com/jensen">@jensen</a>
      </span>
    </footer>
  );
}
