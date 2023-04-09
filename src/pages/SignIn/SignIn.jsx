import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import {
  Container,
  Wrapper,
  Title,
  Input,
  SubTitle,
  Button,
  More,
  Links,
  Link,
} from "./style";
import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { REACT_APP_BASE_URL } from "../../URLData";


const SignIn = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(`${REACT_APP_BASE_URL}/auth/signin`, {
        name,
        password,
      });
      dispatch(loginSuccess(res.data));
      localStorage.setItem("Authorization", res.data.token);
      setName("");
      setPassword("");
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${REACT_APP_BASE_URL}/auth/signup`, {
        name,
        email,
        password,
      });
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post(`${REACT_APP_BASE_URL}/auth/google`, {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            dispatch(loginSuccess(res.data));
            localStorage.setItem("Authorization", res.data.token);

            navigate("/");
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>To be continue to YouTube😊...</SubTitle>
        <Input
          placeholder='Username'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        <Button onClick={signInWithGoogle}>SignIn with Google</Button>
        <Title>or</Title>
        <Input
          placeholder='Username'
          name='name'
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder='Email'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignup}>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
