"use client";
import Form from "next/form";
import { useState } from "react";
import { IRegisterDto, registerSchema } from "@/app/lib/zodSchema";
import {useRouter} from "next/navigation";

type FormErrors<T> = Partial<Record<keyof T, string>> & { message?: string };

const RegistrationForm = () => {
    const [errors, setErrors] = useState<FormErrors<IRegisterDto>>({});
    const router = useRouter();

    const createUser = async (formData: FormData) => {
        const rawData = Object.fromEntries(formData.entries());

        // zod validation
        const res = registerSchema.safeParse(rawData);

        if (!res.success) {
            // собрать ошибки
            const fieldErrors = Object.fromEntries(
                Object.entries(res.error.flatten().fieldErrors).map(([k, v]) => [k, v?.[0]])
            ) as FormErrors<IRegisterDto>;
            setErrors({ ...fieldErrors, message: "Validation failed" });
            return;
        }

        setErrors({});
        const data = res.data;





        router.push("/");
    };

    return (
        <Form
            action={createUser}
            className="flex flex-col gap-5 w-64 border border-amber-50 p-5 rounded-xl text-black
            [&_input]:p-1 [&_input]:rounded [&_input]:bg-white
            "
        >
            <input type="text" name="name" placeholder="Name" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input type="text" name="surname" placeholder="Surname" />
            {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}

            <input type="email" name="email" placeholder="Email" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input type="password" name="password" placeholder="Password"  />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}


            {errors.message && <p className="text-red-600 font-medium">{errors.message}</p>}

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 duration-200 text-white px-4 py-2 rounded">
                Register
            </button>
        </Form>
    );
};

export default RegistrationForm;
