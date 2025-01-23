import { Contact } from "./contact";

export default function index() {
  return (
    <div
      className=" bg-gray-400 flex flex-col items-center justify-center py-10"
      id="contact"
    >
      <h1 className="text-6xl font-bold text-gray-800 font-olive mb-8">
        Contact Us
      </h1>
      <div className="font-poppins">
        {Contact.map((contact) => (
          <div className="bg-gray-100 p-8 rounded-xl shadow-2xl max-w-2xl mx-auto">
            <h2 className="text-4xl text-pretty font-bold mb-4 text-center">
              {contact.title}
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-bold">
                Name: <span>{contact.name}</span>
              </span>
            </p>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-bold">
                Profession: <span>{contact.profession}</span>
              </span>
            </p>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-bold">
                Phone: <span>{contact.phone}</span>
              </span>
            </p>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-bold">
                Email: <span>{contact.email}</span>
              </span>
            </p>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-bold">
                Adress:<span>{contact.address}</span>
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
