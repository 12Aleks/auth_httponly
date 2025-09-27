"use client";

import { IRegisterDto, registerSchema } from "@/app/lib/zodSchema";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const RegistrationForm = () => {
    const router = useRouter();
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<IRegisterDto>({
        resolver: zodResolver(registerSchema)
    })

    // const createUser = async (formData: FormData) => {
    //     const rawData = Object.fromEntries(formData.entries());
    //
    //     // zod validation
    //     const res = registerSchema.safeParse(rawData);
    //
    //     if (!res.success) {
    //         // собрать ошибки
    //         const fieldErrors = Object.fromEntries(
    //             Object.entries(res.error.flatten().fieldErrors).map(([k, v]) => [k, v?.[0]])
    //         ) as FormErrors<IRegisterDto>;
    //         setErrors({ ...fieldErrors, message: "Validation failed" });
    //         return;
    //     }
    //
    //     setErrors({});
    //     const data = res.data;
    //
    //
    //     router.push("/");
    // };

    const createUser = async () => {


        router.push("/");
    }

    return (
        <form
            onSubmit={handleSubmit(createUser)}
            className="flex flex-col gap-5 w-64 border border-amber-50 p-5 rounded-xl text-black
            [&_input]:p-1 [&_input]:rounded [&_input]:bg-white
            ">

            <input type="text" placeholder="Name" {...register('name')}/>
            {errors.name && <p className="text-red-500 pt-1 m-0 text-sm">{errors.name.message}</p>}

            <input type="text" placeholder="Surname" {...register('surname')} />
            {errors.surname && <p className="text-red-500 pt-1 m-0 text-sm">{errors.surname.message}</p>}

            <input type="email" placeholder="Email" {...register('email')}/>
            {errors.email && <p className="text-red-500 pt-1 m-0 text-sm">{errors.email.message}</p>}

            <input type="password" placeholder="Password" {...register('password')} />
            {errors.password && <p className="text-red-500 pt-1 m-0 text-sm">{errors.password.message}</p>}

            <button type="submit" className="cursor-pointer bg-blue-500 hover:bg-blue-700 duration-200 text-white px-4 py-2 rounded">
                {isSubmitting ? "Loading..." : "Registration"}
            </button>
        </form>
    );
};

export default RegistrationForm;
