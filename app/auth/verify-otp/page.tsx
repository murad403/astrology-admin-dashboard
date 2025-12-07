"use client"
import Image from 'next/image'
import logo from '../../../public/logo.png'
import BackButton from '@/app/componensts/button/BackButton'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

const VerifyOtp = () => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const router = useRouter();
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const [otpError, setOtpError] = useState<string>("");

    const [timeLeft, setTimeLeft] = useState<number>(30);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((t) => t - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);
    // console.log(timeLeft)

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!/^\d*$/.test(value)) return;

        setOtp((prev) => {
            const newOtp = [...prev];
            newOtp[index] = value.slice(-1);
            return newOtp;
        });
        setOtpError("");

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const onsubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const originalOtp = otp.join("");
        const emptyIndex = otp.findIndex(digit => digit === "");
        if (emptyIndex !== -1) {
            setOtpError("Please fill all OTP fields");
            inputRefs.current[emptyIndex]?.focus();
            return;
        }
        console.log("Submitted OTP:", originalOtp);
        router.push('/auth/change-password')
    };

    const handleResendCode = () => {
        console.log("Resend code clicked");
        setTimeLeft(30);
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-[540px] bg-common p-7 rounded-xl flex flex-col justify-between items-center text-white">
                <Image src={logo} alt="logo" width={150} height={150} className="mb-6" />

                <div className='flex w-full items-center mb-6'>
                    <BackButton text='Verify OTP' />
                </div>

                <div className="w-full">
                    <p className='font-medium text-[16px] text-gray-400 mb-6'>
                        An OTP has been sent to your email, please enter it below to verify your identity.
                    </p>

                    <form onSubmit={onsubmit}>
                        <div className='flex justify-center gap-3 mb-4'>
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    className="size-[70px] text-center border-2 rounded-xl text-3xl font-bold bg-transparent text-white border-gray-600 focus:border-main focus:outline-none transition-all"
                                    ref={(el) => { inputRefs.current[i] = el; }}
                                    onChange={(e) => handleChange(i, e)}
                                    onKeyDown={(e) => handleKeyDown(i, e)}
                                />
                            ))}
                        </div>

                        {otpError && (
                            <p className='text-sm text-red-500 mb-4'>{otpError}</p>
                        )}

                        <div className='flex justify-between items-center mb-8'>
                            <p className='font-medium text-[16px] text-title'>{`Don't`} receive the code?</p>
                            {
                                timeLeft > 0 ?
                                    <p className='text-[16px] text-title'>Resend in {timeLeft}s</p> :
                                    <button
                                        type="button"
                                        onClick={handleResendCode}
                                        className='font-medium text-[16px] text-main cursor-pointer'
                                    >
                                        Resend
                                    </button>
                            }

                        </div>

                        <button
                            type="submit"
                            className="bg-main w-full text-white rounded-xl py-4 text-lg font-semibold cursor-pointer">
                            Confirm
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyOtp