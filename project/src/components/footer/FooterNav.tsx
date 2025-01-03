import React from 'react';

const navigation = {
  Products: ['Forged Series', 'Monoblock', 'Custom Works', 'Limited Editions'],
  Company: ['About Us', 'Sustainability', 'Technology', 'Partners'],
  Support: ['Contact', 'FAQ', 'Shipping', 'Returns'],
};

const FooterNav = () => (
  <nav className="grid grid-cols-2 md:grid-cols-3 gap-8">
    {Object.entries(navigation).map(([title, items]) => (
      <div key={title}>
        <h3 className="font-display text-sm text-white tracking-wider mb-4">
          {title}
        </h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors text-sm"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </nav>
);

export default FooterNav;