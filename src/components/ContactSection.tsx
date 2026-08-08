import type { ContactInfo } from "../types";


const ContactSection = ({ contact }: { contact: ContactInfo }) => (
  <footer className="mt-14">
    <div className="border-t-2 border-border" />

    <div className="mt-8 flex flex-wrap items-end justify-between gap-10">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Contact Information
        </p>

        <p className="mt-4 text-sm">
          EMAIL:{" "}
          <a href={`mailto:${contact.email}`} className="underline underline-offset-2 hover:opacity-70 transition-opacity">
            {contact.email}
          </a>
        </p>
        <p className="mt-1 text-sm">PHONE: {contact.phone}</p>
        <p className="mt-1 text-sm">BASE: {contact.base}</p>

        <div className="mt-4 flex items-center gap-5 text-xs font-semibold uppercase tracking-wide">
          <a href={contact.github} target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
            [ Github ]
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
            [ LinkedIn ]
          </a>
        </div>
      </div>

      <div className="text-right">
        <p
          className="text-signature text-text font-signature "
          style={{ fontFamily: "var(--font-signature)" }}
        >
          {contact.signatureName}
        </p>
        <div className="mt-1 border-t border-dashed border-border-soft" />
        <p className="mt-1 text-2xs uppercase tracking-[0.15em] text-muted">
          Authorized Signature
        </p>
      </div>
    </div>

    <div className="mt-10 border-t border-border-soft pt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
      <p>
        POWERED BY{" "}
        <span
          className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          {contact.poweredByName}
        </span>
      </p>
      <p>DATE: {contact.date}</p>
    </div>
    
  </footer>
);


export default ContactSection;
