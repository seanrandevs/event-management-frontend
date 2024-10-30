import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Navbar from "./Nav_bar";
import Footer from "./Footer";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

  return (
    <>
      <Navbar />
        <div className="login-container">
        <div className="login-header">Login to your account</div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" {...register("Email", {required: true})} />
        <input type="password" placeholder="Password" {...register("Password", {required: true})} />

        <input type="submit" />
        </form>
        <span>Don't have an account? <Link to="/signup">Sign up!</Link></span>
        </div>
      <Footer />
    </>
  )
}

export default LoginForm