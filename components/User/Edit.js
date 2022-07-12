import React from 'react'
import { Disclosure, Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'

const Edit = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [show, setShow] = useState([])
  function handleEdit(e) {
    // console.log(e.target.id)
    if (e.target.checked) {
      let propnew = e.target.id

      setShow((show) => [...show, propnew])
    } else {
      let propremove = e.target.id
      setShow((show) => show.filter((item) => item !== propremove))
    }
  }

  return (
    <div className="bg-white">
      <div className=" w-full mb-10 px-2">
        <Tab.Group as="div" className="hidden md:block">
          <div className="border-b border-gray-200 overflow-hidden">
            <Tab.List className="flex overflow-x-scroll hidden-scrollbar justify-items-stretch">
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? 'border-red-900 cusColor'
                      : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300 ',
                    'flex-1 whitespace-nowrap px-6 py-4 border-b-2 font-medium text-lg outline-none',
                  )
                }
              >
                ACCOUNT INFORMATION
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? 'border-red-900 cusColor'
                      : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                    'flex-1 whitespace-nowrap px-6 py-4 border-b-2 font-medium text-lg outline-none',
                  )
                }
              >
                CONTACT INFORMATION / ADDRESS
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels as={Fragment}>
            <Tab.Panel className="w-full">
              <div className="flex justify-between gap-x-8 mt-6 ">
                <div className="border-black border w-1/2 text-lg  px-2 rounded-md">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    value="Dabbis"
                    title="First Name"
                    className="p-2 w-full"
                    data-validate="{required:true}"
                    aria-required="true"
                  />
                </div>
                <div className="border-black border w-1/2 text-lg  px-2 rounded-md">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    value="Lewis"
                    title="First Name"
                    className="p-2 w-full"
                    data-validate="{required:true}"
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-6 gap-y-4">
                <div className="flex items-center">
                  <input
                    id={`filter-email`}
                    type="checkbox"
                    onClick={handleEdit}
                    defaultChecked={false}
                    className="filter-property w-4 h-4 accent-maroon rounded"
                  />
                  <label
                    htmlFor={`filter-email`}
                    className="ml-3 text-lg text-gray-600 cursor-pointer"
                  >
                    Change Email
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id={`filter-password`}
                    type="checkbox"
                    onClick={handleEdit}
                    defaultChecked={false}
                    className="filter-property w-4 h-4 accent-maroon rounded"
                  />
                  <label
                    htmlFor={`filter-password`}
                    className="ml-3 text-lg text-gray-600 cursor-pointer"
                  >
                    Change Password
                  </label>
                </div>
                {(show.includes('filter-email') ||
                  show.includes('filter-password')) && (
                  <h2 className="font-semibold mb-2 font-Orpheu font-medium tracking-wide text-xl">
                    CHANGE EMAIL AND PASSWORD
                  </h2>
                )}
                {show.includes('filter-email') && (
                  <div className="sm:col-span-4 ">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mt-4"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                      />
                    </div>
                  </div>
                )}

                {show.includes('filter-password') && (
                  <div className="sm:col-span-4 ">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Current Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="current"
                        name="current"
                        type="password"
                        autoComplete="current"
                        className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mt-4"
                    >
                      New Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="new"
                        name="new"
                        type="password"
                        autoComplete="password"
                        className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                      />
                    </div>
                    <p className="ml-4 bg-pink my-2 px-2">
                      Password Strength: No Password
                    </p>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mt-4"
                    >
                      Confirm New Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="confirm"
                        name="confirm"
                        type="password"
                        autoComplete="password"
                        className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                      />
                    </div>
                  </div>
                )}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <h2 className="font-semibold mb-2 mt-6 font-Orpheu font-medium tracking-wide text-xl">
                CONTACT INFORMATION
              </h2>
              <div className="flex justify-between gap-x-8  ">
                <div className="border-black border w-1/2 text-lg  px-2 rounded-md">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    value="Dabbis"
                    title="First Name"
                    className="p-2 w-full"
                    data-validate="{required:true}"
                    aria-required="true"
                  />
                </div>
                <div className="border-black border w-1/2 text-lg  px-2 rounded-md">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    value="Lewis"
                    title="First Name"
                    className="p-2 w-full"
                    data-validate="{required:true}"
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="current"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <div className="mt-1">
                  <input
                    id="current"
                    name="current"
                    type="text"
                    autoComplete="current"
                    className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                  />
                </div>
                <label
                  htmlFor="new"
                  className="block text-sm font-medium text-gray-700 mt-4"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                  />
                </div>
                <label
                  htmlFor="fax"
                  className="block text-sm font-medium text-gray-700 mt-4"
                >
                  Fax
                </label>
                <div className="mt-1">
                  <input
                    id="fax"
                    name="fax"
                    type="text"
                    autoComplete="fax"
                    className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                  />
                </div>
              </div>
              <h2 className="font-semibold mb-2 mt-6 font-Orpheu font-medium tracking-wide text-xl">
                ADDRESS
              </h2>

              <div className="mt-4">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>
                <div className="mt-1 ">
                  <input
                    id="street-address"
                    name="street-address"
                    type="text"
                    autoComplete="street-address"
                    className="shadow-sm border-black border mb-1  px-4 py-2 w-full sm:text-lg  rounded-md"
                  />
                  <input
                    id="street-address"
                    name="street-address"
                    type="text"
                    autoComplete="street-address"
                    className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                  />
                </div>
                <label
                  htmlFor="address-level2"
                  className="block text-sm font-medium text-gray-700 mt-4"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    id="address-level2"
                    name="address-level2"
                    type="text"
                    autoComplete="address-level2"
                    className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                  />
                </div>
                <label
                  htmlFor="address-level1"
                  className="block text-sm font-medium text-gray-700 mt-4"
                >
                  State/Province
                </label>
                <div className="mt-1 ">
                  <select
                    id="address-level1"
                    name="address-level1"
                    autoComplete="address-level1"
                    className="shadow-sm border-black border   px-3 py-2 w-full sm:text-lg  rounded-md"
                  >
                    <option>New York</option>
                    <option>Lowa</option>
                    <option>Georgia</option>
                  </select>
                </div>

                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700 mt-4"
                >
                  Zip/Postal Code
                </label>
                <div className="mt-1">
                  <input
                    id="postal-code"
                    name="postal-code"
                    type="text"
                    autoComplete="postal-code"
                    className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                  />
                </div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mt-4"
                >
                  Country
                </label>
                <div className="mt-1 ">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <div className="sm:px-2 py-3 md:hidden">
          <Disclosure as="div">
            {({ open }) => (
              <>
                <h3 className="text-base whitespace-normal sm:text-2xl  font-semibold  uppercase ">
                  <Disclosure.Button className="w-full flex items-center justify-between ">
                    <h2 className="font-bold mb-2 mt-6 font-Orpheu font-medium tracking-wide text-base text-maroon">
                      ACCOUNT INFORMATION
                    </h2>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel>
                  <div className="w-full">
                    <div className="flex justify-between gap-x-8 mt-6 ">
                      <div className="border-black border w-1/2 text-lg  px-2 rounded-md">
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="First Name"
                          value="Dabbis"
                          title="First Name"
                          className="p-2 w-full"
                          data-validate="{required:true}"
                          aria-required="true"
                        />
                      </div>
                      <div className="border-black border w-1/2 text-lg  px-2 rounded-md">
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="First Name"
                          value="Lewis"
                          title="First Name"
                          className="p-2 w-full"
                          data-validate="{required:true}"
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mt-6 gap-y-4">
                      <div className="flex items-center">
                        <input
                          id={`filter-email`}
                          type="checkbox"
                          onClick={handleEdit}
                          defaultChecked={false}
                          className="filter-property w-4 h-4 accent-maroon rounded"
                        />
                        <label
                          htmlFor={`filter-email`}
                          className="ml-3 text-lg text-gray-600  pointer-events-none"
                        >
                          Change Email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id={`filter-password`}
                          type="checkbox"
                          onClick={handleEdit}
                          defaultChecked={false}
                          className="filter-property w-4 h-4 accent-maroon rounded"
                        />
                        <label
                          htmlFor={`filter-password`}
                          className="ml-3 text-lg text-gray-600 pointer-events-none"
                        >
                          Change Password
                        </label>
                      </div>
                      {(show.includes('filter-email') ||
                        show.includes('filter-password')) && (
                        <h2 className="font-semibold mb-2 font-Orpheu font-medium tracking-wide text-base">
                          CHANGE EMAIL AND PASSWORD
                        </h2>
                      )}
                      {show.includes('filter-email') && (
                        <div className="sm:col-span-4 ">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                            />
                          </div>
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            Password
                          </label>
                          <div className="mt-1">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="password"
                              className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                            />
                          </div>
                        </div>
                      )}

                      {show.includes('filter-password') && (
                        <div className="sm:col-span-4 ">
                          <label
                            htmlFor="current"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Current Password
                          </label>
                          <div className="mt-1">
                            <input
                              id="current"
                              name="current"
                              type="password"
                              autoComplete="current"
                              className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                            />
                          </div>
                          <label
                            htmlFor="new"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            New Password
                          </label>
                          <div className="mt-1">
                            <input
                              id="new"
                              name="new"
                              type="password"
                              autoComplete="password"
                              className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                            />
                          </div>
                          <p className="ml-4 bg-pink my-2 px-2">
                            Password Strength: No Password
                          </p>
                          <label
                            htmlFor="confirm"
                            className="block text-sm font-medium text-gray-700 mt-4"
                          >
                            Confirm New Password
                          </label>
                          <div className="mt-1">
                            <input
                              id="confirm"
                              name="confirm"
                              type="password"
                              autoComplete="password"
                              className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div">
            {({ open }) => (
              <>
                <h3 className="text-base whitespace-normal sm:text-2xl  font-semibold  uppercase ">
                  <Disclosure.Button className="w-full flex items-center justify-between ">
                    <h2 className="font-bold mb-2 mt-6 font-Orpheu font-medium tracking-wide text-base text-maroon">
                      CONTACT INFORMATION / ADDRESS
                    </h2>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel>
                  <div>
                    <h2 className="font-semibold mb-2 mt-6 font-Orpheu font-medium tracking-wide text-base">
                      CONTACT INFORMATION
                    </h2>
                    <div className="flex justify-between gap-x-8  ">
                      <div className="border-black border w-1/2 text-lg  px-2 rounded-md">
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="First Name"
                          value="Dabbis"
                          title="First Name"
                          className="p-2 w-full"
                          data-validate="{required:true}"
                          aria-required="true"
                        />
                      </div>
                      <div className="border-black border w-1/2 text-lg  px-2 rounded-md">
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="First Name"
                          value="Lewis"
                          title="First Name"
                          className="p-2 w-full"
                          data-validate="{required:true}"
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company
                      </label>
                      <div className="mt-1">
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="company"
                          className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                        />
                      </div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        Phone Number
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                        />
                      </div>
                      <label
                        htmlFor="fax"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        Fax
                      </label>
                      <div className="mt-1">
                        <input
                          id="fax"
                          name="fax"
                          type="text"
                          autoComplete="fax"
                          className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                        />
                      </div>
                    </div>
                    <h2 className="font-semibold mb-2 mt-6 font-Orpheu font-medium tracking-wide text-xl">
                      ADDRESS
                    </h2>

                    <div className="mt-4">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street Address
                      </label>
                      <div className="mt-1 ">
                        <input
                          id="street-address"
                          name="street-address"
                          type="text"
                          autoComplete="street-address"
                          className="shadow-sm border-black border mb-1  px-4 py-2 w-full sm:text-lg  rounded-md"
                        />
                        <input
                          id="street-address"
                          name="street-address"
                          type="text"
                          autoComplete="street-address"
                          className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                        />
                      </div>
                      <label
                        htmlFor="address-level2"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        City
                      </label>
                      <div className="mt-1">
                        <input
                          id="address-level2"
                          name="address-level2"
                          type="text"
                          autoComplete="address-level2"
                          className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                        />
                      </div>
                      <label
                        htmlFor="address-level1"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        State/Province
                      </label>
                      <div className="mt-1 ">
                        <select
                          id="address-level1"
                          name="address-level1"
                          autoComplete="address-level1"
                          className="shadow-sm border-black border   px-3 py-2 w-full sm:text-lg  rounded-md"
                        >
                          <option>New York</option>
                          <option>Lowa</option>
                          <option>Georgia</option>
                        </select>
                      </div>

                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        Zip/Postal Code
                      </label>
                      <div className="mt-1">
                        <input
                          id="postal-code"
                          name="postal-code"
                          type="text"
                          autoComplete="postal-code"
                          className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                        />
                      </div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mt-4"
                      >
                        Country
                      </label>
                      <div className="mt-1 ">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="shadow-sm border-black border   px-4 py-2 w-full sm:text-lg  rounded-md"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  )
}

export default Edit
