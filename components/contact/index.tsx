import { Contact } from "./contact";

export default function Index() {
  return (
    <div
      className="bg-gray-400 flex flex-col items-center h-auto justify-center py-10"
      id="contact"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 font-olive mb-8 text-center">
        Contact Us
      </h1>
      <div className="font-poppins w-full px-4">
        {Contact.map((contact) => (
          <div
            key={contact.id}
            className="bg-gray-100 p-6 md:p-8 rounded-xl shadow-2xl mx-auto max-w-full md:max-w-2xl mb-6 md:mb-8"
          >
            <h2 className="text-2xl md:text-4xl text-pretty font-bold mb-4 text-center">
              {contact.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              <span className="font-bold">Name: </span>
              <span>{contact.name}</span>
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              <span className="font-bold">Profession: </span>
              <span>{contact.profession}</span>
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              <span className="font-bold">Phone: </span>
              <span>{contact.phone}</span>
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              <span className="font-bold">Email: </span>
              <span>{contact.email}</span>
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-2 break-words">
              <span className="font-bold">Address: </span>
              <span>{contact.address}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
