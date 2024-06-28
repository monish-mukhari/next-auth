"use client";
import { signIn, signOut, useSession } from "next-auth/react"
export function AppBar() {
    const session = useSession();
    return <div>
        <div className="flex justify-between px-8 py-4 border-b border-gray-700 items-center">
            <div className="font-bold text-2xl">
                auth
            </div>

            <div className="hidden md:flex justify-center gap-3 visible">
                <div className="py-2 px-3 rounded-md font-semibold bg-blue-500 hover:bg-blue-600 transition-all text-sm">
                    <button onClick={() => signIn()}>Signin</button>
                </div>

                <div className="border border-gray-700 py-2 px-3 rounded-md font-semibold hover:bg-gray-700 transition-all text-sm">
                    <button onClick={() => signOut()}>Logout</button>
                </div>
            </div>
        </div>

        <div className="p-4">
            {JSON.stringify(session)}
        </div>
    </div> 
}






{/* <button onClick={() => signIn()}>Signin</button>
        <button onClick={() => signOut()}>Sign out</button> */}

        {/* {JSON.stringify(session)} */}