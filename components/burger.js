export function Burger({ open, setOpen }) {
  return (
    <>
      <button
        type="button"
        aria-controls="global-nav"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>メニューを開閉する</span>
      </button>
    </>
  );
}
