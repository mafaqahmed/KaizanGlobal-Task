import React from "react";
// import { MdOutlineQuestionAnswer } from "react-icons/md";
import MyAccordian from './Accordian'

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";

// import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  const faqData = [
    {
      question: "When is the official launch?",
      answer:
        "The official launch of Meta Tiger Society will be announced on our Discord - make sure you are part of the conversation by joining us Discord.",
    },
    {
      question: "What is the mint price?",
      answer:
        "The official mint price of our Meta Tiger NFTs will be announced in our Discord, so make sure you are Ready.",
    },
    {
      question:
        "What is difference between pre sale, public raffle and public sale?",
      answer:
        "Our Pre-sale will only be open to MTS Whitelist spot holders. Due to the fantastic interest in our project, we will hold a raffle and select a limited number of wallets (out of all registered holders) who can participate in the mint at Public Sale.  Remember, only wallets that are registered in time to compete in our raffle will be eligible to mint on our Public Sale (on a first come, first served basis)!",
    },
    {
      question: "How do I get whitelisted?",
      answer:
        "We value people who genuinely engage with our project and want to seriously help it grow.  The best way to secure your Whitelist spot is to join our Discord and demonstrate your passion for the project, and of course, for the celebration and preservation of the awesome tiger! Our team is very active on Discord, we notice those who show real support and will reach out privately to them with an invite to become a Whitelist member. You can also check our #whitelist-requirements Discord channel for tips and tricks on other ways to secure your Whitelist spot! Good luck and we cannot wait to see how you choose to show your passion for our project!",
    },
    {
      question: "What is metaverse?",
      answer:
        "An easier question would be, what ISN'T the metaverse? Metaverse refers to a shared virtual reality expanse where literally anything is possible, from fantastic digital art to real-world ownership proof and much more! Using cryptocurrencies, anything can be bought or sold on the metaverse, just like in the real-world fiat markets. The Meta Tiger Society will soon make its unique entrance and inspiring impact upon the metaverse, and we hope you'll be with us on this journey.  Secure your spot and show your support for the preservation of tigers by getting your hands on one of our beautiful digital tiger NFT artworks.",
    },
    {
      question: "How can I use my NFT?",
      answer:
        "You can hold, sell or trade your Meta Tiger NFT artwork at your own leisure. Of course, we recommend holding it (and even collecting more) so that you can benefit from the brilliant utilities we have planned for our life-long project.",
    },
    {
      question: "How will we reduce gas fee durng the mint?",
      answer:
        "The ERC721A standard of Meta Tiger NFTs allow for multiple NFTs to be minted at the equivalent price of a single NFT. Exciting, right? You can discover all you need to know about this amazing new standard Here.",
    },
    {
      question: "How can I avoid being scammed?",
      answer:
        "So, you've bought and minted your Meta Tiger NFT? Nice!To admire your beautiful, unique artwork, simply connect it to your OpenSea account and check it out!",
    },
    {
      question: "When is the official launch?",
      answer:
        "Unfortunately, some projects seek to profit off of others and exploit the less wary of this new, fast-evolving space. To protect yourself, we recommend that you NEVER LISTEN TO ANY NEWS THAT DOES NOT COME FROM OUR OFFICIAL Discord, Twitter and Instagram channels. ALSO, REMEMBER THAT WE WILL NEVER DIRECT MESSAGE YOU. For more information on staying safe, check out our #scam-warning channel on our Discord server.  Together, let us create a safe community where we look out for one another as well as for the beautiful tiger that unites us here on the precipice of real change!",
    },
  ];
  return (
    <div
      id="faq"
      className="mb-40 font-sans flex items-center justify-center w-headerW mx-auto overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center space-y-20">
        <div className="w-full text-gray-400 flex flex-col space-y-5 max-w-4xl md:justify-center md:items-center md:space-x-14 md:flex-row md:space-y-0">
          <p className="text-white uppercase font-bold text-6xl whitespace-nowrap">
            faq
          </p>
          <p className="md:pl-16">
            Frequently asked questions can be found below however if you didn't
            find the answer you were hunting for, Reach out to our team directly
            at Email and we'll get back to you as soon as possible!
          </p>
        </div>
        <div className="max-w-3xl overflow-hidden">
          {
            faqData.map(item => (
                <MyAccordian title={item.question} content={item.answer}/>
            )
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Faq;
