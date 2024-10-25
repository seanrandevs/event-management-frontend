

const SignupPopup = (isOpen, onClose) => {

        if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Sign up for Full Access</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignupPopup