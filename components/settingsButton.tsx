export default function settingButton() {
  return (
    <>
    <div>
        <input type="checkbox" id="toggle" aria-hidden="true" />
        <label htmlFor="toggle" className="nav__icon" aria-hidden="true">
          Open settings
          <span className="nav__icon-line"></span>
          <span className="nav__icon-line"></span>
          <span className="nav__icon-line"></span>
        </label>
    </div>
    <div>

    </div>
    </>
  )
}
