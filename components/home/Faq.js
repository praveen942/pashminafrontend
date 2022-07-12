import React from 'react'

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: 'What’s the best thing about Switzerland?',
      answer:
        'I dont know but the flag is a big plus. Aenean commodo ligula eget dolor. Aenean massaegetAenean commodo',
    },
    {
      id: 2,
      question: 'What’s the best thing about Switzerland?',
      answer:
        'I dont know but the flag is a big plus. Aenean commodo ligula eget dolor. Aenean massaegetAenean commodo',
    },
    {
      id: 3,
      question: 'What’s the best thing about Switzerland?',
      answer:
        'I dont know but the flag is a big plus. Aenean commodo ligula eget dolor. Aenean massaegetAenean commodo',
    },
    {
      id: 4,
      question: 'What’s the best thing about Switzerland?',
      answer:
        'I dont know but the flag is a big plus. Aenean commodo ligula eget dolor. Aenean massaegetAenean commodo',
    },
    {
      id: 5,
      question: 'What’s the best thing about Switzerland?',
      answer:
        'I dont know but the flag is a big plus. Aenean commodo ligula eget dolor. Aenean massaegetAenean commodo',
    },
    {
      id: 6,
      question: 'What’s the best thing about Switzerland?',
      answer:
        'I dont know but the flag is a big plus. Aenean commodo ligula eget dolor. Aenean massaegetAenean commodo',
    },
    // More questions...
  ]
  return (
    <div className="bg-white">
      <div className="container mx-auto my-10 px-4 md:px-6 2xl:px-0">
        <h2 className="text-center font-Orpheu text-3xl md:text-4xl">
          Frequently asked questions
        </h2>
        <hr className="mt-10 mb-6 md:mb-4 border-red-900" />

        <div className="flex justify-center">
          <div className="flex items-center w-full md:w-1/2 border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 sm:text-sm">
            <input
              className="flex-1 bg-transparent focus:ring-0 focus:outline-none"
              placeholder="Search..."
            />
            <i className="pe-7s-search text-xl"></i>
          </div>
        </div>

        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 mt-4 md:mt-10">
          {faqs.map((faq) => (
            <dl key={faq.id}>
              <dt className="font-semibold text-gray-900 text-base md:text-lg">
                {faq.question}
              </dt>
              <dd className="mt-1 text-gray-500 text-sm md:text-base">{faq.answer}</dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
