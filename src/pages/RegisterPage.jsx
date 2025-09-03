import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { registerUser } from "../features/auth/registerSlice";
import { useGoogleLogin } from "@react-oauth/google";
import { loginWithGoogle } from "../features/auth/loginSlice";
import { EyeIcon, EyeSlashIcon, UserIcon, KeyIcon } from "@heroicons/react/24/outline"; // icons
const RegisterPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { loading, error } = useAppSelector((state) => state.register);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await dispatch(registerUser({ email, password }));
            if (registerUser.fulfilled.match(result)) {
                alert("Registration successful! You can now log in.");
                navigate("/login");
            }
        }
        catch (err) {
            console.error(err);
        }
    };
    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const access_token = tokenResponse.access_token;
                await dispatch(loginWithGoogle(access_token)).unwrap();
                navigate("/");
            }
            catch (err) {
                console.error("Google login failed:", err);
            }
        },
        onError: (err) => console.error("Google login failed:", err),
    });
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: _jsxs("div", { className: "bg-white p-8 rounded-xl shadow-lg w-full max-w-md", children: [_jsx("h1", { className: "text-3xl font-bold mb-6 text-center text-gray-800", children: "Register" }), error && _jsx("p", { className: "text-red-500 mb-4 text-center", children: error }), _jsxs("button", { onClick: () => googleLogin(), className: "w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition mb-6", children: [_jsx("img", { src: "/google-logo.png", alt: "Google", className: "h-5 w-5 mr-2" }), "Continue with Google"] }), _jsxs("div", { className: "flex items-center my-4", children: [_jsx("hr", { className: "flex-grow border-gray-300" }), _jsx("span", { className: "mx-2 text-gray-400", children: "OR" }), _jsx("hr", { className: "flex-grow border-gray-300" })] }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "relative mb-4", children: [_jsx(UserIcon, { className: "h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" }), _jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400", required: true })] }), _jsxs("div", { className: "relative mb-4", children: [_jsx(KeyIcon, { className: "h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" }), _jsx("input", { type: showPassword ? "text" : "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full pl-10 pr-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400", required: true }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700", children: showPassword ? (_jsx(EyeSlashIcon, { className: "h-5 w-5" })) : (_jsx(EyeIcon, { className: "h-5 w-5" })) })] }), _jsx("button", { type: "submit", disabled: loading, className: "w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mb-4", children: loading ? "Registering..." : "Register" })] }), _jsxs("p", { className: "text-center text-gray-500 text-sm", children: ["Already have an account?", " ", _jsx("span", { onClick: () => navigate("/login"), className: "text-blue-600 hover:underline cursor-pointer", children: "Login" })] })] }) }));
};
export default RegisterPage;
