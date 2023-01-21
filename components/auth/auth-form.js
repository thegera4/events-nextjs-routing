import { useState, useRef, useContext } from 'react';
import classes from './auth-form.module.css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Button from '../ui/button';
import NotificationContext from '../../store/notification-context';

async function createUser(email, password){
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
  return data;
}

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const notificationCtx = useContext(NotificationContext);

  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event){
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    //optional: add validation
    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword
      });
      if (!result.error) {
        //set auth state (context, redux)
        //setIsLoading(false);
        router.replace('/')
      }
    } else {
      try{
        await createUser(enteredEmail, enteredPassword);
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Account created successfully!',
          status: 'success',
        });
        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
        setIsLogin(true);
      } catch (error) {
        console.error(error);
        notificationCtx.showNotification({
          title: 'Error!',
          message: 'Something went wrong, try again later!',
          status: 'error',
        });
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <h4>To create a new event, you need to login.</h4>
      <h4>If you do not have an account, please click on "Create new account"</h4>
      <h5>(You can use fake accounts for example abd@test.com) and a password of at least 6 characters</h5>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          <Button>{isLogin ? 'Login' : 'Create Account'}</Button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;