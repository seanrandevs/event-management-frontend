import { Link} from "react-router-dom";
import { useForm } from 'react-hook-form';
import Navbar from "./Nav_bar";
import Footer from "./Footer";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

  return (
    <>
    <Navbar />
    <div className="login-container">
    <div className="login-header">Lets get started! Create your account</div>

    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="password" placeholder="Password" {...register("Password", {required: true})} />
      <input type="password" placeholder="Confirm Password" {...register("Confirm Password", {required: true})} />

      <input type="submit" />
    </form>
    <span>Already have an account? <Link to="/login">Login!</Link> </span>
  </div>
  <Footer />
  </>
  )
}

export default Signup