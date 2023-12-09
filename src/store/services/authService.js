// authService.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mainurl } from "../../uitls/mainurl";


const authService = createApi({
    reducerPath: "authService",
    baseQuery: fetchBaseQuery({
        baseUrl: mainurl.HOST,
        prepareHeaders: (Headers, { getState }) => {
            try {
                const token = getState().auth.token;
                if (token) {
                    Headers.set('authorization', `Bearer ${token}`);
                }
                return Headers;
            } catch (error) {
                console.log(error, 'dddddddddd')
            }

        }
    }),
    endpoints: (builder) => ({
        userlogin: builder.mutation({
            query: (login) => {
                return {
                    url: '/login',
                    method: 'post',
                    body: login
                };
            }
        })
    })
});

export const { useUserloginMutation } = authService;
export default authService
