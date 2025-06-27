

export default function Sidenav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <div className="hidden h-auto w-full grow rounded-md bg-[#181717] md:block"></div>
                {/* <form
                    action={async () => {
                        'use server';
                        await signOut({ redirectTo: '/' });
                    }}
                > */}
                    <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-[#181717] p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
                        {/* <PowerIcon className="w-6" /> */}
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                {/* </form> */}
            </div>
        </div>
    )
}
