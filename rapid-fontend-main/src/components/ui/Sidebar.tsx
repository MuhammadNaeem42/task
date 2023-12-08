import Image from "next/image";
import {
  Cog6ToothIcon,
  PlusCircleIcon,
  CreditCardIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";

const generalMenuItems = [
  {
    name: "Search",
    icon: <MagnifyingGlassIcon className="w-6 h-6 inline mr-2 text-gray-500" />
  },
  {
    name: "Billing",
    icon: <CreditCardIcon className="w-6 h-6 inline mr-2 text-gray-500" />
  }
];

const projectsMenuItems = [
  {
    name: "Orbital Oddesy",
    icon: CreditCardIcon
  },
  {
    name: "Digital Product Launch",
    icon: CreditCardIcon
  },
  {
    name: "Brand Refresh",
    icon: CreditCardIcon
  },
  {
    name: "Social Media Strategy",
    icon: CreditCardIcon
  }
];

function renderIcon(IconComponent: any) {
  return <IconComponent className="w-6 h-6 inline mr-2 text-gray-500" />;
}
function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open text-[#E8E9E9]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content items-center justify-center">
        {/* Page content here */}
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 flex flex-col gap-10  my-10 mx-2 rounded-xl bg-[#0D0F10] ">
          {/* Main item: General */}

          <div className="p-3 flex flex-row items-center border-b border-gray-200">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt="Profile Pic"
              className="w-12 h-12 rounded-md"
            />
            <div className="ml-4 flex-1">
              <h2 className="card-title text-base">TestSpace</h2>
              <p className="text-xs ">15 Members</p>
            </div>
            <div className="card-actions">
              <ChevronDownIcon className="w-6 h-6" />
            </div>
          </div>
          <div>
            <li>
              <a className="uppercase text-gray-500">General</a>
              <ul className=" flex flex-col gap-2 font-semibold">
                <li>
                  <a className="">
                    <MagnifyingGlassIcon className="w-6 h-6 inline mr-2 text-gray-500" />
                    Search
                  </a>
                </li>
                <li>
                  <a>
                    <CreditCardIcon className="w-6 h-6 inline mr-2 text-gray-500" />
                    Billing
                  </a>
                </li>
              </ul>
            </li>

            {/* Main item: Projects */}
            <li>
              <a className="uppercase text-gray-500">Projects</a>
              <ul className=" flex flex-col gap-2 font-semibold">
                {projectsMenuItems.map((item, index) => (
                  <li key={index} className="flex flex-row items-center">
                    <a>
                      {renderIcon(item.icon)}
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Main item: Add new projects */}
            <li>
              <a>
                <PlusCircleIcon className="w-6 h-6 inline mr-2 text-gray-500" />
                Add new projects
              </a>
            </li>
          </div>
          <div className="shadow-md rounded-custom mt-32 border-t border-glass-stroke bg-glass-fill">
            <div className=" p-4 flex flex-row items-center">
              <img
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                alt="Profile Pic"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4 flex-1">
                <h2 className="card-title text-base">User Name</h2>
                <p className="text-xs ">Account Type</p>
              </div>
              <div className="card-actions">
                <Cog6ToothIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
