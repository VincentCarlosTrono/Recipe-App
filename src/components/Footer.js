import React from "react";
import styled from "styled-components";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  const footerInfos = [
    {
      title: "About",
      info1: "About us",
      info2: "Features",
      info3: "News & Blogs",
    },
    {
      title: "Contact",
      info1: "012-345-56",
      info2: "Delicious@email.com",
      info3: "+988332211",
    },
    {
      title: "Support",
      info1: "FAQs",
      info2: "Support Center",
      info3: "Contact us",
    },
  ];

  return (
    <div>
      <StyleFooter>
        <div>
          <h1>Delicious</h1>
          <p>We can provides you the Recipes of the Food you wanted to make</p>
        </div>
        <ul>
          {footerInfos.map((footerInfo) => {
            const { title, info1, info2, info3 } = footerInfo;
            return (
              <li>
                <h4>{title}</h4>
                <p>{info1}</p>
                <p>{info2}</p>
                <p>{info3}</p>
              </li>
            );
          })}
        </ul>
      </StyleFooter>
      <Copyrights>
        <CopyrightIcon>
          <BiCopyright />
          <p>Vince</p>
        </CopyrightIcon>
        <p>All rights, Reserved</p>
      </Copyrights>
    </div>
  );
};

const StyleFooter = styled.div`
  line-height: 2rem;
  font-size: 1rem;
  padding: 8rem 0;
  display: flex;
  align-items: space-evenly;
  gap: 8rem;
  ul {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    li {
      list-style: none;
    }
  }
  p {
    opacity: 50%;
  }
`;
const Copyrights = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    opacity: 50%;
  }
  svg {
    opacity: 50%;
  }
`;
const CopyrightIcon = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export default Footer;
