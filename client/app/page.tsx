import AboutUser from "@/app/features/auth/components/AboutUser";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <div>
            <Header/>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[calc(100vh-6rem)] p-8 pb-20 gap-16 sm:p-20">
                    <AboutUser/>
                </div>

            </main>
            <Footer/>
        </div>
    );
}
