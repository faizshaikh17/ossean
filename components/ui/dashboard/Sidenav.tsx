import NavLinks from "./NavLinks";
export default function Sidenav() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 border-r border-neutral-700/60 px-6">
      <div className="flex h-full flex-row justify-between md:flex-col md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md md:block">
          <NavLinks />
        </div>

        {/* <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        > */}
        <button className="flex items-center w-full rounded-md hover:bg-neutral-800 text-sm font-medium md:px-3 md:py-1 justify-center gap-2 md:justify-start">
          {/* <PowerIcon className="w-6" /> */}
          <div className="hidden md:block">Sign Out</div>
        </button>
        {/* </form> */}
      </div>
    </aside>
  );
}
