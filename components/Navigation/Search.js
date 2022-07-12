import { Combobox, Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { UsersIcon } from '@heroicons/react/outline'
const people = [{ id: 1, name: 'Leslie Alexander', url: '#' }]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [query, setQuery] = useState('')

  const [open, setOpen] = useState(true)

  const filteredPeople =
    query === ''
      ? []
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className="relative flex-1 ">
      <Transition.Root
        show={open}
        as={Fragment}
        afterLeave={() => setQuery('')}
        appear
      >
        <div className="inset-0 z-10 overflow-y-auto  ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <span className="text-2xl font-bold font-Orpheu">
                So, what are you looking for?
              </span>
              <Combobox onChange={(person) => (window.location = person.url)}>
                <Combobox.Input
                  className="w-full border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm mt-2"
                  placeholder="Search..."
                  onChange={(event) => setQuery(event.target.value)}
                />

                {filteredPeople.length > 0 && (
                  <Combobox.Options
                    static
                    className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                  >
                    {filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        value={person}
                        className={({ active }) =>
                          classNames(
                            'cursor-default select-none px-4 py-2',
                            active && 'bg-indigo-600 text-white',
                          )
                        }
                      >
                        {person.name}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}

                {query !== '' && filteredPeople.length === 0 && (
                  <div className="py-14 px-4 text-center sm:px-14">
                    <UsersIcon
                      className="mx-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm text-gray-900">
                      No product found using that search term.
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Transition.Root>
    </div>
  )
}
