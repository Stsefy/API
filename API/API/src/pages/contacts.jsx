import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContact } from "../services/api";

export default function Contact() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getContact(id)
      .then((data) => {
        setContact(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading contact details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!contact) return <div>Contact not found</div>;

  return (
    <div className="contact-details">
      <h2>{contact.name}</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p>
          <strong>Website:</strong> {contact.website}
        </p>
        <p>
          <strong>Company:</strong> {contact.company.name}
        </p>
        <p>
          <strong>Address:</strong>
        </p>
        <address>
          {contact.address.street}
          <br />
          {contact.address.suite}
          <br />
          {contact.address.city}, {contact.address.zipcode}
        </address>
      </div>
    </div>
  );
}
