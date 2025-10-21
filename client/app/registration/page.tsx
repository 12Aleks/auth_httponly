import RegistrationForm from "@/app/features/auth/components/RegistrationForm";
import FormButton from "@/app/features/auth/components/FormButton";

const Page = () => {
    return (
        <div className="container mx-auto p-4 flex flex-col gap-4 items-center justify-center h-screen">
            <h1>Registration form</h1>
            <RegistrationForm />
            or
            <FormButton text={'login'}/>
        </div>

    );
};

export default Page;