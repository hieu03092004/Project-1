"use client";
import FormButton from "@/app/components/Form/FormButton";
import FormInput from "@/app/components/Form/FormInput";
import Title from "@/app/components/title/Title";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "@/app/FireBaseConfig";
import {useRouter} from "next/navigation";
export default function LoginPage() {
    const router=useRouter();
    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as HTMLFormElement;
        const email: string = (target.email as HTMLInputElement).value;
        const password: string = (target.password as HTMLInputElement).value;
        signInWithEmailAndPassword(authFirebase, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    router.push("/");
                }
            })
            .catch((error) => {
                alert("Tài khoản hoặc mật khẩu không chính xác!");
            });


    }
    return (
        <>
            <div className="w-[500px] mx-auto mt-[60px]">
                <Title text="Đăng nhập tài khoản" className="text-center" />
                <form className="" onSubmit={handleLogin} method="POST">
                    <FormInput label="Email" type="email" name="email" id="email" placeholder="Ví dụ:levana@gmail.com" required={true} />
                    <FormInput label="Mật khẩu" type="password" name="password" id="password" required={true} />
                    <FormButton text="Đăng nhập" />
                </form>
            </div>
        </>
    )
}