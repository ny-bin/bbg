export function Burger({ open, setOpen }) {
  return (
    <>
      <button
        type="button"
        className="button hamburger"
        aria-controls="global-nav"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="hamburgerLine">
          <span className="visuallyHidden">メニューを開閉する</span>
        </span>
      </button>
    </>
  );
}
