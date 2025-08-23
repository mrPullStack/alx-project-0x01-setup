// components/common/UserModal.tsx
import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

type FormState = Omit<UserData, "id">;

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    nestedPath?: string[]
  ) => {
    const { name, value } = e.target;

    if (nestedPath && nestedPath.length) {
      // Immutable deep update without using `any`
      setFormData((prev) => {
        // Deep clone to keep it simple/robust for nested updates
        const updated: FormState = JSON.parse(JSON.stringify(prev)) as FormState;

        let cursor: Record<string, unknown> =
          (updated as unknown) as Record<string, unknown>;

        for (let i = 0; i < nestedPath.length - 1; i++) {
          cursor = cursor[nestedPath[i]] as Record<string, unknown>;
        }
        cursor[nestedPath[nestedPath.length - 1]] = value;

        return updated;
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    const newUser: UserData = {
      id: Date.now(), // mock unique ID
      ...formData,
    };
    onSubmit(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-[500px] p-6">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2"
        />

        {/* Address */}
        <input
          type="text"
          placeholder="Street"
          value={formData.address.street}
          onChange={(e) => handleChange(e, ["address", "street"])}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Suite"
          value={formData.address.suite}
          onChange={(e) => handleChange(e, ["address", "suite"])}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="City"
          value={formData.address.city}
          onChange={(e) => handleChange(e, ["address", "city"])}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Zipcode"
          value={formData.address.zipcode}
          onChange={(e) => handleChange(e, ["address", "zipcode"])}
          className="border rounded p-2 w-full mb-2"
        />

        {/* Geo */}
        <input
          type="text"
          placeholder="Latitude"
          value={formData.address.geo.lat}
          onChange={(e) => handleChange(e, ["address", "geo", "lat"])}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Longitude"
          value={formData.address.geo.lng}
          onChange={(e) => handleChange(e, ["address", "geo", "lng"])}
          className="border rounded p-2 w-full mb-2"
        />

        {/* Phone & Website */}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-2"
        />

        {/* Company */}
        <input
          type="text"
          placeholder="Company Name"
          value={formData.company.name}
          onChange={(e) => handleChange(e, ["company", "name"])}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Catch Phrase"
          value={formData.company.catchPhrase}
          onChange={(e) => handleChange(e, ["company", "catchPhrase"])}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Business Specialty"
          value={formData.company.bs}
          onChange={(e) => handleChange(e, ["company", "bs"])}
          className="border rounded p-2 w-full mb-2"
        />

        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
