import SignIn from '@/components/Sign-in';
import { requireGuest } from "@/lib/session";

export default async function AuthPage() {
    await requireGuest();
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <SignIn />
        </div>
    );
}
