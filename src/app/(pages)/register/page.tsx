"use client";
import FormButton from "@/app/components/Form/FormButton";
import FormInput from "@/app/components/Form/FormInput";
import Title from "@/app/components/title/Title";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authFirebase, dbFirebase } from "@/app/FireBaseConfig";
import { set, ref } from "firebase/database";
import { useRouter } from "next/navigation";
export default function LoginPage() {
    const router=useRouter();
    const handleRegister = (event: any) => {
        event.preventDefault();
        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(authFirebase, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                set(ref(dbFirebase, 'users/' + user.uid), {
                    fullName: fullName
                }).then(() => {
                    router.push("/");
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <div className="w-[500px] mx-auto mt-[60px]">
                <Title text="Đăng Ký Tài Khoản" className="text-center" />
                <form action="" onSubmit={handleRegister}>
                    <FormInput label="Họ tên" type="text" name="fullName" id="username" placeholder="Ví dụ:Le Van A" required={true} />
                    <FormInput label="Email" type="email" name="email" id="email" placeholder="Ví dụ:levana@gmail.com" required={true} />
                    <FormInput label="Mật khẩu" type="password" name="password" id="password" required={true} />
                    <FormButton text="Đăng ký" />
                </form>
            </div>
        </>
    )
}