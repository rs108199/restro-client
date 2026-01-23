
const footerLinks = [
  {
    title: "Privacy Policy",
    link: "privacy-policy",
  },
  {
    title: "Legal",
    link: "legal",
  },
  {
    title: "Terms & Conditions",
    link: "terms-and-conditions",
  },
  {
    title: "Change Cookie Preferences",
    link: "change-cookie-preferences",
  },
  {
    title: "Security Alert",
    link: "security-alert",
  },
];

function Footer() {
  return (
    <div className='bg-[#2D2D2D] min-h-15 md:flex md:justify-between md:items-center text-white block px-4'>
      <div>©2026 The Imperial Sanctuary, Hotels and Resorts. All Rights Reserved.</div>
      <div className='flex'>
        {footerLinks.map((f, idx) => (<div key={`${f.title}-${idx}`} className="px-2 border-r last:border-none">
          {f.title}

        </div>))}

      </div>

    </div>
  )
}

export default Footer