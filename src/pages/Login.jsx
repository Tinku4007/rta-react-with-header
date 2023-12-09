import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidation } from '../uitls/validation/FormValidation';
import { useUserloginMutation } from '../store/services/authService';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../store/slice/authSlice';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginValidation) })
    const navigate = useNavigate();
    const [userLogin, { data, error }] = useUserloginMutation();
    const dispatch = useDispatch();

    const onSubmit = async (dataa) => {
        try {
            const { data, error } = await userLogin(dataa)
            const { data: responseData, error: responseError } = await userLogin(dataa);
            if (responseError) {
                console.log(responseError, 'login response error');
            } else {
                dispatch(setUser({ accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikphc3ByZWV0IHNpbmdoIiwicm9sZXMiOlsidXNlciJdfQ.c2Mc4z9SKedAj1eh1Ka9XP9QWsPDW1bgtaeROlXwYZg' }));
                navigate('dashboard');
            }

        } catch (error) {
            console.log(error, 'error login api hit')
        }
    };
    
    return (
        <div>
            {/* <button onClick={test}>login button demo</button> */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input type="email" placeholder='email' id="email" {...register('email')} /><br />
                <p>{errors?.email?.message}</p>
                <input type="text" placeholder='name' id="password" {...register('password')} />
                <p>{errors?.password?.message}</p>
                <input type="submit" name="" id="" />
            </form>
        </div>
    )
}

export default Login