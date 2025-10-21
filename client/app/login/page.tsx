import LoginForm from "@/app/features/auth/components/LoginForm";
import Link from "next/link";
import FormButton from "@/app/features/auth/components/FormButton";

const LoginPage = () => {
    return (
        <div className="container mx-auto p-4 flex flex-col gap-4 items-center justify-center h-screen">
            <h1>Login Page</h1>
            <p>This is the login page.</p>
            <LoginForm />
            or
            <FormButton text={'registration'}/>
        </div>
    );
};

export default LoginPage;